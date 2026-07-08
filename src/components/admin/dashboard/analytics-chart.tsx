"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", visitors: 4200 },
  { month: "Feb", visitors: 5100 },
  { month: "Mar", visitors: 4700 },
  { month: "Apr", visitors: 6900 },
  { month: "May", visitors: 7800 },
  { month: "Jun", visitors: 9100 },
  { month: "Jul", visitors: 10200 },
];

export function AnalyticsChart() {
  return (
    <div className="h-70 w-full sm:h-80 lg:h-87.5">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          data={data}
          margin={{
            top: 12,
            right: 12,
            left: -24,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="analyticsGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="currentColor"
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor="currentColor"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            className="stroke-border"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            minTickGap={20}
            className="text-[11px] sm:text-xs"
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={42}
            className="text-[11px] sm:text-xs"
          />

          <Tooltip
            cursor={{
              strokeDasharray: "4 4",
            }}
            contentStyle={{
              borderRadius: 16,
            }}
          />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="currentColor"
            strokeWidth={2.5}
            fill="url(#analyticsGradient)"
            activeDot={{
              r: 5,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}