import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  component: React.FC<any>; // Or the specific type of your components
  // Add other prop types here if needed
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
