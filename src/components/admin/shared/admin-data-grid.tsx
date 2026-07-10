"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface AdminDataGridProps {
  children: React.ReactNode;

  className?: string;

  /**
   * xl columns
   */
  columns?: 2 | 3 | 4 | 5 | 6;

  /**
   * Gap size
   */
  gap?: "sm" | "md" | "lg";

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Empty state
   */
  empty?: React.ReactNode;
}

/* -------------------------------------------------------------------------- */

const columnVariants = {
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
} as const;

const gapVariants = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

/* -------------------------------------------------------------------------- */

export function AdminDataGrid({
  children,

  className,

  columns = 4,

  gap = "md",

  loading = false,

  empty,
}: AdminDataGridProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "grid",
          "grid-cols-1",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
          columnVariants[columns],
          gapVariants[gap],
          className
        )}
      >
        {Array.from({ length: columns * 2 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-2xl border bg-muted/40"
            />
          )
        )}
      </div>
    );
  }

  const count = React.Children.count(children);

  if (count === 0 && empty) {
    return <>{empty}</>;
  }

  return (
    <section
      role="grid"
      className={cn(
        "grid",
        "grid-cols-1",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        columnVariants[columns],
        gapVariants[gap],
        className
      )}
    >
      {children}
    </section>
  );
}