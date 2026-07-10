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

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function formatPublishedDate(date?: string) {
  if (!date) {
    return "-";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

/* -------------------------------------------------------------------------- */
/* Cells                                                                      */
/* -------------------------------------------------------------------------- */

function ArticleCell({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <div className="flex min-w-[16rem] items-center gap-3 sm:min-w-[20rem] lg:min-w-[21rem]">
      <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-[10px] text-muted-foreground sm:h-16 sm:w-24 sm:text-xs">
        Cover
      </div>

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex items-start gap-2">
          <p className="line-clamp-2 text-sm font-medium leading-5 sm:text-base">
            {post.title}
          </p>

          {post.featured && (
            <Star
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400"
            />
          )}
        </div>

        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}

function CategoryCell({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <Badge
      variant="secondary"
      className="max-w-[7.5rem] truncate capitalize"
    >
      {post.category.name}
    </Badge>
  );
}

function AuthorCell({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <span className="whitespace-nowrap text-sm">
      {post.author.name}
    </span>
  );
}

function ReadingTimeCell({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <span className="whitespace-nowrap text-sm">
      {post.readingTime} min
    </span>
  );
}

function PublishedCell({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <div className="flex min-w-[7.5rem] items-center gap-2 text-sm">
      <Calendar
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-muted-foreground"
      />

      <span className="truncate">
        {formatPublishedDate(post.publishedAt)}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Columns (Part 1)                                                           */
/* -------------------------------------------------------------------------- */

export const blogColumns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "title",
    header: "Article",
    cell: ({ row }) => (
      <ArticleCell post={row.original} />
    ),
  },

  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <CategoryCell post={row.original} />
    ),
  },

  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => (
      <AuthorCell post={row.original} />
    ),
  },

  {
    accessorKey: "readingTime",
    header: "Reading",
    cell: ({ row }) => (
      <ReadingTimeCell post={row.original} />
    ),
  },

  {
    accessorKey: "publishedAt",
    header: "Published",
    cell: ({ row }) => (
      <PublishedCell post={row.original} />
    ),
  },
    {
    accessorKey: "status",
    header: "Status",
    sortingFn: "text",
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
              aria-label={`Open actions for ${post.title}`}
              className="h-9 w-9"
            >
              <MoreHorizontal
                aria-hidden="true"
                className="h-5 w-5"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-48"
          >
            <BlogPreviewSheet
              post={post}
              trigger={
                <DropdownMenuItem
                  onSelect={(event) =>
                    event.preventDefault()
                  }
                >
                  <Eye
                    aria-hidden="true"
                    className="mr-2 h-4 w-4"
                  />
                  Preview
                </DropdownMenuItem>
              }
            />

            <EditBlogDialog
              post={post}
              trigger={
                <DropdownMenuItem
                  onSelect={(event) =>
                    event.preventDefault()
                  }
                >
                  <Pencil
                    aria-hidden="true"
                    className="mr-2 h-4 w-4"
                  />
                  Edit
                </DropdownMenuItem>
              }
            />

            <DeleteBlogDialog
              title={post.title}
              onDelete={() => {
                // TODO:
                // Replace with mutation
                console.log(
                  "Delete Blog:",
                  post.id
                );
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];