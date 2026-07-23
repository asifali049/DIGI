"use client";
 
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
 
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
 
export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
 
    const handleChange = () => {
      if (media.matches) {
        setOpen(false);
      }
    };
 
    handleChange();
 
    media.addEventListener("change", handleChange);
 
    return () =>
      media.removeEventListener("change", handleChange);
  }, []);
 
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-expanded={open}
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl
          border border-border
          bg-background/70
          text-foreground
          backdrop-blur-xl
          transition-all duration-300
          hover:bg-accent
          hover:text-foreground
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-violet-500/50
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
          active:scale-95
          lg:hidden
          sm:h-11 sm:w-11
        "
      >
          <Menu className="h-5 w-5 shrink-0" />
        </button>
      </SheetTrigger>
 
      <SheetContent
        side="right"
        className="flex w-[85vw] max-w-sm flex-col gap-0 border-l border-border bg-background p-0 lg:hidden"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-border px-6 py-5">
          <SheetTitle asChild>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-lg font-black tracking-tight text-foreground"
            >
              Digital
              <span className="text-violet-500">Agency</span>
            </Link>
          </SheetTitle>
 
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </SheetClose>
        </SheetHeader>
 
        <nav
          aria-label="Mobile Navigation"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={
                pathname === item.href ? "page" : undefined
              }
              className={cn(
                "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                pathname === item.href
                  ? "bg-violet-500/10 text-violet-500 dark:text-violet-400"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
 
        <div className="border-t border-border p-4">
          <Button
            asChild
            size="lg"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">Start Project</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}