"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AdminDataGridProps {
  children: React.ReactNode;
  className?: string;

  /**
   * Number of columns at xl breakpoint.
   * Defaults to 4.
   */
  columns?: 2 | 3 | 4 | 5 | 6;
}

const columnVariants: Record<NonNullable<AdminDataGridProps["columns"]>, string> = {
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
};

export function AdminDataGrid({
  children,
  className,
  columns = 4,
}: AdminDataGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        "grid-cols-1",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        columnVariants[columns],
        className
      )}
    >
      {children}
    </div>
  );
}