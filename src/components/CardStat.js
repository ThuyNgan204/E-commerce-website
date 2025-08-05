// src/components/CardStat.jsx
import React from 'react';
import './CardStat.css';

export default function CardStat({ title, value, percent, trend, color }) {
  return (
    <div className="card-stat">
      <div className="card-title">{title}</div>
      <div className="card-value">
        {trend === 'up' ? '🔼' : '🔽'} {value}
      </div>
      <div className="card-percent">{percent}</div>
      <div className="card-progress" style={{ backgroundColor: color }}></div>
    </div>
  );
}
