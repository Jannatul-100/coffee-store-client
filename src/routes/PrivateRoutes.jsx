import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-bars loading-2xl flex min-h-screen justify-center items-center"></span>
    }
    
    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/signin"></Navigate>
    );
};

export default PrivateRoutes;