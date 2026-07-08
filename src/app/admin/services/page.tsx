import { CreateServiceDialog } from "@/components/admin/services/create-service-dialog";
import { ServicesTable } from "@/components/admin/services/services-table";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Services
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage all agency services, pricing, visibility, and publishing.
          </p>
        </div>

        <CreateServiceDialog />
      </div>

      {/* Table */}
      <ServicesTable />
    </div>
  );
}