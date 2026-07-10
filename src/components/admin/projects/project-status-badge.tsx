import {
  GenericStatusBadge,
  getStatusVariant,
} from "@/components/admin/shared/generic-status-badge";

import type { ProjectStatus } from "@/types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;

  className?: string;

  size?: "sm" | "md" | "lg";

  pulse?: boolean;
}

const STATUS_LABELS: Record<
  ProjectStatus,
  string
> = {
  draft: "Draft",

  active: "Active",

  completed: "Completed",

  archived: "Archived",
};

export function ProjectStatusBadge({
  status,

  className,

  size = "md",

  pulse = false,
}: ProjectStatusBadgeProps) {
  return (
    <GenericStatusBadge
      label={STATUS_LABELS[status]}
      variant={getStatusVariant(status)}
      size={size}
      pulse={
        pulse && status === "active"
      }
      className={className}
    />
  );
}