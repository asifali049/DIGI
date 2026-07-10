import type { ReactNode } from "react";

import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  Clock3,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type StatusVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export type StatusSize =
  | "sm"
  | "md"
  | "lg";

export interface GenericStatusBadgeProps {
  label: string;

  variant?: StatusVariant;

  size?: StatusSize;

  icon?: ReactNode;

  showDot?: boolean;

  pulse?: boolean;

  uppercase?: boolean;

  className?: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Variants                                  */
/* -------------------------------------------------------------------------- */

const variantClasses = {
  success:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

  warning:
    "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",

  danger:
    "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",

  info:
    "border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400",

  neutral:
    "border-border bg-muted text-muted-foreground",
} as const;

const sizeClasses = {
  sm: "px-2 py-0.5 text-[11px]",

  md: "px-3 py-1 text-xs",

  lg: "px-4 py-1.5 text-sm",
} as const;

const dotClasses = {
  success: "bg-emerald-500",

  warning: "bg-amber-500",

  danger: "bg-red-500",

  info: "bg-sky-500",

  neutral: "bg-muted-foreground",
} as const;

/* -------------------------------------------------------------------------- */

function getDefaultIcon(
  variant: StatusVariant
) {
  switch (variant) {
    case "success":
      return (
        <CheckCircle2 className="h-3.5 w-3.5" />
      );

    case "warning":
      return (
        <AlertTriangle className="h-3.5 w-3.5" />
      );

    case "danger":
      return (
        <XCircle className="h-3.5 w-3.5" />
      );

    case "info":
      return (
        <Info className="h-3.5 w-3.5" />
      );

    default:
      return (
        <Clock3 className="h-3.5 w-3.5" />
      );
  }
}

/* -------------------------------------------------------------------------- */

export function GenericStatusBadge({
  label,

  variant = "neutral",

  size = "md",

  icon,

  showDot = true,

  pulse = false,

  uppercase = false,

  className,
}: GenericStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-medium transition-colors",

        variantClasses[variant],

        sizeClasses[size],

        uppercase && "uppercase tracking-wide",

        className
      )}
    >
      {showDot && (
        <span
          className={cn(
            "h-2 w-2 rounded-full",

            dotClasses[variant],

            pulse &&
              "animate-pulse"
          )}
        />
      )}

      {icon ?? getDefaultIcon(variant)}

      <span>{label}</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Helper Mapping                               */
/* -------------------------------------------------------------------------- */

export function getStatusVariant(
  status: string
): StatusVariant {
  switch (
    status.trim().toLowerCase()
  ) {
    case "active":
    case "completed":
    case "published":
    case "approved":
    case "paid":
    case "online":
      return "success";

    case "pending":
    case "draft":
    case "processing":
    case "review":
    case "scheduled":
      return "warning";

    case "inactive":
    case "failed":
    case "cancelled":
    case "rejected":
    case "blocked":
    case "archived":
      return "danger";

    case "new":
    case "info":
      return "info";

    default:
      return "neutral";
  }
}