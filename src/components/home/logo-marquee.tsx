"use client";

import Image from "next/image";

const logos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "Dell", src: "/logos/dell.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "github", src: "/logos/github.svg" },
  { name: "hcl", src: "/logos/hcl.svg" },
  { name: "Hostinger", src: "/logos/hostinger.svg" },
  { name: "Intel", src: "/logos/intel.svg" },
  { name: "Meta", src: "/logos/meta.svg" },
  { name: "Nike", src: "/logos/nike.svg" },
  { name: "Shopee", src: "/logos/shopee.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Uber", src: "/logos/uber.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "Spotify", src: "/logos/spotify.svg" },
];

const items = [...logos, ...logos];

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-sm sm:tracking-[0.3em]">
            Trusted Technologies
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Powered by Industry Leaders
          </h2>
        </div>

        <div
          className="
            relative
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          <div className="flex w-max animate-marquee gap-4 sm:gap-8 lg:gap-12">
            {items.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl border bg-background/60 px-4 backdrop-blur sm:h-24 sm:w-40 lg:w-44"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="
                    h-8
                    w-auto
                    object-contain
                    opacity-70
                    grayscale
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    sm:h-10
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}