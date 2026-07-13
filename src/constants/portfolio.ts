export const portfolio = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Healthcare",
    type: "Web Application",
    image: "/images/portfolio/hospital.webp",
    description:
      "A complete hospital ERP with appointments, doctors, patients, billing, pharmacy, reports, and admin dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Premium Digital Agency",
    category: "Agency",
    type: "Website",
    image: "/images/portfolio/agency.webp",
    description:
      "Animated premium agency website inspired by Apple and Halo Lab with modern UI and smooth interactions.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "GSAP",
      "Lenis",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Restaurant Ordering Platform",
    category: "Food",
    type: "Web App",
    image: "/images/portfolio/restaurant.webp",
    description:
      "Online ordering platform with menu management, payments, coupons, and delivery tracking.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Education",
    type: "SaaS",
    image: "https://picsum.photos/seed/lms-platform/1200/800",
    description:
      "Modern LMS with courses, quizzes, assignments, certificates, and student analytics.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Real Estate",
    type: "Marketplace",
    image: "https://picsum.photos/seed/real-estate-portfolio/1200/800",
    description:
      "Property listing platform with maps, search, CRM, and lead management.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "AI Customer Support",
    category: "AI",
    type: "AI SaaS",
    image: "/images/portfolio/ai-chat.webp",
    description:
      "AI-powered customer support platform with chatbot, knowledge base, and analytics.",
    technologies: [
      "OpenAI",
      "Next.js",
      "LangChain",
    ],
    featured: true,
  },
] as const;