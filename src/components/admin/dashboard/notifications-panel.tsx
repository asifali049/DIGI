import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Mail,
} from "lucide-react";

import { Badge } from "@/components/ui";
import type { BadgeProps } from "@/components/ui";

type NotificationStatus =
  | "new"
  | "success"
  | "warning"
  | "pending";

interface Notification {
  id: number;
  title: string;
  message: string;
  status: NotificationStatus;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "New lead received",
    message: "John Doe submitted the contact form.",
    status: "new",
    time: "2 min ago",
    icon: Mail,
  },
  {
    id: 2,
    title: "Project approved",
    message: "Corporate Website redesign was approved.",
    status: "success",
    time: "35 min ago",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Server maintenance",
    message: "Scheduled maintenance starts tonight.",
    status: "warning",
    time: "Today",
    icon: AlertCircle,
  },
  {
    id: 4,
    title: "Content review pending",
    message: "3 blog posts require approval.",
    status: "pending",
    time: "Yesterday",
    icon: Clock3,
  },
];

const statusVariant: Record<
  NotificationStatus,
  BadgeProps["variant"]
> = {
  new: "default",
  success: "secondary",
  warning: "destructive",
  pending: "outline",
};

export function NotificationsPanel() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {notifications.map((notification) => {
        const Icon = notification.icon;

        return (
          <article
            key={notification.id}
            className="rounded-xl border p-4 transition-colors duration-200 hover:bg-muted/50 sm:p-5"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-11 sm:w-11">
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                  <h4 className="truncate text-sm font-semibold sm:text-base">
                    {notification.title}
                  </h4>

                  <Badge
                    variant={
                      statusVariant[notification.status]
                    }
                    className="w-fit shrink-0 capitalize"
                  >
                    {notification.status}
                  </Badge>
                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {notification.message}
                </p>

                <p className="mt-3 text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}