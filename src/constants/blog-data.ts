import type { BlogPost } from "@/types/blog";

export const blogData: BlogPost[] = [
  {
    id: "1",

    title: "Building High-Performance Websites with Next.js 15",

    slug: "nextjs-15-high-performance-websites",

    excerpt:
      "Learn how to build scalable, SEO-friendly, high-performance applications using Next.js 15, React 19, and modern enterprise architecture.",

    content: `
# Building High-Performance Websites

Next.js 15 introduces major improvements for Server Components, caching,
Partial Prerendering and React 19.

In this article we'll explore performance optimization,
SEO strategies and scalable architecture.
`,

    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "development",
      name: "Development",
      slug: "development",
      description: "Modern frontend and backend engineering.",
    },

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Performance",
    ],

    status: "published",

    featured: true,

    published: true,

    author: {
      id: "asif",

      name: "Asif Ali",

      avatar: "https://i.pravatar.cc/300?img=68",

      role: "Founder & Full Stack Developer",

      bio: "Building premium web applications with React, Next.js and AI.",

      github: "https://github.com/",

      linkedin: "https://linkedin.com/in/asif-ali-2185b4216",

      website: "https://example.com",
    },

    readingTime: 8,

    seo: {
      metaTitle:
        "Building High-Performance Websites with Next.js 15",

      metaDescription:
        "Learn enterprise-grade techniques for building modern scalable applications using Next.js 15.",

      keywords: [
        "Next.js",
        "React",
        "Performance",
        "TypeScript",
      ],

      canonicalUrl:
        "https://example.com/blog/nextjs-15-high-performance-websites",

      openGraph: {
        title:
          "Building High-Performance Websites with Next.js 15",

        description:
          "Enterprise architecture using Next.js 15.",

        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&auto=format&fit=crop",
      },
    },

    publishedAt: "2026-07-01",

    createdAt: "2026-06-25",

    updatedAt: "2026-07-01",
  },

  {
    id: "2",

    title: "Modern UI Design Principles",

    slug: "modern-ui-design-principles",

    excerpt:
      "Create premium interfaces using typography, spacing, accessibility and design systems.",

    content: `
# Modern UI Design

Beautiful interfaces are built using systems rather than isolated screens.

This article covers spacing, typography,
color systems and accessibility.
`,

    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "design",
      name: "Design",
      slug: "design",
      description: "UI/UX and product design.",
    },

    tags: [
      "UI",
      "UX",
      "Figma",
      "Design System",
    ],

    status: "draft",

    featured: false,

    published: false,

    author: {
      id: "asif",

      name: "Asif Ali",

      avatar: "https://i.pravatar.cc/300?img=68",

      role: "Founder & Full Stack Developer",

      bio: "Passionate about clean UI and scalable design systems.",

      github: "https://github.com/",

      linkedin: "https://linkedin.com/in/asif-ali-2185b4216",

      website: "https://example.com",
    },

    readingTime: 6,

    seo: {
      metaTitle: "Modern UI Design Principles",

      metaDescription:
        "Design better digital products using modern UI principles.",

      keywords: [
        "UI",
        "UX",
        "Figma",
        "Design",
      ],

      canonicalUrl:
        "https://example.com/blog/modern-ui-design-principles",

      openGraph: {
        title: "Modern UI Design Principles",

        description:
          "Premium UI and UX best practices.",

        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
      },
    },

    createdAt: "2026-06-28",

    updatedAt: "2026-07-02",
  },

  {
    id: "3",

    title: "SEO Best Practices for 2026",

    slug: "seo-best-practices-2026",

    excerpt:
      "Master technical SEO, Core Web Vitals, structured data and AI-powered search optimization.",

    content: `
# SEO in 2026

Search engines reward quality content,
fast websites and structured data.

Let's explore modern SEO strategies.
`,

    coverImage: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "seo",
      name: "SEO",
      slug: "seo",
      description: "Technical SEO and search visibility.",
    },

    tags: [
      "SEO",
      "Google",
      "Schema",
      "Core Web Vitals",
    ],

    status: "scheduled",

    featured: false,

    published: false,

    author: {
      id: "asif",

      name: "Asif Ali",

      avatar: "https://i.pravatar.cc/300?img=68",

      role: "Founder & Full Stack Developer",

      bio: "Helping businesses grow using modern SEO strategies.",

      github: "https://github.com/",

      linkedin: "https://linkedin.com/in/asif-ali-2185b4216",

      website: "https://example.com",
    },

    readingTime: 10,

    seo: {
      metaTitle:
        "SEO Best Practices for 2026",

      metaDescription:
        "Everything you need to know about modern SEO.",

      keywords: [
        "SEO",
        "Google",
        "Schema",
        "Core Web Vitals",
      ],

      canonicalUrl:
        "https://example.com/blog/seo-best-practices-2026",

      openGraph: {
        title:
          "SEO Best Practices for 2026",

        description:
          "Modern SEO techniques for high rankings.",

        image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=1600&auto=format&fit=crop",
      },
    },

    publishedAt: "2026-08-01",

    createdAt: "2026-07-01",

    updatedAt: "2026-07-03",
  },
];