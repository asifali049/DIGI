export const caseStudies = [
  {
    id: 1,
    title: "Hospital Management System",
    challenge:
      "The client relied on spreadsheets and manual paperwork, resulting in appointment delays, billing errors, and poor reporting.",
    solution:
      "We built a complete hospital management platform with appointments, doctors, patients, billing, pharmacy, analytics, and role-based access.",
    results: [
      "80% Faster Appointment Process",
      "60% Less Administrative Work",
      "99.9% System Availability",
    ],
    image: "/images/portfolio/hospital.webp",
  },
  {
    id: 2,
    title: "Premium Digital Agency",
    challenge:
      "The previous website had outdated visuals, poor performance, and weak conversion rates.",
    solution:
      "Designed and developed a premium Apple-inspired website using Next.js, GSAP, Framer Motion, and optimized SEO.",
    results: [
      "95+ Lighthouse Score",
      "2x Higher Engagement",
      "50% Faster Loading",
    ],
    image: "/images/portfolio/agency.webp",
  },
] as const;