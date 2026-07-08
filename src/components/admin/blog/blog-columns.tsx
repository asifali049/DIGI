"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Calendar,
  Eye,
  MoreHorizontal,
  Pencil,
  Star,
} from "lucide-react";

import type { BlogPost } from "@/types/blog";

import { BlogStatusBadge } from "./blog-status-badge";
import { BlogPreviewSheet } from "./blog-preview-sheet";
import { DeleteBlogDialog } from "./delete-blog-dialog";
import { EditBlogDialog } from "./edit-blog-dialog";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

export const blogColumns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "title",
    header: "Article",
    cell: ({ row }) => {
      const post = row.original;

      return (
        <div className="flex min-w-65 items-center gap-3 sm:min-w-[320px] lg:min-w-85">
          <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl border bg-muted text-[10px] text-muted-foreground sm:h-16 sm:w-24 sm:text-xs">
            Cover
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-start gap-2">
              <p className="line-clamp-2 text-sm font-medium leading-5 sm:text-base">
                {post.title}
              </p>

              {post.featured ? (
                <Star className="mt-0.5 h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
              ) : null}
            </div>

            <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
              {post.excerpt}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className="max-w-30 truncate capitalize"
      >
        {row.original.category.name}
      </Badge>
    ),
  },

  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm">
        {row.original.author.name}
      </span>
    ),
  },

  {
    accessorKey: "readingTime",
    header: "Reading",
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm">
        {row.original.readingTime} min
      </span>
    ),
  },

  {
    accessorKey: "publishedAt",
    header: "Published",
    cell: ({ row }) => (
      <div className="flex min-w-30 items-center gap-2 text-sm">
        <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />

        <span className="truncate">
          {row.original.publishedAt ?? "-"}
        </span>
      </div>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <BlogStatusBadge
        status={row.original.status ?? "draft"}
      />
    ),
  },

  {
    id: "actions",
    enableSorting: false,
    enableHiding: false,

    cell: ({ row }) => {
      const post = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open actions"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-44"
          >
            <BlogPreviewSheet
              post={post}
              trigger={
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </DropdownMenuItem>
              }
            />

            <EditBlogDialog
              post={post}
              trigger={
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
              }
            />

            <DeleteBlogDialog
              title={post.title}
              onDelete={() => {
                // TODO: Implement delete action
                console.log("Delete:", post.id);
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];