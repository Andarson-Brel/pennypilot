import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { initialNavListItems } from "../../Dummy-data/DummyData";

const SideNavbar = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen border-[6px] border-main_bg">
      <nav className="w-60 bg-white flex flex-col shadow-md">
        <div className="h-20 mx-auto mt-4 mb-2">
          <img
            src="./assets/icons/PennyPilot-black.svg"
            alt="Ideas Logo"
            className="w-auto"
          />
        </div>
        <div className="scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-h-1.5 scrollbar-thumb-rounded-[50px] scrollbar-track-rounded-[50px] scrollbar-thumb-[#E3E2E2] overflow-y-scroll">
          <div className="flex flex-col">
            {initialNavListItems.map((list) => (
              <Link key={list.path} to={list.path}>
                <div
                  className={`w-[98%] flex items-center pl-8 mb-6 py-2 gap-4 mt-2 ${
                    location.pathname === list.path
                      ? "bg-main_bg text-white"
                      : "text-primary_text hover:bg-gray-100"
                  } rounded-r-md cursor-pointer transition-colors duration-300`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {list.icon}
                  <p
                    className={`text-sm ${
                      location.pathname === list.path
                        ? "text-white"
                        : "text-primary_text"
                    }`}
                  >
                    {list.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="scrollbar scrollbar-w-2.5 scrollbar-h-1.5 scrollbar-thumb-rounded-[10px] scrollbar-track-rounded-[10px] scrollbar-thumb-[#E3E2E2] overflow-y-scroll flex-1 bg-page_bg rounded-sm shadow-md pb-2">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavbar;
