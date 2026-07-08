import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const STATUS_CONFIG = {
  draft: {
    label: "Draft",
    className:
      "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
  },

  active: {
    label: "Active",
    className:
      "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
  },

  completed: {
    label: "Completed",
    className:
      "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },

  archived: {
    label: "Archived",
    className:
      "border-amber-300 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
} satisfies Record<
  ProjectStatus,
  {
    label: string;
    className: string;
  }
>;

export function ProjectStatusBadge({
  status,
  className,
}: ProjectStatusBadgeProps) {
  const config =
    STATUS_CONFIG[status] ?? STATUS_CONFIG.draft;

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium whitespace-nowrap",
        config.className,
        className
      )}
    >
      {config.label}
    </Badge>
  );
}