import React from "react";

const SplashScreen = () => {
  return (
    <div className=" bg-violet_100 flex flex-col w-full   h-screen justify-center items-center ">
      <img
        src="./Assets/Icons/PennyPilot-white-bg-violet.svg"
        alt="logo"
        className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
      />
    </div>
  );
};

export default SplashScreen;
