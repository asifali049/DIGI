"use client";

import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      aria-haspopup="dialog"
      aria-expanded={false}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-border
        bg-background/70
        text-foreground
        backdrop-blur-xl
        transition-all duration-300
        hover:bg-accent
        hover:text-foreground
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-500/50
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
        active:scale-95
        lg:hidden
        sm:h-11 sm:w-11
      "
    >
      <Menu className="h-5 w-5 shrink-0" />
    </button>
  );
}