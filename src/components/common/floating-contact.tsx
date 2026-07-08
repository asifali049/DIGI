"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: MessageCircle,
  },
  {
    label: "Call",
    href: "tel:+919876543210",
    icon: Phone,
  },
  {
    label: "Email",
    href: "mailto:hello@agency.com",
    icon: Mail,
  },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-6 z-[9998] flex flex-col gap-3">
      {contacts.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <Link
              href={item.href}
              aria-label={item.label}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-background/80 shadow-xl backdrop-blur-xl transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}