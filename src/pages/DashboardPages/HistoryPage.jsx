import React from "react";
import HistoryHeader from "../../components/Layout/HistoryHeader";
import { colors, history } from "../../Dummy-data/DummyData";
import ListCard from "../../components/Cards/ListCard";

const categoryColorMapping = {
  Shopping: colors[0],
  Groceries: colors[1],
  Dining: colors[2],
  Transportation: colors[3],
  Gifts: colors[4],
};

const HistoryPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      {/* Sticky Header Section */}
      <div className="sticky top-0 w-full bg-light_80 pb-4 z-10">
        <HistoryHeader />
        <button className="flex justify-between p-3 w-80 bg-violet_20 text-violet_100 m-auto items-center rounded-lg">
          See your Financial report
          <img src="./assets/icons/arrow-right.svg" alt="right-arrow-icon" />
        </button>
      </div>

      {/* Today Section */}
      <div className="flex flex-col p-4">
        <h3 className="font-bold text-lg mb-2">Today</h3>
        <div className="flex flex-col gap-3 overflow-y-auto max-h-72 lg:max-h-80 hide-scrollbar">
          {/* Adjusted height for desktop using Tailwind's lg: variant */}
          {history?.map((data) => {
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

      {/* Yesterday Section */}
      <div className="flex flex-col p-4 mt-6">
        <h3 className="font-bold text-lg mb-2">Yesterday</h3>
        <div className="flex flex-col gap-3 overflow-y-auto max-h-60 lg:max-h-80 hide-scrollbar">
          {history?.map((data) => {
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

export default HistoryPage;
