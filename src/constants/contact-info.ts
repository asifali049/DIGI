import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@youragency.com",
    href: "mailto:hello@youragency.com",
    description: "We'll reply within 24 hours.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 73557 69866",
    href: "tel:+917355769866",
    description: "Mon – Sat, 9:00 AM – 7:00 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/917355769866",
    description: "Quick support & project discussion.",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Noida, Uttar Pradesh, India",
    href: "https://maps.google.com",
    description: "Meetings by appointment only.",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon – Sat",
    href: "#",
    description: "09:00 AM – 07:00 PM IST",
  },
] as const;