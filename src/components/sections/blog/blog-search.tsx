"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";

type BlogSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function BlogSearch({
  value,
  onChange,
}: BlogSearchProps) {
  return (
    <section className="py-4 sm:py-6">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground sm:left-5" />

            <Input
              type="search"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search blog articles"
              className="h-12 rounded-full pl-12 pr-12 text-sm sm:h-14 sm:pl-14 sm:pr-14 sm:text-base"
            />

            {value && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Clear search"
                onClick={() => onChange("")}
                className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full sm:right-2 sm:h-10 sm:w-10"
              >
                <X className="size-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}