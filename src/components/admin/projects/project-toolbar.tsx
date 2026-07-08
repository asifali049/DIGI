"use client";

import Link from "next/link";
import {
  Grid2X2,
  List,
  Plus,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  view: "table" | "grid";
  onViewChange: (view: "table" | "grid") => void;
}

export function ProjectToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  view,
  onViewChange,
}: ProjectToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Filters */}
      <div className="flex flex-1 flex-col gap-3 md:flex-row">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            autoComplete="off"
            placeholder="Search projects..."
            aria-label="Search projects"
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        <Select
          value={category}
          onValueChange={onCategoryChange}
        >
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="branding">Branding</SelectItem>
            <SelectItem value="ui-ux">UI / UX</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="saas">SaaS</SelectItem>
            <SelectItem value="e-commerce">E-Commerce</SelectItem>
            <SelectItem value="ai">AI</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={status}
          onValueChange={onStatusChange}
        >
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-2 lg:justify-end">
        <div className="flex rounded-xl border">
          <Button
            type="button"
            size="icon"
            variant={view === "table" ? "default" : "ghost"}
            onClick={() => onViewChange("table")}
            aria-label="Table view"
          >
            <List className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            size="icon"
            variant={view === "grid" ? "default" : "ghost"}
            onClick={() => onViewChange("grid")}
            aria-label="Grid view"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
        </div>

        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>
    </div>
  );
}