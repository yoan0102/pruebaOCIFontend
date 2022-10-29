import { Route, Routes } from "react-router-dom";

import { router } from "./constants";

import { HomeScreen } from "./pages/home/HomeScreen";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardIndex } from "./pages/dashboard/DashboardIndex";

const Router = () => {
  return (
    <Routes>
      <Route path={router.HOME} element={<HomeScreen />} />
      <Route path={router.DASHBOARD} element={<Dashboard />} />
      <Route path={router.DASHBOARD + "/index"} element={<DashboardIndex />} />
    </Routes>
  );
};

export default Router;
