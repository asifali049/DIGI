import {
  CheckCircle2,
  FileText,
  FolderKanban,
  MessageSquareQuote,
  UserPlus,
} from "lucide-react";

const activities = [
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

export function RecentActivity() {
  return (
    <div className="space-y-4 sm:space-y-5">
      {activities.map((activity) => {
        const Icon = activity.icon;

        return (
          <article
            key={activity.id}
            className="flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-border hover:bg-muted/30 sm:gap-4 sm:p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-muted/50 sm:h-11 sm:w-11">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-medium sm:text-base">
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