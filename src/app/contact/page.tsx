import type { Metadata } from "next";

import { ContactSchema } from "@/components/seo/contact-schema";
import { ContactCards } from "@/components/contact/contact-cards";
import { ContactCta } from "@/components/contact/contact-cta";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMap } from "@/components/contact/contact-map";
import { DiscoveryCall } from "@/components/contact/discovery-call";
import { Offices } from "@/components/contact/offices";
import { ServiceAreas } from "@/components/contact/service-areas";

export const metadata: Metadata = {
  title: "Contact | Digital Agency",
  description:
    "Contact our team to discuss your next website, SaaS platform, mobile app, AI solution, or custom software project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSchema />

      <ContactHero />
      <ContactCards />
      <ContactForm />
      <Offices />
      <ContactMap />
      <DiscoveryCall />
      <ServiceAreas />
      <ContactCta />
    </>
  );
}