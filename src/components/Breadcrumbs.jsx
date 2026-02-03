import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item
            key={name}
            active={isLast}
            linkAs={!isLast ? Link : undefined}
            linkProps={!isLast ? { to: routeTo } : undefined}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
