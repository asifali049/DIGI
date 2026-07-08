"use client";

import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/types/blog";

type BlogGridProps = {
  posts: BlogPost[];
};

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section
      id="blog-grid"
      className="py-10 sm:py-12 md:py-16"
    >
      <div className="container">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-65 items-center justify-center rounded-3xl border border-dashed border-border bg-muted/30 p-6 text-center sm:min-h-80 sm:p-8">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold sm:text-2xl">
                No articles found
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                We did not find any articles matching your search or selected
                category. Try a different keyword or category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}