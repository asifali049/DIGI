"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type CopyCodeButtonProps = {
  value: string;
  className?: string;
};

export function CopyCodeButton({
  value,
  className,
}: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={
        copied ? "Code copied" : "Copy code"
      }
      onClick={handleCopy}
      className={cn(
        "absolute right-3 top-3 h-9 w-9 rounded-lg",
        "bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
    </Button>
  );
}