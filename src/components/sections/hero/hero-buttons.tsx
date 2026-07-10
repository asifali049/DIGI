import Link from "next/link";

import { Button, ShimmerButton } from "@/components/ui";

export function HeroButtons() {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        gap-4
        sm:mt-10
        sm:flex-row
        sm:flex-wrap
        sm:justify-center
        lg:justify-start
      "
    >
      <ShimmerButton
        asChild
        className="w-full sm:w-auto"
      >
        <Link
          href="/contact"
          aria-label="Start your project"
        >
          Start Your Project
        </Link>
      </ShimmerButton>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="w-full sm:w-auto"
      >
        <Link
          href="/portfolio"
          aria-label="View portfolio"
        >
          View Portfolio
        </Link>
      </Button>
    </div>
  );
}