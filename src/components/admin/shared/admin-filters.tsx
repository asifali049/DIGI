"use client";

import * as React from "react";
import { Filter, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface AdminFilterOption {
  label: string;
  value: string;
}

export interface AdminFilter {
  key: string;

  label?: string;

  placeholder: string;

  value: string;

  options: readonly AdminFilterOption[];

  width?: string;

  disabled?: boolean;
}

interface AdminFiltersProps {
  filters: readonly AdminFilter[];

  onValueChange: (
    key: string,
    value: string
  ) => void;

  onReset?: () => void;

  loading?: boolean;

  className?: string;
}

/* -------------------------------------------------------------------------- */

export function AdminFilters({
  filters,
  onValueChange,
  onReset,
  loading = false,
  className,
}: AdminFiltersProps) {
  if (!filters.length) {
    return null;
  }

  const hasActiveFilters = filters.some(
    (filter) => filter.value !== ""
  );

  return (
    <section
      className={cn(
        "flex flex-wrap items-end gap-3",
        className
      )}
    >
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={cn(
            "min-w-[180px] flex-1 sm:flex-none",
            filter.width
          )}
        >
          {filter.label && (
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Filter className="h-3.5 w-3.5 text-muted-foreground" />
              {filter.label}
            </label>
          )}

          <Select
            value={filter.value}
            disabled={
              loading ||
              filter.disabled
            }
            onValueChange={(value) =>
              onValueChange(
                filter.key,
                value
              )
            }
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  filter.placeholder
                }
              />
            </SelectTrigger>

            <SelectContent>
              {filter.options.map(
                (option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
      ))}

      {hasActiveFilters && onReset && (
        <Button
          type="button"
          variant="outline"
          onClick={onReset}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      )}
    </section>
  );
}