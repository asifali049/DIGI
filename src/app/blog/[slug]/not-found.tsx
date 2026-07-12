import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <SearchX className="h-12 w-12 text-primary" />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            Article Not Found
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            The article you&apos;re looking for doesn&apos;t exist, has been removed,
            or the URL is incorrect.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
            >
              <Link href="/">
                Go to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}