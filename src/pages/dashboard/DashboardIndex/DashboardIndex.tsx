import React from 'react';
import './styles/DashboardIndex.scss';
import { Outlet } from 'react-router-dom';
import { NavbarDashboard } from '../components/NavbarDashboard';
export interface DashboardIndexInterface {}

const DashboardIndex: React.FC<DashboardIndexInterface> = () => {
  return (
    <div className="dashboardindex">
      <NavbarDashboard />
      <Outlet />
    </div>
  );
};

export default DashboardIndex;
