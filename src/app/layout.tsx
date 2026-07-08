import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import { ThemeProvider, LenisProvider } from "@/providers";

import { ScrollProgress } from "@/components/common/scroll-progress";
import { LoadingScreen } from "@/components/common/loading-screen";
import { MouseGlow } from "@/components/common/mouse-glow";
import { CustomCursor } from "@/components/common/custom-cursor";
import { CommandMenu } from "@/components/common/command-menu";
import { PageTransition } from "@/components/common/page-transition";
import { BackToTop } from "@/components/common/back-to-top";
import { FloatingContact } from "@/components/common/floating-contact";
import { CookieBanner } from "@/components/common/cookie-banner";

import { Footer } from "@/components/layout/footer";

import { ToasterProvider } from "@/components/providers/toaster-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Agency",
  description: "Premium Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className={cn(inter.variable, "antialiased")}>
        <ThemeProvider>
          <LenisProvider>
            <ScrollProgress />
            <LoadingScreen />
            <MouseGlow />
            <CustomCursor />

            <CommandMenu />

            <PageTransition>
              {children}
            </PageTransition>

            <BackToTop />
            <FloatingContact />
            <CookieBanner />

            {/* Global Toast */}
            <ToasterProvider />

            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}