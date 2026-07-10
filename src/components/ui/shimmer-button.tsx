"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function ShimmerButton({
  asChild = false,
  children,
  className,
  ...props
}: ShimmerButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl",
        "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500",
        "px-8 py-4",
        "font-semibold",
        "text-white",
        "shadow-lg",
        "transition-all duration-300",
        "hover:scale-[1.03]",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary/40",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          -translate-x-full
          bg-liner-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Comp>
  );
}