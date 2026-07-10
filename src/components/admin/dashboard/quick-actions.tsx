"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  ImageIcon,
  MailPlus,
} from "lucide-react";

import { Badge } from "@/components/ui";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface QuickAction {
  title: string;

  description: string;

  href: string;

  icon: React.ComponentType<{
    className?: string;
  }>;

  badge?: string;

  external?: boolean;

  disabled?: boolean;
}

interface QuickActionsProps {
  actions?: QuickAction[];

  loading?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Default Actions                                                            */
/* -------------------------------------------------------------------------- */

const defaultActions: QuickAction[] = [
  {
    title: "New Project",
    description:
      "Create a new portfolio project.",
    href: "/admin/projects/new",
    icon: BriefcaseBusiness,
  },
  {
    title: "Write Blog",
    description:
      "Publish a new article.",
    href: "/admin/blog/new",
    icon: FileText,
    badge: "New",
  },
  {
    title: "Upload Media",
    description:
      "Manage images and assets.",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    title: "View Leads",
    description:
      "Review recent enquiries.",
    href: "/admin/leads",
    icon: MailPlus,
  },
];

/* -------------------------------------------------------------------------- */

export function QuickActions({
  actions = defaultActions,
  loading = false,
}: QuickActionsProps) {
  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center rounded-xl border">
        <p className="text-sm text-muted-foreground">
          Loading quick actions...
        </p>
      </div>
    );
  }

  if (!actions.length) {
    return (
      <div className="flex h-60 flex-col items-center justify-center rounded-xl border text-center">
        <Bell className="mb-3 h-8 w-8 text-muted-foreground" />

        <p className="font-medium">
          No quick actions available
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Actions will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.href}
            href={
              action.disabled
                ? "#"
                : action.href
            }
            target={
              action.external
                ? "_blank"
                : undefined
            }
            className={[
              "group flex h-full flex-col rounded-2xl border bg-card p-5 transition-all duration-300",
              "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
              action.disabled &&
                "pointer-events-none opacity-50",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-2">

                {action.badge && (
                  <Badge>
                    {action.badge}
                  </Badge>
                )}

                {action.external ? (
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                )}

              </div>

            </div>

            <div className="mt-5 flex-1">

              <h3 className="font-semibold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {action.description}
              </p>

            </div>

            <Button
              variant="ghost"
              className="mt-6 w-fit px-0 group-hover:text-primary"
            >
              Open
            </Button>

          </Link>
        );
      })}
    </div>
  );
}