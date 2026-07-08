import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  EmptyState,
  Progress,
  Spinner,
  StatsCard,
  Timeline,
} from "@/components/ui";

export default function DevUIPage() {
  return (
    <main className="container mx-auto space-y-16 py-12">
      <section>
        <h1 className="mb-8 text-4xl font-bold">
          UI Design System
        </h1>

        <p className="text-muted-foreground">
          Internal development page for previewing reusable components.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Buttons
        </h2>

        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Badges
        </h2>

        <div className="flex gap-3">
          <Badge>New</Badge>
          <Badge variant="secondary">Beta</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Progress
        </h2>

        <Progress value={70} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Breadcrumb
        </h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbPage>
                UI
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Card
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>Example Card</CardTitle>
          </CardHeader>

          <CardContent>
            Production reusable card component.
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Accordion
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is this?
            </AccordionTrigger>

            <AccordionContent>
              Internal UI showcase page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Stats Card
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <StatsCard
            title="Revenue"
            value="$42,800"
            trend={12.6}
            description="vs last month"
          />

          <StatsCard
            title="Projects"
            value={24}
            trend={5.3}
            description="Active projects"
          />

          <StatsCard
            title="Clients"
            value={128}
            trend={-2.1}
            description="vs last week"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Timeline
        </h2>

        <Timeline
          items={[
            {
              id: "1",
              title: "Planning",
              description: "Project planning completed.",
              date: "Jan",
            },
            {
              id: "2",
              title: "Design",
              description: "UI finalized.",
              date: "Feb",
            },
            {
              id: "3",
              title: "Development",
              description: "Frontend in progress.",
              date: "Mar",
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Empty State
        </h2>

        <EmptyState
          title="No Data"
          description="Nothing to display."
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Loading
        </h2>

        <Spinner size={36} />
      </section>
    </main>
  );
}