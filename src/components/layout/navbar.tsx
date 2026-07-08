"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";

import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          "mx-auto mt-3 flex h-14 w-[calc(100%-1rem)] max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:mt-4 sm:h-16 sm:w-[calc(100%-2rem)] sm:px-6 lg:px-8",
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-xl font-black tracking-tight text-white transition-colors sm:text-2xl"
        >
          Digital
          <span className="text-violet-500">Agency</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300",
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {item.title}

              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-violet-500" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden lg:block">
            <Button>Start Project</Button>
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}