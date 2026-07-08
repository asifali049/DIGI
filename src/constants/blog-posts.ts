import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable SaaS Applications with Next.js 15",
    slug: "building-scalable-saas-nextjs-15",
    excerpt:
      "Learn the architecture, rendering strategies, performance optimizations, and folder structure we use for enterprise-grade applications.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "development",
      name: "Development",
      slug: "development",
    },

    tags: ["Next.js", "React", "Architecture", "Performance"],

    status: "published",
    featured: true,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 8,

    seo: {
      metaTitle: "Building Scalable SaaS with Next.js 15",
      metaDescription:
        "Enterprise architecture guide for modern SaaS applications.",
      keywords: ["Next.js", "React", "SaaS"],
    },

    publishedAt: "2026-07-01",
    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
  },

  {
    id: "2",
    title: "The Future of AI in Modern Web Development",
    slug: "future-of-ai-in-web-development",
    excerpt:
      "How AI is transforming frontend, backend, testing, documentation, and developer productivity.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "ai",
      name: "AI",
      slug: "ai",
    },

    tags: ["AI", "LLM", "Automation"],

    status: "published",
    featured: false,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 6,

    seo: {
      metaTitle: "AI in Web Development",
      metaDescription:
        "Explore how AI is reshaping software engineering.",
      keywords: ["AI", "Web Development"],
    },

    publishedAt: "2026-06-28",
    createdAt: "2026-06-28",
    updatedAt: "2026-06-28",
  },

  {
    id: "3",
    title: "Designing Premium UI Experiences Users Love",
    slug: "designing-premium-ui-experiences",
    excerpt:
      "Apple-inspired UI principles, motion design, spacing systems, typography, and accessibility best practices.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "design",
      name: "Design",
      slug: "design",
    },

    tags: ["UI", "UX", "Design"],

    status: "published",
    featured: false,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 5,

    seo: {
      metaTitle: "Premium UI Design Guide",
      metaDescription:
        "Create beautiful user interfaces inspired by leading products.",
      keywords: ["UI", "UX", "Design"],
    },

    publishedAt: "2026-06-20",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-20",
  },

  {
    id: "4",
    title: "Startup MVP Checklist Before Launch",
    slug: "startup-mvp-checklist",
    excerpt:
      "Everything founders should validate before launching an MVP to users.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "startup",
      name: "startup",
      slug: "startup",
    },

    tags: ["Startup", "Business", "MVP"],

    status: "published",
    featured: false,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 7,

    seo: {
      metaTitle: "Startup MVP Guide",
      metaDescription:
        "A practical checklist for startup founders.",
      keywords: ["Startup", "MVP"],
    },

    publishedAt: "2026-06-15",
    createdAt: "2026-06-15",
    updatedAt: "2026-06-15",
  },

  {
    id: "5",
    title: "Technical SEO for Modern React Applications",
    slug: "seo-for-modern-websites",
    excerpt:
      "Improve discoverability, Core Web Vitals, structured data, and search rankings.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "marketing",
      name: "Marketing",
      slug: "marketing",
    },

    tags: ["SEO", "Performance"],

    status: "published",
    featured: false,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 9,

    seo: {
      metaTitle: "Technical SEO Guide",
      metaDescription:
        "SEO best practices for React and Next.js projects.",
      keywords: ["SEO", "Next.js"],
    },

    publishedAt: "2026-06-10",
    createdAt: "2026-06-10",
    updatedAt: "2026-06-10",
  },

  {
    id: "6",
    title: "Case Study: Building an Enterprise Dashboard",
    slug: "case-study-enterprise-dashboard",
    excerpt:
      "A complete breakdown of architecture, UX decisions, scalability, and deployment.",
    content: "",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",

    category: {
      id: "case-study",
      name: "Case Studies",
      slug: "case-study",
    },

    tags: ["Case Study", "Dashboard"],

    status: "published",
    featured: false,
    published: true,

    author: {
      id: "asif",
      name: "Asif Ali",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Full Stack Developer",
    },

    readingTime: 10,

    seo: {
      metaTitle: "Enterprise Dashboard Case Study",
      metaDescription:
        "Architecture and UX lessons from a production dashboard.",
      keywords: ["Dashboard", "Case Study"],
    },

    publishedAt: "2026-06-05",
    createdAt: "2026-06-05",
    updatedAt: "2026-06-05",
  },
];