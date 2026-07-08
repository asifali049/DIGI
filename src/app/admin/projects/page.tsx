import { Plus } from "lucide-react";
import Link from "next/link";

import { ProjectTable } from "@/components/admin/projects/project-table";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Projects
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage your portfolio projects, drafts and published work.
          </p>
        </div>

        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      {/* Table */}
      <ProjectTable />
    </div>
  );
}