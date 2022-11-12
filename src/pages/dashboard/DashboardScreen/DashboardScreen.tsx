import { Outlet } from 'react-router-dom';
import { NavbarDashboard } from '../components';
export interface DashboardScreenInterface {}

const DashboardScreen: React.FC<DashboardScreenInterface> = () => {
  return (
    <>
      <NavbarDashboard />
      <Outlet />
    </>
  );
};

export default DashboardScreen;
