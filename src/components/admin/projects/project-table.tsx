"use client";

import { useMemo, useState } from "react";
import type { SortingState } from "@tanstack/react-table";

import { projectData } from "@/constants/project-data";
import { projectColumns } from "./project-columns";

import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/ui/data-table";

export function ProjectTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        const query = search.toLowerCase().trim();

        if (!query) {
            return projectData;
        }

        return projectData.filter((project) => {
            return (
                project.title.toLowerCase().includes(query) ||
                project.client.toLowerCase().includes(query) ||
                project.category.toLowerCase().includes(query) ||
                project.technologies.some((tech) =>
                    tech.toLowerCase().includes(query)
                )
            );
        });
    }, [search]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Input
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:max-w-sm"
                />
            </div>

            <DataTable
                columns={projectColumns}
                data={filteredProjects}
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