export interface PricingFaqItem {
  question: string;
  answer: string;
}

export const pricingFaq: PricingFaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope and package. A Basic website typically takes 5–7 business days, a Business site 10–15 business days, and Custom/Full Stack/Enterprise builds range from 3 weeks to a few months. We'll confirm an exact timeline once we understand your requirements.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. You can start with a smaller package and upgrade as your business grows. We'll scope the additional work transparently and only charge for the difference in features and effort.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. Every package includes an initial support window (7–30 days depending on tier), and you can continue with an optional monthly maintenance plan afterward for updates, monitoring, and minor changes.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "Yes, absolutely. Once the project is delivered and paid in full, you own 100% of the source code, design assets, and content — no licensing fees, no lock-in.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We regularly take over existing websites for redesigns, migrations, and performance overhauls. Share your current site and goals, and we'll recommend the right package.",
  },
];
