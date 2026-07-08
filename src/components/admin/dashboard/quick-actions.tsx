"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  ImageIcon,
  MailPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "New Project",
    description: "Create a new portfolio project.",
    href: "/admin/projects/new",
    icon: BriefcaseBusiness,
  },
  {
    title: "Write Blog",
    description: "Publish a new article.",
    href: "/admin/blog/new",
    icon: FileText,
  },
  {
    title: "Upload Media",
    description: "Add images and assets.",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    title: "View Leads",
    description: "Check new contact requests.",
    href: "/admin/leads",
    icon: MailPlus,
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.href}
            href={action.href}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            <div className="mt-5 flex-1">
              <h3 className="text-base font-semibold leading-tight">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {action.description}
              </p>
            </div>

            <Button
              variant="ghost"
              className="mt-5 w-fit px-0 group-hover:text-primary"
            >
              Open
            </Button>
          </Link>
        );
      })}
    </div>
  );
}