import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { BlogArticleContent } from "@/components/sections/blog/blog-article-content";
import { BlogArticleHero } from "@/components/sections/blog/blog-article-hero";
import { BlogArticleNavigation } from "@/components/sections/blog/blog-article-navigation";
import { BlogReadingProgress } from "@/components/sections/blog/blog-reading-progress";
import { BlogShare } from "@/components/sections/blog/blog-share";
import { RelatedPosts } from "@/components/sections/blog/related-posts";
import { BlogAuthor } from "@/components/sections/blog/blog-author";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { blogPosts } from "@/constants/blog-posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.seo?.metaTitle || post.title,

    description:
      post.seo?.metaDescription || post.excerpt,

    keywords: post.seo?.keywords
      ? [...post.seo.keywords]
      : undefined,

    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  // MDX existence check
  const mdxPost = await getBlogPost(slug);

  if (!mdxPost) {
    notFound();
  }

  // Existing UI still uses legacy data
  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex(
    (item) => item.slug === slug
  );

  const previousPost =
    currentIndex > 0
      ? blogPosts[currentIndex - 1]
      : undefined;

  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : undefined;

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.category.id === post.category.id &&
        item.id !== post.id
    )
    .slice(0, 3);

  return (
    <main>
      <ArticleJsonLd post={post} />

      <BlogReadingProgress />

      <BlogArticleHero post={post} />

      <BlogArticleContent>
        {mdxPost.content}
      </BlogArticleContent>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogShare
          title={post.title}
          url={`${siteUrl}/blog/${post.slug}`}
        />
      </section>

      <BlogArticleNavigation
        previousPost={previousPost}
        nextPost={nextPost}
      />

      <RelatedPosts posts={relatedPosts} />

      <BlogAuthor />
    </main>
  );
}