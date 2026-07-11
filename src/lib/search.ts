import { getBlogPosts } from "@/lib/blog";

export interface SearchDocument {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
}

export async function getSearchIndex(): Promise<SearchDocument[]> {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,

    description:
      post.seo.metaDescription ??
      post.excerpt,

    category: post.category.name,

    tags: [...post.tags],

    publishedAt: post.publishedAt ?? "",

    readingTime: `${post.readingTime} min`,
  }));
}

export async function searchPosts(query: string) {
  const index = await getSearchIndex();

  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return index;
  }

  return index.filter((post) => {
    const searchableText = [
      post.title,
      post.description,
      post.excerpt,
      post.category,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(keyword);
  });
}