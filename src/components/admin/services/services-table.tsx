"use client";

import { useMemo, useState } from "react";
import type { SortingState } from "@tanstack/react-table";

import { mockServices } from "@/constants/mock-services";

import { serviceColumns } from "./service-columns";

import { DataTable } from "@/components/ui/data-table";
import { AdminSearch } from "@/components/admin/shared/admin-search";

export function ServicesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return mockServices;
    }

    return mockServices.filter((service) => {
      return (
        service.title.toLowerCase().includes(query) ||
        service.slug.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.status.toLowerCase().includes(query) ||
        service.shortDescription
          .toLowerCase()
          .includes(query) ||
        service.description
          .toLowerCase()
          .includes(query) ||
        service.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        )
      );
    });
  }, [search]);

  return (
    <div className="space-y-6">
      <AdminSearch
        value={search}
        onChange={setSearch}
        placeholder="Search services..."
        className="w-full max-w-md"
      />

      <DataTable
        columns={serviceColumns}
        data={filteredServices}
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