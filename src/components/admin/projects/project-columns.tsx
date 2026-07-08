"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  ExternalLink,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import type { Project } from "@/types/project";
import { ProjectStatusBadge } from "./project-status-badge";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

export const projectColumns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Project",
    cell: ({ row }) => {
      const project = row.original;

      return (
        <div className="flex min-w-[260px] items-center gap-3">
          <div className="flex h-14 w-20 items-center justify-center rounded-lg border bg-muted text-xs text-muted-foreground">
            Image
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="font-medium">{project.title}</p>

              {project.featured && (
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              )}
            </div>

            <p className="line-clamp-1 text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary" className="capitalize">
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "technologies",
    header: "Tech Stack",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row.original.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}

        {row.original.technologies.length > 3 && (
          <Badge variant="outline">
            +{row.original.technologies.length - 3}
          </Badge>
        )}
      </div>
    ),
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.views.toLocaleString()}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <ProjectStatusBadge status={row.original.status} />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const project = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];