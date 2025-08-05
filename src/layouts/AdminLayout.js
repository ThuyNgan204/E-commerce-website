import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css';


export default function AdminLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
