"use client";

import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { LeadStatus } from "@/types/lead";

interface LeadStatusBadgeProps {
  status: LeadStatus;
  className?: string;
}

const statusConfig: Record<
  LeadStatus,
  {
    label: string;
    className: string;
  }
> = {
  new: {
    label: "New",
    className:
      "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
  },

  contacted: {
    label: "Contacted",
    className:
      "border-cyan-300 bg-cyan-100 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
  },

  qualified: {
    label: "Qualified",
    className:
      "border-violet-300 bg-violet-100 text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300",
  },

  proposal_sent: {
    label: "Proposal Sent",
    className:
      "border-amber-300 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },

  negotiation: {
    label: "Negotiation",
    className:
      "border-orange-300 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300",
  },

  won: {
    label: "Won",
    className:
      "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },

  lost: {
    label: "Lost",
    className:
      "border-red-300 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
  },
};

export function LeadStatusBadge({
  status,
  className,
}: LeadStatusBadgeProps) {
  const config = statusConfig[status];

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