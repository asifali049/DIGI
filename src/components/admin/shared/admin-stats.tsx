"use client";

import * as React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AdminStatItem {
  title: string;
  value: string | number;

  /**
   * Optional delta value.
   * Example: +12.5%, -4%, +120
   */
  change?: string;

  /**
   * Determines icon/color.
   */
  trend?: "up" | "down" | "neutral";

  /**
   * Optional leading icon.
   */
  icon?: React.ReactNode;

  /**
   * Optional footer text.
   */
  description?: string;
}

interface AdminStatsProps {
  items: AdminStatItem[];
  className?: string;
}

export function AdminStats({
  items,
  className,
}: AdminStatsProps) {
  return (
    <section
      className={cn(
        "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className={cn(
            "rounded-2xl border bg-background p-6",
            "transition-all duration-300",
            "hover:-translate-y-1 hover:shadow-lg"
          )}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {item.title}
              </p>

              <h3 className="text-3xl font-bold tracking-tight">
                {item.value}
              </h3>
            </div>

            {item.icon && (
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border bg-muted/40">
                {item.icon}
              </div>
            )}
          </div>

          {(item.change || item.description) && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {item.change && (
                <div
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
                    item.trend === "up" &&
                      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                    item.trend === "down" &&
                      "bg-red-500/10 text-red-600 dark:text-red-400",
                    item.trend === "neutral" &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  {item.trend === "up" && (
                    <TrendingUp className="h-3.5 w-3.5" />
                  )}

                  {item.trend === "down" && (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}

                  {item.change}
                </div>
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