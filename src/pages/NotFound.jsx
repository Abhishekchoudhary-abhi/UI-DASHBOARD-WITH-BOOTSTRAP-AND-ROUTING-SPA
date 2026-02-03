import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p className="lead">Page Not Found</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
};

export default NotFound;
