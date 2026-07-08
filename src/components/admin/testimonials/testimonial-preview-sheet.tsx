"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  Eye,
  Star,
} from "lucide-react";

import type { Testimonial } from "@/types/testimonial";
import { TestimonialStatusBadge } from "./testimonial-status-badge";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

interface TestimonialPreviewSheetProps {
  testimonial: Testimonial;
  trigger?: React.ReactNode;
}

export function TestimonialPreviewSheet({
  testimonial,
  trigger,
}: TestimonialPreviewSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            aria-label="Preview testimonial"
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}
      </SheetTrigger>

      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>
            Testimonial Preview
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Header */}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={testimonial.avatar}
                alt={testimonial.name}
              />

              <AvatarFallback>
                {testimonial.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-3xl font-bold">
                  {testimonial.name}
                </h2>

                {testimonial.featured && (
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                )}

                <Badge variant="secondary">
                  {testimonial.company}
                </Badge>
              </div>

              <p className="text-muted-foreground">
                {testimonial.designation}
              </p>

              <TestimonialStatusBadge
                status={testimonial.status}
              />

              <div className="flex gap-1">
                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Details */}

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={<Building2 className="h-4 w-4" />}
              label="Company"
              value={testimonial.company}
            />

            <InfoCard
              icon={<Briefcase className="h-4 w-4" />}
              label="Project"
              value={testimonial.project}
            />

            <InfoCard
              icon={<Calendar className="h-4 w-4" />}
              label="Created"
              value={testimonial.createdAt}
            />

            <InfoCard
              icon={<Star className="h-4 w-4" />}
              label="Rating"
              value={`${testimonial.rating} / 5`}
            />
          </div>

          <Separator />

          {/* Testimonial */}

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Client Review
            </h3>

            <blockquote className="rounded-2xl border bg-muted/40 p-6 leading-8 italic text-muted-foreground">
              “{testimonial.message}”
            </blockquote>
          </div>

          {testimonial.featured && (
            <>
              <Separator />

              <Badge className="w-fit">
                ⭐ Featured Testimonial
              </Badge>
            </>
          )}
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

      <div className="font-medium">
        {value}
      </div>
    </div>
  );
}