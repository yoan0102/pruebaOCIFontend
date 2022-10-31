import { Route, Routes } from 'react-router-dom';

import { router } from './constants';

import { HomeScreen } from './pages/home';
import { Dashboard, DashboardIndex } from './pages/dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path={router.HOME} element={<HomeScreen />} />
      <Route path={router.DASHBOARD} element={<DashboardIndex />}>
        <Route path={router.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
