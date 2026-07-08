import type {
  BlogContentProvider,
  GetPostsOptions,
} from "@/lib/content/types";
import {
  getBlogPost,
  getBlogPosts,
  getFeaturedPosts,
  getPostsByCategory,
} from "@/lib/blog";

export class MDXBlogProvider implements BlogContentProvider {
  async getPosts(options?: GetPostsOptions) {
    let posts = await getBlogPosts();

    if (options?.featured) {
      posts = posts.filter((post) => post.featured);
    }

    if (options?.category) {
      posts = posts.filter(
        (post) => post.category.slug === options.category
      );
    }

    if (options?.limit) {
      posts = posts.slice(0, options.limit);
    }

    return posts;
  }

  async getPost(slug: string) {
    return getBlogPost(slug);
  }

  async getFeaturedPosts() {
    return getFeaturedPosts();
  }

  async getPostsByCategory(category: string) {
    return getPostsByCategory(category);
  }
}

export const mdxBlogProvider = new MDXBlogProvider();
