export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  cta: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small teams shipping their first product.",
    monthlyPrice: 999,
    yearlyPrice: 799,
    cta: "Start Your Project",
    features: [
      "1 landing page or marketing site",
      "Up to 5 pages",
      "Responsive, mobile-first design",
      "Basic SEO setup",
      "2 rounds of revisions",
      "2 weeks delivery",
      "30 days post-launch support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing businesses that need a full product.",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    popular: true,
    cta: "Start Your Project",
    features: [
      "Full web application or SaaS product",
      "Up to 15 pages / views",
      "Custom UI system & animations",
      "Authentication & role-based access",
      "Database & API integration",
      "Advanced SEO & performance tuning",
      "4 rounds of revisions",
      "4–6 weeks delivery",
      "90 days post-launch support",
      "Priority Slack/email support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For organizations with complex, large-scale needs.",
    monthlyPrice: 5999,
    yearlyPrice: 4799,
    cta: "Talk to Sales",
    features: [
      "Everything in Professional",
      "Unlimited pages / views",
      "Custom architecture & microservices",
      "AI / automation integrations",
      "Dedicated project manager",
      "Enterprise-grade security review",
      "SLA-backed uptime & support",
      "Unlimited revisions",
      "Ongoing maintenance & scaling support",
      "Dedicated Slack channel",
    ],
  },
];
