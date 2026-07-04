"use client";

import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
      <Menu />
    </button>
  );
}