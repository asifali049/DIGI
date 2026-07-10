"use client";

import { useEffect } from "react";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Loader2,
  RotateCcw,
} from "lucide-react";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from "@/components/ui";

/* -------------------------------------------------------------------------- */
/*                                   Schema                                   */
/* -------------------------------------------------------------------------- */

const categories = [
  "web",
  "mobile",
  "branding",
  "ui-ux",
  "marketing",
] as const;

const projectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3)
    .max(120),

  slug: z
    .string()
    .trim()
    .min(3)
    .max(150),

  client: z
    .string()
    .trim()
    .min(2)
    .max(80),

  description: z
    .string()
    .trim()
    .min(20)
    .max(1000),

  category: z.enum(categories),

  liveUrl: z.union([
    z.literal(""),
    z.string().url(),
  ]),

  githubUrl: z.union([
    z.literal(""),
    z.string().url(),
  ]),

  thumbnail: z.string(),

  featured: z.boolean(),

  published: z.boolean(),
});

export type ProjectFormValues =
  z.infer<typeof projectSchema>;

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormValues>;

  isSubmitting?: boolean;

  onSubmit: (
    values: ProjectFormValues
  ) => void;
}

/* -------------------------------------------------------------------------- */

export function ProjectForm({
  defaultValues,
  isSubmitting = false,
  onSubmit,
}: ProjectFormProps) {
  const form =
    useForm<ProjectFormValues>({
      resolver:
        zodResolver(projectSchema),

      mode: "onBlur",

      reValidateMode:
        "onChange",

      shouldFocusError: true,

      defaultValues: {
        title: "",

        slug: "",

        client: "",

        description: "",

        category: "web",

        liveUrl: "",

        githubUrl: "",

        thumbnail: "",

        featured: false,

        published: false,

        ...defaultValues,
      },
    });

  const title =
    form.watch("title");

  useEffect(() => {
    const currentSlug =
      form.getValues("slug");

    if (!currentSlug) {
      form.setValue(
        "slug",
        title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
      );
    }
  }, [title, form]);

  const {
    isDirty,
    isValid,
  } = form.formState;

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(
          onSubmit
        )}
        className="space-y-8"
      >
        <div className="grid gap-6 lg:grid-cols-2">
  
  {/* -------------------------------------------------------------------------- */}
{/* Basic Information                                                          */}
{/* -------------------------------------------------------------------------- */}

<FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Project Title</FormLabel>

      <FormControl>
        <Input
          autoComplete="off"
          placeholder="Premium Digital Agency"
          {...field}
        />
      </FormControl>

      <FormDescription>
        Public project title displayed on the website.
      </FormDescription>

      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="slug"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Slug</FormLabel>

      <FormControl>
        <Input
          autoComplete="off"
          placeholder="premium-digital-agency"
          {...field}
        />
      </FormControl>

      <FormDescription>
        Used inside project URLs.
      </FormDescription>

      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="client"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Client</FormLabel>

      <FormControl>
        <Input
          autoComplete="off"
          placeholder="Internal / Apple / Google"
          {...field}
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="category"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Category</FormLabel>

      <Select
        value={field.value}
        onValueChange={field.onChange}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
        </FormControl>

        <SelectContent>
          <SelectItem value="web">
            Web
          </SelectItem>

          <SelectItem value="mobile">
            Mobile
          </SelectItem>

          <SelectItem value="branding">
            Branding
          </SelectItem>

          <SelectItem value="ui-ux">
            UI / UX
          </SelectItem>

          <SelectItem value="marketing">
            Marketing
          </SelectItem>
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  )}
/>

</div>

{/* -------------------------------------------------------------------------- */}
{/* Description                                                                */}
{/* -------------------------------------------------------------------------- */}

<FormField
  control={form.control}
  name="description"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Description</FormLabel>

      <FormControl>
        <Textarea
          rows={8}
          className="resize-y"
          placeholder="Describe your project..."
          {...field}
        />
      </FormControl>

      <div className="flex items-center justify-between">
        <FormDescription>
          Brief overview of the project.
        </FormDescription>

        <span className="text-xs text-muted-foreground">
          {field.value.length}/1000
        </span>
      </div>

      <FormMessage />
    </FormItem>
  )}
/>

{/* -------------------------------------------------------------------------- */}
{/* URLs                                                                       */}
{/* -------------------------------------------------------------------------- */}

<div className="grid gap-6 lg:grid-cols-2">

<FormField
  control={form.control}
  name="liveUrl"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Live Website</FormLabel>

      <FormControl>
        <Input
          placeholder="https://example.com"
          {...field}
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="githubUrl"
  render={({ field }) => (
    <FormItem>
      <FormLabel>GitHub Repository</FormLabel>

      <FormControl>
        <Input
          placeholder="https://github.com/..."
          {...field}
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="thumbnail"
  render={({ field }) => (
    <FormItem className="lg:col-span-2">
      <FormLabel>Thumbnail</FormLabel>

      <FormControl>
        <Input
          placeholder="/images/project.jpg"
          {...field}
        />
      </FormControl>

      <FormDescription>
        Image URL or public path.
      </FormDescription>

      <FormMessage />
    </FormItem>
  )}
/>

</div>

{/* -------------------------------------------------------------------------- */}
{/* Settings                                                                   */}
{/* -------------------------------------------------------------------------- */}

<div className="grid gap-6 md:grid-cols-2">

<FormField
  control={form.control}
  name="featured"
  render={({ field }) => (
    <FormItem className="flex items-center justify-between rounded-xl border p-5">
      <div>
        <FormLabel>
          Featured Project
        </FormLabel>

        <FormDescription>
          Show project on homepage.
        </FormDescription>
      </div>

      <FormControl>
        <Switch
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="published"
  render={({ field }) => (
    <FormItem className="flex items-center justify-between rounded-xl border p-5">
      <div>
        <FormLabel>
          Published
        </FormLabel>

        <FormDescription>
          Visible on public website.
        </FormDescription>
      </div>

      <FormControl>
        <Switch
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
    </FormItem>
  )}
/>

</div>

{/* -------------------------------------------------------------------------- */}
{/* Actions                                                                    */}
{/* -------------------------------------------------------------------------- */}

<div className="flex flex-col-reverse gap-3 border-t pt-8 sm:flex-row sm:justify-end">

  <Button
    type="button"
    variant="outline"
    disabled={!isDirty || isSubmitting}
    onClick={() => form.reset()}
  >
    <RotateCcw className="mr-2 h-4 w-4" />
    Reset
  </Button>

  <Button
    type="submit"
    disabled={
      isSubmitting ||
      !isDirty ||
      !isValid
    }
    className="min-w-[180px]"
  >
    {isSubmitting ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Saving Project...
      </>
    ) : (
      "Save Project"
    )}
  </Button>

</div>

      </form>
    </Form>
  );
}