import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  // Jika token tidak ada, arahkan ke halaman login
  if (!token) {
    // return <Navigate to="/login" />;
  }

  // Jika token ada, izinkan akses ke halaman yang diminta
  return children;
};

export default PrivateRoute;
