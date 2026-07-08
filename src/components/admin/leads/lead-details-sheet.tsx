"use client";

import {
  Building2,
  Calendar,
  DollarSign,
  Eye,
  Globe,
  Mail,
  Phone,
  Tag,
  User,
} from "lucide-react";

import type { Lead } from "@/types/lead";
import { LeadStatusBadge } from "./lead-status-badge";

import {
  Badge,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

interface LeadDetailsSheetProps {
  lead: Lead;
  trigger?: React.ReactNode;
}

export function LeadDetailsSheet({
  lead,
  trigger,
}: LeadDetailsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Lead Details</SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Header */}

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold">
                {lead.name}
              </h2>

              <LeadStatusBadge
                status={lead.status}
              />

              <Badge variant="secondary">
                {lead.priority}
              </Badge>
            </div>

            <p className="text-muted-foreground">
              {lead.company}
            </p>
          </div>

          <Separator />

          {/* Contact */}

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={lead.email}
            />

            <InfoCard
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={lead.phone}
            />

            <InfoCard
              icon={<Building2 className="h-4 w-4" />}
              label="Company"
              value={lead.company}
            />

            <InfoCard
              icon={<User className="h-4 w-4" />}
              label="Assigned To"
              value={lead.assignedTo}
            />
          </div>

          <Separator />

          {/* Business */}

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={<Tag className="h-4 w-4" />}
              label="Service"
              value={lead.service}
            />

            <InfoCard
              icon={<DollarSign className="h-4 w-4" />}
              label="Budget"
              value={lead.budget}
            />

            <InfoCard
              icon={<Globe className="h-4 w-4" />}
              label="Source"
              value={lead.source}
            />

            <InfoCard
              icon={<Calendar className="h-4 w-4" />}
              label="Follow-up"
              value={lead.followUpDate}
            />
          </div>

          {(lead.website ||
            lead.address ||
            lead.estimatedValue) && (
            <>
              <Separator />

              <div className="grid gap-5 md:grid-cols-2">
                {lead.website && (
                  <InfoCard
                    icon={
                      <Globe className="h-4 w-4" />
                    }
                    label="Website"
                    value={lead.website}
                  />
                )}

                {lead.address && (
                  <InfoCard
                    icon={
                      <Building2 className="h-4 w-4" />
                    }
                    label="Address"
                    value={lead.address}
                  />
                )}

                {lead.estimatedValue && (
                  <InfoCard
                    icon={
                      <DollarSign className="h-4 w-4" />
                    }
                    label="Estimated Value"
                    value={`$${lead.estimatedValue.toLocaleString()}`}
                  />
                )}
              </div>
            </>
          )}

          {lead.tags &&
            lead.tags.length > 0 && (
              <>
                <Separator />

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    Tags
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {lead.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Notes
            </h3>

            <div className="rounded-xl border p-5 leading-7 text-muted-foreground">
              {lead.notes ||
                "No notes available."}
            </div>
          </div>

          <Separator />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={<Calendar className="h-4 w-4" />}
              label="Created"
              value={lead.createdAt}
            />

            <InfoCard
              icon={<Calendar className="h-4 w-4" />}
              label="Updated"
              value={lead.updatedAt}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoCard({
  icon,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        {label}
      </div>

      <div className="wrap-break-words font-medium">
        {value}
      </div>
    </div>
  );
}