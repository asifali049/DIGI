"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-study" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Menu"
      className="fixed left-1/2 top-24 z-[99999] w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border bg-background shadow-2xl"
    >
      <Command.Input
        placeholder="Search pages..."
        className="w-full border-b bg-transparent px-5 py-4 outline-none"
      />

      <Command.List className="max-h-96 overflow-auto p-2">
        <Command.Empty className="p-4 text-sm text-muted-foreground">
          No results found.
        </Command.Empty>

        <Command.Group heading="Pages">
          {pages.map((page) => (
            <Command.Item
              key={page.href}
              value={page.name}
              onSelect={() => {
                router.push(page.href);
                setOpen(false);
              }}
              className="cursor-pointer rounded-lg px-4 py-3 transition hover:bg-accent"
            >
              {page.name}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}