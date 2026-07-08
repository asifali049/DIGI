"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

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
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50 active:scale-95 sm:h-11 sm:w-11";

  if (!isClient) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={buttonClassName}
      >
        <Moon className="h-4.5 w-4.5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={buttonClassName}
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5" />
      ) : (
        <Moon className="h-4.5 w-4.5" />
      )}
    </button>
  );
}