"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="
        fixed
        bottom-24
        right-4
        z-[9998]
        flex
        flex-col
        gap-3
        sm:right-6
      "
    >
      {contacts.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: shouldReduceMotion
                ? 0
                : index * 0.1,
            }}
          >
            <Link
              href={item.href}
              aria-label={item.label}
              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-background/80
                text-foreground
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-primary
                hover:text-primary-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/40
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
                active:scale-95
              "
            >
              <Icon className="h-5 w-5 shrink-0" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}