"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "agency-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
          transition={{
            duration: 0.3,
          }}
          className="fixed bottom-6 left-6 right-6 z-[99999] mx-auto max-w-4xl rounded-3xl border bg-background/90 p-6 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                We value your privacy
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                We use cookies to improve your browsing experience,
                analyze traffic, and personalize content.
                Read our{" "}
                <Link
                  href="/privacy"
                  className="font-medium underline"
                >
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={decline}
                className="rounded-xl border px-5 py-3 transition hover:bg-accent"
              >
                Decline
              </button>

              <button
                onClick={accept}
                className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}