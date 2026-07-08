"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { offices } from "@/constants/offices";

export function Offices() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
            Our Offices
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Meet Us Anywhere
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">
            Work with us remotely from anywhere in the world or schedule
            a meeting at one of our offices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {offices.map((office, index) => (
            <motion.article
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-3xl border bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="wrap-break-words text-2xl font-bold leading-tight sm:text-3xl">
                    {office.city}
                  </h3>

                  <p className="mt-1 text-sm text-primary sm:text-base">
                    {office.country}
                  </p>
                </div>

                <Link
                  href={office.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border p-3 transition-colors hover:border-primary"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="wrap-break-words text-sm leading-6 sm:text-base">
                    {office.address}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="break-all text-sm leading-6 sm:text-base">
                    {office.email}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="wrap-break-words text-sm leading-6 sm:text-base">
                    {office.phone}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-6 sm:text-base">
                    {office.hours}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}