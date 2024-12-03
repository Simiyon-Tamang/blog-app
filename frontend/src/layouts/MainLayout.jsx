import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="p-4 ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
