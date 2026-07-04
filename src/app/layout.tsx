import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider , LenisProvider } from "@/providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
  <LenisProvider>
    {children}
  </LenisProvider>
</ThemeProvider>
      </body>
    </html>
  );
}