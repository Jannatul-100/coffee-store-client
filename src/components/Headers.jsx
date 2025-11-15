import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import logo from '../assets/images/more/logo1.png';
import navbg from '../assets/images/more/15.jpg';

const Headers = () => {

    const { user, logout} = useContext(AuthContext);


    const links = 
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addCoffee">Add Coffee</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
    </>

    return (
      <div>
        <div className="navbar  text-white"   
        style={{
            backgroundImage: `url(${navbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
          <div className="navbar-start px-2 md:px-32">
            <div className="dropdown ">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
           <div className='flex items-center py-2'>
            <img className='w-10 h-10 mr-2' src={logo} alt='' />
            <a className="text-md md:text-xl">Espresso Emporium</a>
           </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end px-2 md:px-24">
            <div className="flex gap-2 items-center">
              {user && user?.email ? (
                <div>
                  <p>{user.displayName || user.name}</p>
                </div>
              ) : (
                <div></div>
              )}

              {user && user?.email ? (
                <button onClick={logout} className="btn btn-neutral">
                  Logout
                </button>
              ) : (
                <Link to="/signin" className="btn bg-[#1E1E1E] border-0 shadow-none text-white">
                  Coffee Lovers
                </Link>
              )}
            </div>
          </div>
        </div>


      </div>
    );
};

export default Headers;