import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Icon = ({ path, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const Sidebar = ({ collapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Nav className="flex-column py-3">
        <Nav.Link as={NavLink} to="/home" end>
          <Icon path="M3 9.75l9-7.5 9 7.5V20a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2V9.75Z" />
          <span className="ms-2">Home</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          <Icon path="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" />
          <span className="ms-2">About</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/products">
          <Icon path="M3 7h18v4H3V7Zm0 6h18v4H3v-4Z" />
          <span className="ms-2">Products</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/users">
          <Icon path="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0Z" />
          <span className="ms-2">Users</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact">
          <Icon path="M2 4h20v16H2V4Zm10 9 8-5V6l-8 5L4 6v2l8 5Z" />
          <span className="ms-2">Contact</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard">
          <Icon path="M4 13h6v7H4v-7Zm10-9h6v16h-6V4ZM4 4h6v7H4V4Z" />
          <span className="ms-2">Dashboard</span>
        </Nav.Link>
      </Nav>
    </aside>
  );
};

export default Sidebar;
