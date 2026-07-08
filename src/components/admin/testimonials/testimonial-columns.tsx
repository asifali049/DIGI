"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Eye,
  MoreHorizontal,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import type { Testimonial } from "@/types/testimonial";

import { TestimonialStatusBadge } from "./testimonial-status-badge";
import { TestimonialPreviewSheet } from "./testimonial-preview-sheet";
import { EditTestimonialDialog } from "./edit-testimonial-dialog";
import { DeleteTestimonialDialog } from "./delete-testimonial-dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

export const testimonialColumns: ColumnDef<Testimonial>[] = [
  {
    accessorKey: "name",
    header: "Client",

    cell: ({ row }) => {
      const testimonial = row.original;

      return (
        <div className="flex min-w-85 items-center gap-4">
          <Avatar className="h-12 w-12 shrink-0">
            <AvatarImage
              src={testimonial.avatar}
              alt={testimonial.name}
            />

            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="truncate font-semibold">
                {testimonial.name}
              </p>

              {testimonial.featured && (
                <Star className="h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
              )}
            </div>

            <p className="truncate text-sm text-muted-foreground">
              {testimonial.designation} •{" "}
              {testimonial.company}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "project",
    header: "Project",

    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.project}
      </span>
    ),
  },

  {
    accessorKey: "rating",
    header: "Rating",

    cell: ({ row }) => (
      <div className="flex items-center gap-0.5">
        {Array.from({
          length: row.original.rating,
        }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    ),
  },

  {
    accessorKey: "message",
    header: "Message",

    cell: ({ row }) => (
      <p className="max-w-xs truncate text-sm text-muted-foreground">
        {row.original.message}
      </p>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",

    cell: ({ row }) => (
      <TestimonialStatusBadge
        status={row.original.status}
      />
    ),
  },

  {
    id: "actions",

    enableSorting: false,

    enableHiding: false,

    cell: ({ row }) => {
      const testimonial = row.original;

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
            className="w-48"
          >
            <TestimonialPreviewSheet
              testimonial={testimonial}
              trigger={
                <DropdownMenuItem
                  onSelect={(event) =>
                    event.preventDefault()
                  }
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </DropdownMenuItem>
              }
            />

            <EditTestimonialDialog
              testimonial={testimonial}
              trigger={
                <DropdownMenuItem
                  onSelect={(event) =>
                    event.preventDefault()
                  }
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
              }
            />

            <DeleteTestimonialDialog
              testimonial={testimonial}
              trigger={
                <DropdownMenuItem
                  onSelect={(event) =>
                    event.preventDefault()
                  }
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];