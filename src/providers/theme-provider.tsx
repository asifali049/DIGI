"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * next-themes injects an inline `<script>` tag (via
 * `React.createElement("script", ...)`) to set the theme
 * class on `<html>` before hydration, preventing a
 * flash-of-unstyled-content (FOUC). This is a long-standing,
 * intentional SSR pattern and the script still runs correctly.
 *
 * React 19 (used by Next.js 16.2+) added a dev-only warning
 * for any `<script>` rendered inside a component tree. This
 * is a known false positive for next-themes — the library
 * has not shipped a fix since March 2025.
 *
 * Reference: https://github.com/pacocoursey/next-themes/issues/385
 *
 * We filter only this exact, known-benign warning so real
 * console errors are never hidden.
 */
if (
  typeof window !== "undefined" &&
  !window.__nextThemesScriptWarningPatched
) {
  window.__nextThemesScriptWarningPatched = true;

  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    const [firstArg] = args;

    const isNextThemesScriptWarning =
      typeof firstArg === "string" &&
      firstArg.includes(
        "Encountered a script tag while rendering React component"
      );

    if (isNextThemesScriptWarning) {
      return;
    }

    originalConsoleError(...args);
  };
}

declare global {
  interface Window {
    __nextThemesScriptWarningPatched?: boolean;
  }
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      storageKey="premium-digital-agency-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}