import { Button, ShimmerButton } from "@/components/ui";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <ShimmerButton>
        Start Your Project
      </ShimmerButton>

      <Button variant="outline" size="lg">
        View Portfolio
      </Button>
    </div>
  );
}