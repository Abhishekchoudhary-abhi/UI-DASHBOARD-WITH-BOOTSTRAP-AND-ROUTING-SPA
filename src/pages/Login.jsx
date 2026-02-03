import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="text-center">
      <h1>Login Page</h1>
      <p>Click the button below to log in (dummy authentication).</p>
      <Button variant="primary" onClick={handleLogin}>Log In</Button>
    </div>
  );
};

export default Login;
