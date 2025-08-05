import React from 'react';
import CardStat from '../../components/CardStat';
import RecentOrders from '../../components/RecentOrders';
import EarningsChart from '../../components/EarningsChart';
import './DashboardHome.css';

export default function DashboardHome() {
  return (
    <div className="dashboard-content">
      <div className="cards-row">
        <CardStat title="Daily Sales" value="$249.95" percent="67%" trend="up" color="#00c6ff" />
        <CardStat title="Monthly Sales" value="$2,942.32" percent="36%" trend="down" color="#a044ff" />
        <CardStat title="Yearly Sales" value="$8,638.32" percent="80%" trend="up" color="#00c6ff" />
      </div>
      <div className="charts-row">
        <RecentOrders />
        <EarningsChart />
      </div>
    </div>
  );
}
