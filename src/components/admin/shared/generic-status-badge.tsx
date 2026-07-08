import { cn } from "@/lib/utils";

export type StatusVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export interface GenericStatusBadgeProps {
  label: string;
  variant?: StatusVariant;
  className?: string;
}

const variants: Record<StatusVariant, string> = {
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
};

export function GenericStatusBadge({
  label,
  variant = "neutral",
  className,
}: GenericStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          variant === "success" && "bg-emerald-500",
          variant === "warning" && "bg-amber-500",
          variant === "danger" && "bg-red-500",
          variant === "info" && "bg-sky-500",
          variant === "neutral" && "bg-muted-foreground"
        )}
      />
      {label}
    </span>
  );
}

/**
 * Optional helper for common backend status strings.
 */
export function getStatusVariant(status: string): StatusVariant {
  switch (status.trim().toLowerCase()) {
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
      return "warning";

    case "inactive":
    case "failed":
    case "cancelled":
    case "rejected":
    case "blocked":
      return "danger";

    case "new":
    case "info":
      return "info";

    default:
      return "neutral";
  }
}