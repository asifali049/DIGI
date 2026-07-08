import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
    icon?: React.ReactNode;
  };
}

export function AdminPageHeader({
  title,
  description,
  breadcrumbs = [],
  action,
}: AdminPageHeaderProps) {
  return (
    <div className="space-y-6">
      {breadcrumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          {breadcrumbs.map((item, index) => (
            <div
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
                <span className="font-medium text-foreground">
                  {item.label}
                </span>
              )}

              {index !== breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          ))}
        </nav>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {action && (
          <Button asChild>
            <Link
              href={action.href}
              className="inline-flex items-center gap-2"
            >
              {action.icon}
              {action.label}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}