"use client";

import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Clock3,
  Mail,
} from "lucide-react";

import { Badge } from "@/components/ui";
import type { BadgeProps } from "@/components/ui";

/* -------------------------------------------------------------------------- */
/* Types */
/* -------------------------------------------------------------------------- */

export type NotificationStatus =
  | "new"
  | "success"
  | "warning"
  | "pending";

export interface DashboardNotification {
  id: number | string;

  title: string;

  message: string;

  status: NotificationStatus;

  time: string;

  icon?: React.ComponentType<{
    className?: string;
  }>;
}

interface NotificationsPanelProps {
  notifications?: DashboardNotification[];

  loading?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Default Data */
/* -------------------------------------------------------------------------- */

const defaultNotifications: DashboardNotification[] =
  [
    {
      id: 1,
      title: "New lead received",
      message:
        "John Doe submitted the contact form.",
      status: "new",
      time: "2 min ago",
      icon: Mail,
    },
    {
      id: 2,
      title: "Project approved",
      message:
        "Corporate Website redesign approved.",
      status: "success",
      time: "35 min ago",
      icon: CheckCircle2,
    },
    {
      id: 3,
      title: "Server maintenance",
      message:
        "Maintenance starts tonight.",
      status: "warning",
      time: "Today",
      icon: AlertCircle,
    },
    {
      id: 4,
      title: "Content review pending",
      message:
        "3 blog posts require approval.",
      status: "pending",
      time: "Yesterday",
      icon: Clock3,
    },
  ];

/* -------------------------------------------------------------------------- */

const badgeVariant: Record<
  NotificationStatus,
  BadgeProps["variant"]
> = {
  new: "default",

  success: "secondary",

  warning: "destructive",

  pending: "outline",
};

/* -------------------------------------------------------------------------- */

export function NotificationsPanel({
  notifications =
    defaultNotifications,

  loading = false,
}: NotificationsPanelProps) {
  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center rounded-xl border">
        <p className="text-sm text-muted-foreground">
          Loading notifications...
        </p>
      </div>
    );
  }

  if (!notifications.length) {
    return (
      <div className="flex h-60 flex-col items-center justify-center rounded-xl border text-center">
        <Bell className="mb-3 h-8 w-8 text-muted-foreground" />

        <p className="font-medium">
          No notifications
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          You&apos;re all caught up.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notifications.map(
        (notification) => {
          const Icon =
            notification.icon ??
            Bell;

          return (
            <article
              key={notification.id}
              className="rounded-xl border p-4 transition-all duration-200 hover:bg-muted/40"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h4 className="font-medium">
                      {notification.title}
                    </h4>

                    <Badge
                      variant={
                        badgeVariant[
                          notification
                            .status
                        ]
                      }
                      className="capitalize"
                    >
                      {
                        notification.status
                      }
                    </Badge>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {
                      notification.message
                    }
                  </p>

                  <p className="mt-3 text-xs text-muted-foreground">
                    {notification.time}
                  </p>

                </div>

              </div>
            </article>
          );
        }
      )}
    </div>
  );
}