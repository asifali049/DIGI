"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Form,
  FormControl,
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

import {
  blogSchema,
  type BlogFormValues,
} from "./blog-schema";

interface BlogFormProps {
  defaultValues?: Partial<BlogFormValues>;
  onSubmit: (values: BlogFormValues) => void;
  isSubmitting?: boolean;
}

export function BlogForm({
  defaultValues,
  onSubmit,
  isSubmitting = false,
}: BlogFormProps) {
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      coverImage: "",
      category: "development",
      status: "draft",
      tags: [],
      featured: false,
      published: false,
      author: "",
      readingTime: 5,
      seoTitle: "",
      seoDescription: "",
      canonicalUrl: "",
      publishedAt: "",
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="grid gap-6 lg:grid-cols-2">

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Building High Performance Apps"
                    {...field}
                  />
                </FormControl>

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
                    placeholder="building-high-performance-apps"
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
                    <SelectItem value="development">
                      Development
                    </SelectItem>

                    <SelectItem value="design">
                      Design
                    </SelectItem>

                    <SelectItem value="ai">
                      AI
                    </SelectItem>

                    <SelectItem value="startup">
                      startup
                    </SelectItem>

                    <SelectItem value="marketing">
                      Marketing
                    </SelectItem>

                    <SelectItem value="seo">
                      SEO
                    </SelectItem>

                    <SelectItem value="business">
                      Business
                    </SelectItem>

                    <SelectItem value="technology">
                      Technology
                    </SelectItem>

                    <SelectItem value="case-study">
                      Case Studies
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="draft">
                      Draft
                    </SelectItem>

                    <SelectItem value="published">
                      Published
                    </SelectItem>

                    <SelectItem value="scheduled">
                      Scheduled
                    </SelectItem>

                    <SelectItem value="archived">
                      Archived
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>

                <FormControl>
                  <Input
                    placeholder="/images/blog/cover.jpg"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Asif Ali"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="readingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reading Time (minutes)</FormLabel>

                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(Number(e.target.value))
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>

              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="Short article summary..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>

              <FormControl>
                <Textarea
                  rows={12}
                  placeholder="Write your article or MDX content..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="seoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SEO Title</FormLabel>

                <FormControl>
                  <Input
                    placeholder="SEO title"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="canonicalUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Canonical URL</FormLabel>

                <FormControl>
                  <Input
                    placeholder="https://example.com/blog/post"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="seoDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SEO Description</FormLabel>

              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="SEO description..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>

              <FormControl>
                <Input
                  placeholder="Next.js, React, SEO"
                  value={field.value.join(", ")}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                    )
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-xl border p-4">
                <div>
                  <FormLabel>Featured Article</FormLabel>

                  <p className="text-sm text-muted-foreground">
                    Highlight this article.
                  </p>
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
              <FormItem className="flex items-center justify-between rounded-xl border p-4">
                <div>
                  <FormLabel>Published</FormLabel>

                  <p className="text-sm text-muted-foreground">
                    Make this article publicly visible.
                  </p>
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

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : "Save Article"}
        </Button>
      </form>
    </Form>
  );
}