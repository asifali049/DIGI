import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { BlogPost } from "@/types/blog";

type BlogArticleNavigationProps = {
  previousPost?: BlogPost;
  nextPost?: BlogPost;
};

export function BlogArticleNavigation({
  previousPost,
  nextPost,
}: BlogArticleNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <section className="py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {/* Previous */}

          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-lg sm:p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <ArrowLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                <span>Previous Article</span>
              </div>

              <h3 className="line-clamp-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary sm:text-xl">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}

          {/* Next */}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-lg sm:p-6 md:text-right"
            >
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm md:justify-end">
                <span>Next Article</span>

                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="line-clamp-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary sm:text-xl">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
      </div>
    </section>
  );
}