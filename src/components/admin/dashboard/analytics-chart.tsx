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

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface AnalyticsData {
  month: string;
  visitors: number;
}

interface AnalyticsChartProps {
  data?: AnalyticsData[];
  loading?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Default Data                                                               */
/* -------------------------------------------------------------------------- */

const defaultData: AnalyticsData[] = [
  { month: "Jan", visitors: 4200 },
  { month: "Feb", visitors: 5100 },
  { month: "Mar", visitors: 4700 },
  { month: "Apr", visitors: 6900 },
  { month: "May", visitors: 7800 },
  { month: "Jun", visitors: 9100 },
  { month: "Jul", visitors: 10200 },
];

/* -------------------------------------------------------------------------- */

function formatVisitors(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/* -------------------------------------------------------------------------- */

interface CustomTooltipProps {
  active?: boolean;

  label?: string | number;

  payload?: {
    value: number;
    name: string;
    color?: string;
  }[];
}

function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border bg-popover p-3 shadow-lg">
      <p className="text-sm font-medium">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-primary">
        {formatVisitors(payload[0].value)} visitors
      </p>
    </div>
  );
}
/* -------------------------------------------------------------------------- */

export function AnalyticsChart({
  data = defaultData,
  loading = false,
}: AnalyticsChartProps) {
  if (loading) {
    return (
      <div className="flex h-[350px] items-center justify-center rounded-xl border">
        <span className="text-sm text-muted-foreground">
          Loading analytics...
        </span>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex h-[350px] items-center justify-center rounded-xl border">
        <span className="text-sm text-muted-foreground">
          No analytics available.
        </span>
      </div>
    );
  }

  return (
    <div className="h-[320px] w-full sm:h-[360px] lg:h-[420px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          data={data}
          margin={{
            top: 16,
            right: 12,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="analytics-gradient"
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
            className="text-xs"
          />

          <YAxis
            tickFormatter={
              formatVisitors
            }
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={46}
            className="text-xs"
          />

          <Tooltip
            cursor={{
              strokeDasharray:
                "4 4",
            }}
            content={
              <CustomTooltip />
            }
          />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="currentColor"
            strokeWidth={3}
            fill="url(#analytics-gradient)"
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}