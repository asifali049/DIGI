import { Button, ShimmerButton } from "@/components/ui";

export function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
      <ShimmerButton className="w-full sm:w-auto">
        Start Your Project
      </ShimmerButton>

      <Button
        variant="outline"
        size="lg"
        className="w-full sm:w-auto"
      >
        View Portfolio
      </Button>
    </div>
  );
}