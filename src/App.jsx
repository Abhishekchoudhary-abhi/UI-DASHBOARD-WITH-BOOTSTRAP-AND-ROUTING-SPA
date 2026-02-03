import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Routes>
      {/* Login as the landing page */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />

      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
