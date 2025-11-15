import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const SignIn = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const emailRef = useRef();

        const handleGoogleSignIn = () => {
            signInWithGoogle()
                .then(result => {
                    console.log(result.user);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Error', error.message);
                });
        };

        const handleSignIn = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/");

            //update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            fetch('http://localhost:5000/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('user created to db', data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                    title:'Success!',
                    text: 'User SignIn Successfully',
                    icon:'success',
                    confirmButtonText: 'OK'
                })
                    
                }
                
            })

        })
        .catch(error =>{
            setError('Error',error);
        })

    }

        const handleForgotPassword = () =>{
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            console.log('Please provide a valid email address');
        }
        else{
            sendPasswordResetEmail(auth, email)
                .then(() =>{
                    alert('Reset email sent, please check your email.')
                })
            
        }
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">SignIn now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">

                <label className="label">Email</label>
                <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" required/>

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div onClick={handleForgotPassword}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>

                <p className='text-center mt-2'>New to Coffee Store? Then <Link className='text-blue-600 hover:underline' to="/signup">Sign Up</Link> Here.</p>
                <button onClick={handleGoogleSignIn} className='text-red-600 font-semibold'>SignIn With Google</button>
                <p>
                    {
                        error.password && (
                            <p className='text-red-500 text-sm'> {error.password}</p>

                        )
                    }
                </p>    
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;