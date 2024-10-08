import React from "react";
import Detail from "../pages/Detail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <Detail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
