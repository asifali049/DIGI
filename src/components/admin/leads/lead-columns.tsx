"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Calendar,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Lead } from "@/types/lead";

import { LeadStatusBadge } from "./lead-status-badge";
import { LeadDetailsSheet } from "./lead-details-sheet";
import { EditLeadDialog } from "./edit-lead-dialog";
import { DeleteLeadDialog } from "./delete-lead-dialog";

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";

const priorityVariant: Record<
  Lead["priority"],
  string
> = {
  low: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",

  medium:
    "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",

  high:
    "border-orange-300 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300",

  urgent:
    "border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
};

export const leadColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Lead",

    cell: ({ row }) => {
      const lead = row.original;

      return (
        <div className="min-w-65">
          <p className="font-medium">
            {lead.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {lead.email}
          </p>

          <p className="text-xs text-muted-foreground">
            {lead.phone}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "company",
    header: "Company",

    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.company}
        </p>

        {row.original.website && (
          <p className="text-xs text-muted-foreground">
            {row.original.website}
          </p>
        )}
      </div>
    ),
  },

  {
    accessorKey: "service",
    header: "Service",
  },

  {
    accessorKey: "budget",
    header: "Budget",
  },

  {
    accessorKey: "priority",
    header: "Priority",

    cell: ({ row }) => (
      <Badge
        variant="outline"
        className={
          priorityVariant[row.original.priority]
        }
      >
        {row.original.priority}
      </Badge>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",

    cell: ({ row }) => (
      <LeadStatusBadge
        status={row.original.status}
      />
    ),
  },

  {
    accessorKey: "assignedTo",
    header: "Assigned",

    cell: ({ row }) => (
      <span>{row.original.assignedTo}</span>
    ),
  },

  {
    accessorKey: "followUpDate",
    header: "Follow-up",

    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        {row.original.followUpDate}
      </div>
    ),
  },

  {
    id: "actions",

    enableSorting: false,
    enableHiding: false,

    cell: ({ row }) => {
      const lead = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <LeadDetailsSheet
              lead={lead}
              trigger={
                <DropdownMenuItem
                  onSelect={(e) =>
                    e.preventDefault()
                  }
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </DropdownMenuItem>
              }
            />

            <EditLeadDialog
              lead={lead}
              trigger={
                <DropdownMenuItem
                  onSelect={(e) =>
                    e.preventDefault()
                  }
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
              }
            />

            <DeleteLeadDialog
              lead={lead}
              trigger={
                <DropdownMenuItem
                  onSelect={(e) =>
                    e.preventDefault()
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