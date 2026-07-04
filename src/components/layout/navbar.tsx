"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
          "mx-auto mt-4 flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-6 transition-all duration-300",
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white"
        >
          Digital
          <span className="text-violet-500">Agency</span>
        </Link>

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
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-violet-500" />
              )}
            </Link>
          ))}
        </div>

        <Button>Start Project</Button>
      </nav>
    </header>
  );
}