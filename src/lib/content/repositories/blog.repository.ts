import type { BlogPost } from "@/types/blog";
import { ContentContainer } from "@/lib/content/container";
import type { GetPostsOptions } from "@/lib/content/types";

export class BlogRepository {
  private readonly provider = ContentContainer.getBlogProvider();

  async findAll(
    options?: GetPostsOptions
  ): Promise<BlogPost[]> {
    return this.provider.getPosts(options);
  }

  async findBySlug(
    slug: string
  ): Promise<BlogPost | null> {
    return this.provider.getPost(slug);
  }

  async findFeatured(): Promise<BlogPost[]> {
    return this.provider.getFeaturedPosts();
  }

  async findByCategory(
    category: string
  ): Promise<BlogPost[]> {
    return this.provider.getPostsByCategory(category);
  }
}

export const blogRepository = new BlogRepository();