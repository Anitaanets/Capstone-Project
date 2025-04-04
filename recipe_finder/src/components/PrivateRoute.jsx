import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ element: Element }) => {
  const { user } = useAuth();

  // If the user is logged in, render the component; otherwise, redirect to login page
  return user ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
