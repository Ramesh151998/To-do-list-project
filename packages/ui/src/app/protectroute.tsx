import React from "react";
import { Outlet, Navigate } from "react-router-dom";


function    ProtectedRoute(){
    const Auth = localStorage.getItem("isAuth");
    let myBool = (Auth === 'true')
    console.log(myBool,"YYY")
    return myBool ? <Outlet/> : <Navigate to="/" />
}
 
export default ProtectedRoute 