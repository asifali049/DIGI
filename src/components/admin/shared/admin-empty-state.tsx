import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AdminEmptyStateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

export function AdminEmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
}: AdminEmptyStateProps) {
  return (
    <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed bg-card px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        {actionHref && actionLabel && (
          <Button
            asChild
            className="mt-8"
          >
            <Link href={actionHref}>
              <Plus className="mr-2 h-4 w-4" />
              {actionLabel}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}