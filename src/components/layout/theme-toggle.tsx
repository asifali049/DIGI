"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const buttonClassName =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-foreground backdrop-blur-xl transition-all duration-300 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 sm:h-11 sm:w-11";

  if (!isClient) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={buttonClassName}
      >
        <Moon className="h-[18px] w-[18px]" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={buttonClassName}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <Moon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}