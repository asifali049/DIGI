"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { projectData } from "@/constants/project-data";
import {
  ProjectForm,
  type ProjectFormValues,
} from "@/components/admin/projects/project-form";
import { Button } from "@/components/ui/button";

interface EditProjectPageProps {
  params: {
    id: string;
  };
}

export default function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const project = projectData.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  const defaultValues: ProjectFormValues = {
    title: project.title,
    slug: project.slug,
    client: project.client,
    description: project.description,
    category: project.category,
    liveUrl: project.liveUrl ?? "",
    githubUrl: project.githubUrl ?? "",
    thumbnail: project.thumbnail,
    featured: project.featured,
    published: project.published,
  };

  const handleSubmit = (values: ProjectFormValues) => {
    // TODO: Replace with Server Action / API
    console.log("Updated Project:", values);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <Button variant="ghost" asChild className="-ml-4">
          <Link href="/admin/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          Edit Project
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update project information and portfolio settings.
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        <ProjectForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}