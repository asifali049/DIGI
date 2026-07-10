/* -------------------------------------------------------------------------- */
/*                                    Base                                    */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                  Category                                  */
/* -------------------------------------------------------------------------- */

export interface BlogCategory {
  readonly id: string;
  readonly name: string;
  readonly slug: BlogCategorySlug;
  readonly description?: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Author                                   */
/* -------------------------------------------------------------------------- */

export interface BlogAuthorSocials {
  readonly website?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly twitter?: string;
}

export interface BlogAuthor
  extends BlogAuthorSocials {
  readonly id: string;
  readonly name: string;
  readonly avatar: string;
  readonly role: string;
  readonly bio?: string;
}

/* -------------------------------------------------------------------------- */
/*                                     SEO                                    */
/* -------------------------------------------------------------------------- */

export interface BlogOpenGraph {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly url?: string;
  readonly type?: "article";
}

export interface BlogSeo {
  readonly metaTitle: string;
  readonly metaDescription: string;

  readonly keywords: readonly string[];

  readonly canonicalUrl?: string;

  readonly robots?: string;

  readonly openGraph?: BlogOpenGraph;
}

/* -------------------------------------------------------------------------- */
/*                                    Post                                    */
/* -------------------------------------------------------------------------- */

export interface BlogPost {
  readonly id: string;

  readonly title: string;

  readonly slug: string;

  readonly excerpt: string;

  readonly content: string;

  readonly coverImage: string;

  readonly category: BlogCategory;

  readonly tags: readonly string[];

  readonly status: BlogStatus;

  readonly featured: boolean;

  readonly published: boolean;

  readonly author: BlogAuthor;

  readonly readingTime: number;

  readonly seo: BlogSeo;

  readonly publishedAt?: string;

  readonly createdAt: string;

  readonly updatedAt: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Requests                                  */
/* -------------------------------------------------------------------------- */

export interface CreateBlogInput {
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly content: string;
  readonly coverImage: string;
  readonly category: BlogCategorySlug;
  readonly status: BlogStatus;
  readonly tags: readonly string[];
  readonly featured: boolean;
  readonly published: boolean;
  readonly author: string;
  readonly readingTime: number;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly canonicalUrl?: string;
  readonly publishedAt?: string;
}

export interface UpdateBlogInput
  extends Partial<CreateBlogInput> {
  readonly id: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Filter                                   */
/* -------------------------------------------------------------------------- */

export interface BlogFilters {
  readonly search?: string;
  readonly category?: BlogCategorySlug;
  readonly status?: BlogStatus;
  readonly featured?: boolean;
  readonly published?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                 Pagination                                 */
/* -------------------------------------------------------------------------- */

export interface PaginationMeta {
  readonly page: number;
  readonly limit: number;
  readonly total: number;
  readonly totalPages: number;
}

export interface BlogListResponse {
  readonly data: readonly BlogPost[];
  readonly pagination: PaginationMeta;
}