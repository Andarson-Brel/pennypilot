import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSignOut } from "../../utils/firebaseSdk/ReactHooks";
import { useDispatch } from "react-redux";
import { logOut } from "../../slices/authSlice";
import BottomNavigation from "./BottomNavba";

const Navbar = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const location = useLocation();
  const signOut = useSignOut();
  const dispatch = useDispatch();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      iconInactive: "./assets/icons/home-inactive.svg",
      iconInactiveBottom: "./assets/icons/home-inactive-bottom.svg",
      iconActive: "./assets/icons/home-active.svg",
    },
    {
      name: "History",
      path: "/history",
      iconInactive: "./assets/icons/recurring-bill-inactive.svg",
      iconInactiveBottom: "./assets/icons/recurring-bill-inactive-bottom.svg",
      iconActive: "./assets/icons/recurring-bill.svg",
    },
    {
      name: "Budget",
      path: "/budget",
      iconInactive: "./assets/icons/pie-chart-inactive.svg",
      iconInactiveBottom: "./assets/icons/pie-chart-inactive-bottom.svg",
      iconActive: "./assets/icons/pie-chart-active.svg",
    },
    {
      name: "Profile",
      path: "/profile",
      iconInactive: "./assets/icons/user-inactive.svg",
      iconInactiveBottom: "./assets/icons/user-inactive-bottom.svg",
      iconActive: "./assets/icons/user-active.svg",
    },
  ];
  const handleLogOut = () => {
    signOut.mutate();
    dispatch(logOut());
  };
  return (
    <div>
      {isLargeScreen ? (
        <div className="  w-52 h-screen  bg-violet_100 text-white flex flex-col scrollbar scrollbar-w-2 scrollbar-track-gray-100 scrollbar-h-1.5 scrollbar-thumb-rounded-[50px] scrollbar-track-rounded-[50px] scrollbar-thumb-[#E3E2E2] overflow-y-scroll ">
          <div className="p-4 text-xl font-bold">
            <img src="./assets/icons/pennypilot-white.svg" alt="nav-icon" />
          </div>
          <nav className="mt-4 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 mt-2 text-sm font-semibold rounded-tl-sm rounded-tr-none rounded-bl-sm rounded-br-none hover:bg-violet-400 ${
                  location.pathname === item.path
                    ? "bg-light_80 text-violet_100 "
                    : " text-light_80"
                }`}
              >
                {location.pathname === item.path ? (
                  <img
                    src={item.iconActive}
                    alt="nav-icon"
                    className=" w-[20px]"
                  />
                ) : (
                  <img
                    src={item.iconInactive}
                    alt="nav-icon"
                    className=" w-[20px]"
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            className=" p-2 flex items-center gap-2   "
            onClick={handleLogOut}
          >
            <img
              src="./assets/icons/logout.svg"
              alt="nav-icon"
              className="w-[18px]"
            />
            Log out
          </button>
        </div>
      ) : (
        <div className="">
          <BottomNavigation />
        </div>
        //   {navItems.map((item) => (
        //     <Link
        //       key={item.name}
        //       to={item.path}
        //       className={` flex  gap-2 flex-col items-center justify-center flex-1   text-center py-2 text-[10px] font-semibold ${
        //         location.pathname === item.path
        //           ? " text-violet_100 "
        //           : "  text-dark_50"
        //       }`}
        //     >
        //       {location.pathname === item.path ? (
        //         <img
        //           src={item.iconActive}
        //           alt="nav-icon"
        //           className=" w-[20px]"
        //         />
        //       ) : (
        //         <img
        //           src={item.iconInactiveBottom}
        //           alt="nav-icon"
        //           className=" w-[20px]"
        //         />
        //       )}
        //       {item.name}
        //     </Link>
        //   ))}
        // </div>
      )}
    </div>
  );
};

export default Navbar;
