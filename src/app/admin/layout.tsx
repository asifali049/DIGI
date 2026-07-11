"use client";

import { useState } from "react";

import { AdminBreadcrumbs } from "@/components/admin/admin-breadcrumbs";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

import {
  Sheet,
  SheetContent,
} from "@/components/ui";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <AdminSidebar />
        </aside>

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

        {/* Main Content */}
        <main className="flex min-h-screen min-w-0 flex-1 flex-col">
          <AdminHeader
            title="Dashboard"
            description="Welcome back 👋"
            onMenuClick={() =>
              setMobileSidebarOpen(true)
            }
          />

          <section className="flex-1 space-y-6 p-4 md:p-6">
            <AdminBreadcrumbs />

            {children}
          </section>
        </main>
      </div>
    </div>
  );
}