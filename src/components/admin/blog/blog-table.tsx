"use client";

import { useMemo, useState } from "react";
import type { SortingState } from "@tanstack/react-table";

import { blogData } from "@/constants/blog-data";
import { blogColumns } from "./blog-columns";

import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

export function BlogTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return blogData;
    }

    return blogData.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.category.name.toLowerCase().includes(query) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        )
      );
    });
  }, [search]);

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Toolbar */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-sm"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border">
        <div className="overflow-x-auto">
          <DataTable
            columns={blogColumns}
            data={filteredPosts}
            options={{
              state: {
                sorting,
              },
              onSortingChange: setSorting,
            }}
          />
        </div>
      </div>
    </div>
  );
}