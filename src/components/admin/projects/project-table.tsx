"use client";

import { useMemo, useState } from "react";

import type { SortingState } from "@tanstack/react-table";

import { FolderOpen } from "lucide-react";

import { projectData } from "@/constants/project-data";
import { projectColumns } from "./project-columns";

import { DataTable } from "@/components/ui/data-table";

import { AdminSection } from "@/components/admin/shared/admin-section";
import { AdminEmptyState } from "@/components/admin/shared/admin-empty-state";
import { ProjectToolbar } from "./project-toolbar";

export function ProjectTable() {
  const [sorting, setSorting] =
    useState<SortingState>([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [status, setStatus] =
    useState("all");

  const [view, setView] = useState<
    "table" | "grid"
  >("table");

  const filteredProjects =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return projectData.filter(
        (project) => {
          const matchesSearch =
            !query ||
            project.title
              .toLowerCase()
              .includes(query) ||
            project.client
              .toLowerCase()
              .includes(query) ||
            project.category
              .toLowerCase()
              .includes(query) ||
            project.technologies.some(
              (tech) =>
                tech
                  .toLowerCase()
                  .includes(query)
            );

          const matchesCategory =
            category === "all" ||
            project.category ===
              category;

          const matchesStatus =
            status === "all" ||
            project.status ===
              status;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        }
      );
    }, [search, category, status]);

  return (
    <div className="space-y-6">

      <ProjectToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
        view={view}
        onViewChange={setView}
      />

      <AdminSection
        title="Projects"
        description="Manage portfolio projects, showcase work and monitor project status."
        badge={
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {filteredProjects.length} Projects
          </span>
        }
      >
        {filteredProjects.length ===
        0 ? (
          <AdminEmptyState
            icon={
              <FolderOpen className="h-10 w-10" />
            }
            title="No projects found"
            description="Try changing the search or filters, or create a new project."
            actionLabel="New Project"
            actionHref="/admin/projects/new"
            compact
          />
        ) : (
          <DataTable
            columns={projectColumns}
            data={filteredProjects}
            options={{
              state: {
                sorting,
              },

              onSortingChange:
                setSorting,
            }}
          />
        )}
      </AdminSection>
    </div>
  );
}