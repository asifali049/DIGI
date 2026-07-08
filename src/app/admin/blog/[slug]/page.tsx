import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui";
import { BlogEditorForm } from "@/components/admin/blog/blog-editor-form";
import { getBlogPost } from "@/lib/content/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EditBlogPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Blog Post
          </h1>

          <p className="text-muted-foreground mt-2">
            Update your article.
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/admin/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      <BlogEditorForm
        mode="edit"
        initialData={post}
      />
    </div>
  );
}