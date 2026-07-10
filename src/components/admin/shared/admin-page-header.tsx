import type { ReactNode } from "react";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AdminPageHeaderProps {
  title: string;

  description?: string;

  breadcrumbs?: BreadcrumbItem[];

  action?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };

  /**
   * Custom actions
   * Example:
   * Export, Import, Create buttons
   */
  actions?: ReactNode;

  /**
   * Optional content below header.
   * Example:
   * Stats
   * Filters
   * Tabs
   */
  children?: ReactNode;

  className?: string;
}

export function AdminPageHeader({
  title,
  description,
  breadcrumbs = [],
  action,
  actions,
  children,
  className,
}: AdminPageHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-6",
        className
      )}
    >
      {breadcrumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map(
              (item, index) => (
                <li
                  key={`${item.label}-${index}`}
                  className="flex items-center gap-2"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="font-medium text-foreground"
                    >
                      {item.label}
                    </span>
                  )}

                  {index !==
                    breadcrumbs.length -
                      1 && (
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  )}
                </li>
              )
            )}
          </ol>
        </nav>
      )}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {actions}

          {action && (
            <Button asChild>
              <Link
                href={action.href}
                className="inline-flex items-center gap-2"
              >
                {action.icon}
                <span>{action.label}</span>
              </Link>
            </Button>
          )}
        </div>
      </div>

      {children && (
        <div className="pt-2">
          {children}
        </div>
      )}
    </header>
  );
}