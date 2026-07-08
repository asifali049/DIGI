import { blogService } from "@/lib/content/services/blog.service";
import type { GetPostsOptions } from "@/lib/content/types";

export async function getBlogPosts(options?: GetPostsOptions) {
  return blogService.getPosts(options);
}

export async function getBlogPost(slug: string) {
  return blogService.getPost(slug);
}

export async function getFeaturedBlogPosts() {
  return blogService.getFeaturedPosts();
}

export async function getBlogPostsByCategory(category: string) {
  return blogService.getPostsByCategory(category);
}