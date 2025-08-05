import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { earningsData } from '../data/mockData';

export default function EarningsChart() {
  return (
    <div className="earnings-chart">
      <h3>Sales Chart</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={earningsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00c6ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Area type="monotone" dataKey="earnings" stroke="#00c6ff" fillOpacity={1} fill="url(#colorEarnings)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
