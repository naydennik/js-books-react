import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const Component = component;
  const isAuthenticated = sessionStorage.getItem("username");

  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />;
};

export default ProtectedRoute;
