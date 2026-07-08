"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FAQItem } from "./faq-item";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Most websites are delivered within 2–6 weeks depending on the project scope, features, and revisions.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer maintenance, performance optimization, security updates, and feature enhancements after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your current website with a modern UI/UX while preserving your existing content and SEO where possible.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We specialize in Next.js, React, TypeScript, Tailwind CSS, Node.js, NestJS, FastAPI, PostgreSQL, MySQL, Prisma, and modern cloud deployment.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We develop cross-platform mobile applications using React Native and modern backend architectures.",
  },
  {
    question: "Can you develop custom business software?",
    answer:
      "Yes. We build scalable solutions such as CRM, ERP, Hospital Management Systems, Gym Management Systems, School Portals, SaaS platforms, and custom enterprise software.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary sm:text-sm sm:tracking-[0.3em]">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            Everything you need to know before starting your project with us.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}