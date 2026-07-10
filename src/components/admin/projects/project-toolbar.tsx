"use client";

import {
  Grid2X2,
  List,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  AdminToolbar,
} from "@/components/admin/shared/admin-toolbar";

import {
  AdminFilters,
  type AdminFilter,
} from "@/components/admin/shared/admin-filters";

interface ProjectToolbarProps {
  search: string;
  onSearchChange: (
    value: string
  ) => void;

  category: string;
  onCategoryChange: (
    value: string
  ) => void;

  status: string;
  onStatusChange: (
    value: string
  ) => void;

  view: "table" | "grid";

  onViewChange: (
    view: "table" | "grid"
  ) => void;
}

const FILTERS = {
  categories: [
    {
      label: "All Categories",
      value: "all",
    },
    {
      label: "Web",
      value: "web",
    },
    {
      label: "Mobile",
      value: "mobile",
    },
    {
      label: "Branding",
      value: "branding",
    },
    {
      label: "UI / UX",
      value: "ui-ux",
    },
    {
      label: "Marketing",
      value: "marketing",
    },
    {
      label: "SaaS",
      value: "saas",
    },
    {
      label: "E-Commerce",
      value: "e-commerce",
    },
    {
      label: "AI",
      value: "ai",
    },
  ],

  status: [
    {
      label: "All Status",
      value: "all",
    },
    {
      label: "Draft",
      value: "draft",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Archived",
      value: "archived",
    },
  ],
} as const;

export function ProjectToolbar({
  search,
  onSearchChange,

  category,
  onCategoryChange,

  status,
  onStatusChange,

  view,
  onViewChange,
}: ProjectToolbarProps) {
  const filters: AdminFilter[] = [
    {
      key: "category",

      label: "Category",

      placeholder: "Category",

      value: category,

      options: FILTERS.categories,
    },

    {
      key: "status",

      label: "Status",

      placeholder: "Status",

      value: status,

      options: FILTERS.status,
    },
  ];

  return (
    <AdminToolbar
      searchValue={search}
      searchPlaceholder="Search projects..."
      onSearchChange={onSearchChange}
      onSearchClear={() =>
        onSearchChange("")
      }
      startContent={
        <AdminFilters
          filters={filters}
          onValueChange={(
            key,
            value
          ) => {
            switch (key) {
              case "category":
                onCategoryChange(
                  value
                );
                break;

              case "status":
                onStatusChange(
                  value
                );
                break;
            }
          }}
        />
      }
      endContent={
        <div className="flex rounded-xl border">
          <Button
            size="icon"
            type="button"
            variant={
              view === "table"
                ? "default"
                : "ghost"
            }
            onClick={() =>
              onViewChange("table")
            }
          >
            <List className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            type="button"
            variant={
              view === "grid"
                ? "default"
                : "ghost"
            }
            onClick={() =>
              onViewChange("grid")
            }
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
        </div>
      }
      actionLabel="New Project"
      actionHref="/admin/projects/new"
      actionIcon={
        <Plus className="h-4 w-4" />
      }
    />
  );
}