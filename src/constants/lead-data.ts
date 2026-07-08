import type { Lead } from "@/types/lead";

export const leadData: Lead[] = [
  {
    id: "lead-001",
    name: "John Anderson",
    email: "john.anderson@example.com",
    phone: "+1 555-210-1001",
    company: "Acme Technologies",

    service: "Website Development",
    budget: "$5,000 - $10,000",

    source: "website",
    priority: "high",
    status: "new",

    assignedTo: "Sarah Wilson",

    website: "https://acmetech.com",
    address: "New York, USA",
    estimatedValue: 8000,
    tags: ["Website", "CMS", "Enterprise"],

    notes:
      "Interested in redesigning the company website with CMS integration.",

    followUpDate: "2026-07-10",

    createdAt: "2026-07-01",
    updatedAt: "2026-07-01",
  },

  {
    id: "lead-002",
    name: "Emily Carter",
    email: "emily.carter@example.com",
    phone: "+1 555-210-1002",
    company: "Bright Studio",

    service: "UI/UX Design",
    budget: "$2,000 - $5,000",

    source: "linkedin",
    priority: "medium",
    status: "contacted",

    assignedTo: "Michael Brown",

    website: "https://brightstudio.co",
    address: "London, UK",
    estimatedValue: 4200,
    tags: ["Dashboard", "UI", "Mobile"],

    notes:
      "Requested a proposal for dashboard and mobile app UI redesign.",

    followUpDate: "2026-07-09",

    createdAt: "2026-07-02",
    updatedAt: "2026-07-04",
  },

  {
    id: "lead-003",
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "+1 555-210-1003",
    company: "Nova Solutions",

    service: "SEO Optimization",
    budget: "$1,000 - $3,000",

    source: "google",
    priority: "low",
    status: "qualified",

    assignedTo: "Emma Davis",

    website: "https://novasolutions.io",
    address: "Toronto, Canada",
    estimatedValue: 2500,
    tags: ["SEO", "Content", "Marketing"],

    notes:
      "Looking for long-term SEO and content marketing partnership.",

    followUpDate: "2026-07-12",

    createdAt: "2026-06-28",
    updatedAt: "2026-07-03",
  },

  {
    id: "lead-004",
    name: "Sophia Johnson",
    email: "sophia.johnson@example.com",
    phone: "+1 555-210-1004",
    company: "Pixel Works",

    service: "Brand Identity",
    budget: "$3,000 - $8,000",

    source: "referral",
    priority: "urgent",
    status: "proposal_sent",

    assignedTo: "Sarah Wilson",

    website: "https://pixelworks.com",
    address: "Sydney, Australia",
    estimatedValue: 7000,
    tags: ["Branding", "Logo", "Identity"],

    notes:
      "Proposal shared. Waiting for internal approval from the client.",

    followUpDate: "2026-07-08",

    createdAt: "2026-06-30",
    updatedAt: "2026-07-05",
  },

  {
    id: "lead-005",
    name: "James Walker",
    email: "james.walker@example.com",
    phone: "+1 555-210-1005",
    company: "NextGen Labs",

    service: "Mobile App Development",
    budget: "$15,000 - $25,000",

    source: "website",
    priority: "high",
    status: "negotiation",

    assignedTo: "Michael Brown",

    website: "https://nextgenlabs.ai",
    address: "San Francisco, USA",
    estimatedValue: 22000,
    tags: ["React Native", "Mobile", "AI"],

    notes:
      "Discussing timeline, milestones, and payment schedule.",

    followUpDate: "2026-07-11",

    createdAt: "2026-06-26",
    updatedAt: "2026-07-06",
  },

  {
    id: "lead-006",
    name: "Olivia Harris",
    email: "olivia.harris@example.com",
    phone: "+1 555-210-1006",
    company: "Creative Hive",

    service: "Digital Marketing",
    budget: "$4,000 - $6,000",

    source: "facebook",
    priority: "medium",
    status: "won",

    assignedTo: "Emma Davis",

    website: "https://creativehive.io",
    address: "Berlin, Germany",
    estimatedValue: 5500,
    tags: ["Marketing", "Ads", "SEO"],

    notes:
      "Contract signed. Project onboarding scheduled.",

    followUpDate: "2026-07-15",

    createdAt: "2026-06-20",
    updatedAt: "2026-07-06",
  },

  {
    id: "lead-007",
    name: "Daniel Thompson",
    email: "daniel.thompson@example.com",
    phone: "+1 555-210-1007",
    company: "Future Vision",

    service: "Web Application",
    budget: "$20,000+",

    source: "cold_call",
    priority: "high",
    status: "lost",

    assignedTo: "Sarah Wilson",

    website: "https://futurevision.com",
    address: "Chicago, USA",
    estimatedValue: 25000,
    tags: ["SaaS", "Dashboard", "Enterprise"],

    notes:
      "Client selected another agency due to pricing.",

    followUpDate: "2026-07-20",

    createdAt: "2026-06-18",
    updatedAt: "2026-07-02",
  },

  {
    id: "lead-008",
    name: "Grace Lee",
    email: "grace.lee@example.com",
    phone: "+1 555-210-1008",
    company: "Skyline Media",

    service: "E-commerce Development",
    budget: "$8,000 - $15,000",

    source: "instagram",
    priority: "urgent",
    status: "qualified",

    assignedTo: "Michael Brown",

    website: "https://skylinemedia.co",
    address: "Singapore",
    estimatedValue: 12000,
    tags: ["Shopify", "E-commerce", "Migration"],

    notes:
      "Interested in Shopify Plus migration and custom integrations.",

    followUpDate: "2026-07-13",

    createdAt: "2026-07-03",
    updatedAt: "2026-07-06",
  },
];