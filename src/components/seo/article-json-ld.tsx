import type { BlogPost } from "@/types/blog";

type ArticleJsonLdProps = {
  post: BlogPost;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export function ArticleJsonLd({
  post,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description: post.excerpt,

    image: [post.coverImage],

    datePublished: post.publishedAt,

    dateModified: post.publishedAt,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },

    author: {
      "@type": "Person",
      name: post.author.name,
    },

    publisher: {
      "@type": "Organization",
      name: "Premium Digital Agency",

      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
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