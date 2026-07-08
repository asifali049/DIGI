import {
  ShieldCheck,
  Zap,
  Gauge,
  Users,
  Headphones,
  Sparkles,
} from "lucide-react";

export const serviceBenefits = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Production-grade architecture following modern security best practices.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance, Core Web Vitals, caching, and instant navigation.",
  },
  {
    icon: Gauge,
    title: "Scalable",
    description:
      "Built to handle thousands of users without compromising performance.",
  },
  {
    icon: Users,
    title: "User Focused",
    description:
      "Research-driven UI/UX with accessibility and intuitive interactions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Post-launch maintenance, monitoring, and continuous improvements.",
  },
  {
    icon: Sparkles,
    title: "Modern Technologies",
    description:
      "Next.js, React, TypeScript, AI, cloud infrastructure, and automation.",
  },
] as const;