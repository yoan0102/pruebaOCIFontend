import { Route, Routes } from "react-router-dom";

import { HomeScreen } from "./pages/home/HomeScreen";

import { router } from "./constants";

const Router = () => {
  return (
    <Routes>
      <Route path={router.HOME} element={<HomeScreen />} />
    </Routes>
  );
};

export default Router;
