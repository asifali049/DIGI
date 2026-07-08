"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  ExternalLink,
  MoreHorizontal,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import type { Service } from "@/types/service";

import { DeleteServiceDialog } from "./delete-service-dialog";
import { ServiceStatusBadge } from "./service-status-badge";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

export const serviceColumns: ColumnDef<Service>[] = [
  {
    accessorKey: "title",
    header: "Service",
    cell: ({ row }) => {
      const service = row.original;

      return (
        <div className="flex min-w-[320px] items-center gap-4">
          <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl border bg-muted text-xs text-muted-foreground">
            Image
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="truncate font-semibold">
                {service.title}
              </p>

              {service.featured && (
                <Star className="h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
              )}
            </div>

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {service.shortDescription}
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
        className="capitalize"
      >
        {row.original.category.replace(/-/g, " ")}
      </Badge>
    ),
  },

  {
    accessorKey: "deliveryTime",
    header: "Delivery",

    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm">
        {row.original.deliveryTime ?? "-"}
      </span>
    ),
  },

  {
    accessorKey: "priceFrom",
    header: "Starting From",

    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.priceFrom != null
          ? `$${row.original.priceFrom.toLocaleString()}`
          : "Custom"}
      </span>
    ),
  },

  {
    accessorKey: "technologies",
    header: "Technologies",

    cell: ({ row }) => {
      const technologies =
        row.original.technologies;

      return (
        <div className="flex max-w-65 flex-wrap gap-1">
          {technologies
            .slice(0, 3)
            .map((tech) => (
              <Badge
                key={tech}
                variant="outline"
              >
                {tech}
              </Badge>
            ))}

          {technologies.length > 3 && (
            <Badge variant="outline">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",

    cell: ({ row }) => (
      <ServiceStatusBadge
        status={row.original.status}
      />
    ),
  },

  {
    id: "actions",

    enableSorting: false,

    enableHiding: false,

    cell: ({ row }) => {
      const service = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Open actions"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-48"
          >
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4" />
              Preview
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DeleteServiceDialog
              service={service}
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