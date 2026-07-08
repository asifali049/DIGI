"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Custom Software",
  "E-Commerce",
  "AI Solutions",
];

const company = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-study" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold sm:text-3xl"
            >
              Digital Agency
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              We design and develop premium websites, SaaS platforms,
              enterprise software and mobile applications with modern
              technologies.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">
                  hello@agency.com
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>India</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all hover:-translate-y-1 hover:bg-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground sm:text-base"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Newsletter
            </h3>

            <p className="mb-6 text-sm text-muted-foreground sm:text-base">
              Subscribe to receive agency updates, articles and new
              project launches.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-primary sm:text-base"
              />

              <button
                type="submit"
                className="min-h-12 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t pt-8 text-center text-sm text-muted-foreground md:mt-16 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Digital Agency. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}