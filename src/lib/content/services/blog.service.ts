import type { BlogPost } from "@/types/blog";
import { blogRepository } from "@/lib/content/repositories/blog.repository";
import type { GetPostsOptions } from "@/lib/content/types";

export class BlogService {
  async getPosts(
    options?: GetPostsOptions
  ): Promise<BlogPost[]> {
    return blogRepository.findAll(options);
  }

  async getPost(
    slug: string
  ): Promise<BlogPost | null> {
    return blogRepository.findBySlug(slug);
  }

  async getFeaturedPosts(): Promise<BlogPost[]> {
    return blogRepository.findFeatured();
  }

  async getPostsByCategory(
    category: string
  ): Promise<BlogPost[]> {
    return blogRepository.findByCategory(category);
  }
}

export const blogService = new BlogService();