"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminNavigation } from "@/constants/admin-navigation";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">
      {/* Header */}

      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
            DA
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              Digi Agency
            </p>

            <p className="truncate text-xs text-muted-foreground">
              Admin Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <nav
        aria-label="Admin navigation"
        className="flex-1 overflow-y-auto overscroll-contain px-4 py-5"
      >
        <ul className="space-y-2">
          {adminNavigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group flex min-h-12 items-center justify-between gap-3 rounded-xl px-4 py-3",
                    "transition-all duration-200",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0" />

                    <span className="truncate text-sm font-medium">
                      {item.title}
                    </span>
                  </div>

                  {item.badge ? (
                    <Badge className="shrink-0">
                      {item.badge}
                    </Badge>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}

      <div className="shrink-0 border-t p-5">
        <div className="rounded-2xl border bg-muted/40 p-4">
          <p className="truncate text-sm font-semibold">
            Premium Digital Agency
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Enterprise Admin Panel
          </p>
        </div>
      </div>
    </aside>
  );
}