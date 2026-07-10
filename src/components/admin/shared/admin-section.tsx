"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface AdminSectionProps {
  title: string;

  description?: string;

  /**
   * Optional badge
   * Example:
   * 24 Articles
   * Draft
   * Active
   */
  badge?: ReactNode;

  /**
   * Header actions
   */
  actions?: ReactNode;

  /**
   * Main Content
   */
  children: ReactNode;

  /**
   * Footer
   */
  footer?: ReactNode;

  /**
   * Loading
   */
  loading?: boolean;

  /**
   * Empty state
   */
  empty?: ReactNode;

  /**
   * Remove border between
   * header/content
   */
  hideHeaderBorder?: boolean;

  className?: string;

  headerClassName?: string;

  contentClassName?: string;

  footerClassName?: string;
}

/* -------------------------------------------------------------------------- */

export function AdminSection({
  title,

  description,

  badge,

  actions,

  children,

  footer,

  loading = false,

  empty,

  hideHeaderBorder = false,

  className,

  headerClassName,

  contentClassName,

  footerClassName,
}: AdminSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm",
        className
      )}
    >
      {/* Header */}

      <header
        className={cn(
          "flex flex-col gap-4 p-6",
          "lg:flex-row lg:items-center lg:justify-between",

          !hideHeaderBorder &&
            "border-b",

          headerClassName
        )}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold tracking-tight">
              {title}
            </h2>

            {badge}
          </div>

          {description && (
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex flex-wrap items-center gap-2">
            {actions}
          </div>
        )}
      </header>

      {/* Content */}

      <div
        className={cn(
          "p-6",
          contentClassName
        )}
      >
        {loading ? (
          <div className="space-y-4">
            <div className="h-5 w-40 animate-pulse rounded bg-muted" />
            <div className="h-40 animate-pulse rounded-xl bg-muted" />
            <div className="h-40 animate-pulse rounded-xl bg-muted" />
          </div>
        ) : empty ? (
          empty
        ) : (
          children
        )}
      </div>

      {/* Footer */}

      {footer && (
        <footer
          className={cn(
            "border-t bg-muted/20 px-6 py-4",
            footerClassName
          )}
        >
          {footer}
        </footer>
      )}
    </section>
  );
}