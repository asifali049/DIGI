import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export const blogMetadata: Metadata = {
  title: "Blog | Premium Digital Agency",

  description:
    "Explore expert articles on web development, UI/UX, AI, SaaS, business, performance optimization, and modern digital products.",

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
    "Digital Agency",
    "UI UX",
    "AI",
    "SaaS",
    "Software Development",
    "Programming",
  ],

  alternates: {
    canonical: `${siteUrl}/blog`,
  },

  openGraph: {
    title: "Blog | Premium Digital Agency",

    description:
      "Insights, tutorials, case studies, and engineering best practices.",

    url: `${siteUrl}/blog`,

    siteName: "Premium Digital Agency",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Blog | Premium Digital Agency",

    description:
      "Insights, tutorials, and engineering articles from our team.",
  },

  robots: {
    index: true,
    follow: true,
  },
};