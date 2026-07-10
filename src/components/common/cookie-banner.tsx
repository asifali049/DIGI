"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "agency-cookie-consent";

function useCookieConsent() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return !localStorage.getItem(STORAGE_KEY);
      } catch {
        return false;
      }
    },
    () => false
  );
}

export function CookieBanner() {
  const shouldReduceMotion = useReducedMotion();
  const visible = useCookieConsent();

  const updateConsent = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);

      // Refresh UI
      window.location.reload();
    } catch {}
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.aside
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.3,
          }}
          className="fixed bottom-4 left-4 right-4 z-99999 mx-auto max-w-4xl rounded-3xl border border-border bg-background/90 p-5 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h3
                id="cookie-banner-title"
                className="text-lg font-semibold text-foreground"
              >
                We value your privacy
              </h3>

              <p
                id="cookie-banner-description"
                className="mt-2 text-sm leading-7 text-muted-foreground"
              >
                We use cookies to improve your browsing experience,
                analyze traffic, and personalize content. Read our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => updateConsent("declined")}
                className="rounded-xl border border-border px-5 py-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Decline
              </button>

              <button
                type="button"
                onClick={() => updateConsent("accepted")}
                className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}