export interface PricingCard {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  bestFor?: string[];
  features: string[];
  delivery?: string;
  cta: string;
}

export interface PricingTab {
  id: string;
  label: string;
  cards: PricingCard[];
}

export const pricingTabs: PricingTab[] = [
  {
    id: "website",
    label: "Website Development",
    cards: [
      {
        id: "website-basic",
        name: "Basic",
        price: "$399",
        bestFor: [
          "Portfolio",
          "Personal Brand",
          "Restaurant",
          "Gym",
          "Salon",
          "Clinic",
          "Small Business",
        ],
        features: [
          "Up to 5 Pages",
          "Premium Responsive Design",
          "Contact Form",
          "WhatsApp Integration",
          "Basic SEO",
          "Google Maps",
          "Social Links",
          "Speed Optimization",
          "SSL Configuration",
          "7 Days Support",
        ],
        delivery: "5–7 Business Days",
        cta: "Get Started",
      },
      {
        id: "website-business",
        name: "Business",
        price: "$799",
        popular: true,
        bestFor: [
          "Startup",
          "Company",
          "Agency",
          "Hospital",
          "School",
          "Business Website",
        ],
        features: [
          "Everything in Basic",
          "Up to 12 Pages",
          "Blog",
          "Gallery",
          "Testimonials",
          "CMS",
          "Analytics",
          "Search Console",
          "Advanced SEO",
          "Performance Optimization",
          "30 Days Support",
        ],
        delivery: "10–15 Business Days",
        cta: "Start Growing",
      },
      {
        id: "website-custom",
        name: "Custom",
        price: "Starting at $1,499",
        bestFor: ["Businesses needing custom solutions."],
        features: [
          "Unlimited Pages",
          "Booking System",
          "Custom CMS",
          "API Integration",
          "Admin Dashboard",
          "Advanced Animations",
          "Premium SEO",
          "Priority Support",
        ],
        delivery: "3–5 Weeks",
        cta: "Talk to Us",
      },
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack Solutions",
    cards: [
      {
        id: "fullstack-starter",
        name: "Starter",
        price: "$1,999",
        features: [
          "Authentication",
          "Dashboard",
          "Database",
          "REST API",
          "Admin Panel",
          "Email Notifications",
          "Responsive UI",
          "Deployment",
        ],
        delivery: "3–4 Weeks",
        cta: "Get Started",
      },
      {
        id: "fullstack-business",
        name: "Business",
        price: "$3,999",
        popular: true,
        features: [
          "Everything in Starter",
          "Role Management",
          "Payment Gateway",
          "Analytics",
          "Reports",
          "Notifications",
          "File Upload",
          "Advanced Dashboard",
        ],
        delivery: "5–7 Weeks",
        cta: "Start Building",
      },
      {
        id: "fullstack-enterprise",
        name: "Enterprise",
        price: "Custom Quote",
        features: [
          "CRM",
          "ERP",
          "Hospital System",
          "School System",
          "LMS",
          "SaaS Platform",
          "AI Integration",
          "Docker",
          "CI/CD",
          "Cloud Infrastructure",
          "Documentation",
          "Dedicated Support",
        ],
        cta: "Talk to Sales",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce & Shopify",
    cards: [
      {
        id: "ecommerce-basic",
        name: "Basic Store",
        price: "$999",
        features: [
          "Premium Theme",
          "Payment Gateway",
          "Shipping Setup",
          "Product Upload",
          "Basic SEO",
          "Mobile Optimization",
        ],
        delivery: "7–10 Days",
        cta: "Get Started",
      },
      {
        id: "ecommerce-business",
        name: "Business Store",
        price: "$1,999",
        popular: true,
        features: [
          "Everything in Basic",
          "Premium Sections",
          "Email Marketing",
          "Apps Configuration",
          "Advanced SEO",
          "Speed Optimization",
        ],
        delivery: "2–3 Weeks",
        cta: "Start Selling",
      },
      {
        id: "ecommerce-plus",
        name: "Shopify Plus",
        price: "Starting at $4,999",
        features: [
          "Custom Design",
          "Headless Commerce",
          "Inventory Management",
          "ERP Integration",
          "Automation",
          "Advanced Analytics",
          "Priority Support",
        ],
        cta: "Talk to Us",
      },
    ],
  },
];

export interface AdditionalService {
  name: string;
  price: string;
}

export const additionalServices: AdditionalService[] = [
  { name: "Google Workspace Setup", price: "$99" },
  { name: "Business Email Setup", price: "$49" },
  { name: "Domain Setup", price: "$29" },
  { name: "Hosting Configuration", price: "$79" },
  { name: "Vercel Deployment", price: "$79" },
  { name: "Cloudflare Setup", price: "$99" },
  { name: "SEO Setup", price: "$199" },
  { name: "AI Chatbot", price: "Starting at $599" },
  { name: "Payment Gateway Integration", price: "$149" },
  { name: "Website Maintenance", price: "Starting at $99/month" },
];

export interface RenewalRow {
  item: string;
  cost: string;
}

export const renewalCosts: RenewalRow[] = [
  { item: "Domain Renewal", cost: "$15–30/year" },
  { item: "Hosting Renewal", cost: "$60–200/year" },
  { item: "Google Workspace", cost: "Billed separately per user/month" },
  { item: "Shopify Subscription", cost: "As per Shopify plan" },
  { item: "Maintenance", cost: "Optional" },
];
