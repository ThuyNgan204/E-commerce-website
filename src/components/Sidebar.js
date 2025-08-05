// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Products', path: '/admin/products' },
    { name: 'Logout', path: '/Login' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">ADMIN</div>
      <ul className="sidebar-menu">
        {menu.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
