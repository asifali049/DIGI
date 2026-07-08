export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Digital Agency",
    url: "https://yourdomain.com",
    description:
      "Premium web development, SaaS, AI solutions, mobile app development, UI/UX design and custom software.",

    areaServed: "Worldwide",

    serviceType: [
      "Web Development",
      "Mobile App Development",
      "AI Development",
      "UI UX Design",
      "SaaS Development",
      "Custom Software",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}