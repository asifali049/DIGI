"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  description?: string;
  trend?: number;
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: StatsCardProps) {
  const positive = trend !== undefined && trend >= 0;

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>

          <div className="text-3xl font-bold tracking-tight">
            {value}
          </div>
        </div>

        {Icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </CardHeader>

      <CardContent>
        {trend !== undefined ? (
          <div
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              positive
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            )}
          >
            {positive ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : (
              <ArrowDownRight className="h-4 w-4" />
            )}

            <span>{Math.abs(trend)}%</span>

            {description && (
              <span className="font-normal text-muted-foreground">
                {description}
              </span>
            )}
          </div>
        ) : (
          description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )
        )}
      </CardContent>
    </Card>
  );
}