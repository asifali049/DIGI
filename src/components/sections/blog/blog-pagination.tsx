"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav
      aria-label="Blog pagination"
      className="py-12 sm:py-16"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="min-h-10 px-3 sm:px-4"
          >
            <ChevronLeft className="mr-2 size-4 shrink-0" />
            <span className="hidden sm:inline">
              Previous
            </span>
          </Button>

          {pages.map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              onClick={() => onPageChange(page)}
              aria-current={
                page === currentPage
                  ? "page"
                  : undefined
              }
              className="min-h-10 min-w-10 px-3 sm:min-w-11"
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="min-h-10 px-3 sm:px-4"
          >
            <span className="hidden sm:inline">
              Next
            </span>

            <ChevronRight className="ml-0 size-4 shrink-0 sm:ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
}