import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AuthRoute = props => {
  const { status } = useAuth();

  if (status === 'authenticated') {
    return <Navigate to="/" />;
  }

  return props.children;
};

export { AuthRoute };
