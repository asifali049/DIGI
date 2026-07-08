"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface AdminFilterOption {
  label: string;
  value: string;
}

export interface AdminFilter {
  key: string;
  placeholder: string;
  value: string;
  options: AdminFilterOption[];
}

interface AdminFiltersProps {
  filters: AdminFilter[];
  onValueChange: (key: string, value: string) => void;
  className?: string;
}

export function AdminFilters({
  filters,
  onValueChange,
  className,
}: AdminFiltersProps) {
  if (!filters.length) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        className
      )}
    >
      {filters.map((filter) => (
        <div
          key={filter.key}
          className="w-full sm:w-[200px]"
        >
          <Select
            value={filter.value}
            onValueChange={(value) =>
              onValueChange(filter.key, value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>

            <SelectContent>
              {filter.options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
}