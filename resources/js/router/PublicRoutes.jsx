import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PublicRoutes = ({children}) => {
  const {user} = useSelector(state => state.auth);
  return !user ? children : <Navigate to="/admin" />;
}

export default PublicRoutes;