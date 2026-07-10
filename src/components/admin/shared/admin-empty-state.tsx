import type { ReactNode } from "react";

import Link from "next/link";
import {
  ArrowRight,
  Plus,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface AdminEmptyStateProps {
  title: string;

  description: string;

  icon: ReactNode;

  /**
   * Primary CTA
   */
  actionLabel?: string;

  actionHref?: string;

  /**
   * Secondary CTA
   */
  secondaryActionLabel?: string;

  secondaryActionHref?: string;

  /**
   * Optional custom footer
   */
  footer?: ReactNode;

  className?: string;

  compact?: boolean;
}

/* -------------------------------------------------------------------------- */

export function AdminEmptyState({
  title,
  description,
  icon,

  actionLabel,
  actionHref,

  secondaryActionLabel,
  secondaryActionHref,

  footer,

  className,

  compact = false,
}: AdminEmptyStateProps) {
  return (
    <section
      className={cn(
        "flex items-center justify-center rounded-2xl border border-dashed bg-card px-6",

        compact
          ? "min-h-[280px]"
          : "min-h-[420px]",

        className
      )}
    >
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">

        {/* Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>

        {/* Title */}

        <h2 className="mt-6 text-2xl font-bold tracking-tight">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Actions */}

        {(actionHref || secondaryActionHref) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            {secondaryActionHref &&
              secondaryActionLabel && (
                <Button
                  asChild
                  variant="outline"
                >
                  <Link
                    href={secondaryActionHref}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {secondaryActionLabel}
                  </Link>
                </Button>
              )}

            {actionHref &&
              actionLabel && (
                <Button asChild>
                  <Link href={actionHref}>
                    <Plus className="mr-2 h-4 w-4" />
                    {actionLabel}
                  </Link>
                </Button>
              )}
          </div>
        )}

        {/* Footer */}

        {footer && (
          <div className="mt-8 w-full">
            {footer}
          </div>
        )}
      </div>
    </section>
  );
}