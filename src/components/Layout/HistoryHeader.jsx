import React from "react";

const HistoryHeader = () => {
  return (
    <div className="flex   justify-between items-center mb-2 sticky top-0 z-1">
      <div className="flex items-center gap-2 py-2 px-4 border border-solid border-violet_20 rounded-full cursor-pointer font-semibold">
        <img src="./assets/icons/arrow-down-3.svg" alt="down-arrow" />
        Month
      </div>
      <div className=" border border-solid border-violet_20 p-2 rounded-lg cursor-pointer">
        <img src="./assets/icons/sort.svg" alt="fiter-icon" />
      </div>
    </div>
  );
};

export default HistoryHeader;
