"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function BlogTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    ) as HTMLHeadingElement[];

    const items: Heading[] = elements.map((heading) => {
      if (!heading.id) {
        heading.id =
          heading.textContent
            ?.toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") ?? "";
      }

      return {
        id: heading.id,
        text: heading.textContent ?? "",
        level: Number(heading.tagName.substring(1)),
      };
    });

    const frame = requestAnimationFrame(() => {
      setHeadings(items);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-28 hidden xl:block">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">
          Table of Contents
        </h3>

        <nav>
          <ul className="space-y-3">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={cn(
                  heading.level === 3 && "ml-4"
                )}
              >
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    "block wrap-break-words text-sm transition-colors",
                    activeId === heading.id
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}