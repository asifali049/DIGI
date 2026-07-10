"use client";

import {
  Bell,
  CheckCircle2,
  FileText,
  FolderKanban,
  MessageSquareQuote,
  UserPlus,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ActivityItem {
  id: number | string;

  title: string;

  description: string;

  time: string;

  icon?: React.ComponentType<{
    className?: string;
  }>;
}

interface RecentActivityProps {
  activities?: ActivityItem[];

  loading?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Default Data                                                               */
/* -------------------------------------------------------------------------- */

const defaultActivities: ActivityItem[] = [
  {
    id: 1,
    title: "New project created",
    description: "E-Commerce Redesign",
    time: "5 min ago",
    icon: FolderKanban,
  },
  {
    id: 2,
    title: "Blog published",
    description: "Next.js Performance Guide",
    time: "28 min ago",
    icon: FileText,
  },
  {
    id: 3,
    title: "New testimonial received",
    description: "Client submitted a 5★ review",
    time: "1 hour ago",
    icon: MessageSquareQuote,
  },
  {
    id: 4,
    title: "New lead received",
    description: "Portfolio contact form",
    time: "2 hours ago",
    icon: UserPlus,
  },
  {
    id: 5,
    title: "Project completed",
    description: "Agency Website Launch",
    time: "Yesterday",
    icon: CheckCircle2,
  },
];

/* -------------------------------------------------------------------------- */

export function RecentActivity({
  activities = defaultActivities,
  loading = false,
}: RecentActivityProps) {
  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center rounded-xl border">
        <p className="text-sm text-muted-foreground">
          Loading recent activity...
        </p>
      </div>
    );
  }

  if (!activities.length) {
    return (
      <div className="flex h-60 flex-col items-center justify-center rounded-xl border text-center">
        <Bell className="mb-3 h-8 w-8 text-muted-foreground" />

        <p className="font-medium">
          No recent activity
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Activity will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {activities.map((activity) => {
        const Icon =
          activity.icon ?? Bell;

        return (
          <article
            key={activity.id}
            className="group relative flex gap-4 rounded-xl border p-4 transition-all duration-300 hover:border-primary/30 hover:bg-muted/30"
          >
            {/* Timeline */}

            <div className="absolute bottom-0 left-[27px] top-14 w-px bg-border last:hidden" />

            {/* Icon */}

            <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>

            {/* Content */}

            <div className="min-w-0 flex-1">

              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

                <div className="min-w-0">

                  <h4 className="truncate font-medium">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {activity.description}
                  </p>

                </div>

                <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">
                  {activity.time}
                </span>

              </div>

            </div>
          </article>
        );
      })}
    </div>
  );
}