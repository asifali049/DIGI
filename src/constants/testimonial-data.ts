import type { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    company: "TechNova",
    designation: "Chief Executive Officer",
    avatar: "https://i.pravatar.cc/300?img=12",

    rating: 5,

    message:
      "Working with the team was an exceptional experience. They delivered a fast, modern, scalable platform that exceeded our expectations in every aspect of design, performance, and maintainability.",

    project: "Premium Digital Agency",
    projectSlug: "premium-digital-agency",

    featured: true,
    published: true,
    order: 1,

    status: "featured",

    website: "https://technova.com",

    createdAt: "2026-06-12",
    updatedAt: "2026-07-01",
  },

  {
    id: "2",
    name: "Sarah Wilson",
    company: "PixelCraft",
    designation: "Product Manager",
    avatar: "https://i.pravatar.cc/300?img=47",

    rating: 5,

    message:
      "Excellent communication, premium UI quality, and outstanding engineering practices. The entire project was delivered on time and beyond our expectations.",

    project: "Portfolio Website",
    projectSlug: "portfolio-website",

    featured: false,
    published: true,
    order: 2,

    status: "approved",

    website: "https://pixelcraft.com",

    createdAt: "2026-06-20",
    updatedAt: "2026-07-02",
  },

  {
    id: "3",
    name: "Michael Brown",
    company: "NextSoft",
    designation: "Founder",
    avatar: "https://i.pravatar.cc/300?img=33",

    rating: 4,

    message:
      "Professional workflow, clean architecture, timely delivery, and excellent communication throughout the entire development process.",

    project: "Admin Dashboard",
    projectSlug: "admin-dashboard",

    featured: false,
    published: false,
    order: 3,

    status: "pending",

    website: "https://nextsoft.io",

    createdAt: "2026-06-28",
    updatedAt: "2026-07-03",
  },

  {
    id: "4",
    name: "Emily Davis",
    company: "Bright Studio",
    designation: "Marketing Director",
    avatar: "https://i.pravatar.cc/300?img=45",

    rating: 5,

    message:
      "Our conversion rate improved significantly after launching the new website. The attention to detail and user experience was impressive.",

    project: "Marketing Website",
    projectSlug: "marketing-website",

    featured: true,
    published: true,
    order: 4,

    status: "featured",

    website: "https://brightstudio.com",

    createdAt: "2026-05-18",
    updatedAt: "2026-06-25",
  },

  {
    id: "5",
    name: "David Lee",
    company: "FinCorp",
    designation: "CTO",
    avatar: "https://i.pravatar.cc/300?img=14",

    rating: 5,

    message:
      "The development process was transparent, organized, and highly professional. We are extremely satisfied with the final product.",

    project: "Finance Dashboard",
    projectSlug: "finance-dashboard",

    featured: false,
    published: true,
    order: 5,

    status: "approved",

    website: "https://fincorp.com",

    createdAt: "2026-04-15",
    updatedAt: "2026-06-30",
  },

  {
    id: "6",
    name: "Sophia Martinez",
    company: "TravelGo",
    designation: "Operations Manager",
    avatar: "https://i.pravatar.cc/300?img=44",

    rating: 4,

    message:
      "The project was delivered with excellent performance optimization and modern UI standards. Great experience working together.",

    project: "Travel Booking Platform",
    projectSlug: "travel-booking",

    featured: false,
    published: false,
    order: 6,

    status: "archived",

    website: "https://travelgo.com",

    createdAt: "2026-03-09",
    updatedAt: "2026-05-28",
  },
];