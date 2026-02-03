import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Breadcrumbs from './Breadcrumbs';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">MyStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Breadcrumbs />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
