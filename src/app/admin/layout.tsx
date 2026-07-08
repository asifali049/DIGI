"use client";

import { useState } from "react";

import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminBreadcrumbs } from "@/components/admin/admin-breadcrumbs";

import {
  Sheet,
  SheetContent,
} from "@/components/ui";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: Readonly<AdminLayoutProps>) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <AdminSidebar />

        {/* Mobile Sidebar */}
        <Sheet
          open={mobileSidebarOpen}
          onOpenChange={setMobileSidebarOpen}
        >
          <SheetContent
            side="left"
            className="w-72 p-0"
          >
            <AdminSidebar />
          </SheetContent>
        </Sheet>

        {/* Main */}
        <main className="flex min-h-screen flex-1 flex-col">
          <AdminHeader
            title="Dashboard"
            description="Welcome back 👋"
            onMenuClick={() => setMobileSidebarOpen(true)}
          />

          <div className="space-y-6 p-4 md:p-6">
            <AdminBreadcrumbs />

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}