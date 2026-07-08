"use client";

import { useMemo, useState } from "react";
import type { SortingState } from "@tanstack/react-table";

import { testimonialData } from "@/constants/testimonial-data";
import { testimonialColumns } from "./testimonial-columns";

import { DataTable } from "@/components/ui/data-table";
import { AdminSearch } from "@/components/admin/shared/admin-search";

export function TestimonialTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  const filteredTestimonials = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return testimonialData;
    }

    return testimonialData.filter((testimonial) => {
      return (
        testimonial.name.toLowerCase().includes(query) ||
        testimonial.company.toLowerCase().includes(query) ||
        testimonial.designation.toLowerCase().includes(query) ||
        testimonial.project.toLowerCase().includes(query) ||
        testimonial.message.toLowerCase().includes(query) ||
        testimonial.status.toLowerCase().includes(query) ||
        testimonial.rating.toString().includes(query) ||
        (testimonial.featured &&
          "featured".includes(query))
      );
    });
  }, [search]);

  return (
    <div className="space-y-6">
      <AdminSearch
        value={search}
        onChange={setSearch}
        placeholder="Search testimonials..."
        className="w-full max-w-md"
      />

      <DataTable
        columns={testimonialColumns}
        data={filteredTestimonials}
        options={{
          state: {
            sorting,
          },
          onSortingChange: setSorting,
        }}
      />
    </div>
  );
}