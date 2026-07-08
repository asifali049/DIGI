"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface AdminToolbarProps {
  /**
   * Search
   */
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;

  /**
   * Primary Action
   */
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  onAction?: () => void;

  /**
   * Optional custom content
   */
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  /**
   * Styling
   */
  className?: string;
}

export function AdminToolbar({
  searchValue = "",
  searchPlaceholder = "Search...",
  onSearchChange,

  actionLabel,
  actionIcon,
  onAction,

  startContent,
  endContent,

  className,
}: AdminToolbarProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 rounded-2xl border bg-background p-5",
        "md:flex-row md:items-center md:justify-between",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center">
        <div className="w-full max-w-md">
          <Input
            value={searchValue}
            placeholder={searchPlaceholder}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>

        {startContent}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        {endContent}

        {actionLabel && (
          <Button onClick={onAction}>
            {actionIcon ?? <Plus className="mr-2 h-4 w-4" />}
            {actionLabel}
          </Button>
        )}
      </div>
    </section>
  );
}