import React from "react";
import ListCard from "../../components/Cards/ListCard";
import ExpenseCard from "../../components/Cards/DashboardCard";
import { colors, history } from "../../Dummy-data/DummyData";
import Chart from "../../components/charts/AreaCharts";

const categoryColorMapping = {
  Shopping: colors[0],
  Groceries: colors[1],
  Dining: colors[2],
  Transportation: colors[3],
  Gifts: colors[4],
};

const Dashboard = () => {
  return (
    <div>
      <div className="w-full bg-gradient-custom rounded-br-3xl rounded-bl-3xl md:relative md:top-[-20px] sticky left-0 top-0 p-4 flex flex-col md:gap-6 gap-2 z-10">
        <div className="flex w-full gap-5 justify-between items-center">
          <div className="w-10 h-10 bg-white rounded-full flex flex-col justify-center items-center border border-solid border-violet_100 cursor-pointer">
            <img src="./assets/icons/user-active.svg" alt="profile-icon" />
          </div>
          <div className="flex items-center gap-2 text-gray-950 font-semibold border border-solid border-blue-300 py-2 px-3 rounded-full cursor-pointer">
            <img src="./assets/icons/arrow-down-3.svg" alt="arrow-icon" />
            October
          </div>
          <div className="cursor-pointer">
            <img
              src="./assets/icons/notification.svg"
              alt="notification-icon"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Balance</p>
          <p className="text-3xl font-bold text-black">₦200000</p>
        </div>
        <div className="flex w-full gap-5">
          <ExpenseCard type="income" amount={100} />
          <ExpenseCard type="expense" amount={100} />
        </div>
      </div>
      <div className="lg:mt-0  ">
        <div className="">
          <h2 className=" font-bold text-lg">Spend Frequency</h2>
          <Chart />
          <div className=" flex border border-solid border-gray-200  justify-between items-center max-w-80 m-auto rounded-full">
            <p className="py-3 px-4  cursor-pointer text-yellow_100 bg-yellow_20 font-semibold rounded-full">
              Today
            </p>
            <p className="p-3 cursor-pointer">Week</p>
            <p className="p-3 cursor-pointer">Month</p>
            <p className="p-3 cursor-pointer">Year</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-gray-950">Recent History</p>
          <p className="bg-violet_20 text-violet_100 py-1 px-3 rounded-full cursor-pointer font-semibold">
            See All
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {history?.slice(0, 3).map((data) => {
            const { base, shade } = categoryColorMapping[data.category] || {};
            return (
              <ListCard
                key={data.description}
                icon={data.icon}
                description={data.description}
                category={data.category}
                time={data.time}
                amount={data.amount}
                color={base}
                shade={shade}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
