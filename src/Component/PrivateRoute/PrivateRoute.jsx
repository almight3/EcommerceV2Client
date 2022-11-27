import React from 'react';
import {Navigate,Outlet} from "react-router-dom";
import {useSelector} from "react-redux";


function PrivateRoute() {
 const { isAuthenticated ,token} = useSelector((state)=>state.user);  
 console.log("private routes",isAuthenticated)
    return (
      isAuthenticated ? <Outlet/> : <Navigate to="/login" />
  )  
}

export default PrivateRoute;