import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = ({ onToggleSidebar }) => {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow-sm">
      <Container>
        <RBNavbar.Brand as={NavLink} to="/home">MyStore</RBNavbar.Brand>
        <button
          className="btn btn-outline-light d-lg-none me-2"
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          &#9776;
        </button>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default AppNavbar;
