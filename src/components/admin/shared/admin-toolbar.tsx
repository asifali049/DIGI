"use client";

import * as React from "react";
import {
  Plus,
  Search,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface AdminToolbarProps {
  /* -------------------------------------------------------------------------- */
  /*                                   Search                                   */
  /* -------------------------------------------------------------------------- */

  searchValue?: string;

  searchPlaceholder?: string;

  onSearchChange?: (
    value: string
  ) => void;

  onSearchClear?: () => void;

  /* -------------------------------------------------------------------------- */
  /*                              Primary Action                                */
  /* -------------------------------------------------------------------------- */

  actionLabel?: string;

actionIcon?: React.ReactNode;

actionHref?: string;

onAction?: () => void;

actionDisabled?: boolean;

actionLoading?: boolean;

  /* -------------------------------------------------------------------------- */
  /*                               Custom Slots                                 */
  /* -------------------------------------------------------------------------- */

  startContent?: React.ReactNode;

  filters?: React.ReactNode;

  endContent?: React.ReactNode;

  children?: React.ReactNode;

  /* -------------------------------------------------------------------------- */

  className?: string;
}

export function AdminToolbar({
  searchValue = "",
  searchPlaceholder = "Search...",

  onSearchChange,
  onSearchClear,

  actionLabel,
  actionIcon,
  onAction,
  actionDisabled,
  actionLoading,

  startContent,
  filters,
  endContent,
  children,

  className,
}: AdminToolbarProps) {
  const hasSearch =
    typeof onSearchChange === "function";

  return (
    <section
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:items-center">

          {hasSearch && (
            <div className="relative w-full lg:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={searchValue}
                placeholder={searchPlaceholder}
                onChange={(e) =>
                  onSearchChange(
                    e.target.value
                  )
                }
                className="pl-10 pr-10"
              />

              {searchValue && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() =>
                    onSearchClear?.()
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {startContent}

          {filters}
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center justify-end gap-3">

          {children}

          {endContent}

          {actionLabel && (
            <Button
              onClick={onAction}
              disabled={
                actionDisabled ||
                actionLoading
              }
            >
              {actionIcon ?? (
                <Plus className="mr-2 h-4 w-4" />
              )}

              <span>
                {actionLoading
                  ? "Please wait..."
                  : actionLabel}
              </span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}