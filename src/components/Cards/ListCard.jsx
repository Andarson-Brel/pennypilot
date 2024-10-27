import React from "react";

const ListCard = ({
  icon,
  category,
  description,
  time,
  amount,
  color,
  shade,
}) => {
  return (
    <div className="  flex items-center gap-4 sm:gap-2  bg-ligt_10 rounded-[24px] p-4 w-full">
      <div
        className="h-[60px] w-[60px]  rounded-lg  flex items-center justify-center text-3xl"
        style={{ backgroundColor: color, color: shade }}
      >
        <ion-icon name={icon} className="z-[-1]"></ion-icon>
      </div>
      <div className="flex justify-between flex-1 items-center">
        <div className="flex flex-col  justify-start items-start gap-1">
          <h3 className=" font-bold ">{category}</h3>
          <p>{description}</p>
        </div>
        <div className=" flex flex-col justify-end items-end gap-1">
          <p className=" text-red_100 font-bold">-${amount}</p>
          <p className=" font-semibold">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
