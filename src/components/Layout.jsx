import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <>
      <AppNavbar onToggleSidebar={toggleSidebar} />
      <div className={`dashboard-shell`}>
        <Sidebar collapsed={!sidebarOpen} />
        <div className="dashboard-content">
          <Container fluid className="py-3 py-md-4">
            <Breadcrumbs />
            <Outlet />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Layout;
