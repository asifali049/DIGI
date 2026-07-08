import { CreateTestimonialDialog } from "@/components/admin/testimonials/create-testimonial-dialog";
import { TestimonialTable } from "@/components/admin/testimonials/testimonial-table";

export default function TestimonialsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Testimonials
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage client testimonials, featured reviews, ratings,
            and approval status from one place.
          </p>
        </div>

        <CreateTestimonialDialog />
      </div>

      {/* Table */}
      <TestimonialTable />
    </div>
  );
}