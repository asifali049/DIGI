"use client";

import { Toaster } from "@/components/ui";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      expand
      richColors
      closeButton
      visibleToasts={5}
    />
  );
}