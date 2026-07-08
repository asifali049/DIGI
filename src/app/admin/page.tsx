import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  MessageSquareQuote,
} from "lucide-react";

import { StatsCard } from "@/components/ui";

import { AnalyticsChart } from "@/components/admin/dashboard/analytics-chart";
import { DashboardSection } from "@/components/admin/dashboard/dashboard-section";
import { NotificationsPanel } from "@/components/admin/dashboard/notifications-panel";
import { QuickActions } from "@/components/admin/dashboard/quick-actions";
import { RecentActivity } from "@/components/admin/dashboard/recent-activity";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>

        <p className="mt-2 max-w-2xl text-muted-foreground">
          Welcome back. Here&apos;s an overview of your agency performance,
          projects, content, leads and overall activity.
        </p>
      </section>

      {/* Stats */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Projects"
          value="24"
          description="+4 this month"
          icon={BriefcaseBusiness}
        />

        <StatsCard
          title="Blog Posts"
          value="132"
          description="12 Drafts"
          icon={FileText}
        />

        <StatsCard
          title="Testimonials"
          value="48"
          description="8 Pending"
          icon={MessageSquareQuote}
        />

        <StatsCard
          title="Visitors"
          value="28.4K"
          description="+18.6%"
          icon={BarChart3}
        />
      </section>

      {/* Main Dashboard */}
      <section className="grid gap-6 xl:grid-cols-12">
        {/* Left */}
        <div className="space-y-6 xl:col-span-8">
          <DashboardSection
            title="Traffic Analytics"
            description="Website visitors during the last seven months."
          >
            <AnalyticsChart />
          </DashboardSection>

          <DashboardSection
            title="Quick Actions"
            description="Frequently used admin actions."
          >
            <QuickActions />
          </DashboardSection>
        </div>

        {/* Right */}
        <div className="space-y-6 xl:col-span-4">
          <DashboardSection
            title="Recent Activity"
            description="Latest actions across your agency."
          >
            <RecentActivity />
          </DashboardSection>

          <DashboardSection
            title="Notifications"
            description="Latest alerts and updates."
          >
            <NotificationsPanel />
          </DashboardSection>
        </div>
      </section>
    </div>
  );
}