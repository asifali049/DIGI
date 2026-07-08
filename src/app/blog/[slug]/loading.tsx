import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Skeleton className="mb-8 h-8 w-40 rounded-full" />

          <Skeleton className="h-14 w-full max-w-4xl" />
          <Skeleton className="mt-4 h-14 w-3/4" />

          <Skeleton className="mt-8 h-6 w-full max-w-3xl" />
          <Skeleton className="mt-3 h-6 w-5/6" />

          <div className="mt-10 flex gap-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-32" />
          </div>

          <Skeleton className="mt-14 aspect-[16/8] w-full rounded-3xl" />
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-6 w-full"
            />
          ))}
        </div>
      </section>
    </main>
  );
}