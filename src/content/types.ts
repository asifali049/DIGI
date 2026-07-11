import type { BlogPost } from "@/types/blog";

export interface BaseContent {
  slug: string;
  title: string;
}

export type BlogCollection = BlogPost;

export interface PortfolioCollection extends BaseContent {
  excerpt: string;
  coverImage: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface AuthorCollection extends BaseContent {
  avatar: string;
  bio: string;
  role: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface ServiceCollection extends BaseContent {
  description: string;
  icon: string;
  featured: boolean;
}