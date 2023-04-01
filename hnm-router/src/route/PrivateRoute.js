import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true?<PrivateRoute />:<Navigate to="/login"/>;
};

export default PrivateRoute