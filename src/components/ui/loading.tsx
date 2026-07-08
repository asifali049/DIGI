"use client";

import { Loader2 } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function Spinner({
  size = 20,
  className,
  ...props
}: SpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Loader2
        className="animate-spin text-primary"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

type LoadingDotsProps = HTMLAttributes<HTMLDivElement>;

export function LoadingDots({
  className,
  ...props
}: LoadingDotsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
    </div>
  );
}

interface PageLoaderProps {
  text?: string;
}

export function PageLoader({
  text = "Loading...",
}: PageLoaderProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <Spinner size={36} />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

interface SectionLoaderProps {
  text?: string;
  className?: string;
}

export function SectionLoader({
  text = "Loading...",
  className,
}: SectionLoaderProps) {
  return (
    <div
      className={cn(
        "flex h-48 flex-col items-center justify-center gap-3 rounded-xl border border-dashed",
        className
      )}
    >
      <Spinner size={28} />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}