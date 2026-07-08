import { cache } from "react";
import { blogRepository } from "@/lib/content/repositories/blog.repository";
import type { GetPostsOptions } from "@/lib/content/types";

export const getCachedBlogPosts = cache(
  async (options?: GetPostsOptions) => {
    return blogRepository.findAll(options);
  }
);

export const getCachedBlogPost = cache(
  async (slug: string) => {
    return blogRepository.findBySlug(slug);
  }
);

export const getCachedFeaturedPosts = cache(
  async () => {
    return blogRepository.findFeatured();
  }
);

export const getCachedPostsByCategory = cache(
  async (category: string) => {
    return blogRepository.findByCategory(category);
  }
);