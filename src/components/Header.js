// src/components/Header.jsx
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="header-icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}
