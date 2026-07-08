"use client";

import { Bell, Menu, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

interface AdminHeaderProps {
  title: string;
  description?: string;
  onMenuClick?: () => void;
}

export function AdminHeader({
  title,
  description,
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left */}

        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="shrink-0 lg:hidden"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold tracking-tight sm:text-xl">
              {title}
            </h1>

            {description ? (
              <p className="mt-0.5 hidden truncate text-sm text-muted-foreground sm:block">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        {/* Right */}

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
            <AvatarImage
              src="/images/avatar.png"
              alt="Admin"
            />

            <AvatarFallback>
              AA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}