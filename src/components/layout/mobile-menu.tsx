"use client";

import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50 lg:hidden sm:h-11 sm:w-11"
    >
      <Menu className="h-5 w-5 sm:h-5 sm:w-5" />
    </button>
  );
}