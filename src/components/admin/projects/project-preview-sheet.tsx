"use client";

import Link from "next/link";

import {
  Code2,
  ExternalLink,
  Eye,
  FolderKanban,
  Pencil,
  Star,
  User,
} from "lucide-react";

import type { Project } from "@/types/project";

import { ProjectStatusBadge } from "./project-status-badge";

import {
  Badge,
  Button,
  Separator,
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

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <div className="font-medium break-all">
        {value}
      </div>
    </div>
  );
}

export function ProjectPreviewSheet({
  open,
  onOpenChange,
  project,
}: ProjectPreviewSheetProps) {
  if (!project) return null;

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            {project.title}
          </SheetTitle>

          <SheetDescription>
            Project overview and details.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Thumbnail */}

          <div className="flex aspect-video items-center justify-center rounded-2xl border bg-muted">
            <span className="text-muted-foreground">
              Thumbnail Preview
            </span>
          </div>

          {/* Status */}

          <div className="flex flex-wrap gap-2">
            <ProjectStatusBadge
              status={project.status}
            />

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

          {/* Description */}

          <section>
            <h3 className="text-lg font-semibold">
              Description
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {project.description}
            </p>
          </section>

          <Separator />

          {/* Details */}

          <section className="grid gap-6 sm:grid-cols-2">
            <InfoItem
              label="Client"
              value={
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {project.client}
                </div>
              }
            />

            <InfoItem
              label="Category"
              value={
                <Badge
                  variant="secondary"
                  className="capitalize"
                >
                  {project.category}
                </Badge>
              }
            />

            <InfoItem
              label="Views"
              value={
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {project.views.toLocaleString()}
                </div>
              }
            />

            <InfoItem
              label="Slug"
              value={project.slug}
            />
          </section>

          <Separator />

          {/* Tech */}

          <section>
            <h3 className="text-lg font-semibold">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </div>
          </section>

          <Separator />

          {/* Links */}

          <section className="space-y-3">
            {project.liveUrl && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Website
                </Link>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Link>
              </Button>
            )}
          </section>

          <Separator />

          {/* Footer */}

          <Button
            asChild
            className="w-full"
          >
            <Link
              href={`/admin/projects/${project.id}/edit`}
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit Project
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}