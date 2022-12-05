import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const PrivateRoute = ({ children}) => {
    const location = useLocation() 
    const {user,loading} = useContext(AuthContext)
   if(loading){
    return <Loading>loading........</Loading>
   }

    if(user){
      return children;
    }
    return <Navigate  to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;