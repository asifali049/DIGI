"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface AdminSectionProps {
  title: string;
  description?: string;

  /**
   * Actions displayed on the right side
   * (buttons, filters, dropdowns, etc.)
   */
  actions?: React.ReactNode;

  children: React.ReactNode;

  className?: string;
  contentClassName?: string;
}

export function AdminSection({
  title,
  description,
  actions,
  children,
  className,
  contentClassName,
}: AdminSectionProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border bg-background",
        className
      )}
    >
      <header
        className={cn(
          "flex flex-col gap-4 border-b p-6",
          "md:flex-row md:items-center md:justify-between"
        )}
      >
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {title}
          </h2>

          {description && (
            <p className="text-sm text-muted-foreground">
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

      <div
        className={cn(
          "p-6",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}