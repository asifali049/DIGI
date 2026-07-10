import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { BlogStatus } from "@/types/blog";

interface BlogStatusBadgeProps {
  status: BlogStatus;
  className?: string;
}

const STATUS_CONFIG = {
  draft: {
    label: "Draft",
    className:
      "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
  },

  published: {
    label: "Published",
    className:
      "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },

  scheduled: {
    label: "Scheduled",
    className:
      "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
  },

  archived: {
    label: "Archived",
    className:
      "border-amber-300 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
} as const satisfies Record<
  BlogStatus,
  {
    label: string;
    className: string;
  }
>;

export function BlogStatusBadge({
  status,
  className,
}: BlogStatusBadgeProps) {
  const { label, className: statusClassName } =
    STATUS_CONFIG[status];

  return (
    <Badge
      variant="outline"
      role="status"
      aria-label={`Blog status: ${label}`}
      className={cn(
        "inline-flex min-w-24 items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold tracking-wide",
        statusClassName,
        className
      )}
    >
      {label}
    </Badge>
  );
}