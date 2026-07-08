import type { BlogPost } from "@/types/blog";

export type ContentProviderType =
  | "mdx"
  | "prisma"
  | "cms";

export interface GetPostsOptions {
  featured?: boolean;
  category?: string;
  limit?: number;
}

export interface BlogContentProvider {
  getPosts(options?: GetPostsOptions): Promise<BlogPost[]>;
  getPost(slug: string): Promise<BlogPost | null>;
  getFeaturedPosts(): Promise<BlogPost[]>;
  getPostsByCategory(category: string): Promise<BlogPost[]>;
}

export interface ContentProvider {
  blog: BlogContentProvider;
}