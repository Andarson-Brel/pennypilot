import React from "react";

const Button = ({ type, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold p-2 w-full rounded-lg transition-colors duration-300 ${
        type === "primary"
          ? "bg-violet_100 text-light_100 hover:bg-violet-300 hover:text-white"
          : "bg-violet_20 text-violet_100 hover:bg-violet_100 hover:text-light_100 "
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
