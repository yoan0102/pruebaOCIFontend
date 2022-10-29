import { Navbar } from "../../../common/Navbar";
import React from "react";
import "./styles/DashboardIndex.scss";
export interface DashboardIndexInterface {}

const DashboardIndex: React.FC<DashboardIndexInterface> = () => {
  return (
    <div className="dashboardindex">
      <Navbar />
    </div>
  );
};

export default DashboardIndex;
