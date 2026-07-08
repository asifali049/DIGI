import { blogPosts } from "@/constants/blog-posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export function BlogJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    url: `${siteUrl}/blog`,
    name: "Premium Digital Agency Blog",
    description:
      "Insights on web development, UI/UX, AI, SaaS, software engineering, business, and modern digital products.",

    publisher: {
      "@type": "Organization",
      name: "Premium Digital Agency",
      url: siteUrl,
    },

    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",

      headline: post.title,

      description: post.excerpt,

      url: `${siteUrl}/blog/${post.slug}`,

      datePublished: post.publishedAt,

      author: {
        "@type": "Person",
        name: post.author.name,
      },

      image: post.coverImage,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}