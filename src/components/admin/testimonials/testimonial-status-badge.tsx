import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { TestimonialStatus } from "@/types/testimonial";

interface TestimonialStatusBadgeProps {
  status: TestimonialStatus;
  className?: string;
}

const STATUS_CONFIG = {
  pending: {
    label: "Pending",
    className:
      "border-yellow-300 bg-yellow-100 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
  },

  approved: {
    label: "Approved",
    className:
      "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
  },

  featured: {
    label: "Featured",
    className:
      "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },

  archived: {
    label: "Archived",
    className:
      "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
  },
} satisfies Record<
  TestimonialStatus,
  {
    label: string;
    className: string;
  }
>;

export function TestimonialStatusBadge({
  status,
  className,
}: TestimonialStatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium capitalize",
        config.className,
        className
      )}
    >
      {config.label}
    </Badge>
  );
}