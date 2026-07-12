export interface PricingFaqItem {
  question: string;
  answer: string;
}

export const pricingFaq: PricingFaqItem[] = [
  {
    question: "Which plan is right for my business?",
    answer:
      "Starter works well for a single landing page or marketing site. Professional is our most popular tier and fits most full web apps or SaaS products. Enterprise is built for large-scale, multi-team, or highly custom projects — talk to us and we'll help you pick.",
  },
  {
    question: "Do you offer custom pricing outside these plans?",
    answer:
      "Yes. These tiers cover most common project types, but every business is different. If your scope doesn't fit neatly into a plan, reach out and we'll put together a custom quote based on your requirements.",
  },
  {
    question: "What's included in post-launch support?",
    answer:
      "Post-launch support covers bug fixes, minor adjustments, and guidance on using your new product. It does not include new feature development — that can be scoped separately or covered under an ongoing maintenance retainer.",
  },
  {
    question: "Can I switch plans mid-project?",
    answer:
      "Yes. If your project scope grows while we're working together, we'll re-scope the remaining work and adjust pricing transparently before any additional work begins.",
  },
  {
    question: "Do you require payment upfront?",
    answer:
      "We typically split payment into milestones — an initial deposit to begin work, progress payments at key milestones, and a final payment on delivery. Enterprise engagements can be structured around monthly retainers instead.",
  },
  {
    question: "What's the difference between monthly and yearly pricing?",
    answer:
      "Yearly pricing reflects an ongoing retainer relationship (for maintenance, support, and continuous improvements) at a discounted rate compared to paying month-to-month. One-off projects are typically billed as a fixed project fee, which we'll confirm during scoping.",
  },
];
