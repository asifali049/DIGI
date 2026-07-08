"use client";

import {
  Plus,
  Search,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CreateLeadDialog } from "./create-lead-dialog";

interface LeadToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  priority: string;
  onPriorityChange: (value: string) => void;
}

export function LeadToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
}: LeadToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex flex-1 flex-col gap-3 md:flex-row">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search leads..."
            className="pl-9"
          />
        </div>

        <Select
          value={status}
          onValueChange={onStatusChange}
        >
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Status
            </SelectItem>

            <SelectItem value="new">
              New
            </SelectItem>

            <SelectItem value="contacted">
              Contacted
            </SelectItem>

            <SelectItem value="qualified">
              Qualified
            </SelectItem>

            <SelectItem value="proposal_sent">
              Proposal Sent
            </SelectItem>

            <SelectItem value="negotiation">
              Negotiation
            </SelectItem>

            <SelectItem value="won">
              Won
            </SelectItem>

            <SelectItem value="lost">
              Lost
            </SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={priority}
          onValueChange={onPriorityChange}
        >
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Priorities
            </SelectItem>

            <SelectItem value="low">
              Low
            </SelectItem>

            <SelectItem value="medium">
              Medium
            </SelectItem>

            <SelectItem value="high">
              High
            </SelectItem>

            <SelectItem value="urgent">
              Urgent
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Right */}

      <CreateLeadDialog
        trigger={
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Lead
          </Button>
        }
      />
    </div>
  );
}