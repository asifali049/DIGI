"use client";

import * as React from "react";
import {
  Loader2,
  Search,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

export interface AdminSearchProps {
  value: string;

  onChange: (
    value: string
  ) => void;

  placeholder?: string;

  disabled?: boolean;

  loading?: boolean;

  autoFocus?: boolean;

  onClear?: () => void;

  className?: string;
}

export function AdminSearch({
  value,
  onChange,

  placeholder = "Search...",

  disabled = false,

  loading = false,

  autoFocus = false,

  onClear,

  className,
}: AdminSearchProps) {
  const inputRef =
    React.useRef<HTMLInputElement>(null);

  const clearSearch =
    React.useCallback(() => {
      onChange("");

      onClear?.();

      inputRef.current?.focus();
    }, [
      onChange,
      onClear,
    ]);

  React.useEffect(() => {
    function onKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape" &&
        value
      ) {
        clearSearch();
      }
    }

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
  }, [
    value,
    clearSearch,
  ]);

  return (
    <div
      className={cn(
        "relative w-full max-w-md",
        className
      )}
    >
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        ) : (
          <Search className="h-4 w-4 text-muted-foreground" />
        )}
      </div>

      <Input
        ref={inputRef}
        value={value}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="pl-10 pr-10"
      />

      {!!value && !disabled && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={clearSearch}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1",
            "text-muted-foreground transition-all",
            "hover:bg-accent hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-ring"
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}