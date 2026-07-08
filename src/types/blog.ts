

export type BlogStatus =
  | "draft"
  | "published"
  | "scheduled"
  | "archived";

export type BlogCategorySlug =
  | "development"
  | "design"
  | "marketing"
  | "seo"
  | "business"
  | "technology"
  | "ai"
  | "startup"
  | "case-study";

export interface BlogCategory {
  id: string;
  name: string;
  slug: BlogCategorySlug;
  description?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  canonicalUrl?: string;

  openGraph?: {
    title: string;
    description: string;
    image: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;

  content?: string;

  coverImage: string;

  category: BlogCategory;

  tags: string[];

  status?: BlogStatus;

  featured: boolean;

  published?: boolean;

  author: BlogAuthor;

  readingTime: number;

  seo?: BlogSeo;

  seoTitle?: string;

  seoDescription?: string;

  // ADD THIS
  canonicalUrl?: string;

  publishedAt?: string;

  createdAt?: string;

  updatedAt?: string;
}