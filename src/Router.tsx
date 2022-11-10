import { Route, Routes, Navigate } from 'react-router-dom';

import { router } from './constants';

import { HomeScreen } from './pages/home';
import { Dashboard, DashboardIndex, Submision } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path={router.HOME} element={<HomeScreen />} />
      {/* <Route path={router.LOGIN} element={<HomeScreen />} /> */}
      <Route path={router.DASHBOARD} element={<DashboardIndex />}>
        <Route path={router.DASHBOARD} element={<Dashboard />} />
        <Route path={router.NEW_SUBMISSION} element={<Submision />} />
        {/* <Route path={router.ESTADISTICAS} element={<Dashboard />} /> */}
        {/* <Route path={router.MAP} element={<Dashboard />} /> */}
        {/* <Route path={router.MATRICULA} element={<Dashboard />} /> */}
        {/* <Route path={router.SEARCH} element={<Dashboard />} /> */}
      </Route>
      <Route path="*" element={<Navigate to={router.HOME} replace={true} />} />
    </Routes>
  );
};

export default Router;
