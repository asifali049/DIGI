import type {
  Metadata,
  Viewport,
} from "next";

import {
  Geist,
  Inter,
} from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import {
  ThemeProvider,
  LenisProvider,
} from "@/providers";

/* -------------------------------------------------------------------------- */
/* Common Components */
/* -------------------------------------------------------------------------- */

import { ScrollProgress } from "@/components/common/scroll-progress";
import { LoadingScreen } from "@/components/common/loading-screen";
import { MouseGlow } from "@/components/common/mouse-glow";
import { CustomCursor } from "@/components/common/custom-cursor";
import { CommandMenu } from "@/components/common/command-menu";
import { PageTransition } from "@/components/common/page-transition";
import { BackToTop } from "@/components/common/back-to-top";
import { FloatingContact } from "@/components/common/floating-contact";
import { CookieBanner } from "@/components/common/cookie-banner";

/* -------------------------------------------------------------------------- */
/* Layout */
/* -------------------------------------------------------------------------- */

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

/* -------------------------------------------------------------------------- */
/* Providers */
/* -------------------------------------------------------------------------- */

import { ToasterProvider } from "@/components/providers/toaster-provider";

/* -------------------------------------------------------------------------- */
/* Fonts */
/* -------------------------------------------------------------------------- */

const geist = Geist({
  subsets: ["latin"],

  variable: "--font-sans",

  display: "swap",

  preload: true,

  fallback: [
    "system-ui",
    "sans-serif",
  ],
});

const inter = Inter({
  subsets: ["latin"],

  variable: "--font-inter",

  display: "swap",

  preload: true,

  fallback: [
    "Arial",
    "Helvetica",
    "sans-serif",
  ],
});

/* -------------------------------------------------------------------------- */
/* Viewport */
/* -------------------------------------------------------------------------- */

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  viewportFit: "cover",

  colorScheme: "light dark",

  interactiveWidget: "resizes-content",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#09090b",
    },
  ],
};
/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

const siteName =
  "Premium Digital Agency";

const siteDescription =
  "Premium Digital Agency specializing in Web Development, UI/UX Design, Branding, SEO, AI Solutions, SaaS Development, and Digital Marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Digital Agency",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI UX",
    "Branding",
    "SEO",
    "Web Development",
    "AI",
    "SaaS",
    "Marketing",
    "Software Company",
  ],

  authors: [
    {
      name: siteName,
    },
  ],

  creator: siteName,

  publisher: siteName,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",

    url: siteUrl,

    title: siteName,

    siteName,

    locale: "en_US",

    description: siteDescription,

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt: siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteName,

    description: siteDescription,

    images: ["/og-image.jpg"],
  },

  appleWebApp: {
    capable: true,

    title: siteName,

    statusBarStyle:
      "black-translucent",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

/* -------------------------------------------------------------------------- */
/* Structured Data (JSON-LD)                                                  */
/* -------------------------------------------------------------------------- */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: siteName,

  url: siteUrl,

  description: siteDescription,

  logo: `${siteUrl}/logo.png`,

  image: `${siteUrl}/og-image.jpg`,

  email: "hello@example.com",

  telephone: "+91-0000000000",

  sameAs: [
    "https://github.com/",
    "https://linkedin.com/",
    "https://twitter.com/",
    "https://instagram.com/",
  ],

  address: {
    "@type": "PostalAddress",

    addressCountry: "IN",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: siteName,

  description: siteDescription,

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "en",
};
/* -------------------------------------------------------------------------- */
/* Root Layout                                                                */
/* -------------------------------------------------------------------------- */

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        geist.variable,
        inter.variable,
        "h-full scroll-smooth"
      )}
    >
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased",
          "selection:bg-primary/20 selection:text-foreground",
          "supports-[overflow:clip]:overflow-x-clip"
        )}
      >
       {/* ------------------------------------------------------------------ */}
{/* Skip Navigation */}
{/* ------------------------------------------------------------------ */}

<a
  href="#main-content"
  className={cn(
    "sr-only",
    "focus:not-sr-only",
    "focus:absolute",
    "focus:left-4",
    "focus:top-4",
    "focus:z-[9999]",
    "rounded-lg",
    "bg-primary",
    "px-4",
    "py-2",
    "text-sm",
    "font-medium",
    "text-primary-foreground",
    "shadow-lg"
  )}
>
  Skip to content
</a>

        {/* ------------------------------------------------------------------ */}
        {/* Structured Data */}
        {/* ------------------------------------------------------------------ */}

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              websiteJsonLd,
            ]),
          }}
        />

        {/* ------------------------------------------------------------------ */}
        {/* Providers */}
        {/* ------------------------------------------------------------------ */}

        <ThemeProvider>
          
          <LenisProvider>

                        {/* ------------------------------------------------------------------ */}
            {/* Global UI */}
            {/* ------------------------------------------------------------------ */}

            <ScrollProgress />

            <LoadingScreen />

            <MouseGlow />

            <CustomCursor />

            <CommandMenu />

            {/* ------------------------------------------------------------------ */}
            {/* Root Application */}
            {/* ------------------------------------------------------------------ */}

            <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
              <Header />

              <main
                id="main-content"
                tabIndex={-1}
                className="relative flex-1 outline-none"
              >
                <PageTransition>
                  {children}
                </PageTransition>
              </main>

              <Footer />
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* Global Floating Widgets */}
            {/* ------------------------------------------------------------------ */}

            <BackToTop />

            <FloatingContact />

            <CookieBanner />

            {/* ------------------------------------------------------------------ */}
            {/* Global Toast */}
            {/* ------------------------------------------------------------------ */}

            <ToasterProvider />

            {/* ------------------------------------------------------------------ */}
            {/* Future Integrations */}
            {/* ------------------------------------------------------------------ */}

            {/*
            <Analytics />
            <SpeedInsights />
            */}

          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}