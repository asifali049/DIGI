"use client";

import * as React from "react";
import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface AdminSearchProps {
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;

  disabled?: boolean;
  autoFocus?: boolean;

  className?: string;
}

export function AdminSearch({
  value,
  onChange,
  placeholder = "Search...",
  disabled = false,
  autoFocus = false,
  className,
}: AdminSearchProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        value={value}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10"
      />

      {value && !disabled && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "rounded-md p-1 text-muted-foreground transition-colors",
            "hover:bg-accent hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}