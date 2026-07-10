"use client";

import type { ReactNode } from "react";

import {
  TrendingDown,
  TrendingUp,
  Minus,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface AdminStatItem {
  title: string;

  value: string | number;

  change?: string;

  trend?: "up" | "down" | "neutral";

  icon?: ReactNode;

  description?: string;

  onClick?: () => void;
}

interface AdminStatsProps {
  items: readonly AdminStatItem[];

  className?: string;

  loading?: boolean;

  columns?: 2 | 3 | 4;
}

/* -------------------------------------------------------------------------- */

const columnVariants = {
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
} as const;

/* -------------------------------------------------------------------------- */

function TrendBadge({
  trend,
  change,
}: {
  trend?: "up" | "down" | "neutral";
  change: string;
}) {
  const icon =
    trend === "up" ? (
      <TrendingUp className="h-3.5 w-3.5" />
    ) : trend === "down" ? (
      <TrendingDown className="h-3.5 w-3.5" />
    ) : (
      <Minus className="h-3.5 w-3.5" />
    );

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",

        trend === "up" &&
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

        trend === "down" &&
          "bg-red-500/10 text-red-600 dark:text-red-400",

        (!trend ||
          trend === "neutral") &&
          "bg-muted text-muted-foreground"
      )}
    >
      {icon}
      {change}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export function AdminStats({
  items,
  className,
  loading = false,
  columns = 4,
}: AdminStatsProps) {
  if (loading) {
    return (
      <section
        className={cn(
          "grid gap-5",
          "grid-cols-1 sm:grid-cols-2",
          columnVariants[columns],
          className
        )}
      >
        {Array.from({ length: columns }).map(
          (_, index) => (
            <div
              key={index}
              className="h-40 animate-pulse rounded-2xl border bg-muted/40"
            />
          )
        )}
      </section>
    );
  }

  return (
    <section
      className={cn(
        "grid gap-5",
        "grid-cols-1 sm:grid-cols-2",
        columnVariants[columns],
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          role={item.onClick ? "button" : undefined}
          tabIndex={item.onClick ? 0 : undefined}
          onClick={item.onClick}
          className={cn(
            "rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300",

            item.onClick &&
              "cursor-pointer hover:-translate-y-1 hover:shadow-lg"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">
                {item.title}
              </p>

              <h3 className="mt-2 truncate text-3xl font-bold tracking-tight">
                {item.value}
              </h3>
            </div>

            {item.icon && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-muted/40">
                {item.icon}
              </div>
            )}
          </div>

          {(item.change ||
            item.description) && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {item.change && (
                <TrendBadge
                  trend={item.trend}
                  change={item.change}
                />
              )}

              {item.description && (
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}