"use client";

import Link from "next/link";
import { Plus, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface BlogToolbarProps {
  search?: string;
  className?: string;
}

export function BlogToolbar({
  search = "",
  className,
}: BlogToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-card p-4",
        "sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      {/* Search */}
      <div className="relative w-full sm:max-w-md">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />

        <label
          htmlFor="blog-search"
          className="sr-only"
        >
          Search articles
        </label>

        <input
          id="blog-search"
          type="search"
          defaultValue={search}
          autoComplete="off"
          spellCheck={false}
          placeholder="Search articles..."
          className={cn(
            "h-11 w-full rounded-xl border border-border bg-background",
            "pl-10 pr-4 text-sm",
            "outline-none transition-colors",
            "placeholder:text-muted-foreground",
            "focus:border-primary",
            "focus:ring-2 focus:ring-primary/20"
          )}
        />
      </div>

      {/* Actions */}
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
        >
          <SlidersHorizontal
            aria-hidden="true"
            className="mr-2 h-4 w-4"
          />

          Filters
        </Button>

        <Button
          asChild
          className="w-full sm:w-auto"
        >
          <Link href="/admin/blog/new">
            <Plus
              aria-hidden="true"
              className="mr-2 h-4 w-4"
            />

            New Article
          </Link>
        </Button>
      </div>
    </div>
  );
}