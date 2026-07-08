import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingBag,
  Landmark,
  Plane,
  Truck,
  UtensilsCrossed,
  Hotel,
} from "lucide-react";

export const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Hospital management systems, telemedicine, appointment booking, EMR, patient portals, and healthcare automation.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Secure fintech platforms, dashboards, payment systems, accounting software, and analytics.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Learning management systems, student portals, online courses, examinations, and administration.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce",
    description:
      "Online stores, marketplaces, inventory management, subscriptions, and payment integrations.",
  },
  {
    icon: Building2,
    title: "SaaS",
    description:
      "Multi-tenant SaaS platforms, CRMs, ERPs, dashboards, subscriptions, and workflow automation.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Fleet tracking, warehouse systems, shipment management, and logistics automation.",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Booking engines, itinerary management, travel portals, and customer experience platforms.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description:
      "Restaurant websites, online ordering, POS integration, reservations, and delivery platforms.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Hotel booking systems, guest management, room availability, and hospitality automation.",
  },
] as const;