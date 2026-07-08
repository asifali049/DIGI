"use client";

import { useState } from "react";

import { LeadToolbar } from "./lead-toolbar";
import { LeadTable } from "./lead-table";

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  return (
    <div className="space-y-6">
      <LeadToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        priority={priority}
        onPriorityChange={setPriority}
      />

      <LeadTable />
    </div>
  );
}