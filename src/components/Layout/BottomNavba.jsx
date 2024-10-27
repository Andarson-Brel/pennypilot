import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const Menus = useMemo(
    () => [
      {
        name: "Home",
        path: "/dashboard",
        icon: "home-outline",
        dis: "translate-x-0",
      },
      {
        name: "History",
        path: "/history",
        icon: "document-text-outline",
        dis: "translate-x-16",
      },
      { name: "Create", icon: "add-outline", dis: "translate-x-32" },
      {
        name: "Budget",
        path: "/budget",
        icon: "pie-chart-outline",
        dis: "translate-x-48",
      },
      {
        name: "Profile",
        path: "/profile",
        icon: "person-outline",
        dis: "translate-x-64",
      },
    ],
    []
  );

  const location = useLocation();
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentMenuIndex = Menus.findIndex(
      (menu) => menu.path === location.pathname
    );
    if (currentMenuIndex !== -1) {
      setActive(currentMenuIndex);
    }
  }, [location.pathname, Menus]);

  const handleCreateClick = (e) => {
    e.preventDefault(); // Prevent link from navigating
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-light_100 max-h-[4.4rem] px-6 rounded-t-xl fixed bottom-0 left-0 right-0 rounded-tl-lg rounded-tr-lg drop-shadow-sm text-dark_50 flex justify-around py-2 w-full z-10">
      <ul className="flex relative z-10">
        <span
          className={`bg-violet_100 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute -top-7 rounded-full`}
        >
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Link
              to={menu.path || "#"} // Ensure the link doesn't break
              className="flex flex-col text-center pt-6"
              onClick={
                menu.name === "Create" ? handleCreateClick : () => setActive(i)
              }
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-8   text-light_100 font-bold"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-3 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed top-5 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-lg font-bold">Create New Item</h2>
            <p>This is your modal content.</p>
            <button
              className="mt-4 px-4 py-2 bg-violet_100 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavigation;
