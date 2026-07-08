"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({
  items,
  className,
}: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-5 top-0 h-full w-px bg-border" />

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex gap-4"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm">
              {item.icon ?? (
                <div className="h-3 w-3 rounded-full bg-primary" />
              )}
            </div>

            <div className="flex-1 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                {item.date && (
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}