import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EnergyChart = ({
  id,
  data,
  dataKey,
  color = "#8884d8",
  unit,
  height = "200px",
}) => {
  const gradientId = `color-${id || Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ height: height, width: "100%", marginTop: "1rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20, // Pull left to maximize space
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
            vertical={true}
            horizontal={true}
          />
          <XAxis
            dataKey="time"
            stroke="#ffffffff"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#ffffffff"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            unit={unit}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#ccc" }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
