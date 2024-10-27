import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedLayout = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="  bg-light_80 p-4 h-lvh scrollbar scrollbar-w-2.5 scrollbar-h-1.5 scrollbar-thumb-rounded-[10px] scrollbar-track-rounded-[10px] scrollbar-thumb-[#E3E2E2] overflow-y-scroll flex-1 bg-page_bg rounded-sm shadow-md pb-2">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
