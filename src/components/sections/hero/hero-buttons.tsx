import { Button } from "@/components/ui";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button size="lg">
        Start Your Project
      </Button>

      <Button variant="outline" size="lg">
        View Portfolio
      </Button>
    </div>
  );
}