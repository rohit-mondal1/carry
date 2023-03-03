import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import DashBord from "../Page/DashBord/DashBord";
import DashNave from "../Page/DashBord/DashNave/DashNave";

const DashBordLayout = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Header></Header>
      </div>
      <div className="flex">
        <div>
          <DashNave />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBordLayout;
