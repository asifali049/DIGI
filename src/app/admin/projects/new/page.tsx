"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  ProjectForm,
  type ProjectFormValues,
} from "@/components/admin/projects/project-form";
import { Button } from "@/components/ui/button";

export default function NewProjectPage() {
  const handleSubmit = (values: ProjectFormValues) => {
    // Backend/API integration will be added later.
    console.log(values);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" asChild className="-ml-4">
            <Link href="/admin/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Create Project
          </h1>

          <p className="mt-2 text-muted-foreground">
            Add a new portfolio project. This page is ready for API integration.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        <ProjectForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}