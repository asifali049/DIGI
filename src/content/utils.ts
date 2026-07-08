import { getCollection } from "./index";
import type { BlogPost } from "@/types/blog";

export async function getBlogCollection() {
  return getCollection("blog");
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getBlogCollection();

  return posts.filter((post) => post.featured);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getBlogCollection();

  return posts.find((post) => post.slug === slug);
}

export async function getBlogPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  const posts = await getBlogCollection();

  return posts.filter(
    (post) => post.category.slug === categorySlug
  );
}