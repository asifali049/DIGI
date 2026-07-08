import type { HTMLAttributes, ReactNode } from "react";

import { CopyCodeButton } from "./copy-code-button";
import { cn } from "@/lib/utils";

type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
  code: string;
  language?: string;
  filename?: string;
  children: ReactNode;
};

export function CodeBlock({
  code,
  language,
  filename,
  children,
  className,
  ...props
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "group my-8 overflow-hidden rounded-xl border bg-card",
        className
      )}
      {...props}
    >
      {(filename || language) && (
        <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {filename && (
              <span className="font-medium">{filename}</span>
            )}

            {filename && language && (
              <span>•</span>
            )}

            {language && (
              <span className="uppercase tracking-wide">
                {language}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="relative">
        <CopyCodeButton value={code} />

        <pre className="overflow-x-auto p-4 text-sm">
          {children}
        </pre>
      </div>
    </div>
  );
}