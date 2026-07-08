"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "next-themes";

function Toaster({
  ...props
}: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      richColors
      closeButton
      position="top-right"
      expand
      toastOptions={{
        classNames: {
          toast:
            "group rounded-xl border border-border bg-background text-foreground shadow-xl",
          title: "font-semibold",
          description: "text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground hover:bg-primary/90",
          cancelButton:
            "bg-muted text-muted-foreground hover:bg-muted/80",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };