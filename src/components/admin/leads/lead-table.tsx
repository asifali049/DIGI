"use client";

import { useMemo, useState } from "react";
import type { SortingState } from "@tanstack/react-table";

import { leadData } from "@/constants/lead-data";
import { leadColumns } from "./lead-columns";

import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

export function LeadTable() {
  const [sorting, setSorting] =
    useState<SortingState>([]);

  const [search, setSearch] = useState("");

  const filteredLeads = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) {
      return leadData;
    }

    return leadData.filter((lead) => {
      return (
        lead.name
          .toLowerCase()
          .includes(query) ||
        lead.email
          .toLowerCase()
          .includes(query) ||
        lead.company
          .toLowerCase()
          .includes(query) ||
        lead.service
          .toLowerCase()
          .includes(query) ||
        lead.assignedTo
          .toLowerCase()
          .includes(query) ||
        lead.status
          .toLowerCase()
          .includes(query) ||
        lead.priority
          .toLowerCase()
          .includes(query) ||
        lead.source
          .toLowerCase()
          .includes(query) ||
        lead.tags?.some((tag) =>
          tag
            .toLowerCase()
            .includes(query)
        )
      );
    });
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder="Search leads..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:max-w-sm"
        />
      </div>

      <DataTable
        columns={leadColumns}
        data={filteredLeads}
        options={{
          state: {
            sorting,
          },
          onSortingChange:
            setSorting,
        }}
      />
    </div>
  );
}