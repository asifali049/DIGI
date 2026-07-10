import { cn } from "@/lib/utils";

interface DashboardSectionProps {
  title: string;

  description?: string;

  badge?: React.ReactNode;

  action?: React.ReactNode;

  footer?: React.ReactNode;

  loading?: boolean;

  children: React.ReactNode;

  className?: string;

  contentClassName?: string;
}

export function DashboardSection({
  title,
  description,
  badge,
  action,
  footer,
  loading = false,
  children,
  className,
  contentClassName,
}: DashboardSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors",
        className
      )}
    >
      {/* Header */}

      <header className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="truncate text-lg font-semibold tracking-tight">
              {title}
            </h2>

            {badge}
          </div>

          {description && (
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="flex shrink-0 items-center gap-2">
            {action}
          </div>
        )}
      </header>

      {/* Content */}

      <div
        className={cn(
          "min-h-[120px] p-5 lg:p-6",
          contentClassName
        )}
      >
        {loading ? (
          <div className="flex min-h-[120px] items-center justify-center text-sm text-muted-foreground">
            Loading...
          </div>
        ) : (
          children
        )}
      </div>

      {/* Footer */}

      {footer && (
        <footer className="border-t px-5 py-4 lg:px-6">
          {footer}
        </footer>
      )}
    </section>
  );
}