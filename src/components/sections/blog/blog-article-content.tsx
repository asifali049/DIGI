import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface BlogArticleContentProps
  extends PropsWithChildren {
  className?: string;
  children: ReactNode;
}

export function BlogArticleContent({
  children,
  className,
}: BlogArticleContentProps) {
  return (
    <section className="container py-10 sm:py-12 lg:py-16">
      <article
        className={cn(
          "prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert",
          "mx-auto max-w-4xl",
          "prose-headings:scroll-mt-24",
          "prose-headings:text-balance",
          "prose-p:text-pretty",
          "prose-pre:overflow-x-auto",
          "prose-pre:max-w-full",
          "prose-pre:rounded-2xl",
          "prose-pre:p-4",
          "prose-table:block",
          "prose-table:w-full",
          "prose-table:overflow-x-auto",
          "prose-table:whitespace-nowrap",
          "prose-img:w-full",
          "prose-img:rounded-2xl",
          "prose-img:h-auto",
          "prose-video:w-full",
          "prose-video:rounded-2xl",
          "prose-code:break-words",
          "prose-code:before:content-none",
          "prose-code:after:content-none",
          "prose-blockquote:break-words",
          "prose-li:break-words",
          className
        )}
      >
        {children}
      </article>
    </section>
  );
}