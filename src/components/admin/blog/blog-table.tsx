"use client";

import {
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import type {
  SortingState,
} from "@tanstack/react-table";

import { blogData } from "@/constants/blog-data";

import { blogColumns } from "./blog-columns";

import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

export function BlogTable() {
  const [sorting, setSorting] =
    useState<SortingState>([]);

  const [search, setSearch] = useState("");

  const deferredSearch =
    useDeferredValue(search);

  const filteredPosts = useMemo(() => {
    const query = deferredSearch
      .trim()
      .toLowerCase();

    if (!query) {
      return blogData;
    }

    return blogData.filter((post) => {
      return (
        post.title
          .toLowerCase()
          .includes(query) ||
        post.author.name
          .toLowerCase()
          .includes(query) ||
        post.category.name
          .toLowerCase()
          .includes(query) ||
        post.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(query)
        )
      );
    });
  }, [deferredSearch]);

  return (
    <section
      aria-labelledby="blog-table-heading"
      className="space-y-5 sm:space-y-6"
    >
      <h2
        id="blog-table-heading"
        className="sr-only"
      >
        Blog Posts
      </h2>

      {/* Toolbar */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search blog posts..."
          aria-label="Search blog posts"
          autoComplete="off"
          spellCheck={false}
          className="w-full sm:max-w-sm"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border border-border">
        <div className="overflow-x-auto">
          <DataTable
            columns={blogColumns}
            data={filteredPosts}
            emptyMessage="No blog posts found."
            options={{
              state: {
                sorting,
              },
              onSortingChange:
                setSorting,
            }}
          />
        </div>
      </div>
    </section>
  );
}