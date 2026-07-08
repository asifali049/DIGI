"use client";

import Link from "next/link";
import { Plus, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui";

interface BlogToolbarProps {
  search?: string;
}

export function BlogToolbar({
  search = "",
}: BlogToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <input
          type="search"
          defaultValue={search}
          placeholder="Search articles..."
          className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          type="button"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>

        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>
    </div>
  );
}