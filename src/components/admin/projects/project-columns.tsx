"use client";

import Link from "next/link";

import type { ColumnDef } from "@tanstack/react-table";

import {
  ExternalLink,
  MoreHorizontal,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import type { Project } from "@/types/project";

import { ProjectStatusBadge } from "./project-status-badge";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";

/* -------------------------------------------------------------------------- */

function ProjectCell({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="flex min-w-[280px] items-center gap-4">
      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl border bg-muted text-xs text-muted-foreground">
        Image
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate font-semibold">
            {project.title}
          </p>

          {project.featured && (
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          )}
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function TechStackCell({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex max-w-[240px] flex-wrap gap-1">
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
        <Badge variant="secondary">
          +{technologies.length - 3}
        </Badge>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function ActionsCell({
  project,
}: {
  project: Project;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={`/admin/projects/${project.id}`}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href={`/admin/projects/${project.id}/edit`}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* -------------------------------------------------------------------------- */

export const projectColumns: ColumnDef<Project>[] =
  [
    {
      accessorKey: "title",

      header: "Project",

      cell: ({ row }) => (
        <ProjectCell
          project={row.original}
        />
      ),
    },

    {
      accessorKey: "client",

      header: "Client",
    },

    {
      accessorKey: "category",

      header: "Category",

      cell: ({ row }) => (
        <Badge
          variant="secondary"
          className="capitalize"
        >
          {row.original.category}
        </Badge>
      ),
    },

    {
      accessorKey: "technologies",

      header: "Tech Stack",

      cell: ({ row }) => (
        <TechStackCell
          technologies={
            row.original.technologies
          }
        />
      ),
    },

    {
      accessorKey: "views",

      header: "Views",

      cell: ({ row }) => (
        <span className="font-medium tabular-nums">
          {row.original.views.toLocaleString()}
        </span>
      ),
    },

    {
      accessorKey: "status",

      header: "Status",

      cell: ({ row }) => (
        <ProjectStatusBadge
          status={row.original.status}
        />
      ),
    },

    {
      id: "actions",

      enableSorting: false,

      enableHiding: false,

      cell: ({ row }) => (
        <ActionsCell
          project={row.original}
        />
      ),
    },
  ];