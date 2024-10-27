import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AreaChartsData } from "../../Dummy-data/DummyData";

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={AreaChartsData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorApples" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E4D6FF" stopOpacity={1} />
            <stop offset="100%" stopColor="#FAF7FF" stopOpacity={1} />
          </linearGradient>
        </defs>

        <XAxis dataKey="date" stroke="none" padding={{ left: 0, right: 0 }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Apples"
          stroke="#7F3DFF"
          strokeWidth={6}
          fill="url(#colorApples)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
