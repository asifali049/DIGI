"use client";

import Link from "next/link";
import {
  ExternalLink,
  Eye,
  FolderKanban,
  Code2,
  Pencil,
  Star,
} from "lucide-react";

import type { Project } from "@/types/project";
import { ProjectStatusBadge } from "./project-status-badge";

import {
  Badge,
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";

interface ProjectPreviewSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

export function ProjectPreviewSheet({
  open,
  onOpenChange,
  project,
}: ProjectPreviewSheetProps) {
  if (!project) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            {project.title}
          </SheetTitle>

          <SheetDescription>
            Project overview and quick information.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Thumbnail */}
          <div className="flex aspect-video items-center justify-center rounded-2xl border bg-muted">
            <span className="text-sm text-muted-foreground">
              Project Thumbnail
            </span>
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <ProjectStatusBadge status={project.status} />

              {project.featured && (
                <Badge>
                  <Star className="mr-1 h-3 w-3 fill-current" />
                  Featured
                </Badge>
              )}

              {project.published && (
                <Badge variant="secondary">
                  Published
                </Badge>
              )}
            </div>

            <div>
              <h3 className="font-semibold">Description</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-6 rounded-xl border p-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Client
              </p>

              <p className="mt-1 font-medium">
                {project.client}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Category
              </p>

              <p className="mt-1 capitalize font-medium">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Views
              </p>

              <div className="mt-1 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {project.views.toLocaleString()}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Slug
              </p>

              <p className="mt-1 font-medium">
                {project.slug}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {project.liveUrl && (
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Website
                </Link>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                >
                  <Code2  className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Link>
              </Button>
            )}
          </div>

          {/* Footer */}
          <Button
            className="w-full"
            asChild
          >
            <Link href={`/admin/projects/${project.id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Project
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}