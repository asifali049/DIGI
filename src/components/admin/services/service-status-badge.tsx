import {
  GenericStatusBadge,
  getStatusVariant,
} from "@/components/admin/shared/generic-status-badge";

import type { ServiceStatus } from "@/types/service";

interface ServiceStatusBadgeProps {
  status: ServiceStatus;
  className?: string;
}

const STATUS_LABELS = {
  active: "Active",
  draft: "Draft",
  archived: "Archived",
} satisfies Record<ServiceStatus, string>;

export function ServiceStatusBadge({
  status,
  className,
}: ServiceStatusBadgeProps) {
  return (
    <GenericStatusBadge
      label={STATUS_LABELS[status]}
      variant={getStatusVariant(status)}
      className={className}
    />
  );
}