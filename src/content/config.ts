import type { BlogPost } from "@/types/blog";

export interface ContentCollection<T> {
  name: string;
  path: string;
  loader: () => Promise<T[]>;
}

export const blogCollection: ContentCollection<BlogPost> = {
  name: "blog",
  path: "content/blog",
  loader: async () => {
    const { getBlogPosts } = await import("@/lib/blog");
    return getBlogPosts();
  },
};

export const contentCollections = {
  blog: blogCollection,
} as const;

export type ContentCollections = typeof contentCollections;