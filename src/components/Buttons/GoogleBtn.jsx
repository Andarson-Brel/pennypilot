import React from "react";

const GoogleBtn = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold p-2 w-full rounded-lg transition-colors duration-300
        border
          "bg-violet_100 hover:bg-violet_100 hover:text-white"
          "bg-violet_20 text-black  hover:text-light_100 flex items-center gap-2 justify-center text-center"
     `}
    >
      <img
        src="./assets/icons/google.svg"
        alt="google icon"
        className=" w-[20px]"
      />{" "}
      {children} with Google
    </button>
  );
};

export default GoogleBtn;
