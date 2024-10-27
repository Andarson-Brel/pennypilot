import React from "react";

function ExpenseCard({ type = "income", amount = 0 }) {
  return (
    <div
      className={`flex items-center ${
        type === "income" ? "bg-green-500" : "bg-red_100"
      } p-5 rounded-3xl gap-[10px] w-full cursor-pointer`}
    >
      <div className=" w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
        {type === "income" ? (
          <img src="./assets/icons/income.svg" alt="icon-img" />
        ) : (
          <img src="./assets/icons/expense.svg" alt="icon-img" />
        )}
      </div>
      <div className="flex flex-col items-start  ">
        <p className="text-white">
          {type === "income" ? "Income" : "Expenses"}
        </p>
        <p className="text-white font-bold">₦{amount}</p>
      </div>
    </div>
  );
}

export default ExpenseCard;
