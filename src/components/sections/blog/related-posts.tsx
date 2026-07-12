"use client";

import { motion } from "framer-motion";

import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/types/blog";

type RelatedPostsProps = {
  posts: BlogPost[];
  title?: string;
};

export function RelatedPosts({
  posts,
  title = "Related Articles",
}: RelatedPostsProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}

          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Continue reading with more insights from our latest articles.
            </p>
          </div>

          {/* Grid */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}