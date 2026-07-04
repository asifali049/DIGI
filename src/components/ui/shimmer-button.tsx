"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ShimmerButton({
  children,
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}