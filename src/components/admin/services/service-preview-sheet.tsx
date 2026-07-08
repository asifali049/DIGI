"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock3,
  ExternalLink,
  Globe,
  Star,
  Tag,
} from "lucide-react";

import type { Service } from "@/types/service";
import { ServiceStatusBadge } from "./service-status-badge";

import {
  Badge,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";

interface ServicePreviewSheetProps {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ServicePreviewSheet({
  service,
  open,
  onOpenChange,
}: ServicePreviewSheetProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Service Preview</SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Image */}

          <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="800px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          {/* Header */}

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold">
                {service.title}
              </h2>

              {service.featured && (
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              )}

              {service.published && (
                <Badge variant="secondary">
                  Published
                </Badge>
              )}
            </div>

            <ServiceStatusBadge
              status={service.status}
            />

            <p className="leading-7 text-muted-foreground">
              {service.shortDescription}
            </p>
          </div>

          <Separator />

          {/* Details */}

          <div className="grid gap-5 md:grid-cols-2">
            <InfoItem
              icon={<Tag className="h-4 w-4" />}
              label="Category"
              value={service.category.replace(
                /-/g,
                " "
              )}
            />

            <InfoItem
              icon={<Clock3 className="h-4 w-4" />}
              label="Delivery Time"
              value={
                service.deliveryTime ?? "Custom"
              }
            />

            <InfoItem
              icon={<Globe className="h-4 w-4" />}
              label="Starting Price"
              value={
                service.priceFrom != null
                  ? `$${service.priceFrom.toLocaleString()}`
                  : "Custom Pricing"
              }
            />

            <InfoItem
              icon={<Calendar className="h-4 w-4" />}
              label="Last Updated"
              value={service.updatedAt}
            />
          </div>

          <Separator />

          {/* Description */}

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Description
            </h3>

            <p className="whitespace-pre-line leading-7 text-muted-foreground">
              {service.description}
            </p>
          </div>

          <Separator />

          {/* Technologies */}

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <Button
            asChild
            className="w-full"
          >
            <Link
              href={`/services/${service.slug}`}
              target="_blank"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Public Service
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="rounded-xl border p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        {label}
      </div>

      <div className="font-medium capitalize">
        {value}
      </div>
    </div>
  );
}