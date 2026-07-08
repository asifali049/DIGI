"use client";

import { Fragment } from "react";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";

const LABELS: Record<string, string> = {
  admin: "Dashboard",
  projects: "Projects",
  services: "Services",
  blog: "Blog",
  testimonials: "Testimonials",
  leads: "Leads",
  media: "Media Library",
  notifications: "Notifications",
  settings: "Settings",
  profile: "Profile",
};

export function AdminBreadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.slice(1);

  return (
    <Breadcrumb aria-label="Breadcrumb">
      <BreadcrumbList className="flex-nowrap overflow-x-auto whitespace-nowrap scrollbar-hide">
        <BreadcrumbItem className="shrink-0">
          {items.length === 0 ? (
            <BreadcrumbPage className="flex items-center gap-2">
              <Home className="h-4 w-4 shrink-0" />
              <span>Dashboard</span>
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              href="/admin"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4 shrink-0" />
              <span>Dashboard</span>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {items.map((segment, index) => {
          const href =
            "/" +
            [...segments.slice(0, 1), ...items.slice(0, index + 1)].join("/");

          const isLast = index === items.length - 1;

          const label =
            LABELS[segment] ??
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator className="shrink-0" />

              <BreadcrumbItem className="shrink-0">
                {isLast ? (
                  <BreadcrumbPage className="max-w-45 truncate sm:max-w-none">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href}
                    className="max-w-45 truncate sm:max-w-none"
                  >
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}