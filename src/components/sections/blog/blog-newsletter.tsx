"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // Integrate newsletter API (Resend / Mailchimp / ConvertKit)
    console.log(email);

    setEmail("");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 lg:p-14"
        >
          {/* Background Glow */}

          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-16 sm:w-16">
              <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-balance sm:mt-6 sm:text-3xl md:text-4xl">
              Stay Updated
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Get the latest articles on web development, AI, design,
              business, and modern technologies delivered straight to your
              inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Input
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 text-sm sm:text-base"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Button>
            </form>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}