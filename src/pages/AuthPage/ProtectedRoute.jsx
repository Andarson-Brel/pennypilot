import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirect = "/sign-in" }) => {
  const { accessToken, emailVerified } = useSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to={redirect} replace />;
  }

  if (!emailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  // Render the Outlet for the nested routes within ProtectedLayout
  return children;
};

export default ProtectedRoute;
