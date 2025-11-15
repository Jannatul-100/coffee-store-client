import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSignUp = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if(password.length < 6){
            setError({...error, password: "must be more than 6 characters."});
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log('user created at fb',result.user);
            navigate('/');

            const createAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createAt};

            //newuser save to the database
        fetch('https://coffee-store-server-seven-beta.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data =>{
                console.log('user created to db', data);
                if(data.insertedId){
                    Swal.fire({
                    title:'Success!',
                    text: 'User Added Successfully',
                    icon:'success',
                    confirmButtonText: 'OKay'
                })
                    
                }
                
            })
        })
        .catch(error =>{
            console.log('Error', error);
        })

    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Name</label>
                <input type="name" name="name" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button className="btn btn-neutral mt-4">Sign Up</button>

                <p className='text-center mt-2'>Members of Coffee Store? <Link className='text-blue-600 hover:underline' to="/signin">Sign In</Link> Here.</p>

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

export default SignUp;
