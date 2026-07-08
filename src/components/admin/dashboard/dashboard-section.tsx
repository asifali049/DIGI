import { cn } from "@/lib/utils";

interface DashboardSectionProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DashboardSection({
  title,
  description,
  action,
  children,
  className,
}: DashboardSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm",
        className
      )}
    >
      {/* Header */}

      <div className="flex flex-col gap-4 border-b p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold tracking-tight sm:text-lg">
            {title}
          </h2>

          {description ? (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        {action ? (
          <div className="flex w-full shrink-0 justify-start lg:w-auto lg:justify-end">
            {action}
          </div>
        ) : null}
      </div>

      {/* Content */}

      <div className="p-4 sm:p-5 lg:p-6">
        {children}
      </div>
    </section>
  );
}