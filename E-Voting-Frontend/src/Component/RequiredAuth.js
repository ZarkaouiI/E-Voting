import React from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(allowedRoles);

  return auth?.role === allowedRoles ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to='/signup' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequiredAuth;
