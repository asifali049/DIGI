import {
  Globe,
  Smartphone,
  ShoppingCart,
  Layers3,
  MonitorSmartphone,
  PenTool,
  Code2,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, lightning-fast websites built with Next.js, React, TypeScript, and cutting-edge technologies.",
    features: [
      "Next.js",
      "SEO Optimized",
      "Animations",
      "CMS",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform mobile applications with native performance and exceptional user experience.",
    features: [
      "React Native",
      "Android",
      "iOS",
      "API Integration",
    ],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Scalable online stores designed to maximize conversions and business growth.",
    features: [
      "Payments",
      "Dashboard",
      "Inventory",
      "Analytics",
    ],
  },
  {
    icon: Layers3,
    title: "SaaS Development",
    description:
      "Enterprise-grade SaaS platforms with authentication, subscriptions, dashboards, and automation.",
    features: [
      "Multi Tenant",
      "Billing",
      "Admin Panel",
      "Security",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces inspired by Apple and Halo Lab with accessibility-first design principles.",
    features: [
      "Figma",
      "Prototype",
      "Design System",
      "Responsive",
    ],
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Logos, visual systems, typography, and brand assets that create memorable digital experiences.",
    features: [
      "Logo",
      "Brand Kit",
      "Guidelines",
      "Assets",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailor-made business solutions including ERP, CRM, Hospital, School, and Management Systems.",
    features: [
      "ERP",
      "CRM",
      "Automation",
      "API",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Integrate AI into your products with chatbots, automation, intelligent search, and productivity tools.",
    features: [
      "OpenAI",
      "Automation",
      "Agents",
      "AI Chat",
    ],
  },
] as const;