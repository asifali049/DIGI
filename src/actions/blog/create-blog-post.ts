"use server";

import { blogSchema } from "@/schemas/blog.schema";

export interface CreateBlogPostResult {
  success: boolean;
  message: string;
}

export async function createBlogPostAction(
  formData: unknown
): Promise<CreateBlogPostResult> {
  const result = blogSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed.",
    };
  }

  const data = result.data;

  // TODO:
  // - Generate frontmatter
  // - Create MDX file
  // - Save to content/blog
  // - Regenerate search index
  // - Revalidate blog routes

  console.log("Creating blog post:", data);

  return {
    success: true,
    message: "Blog post validated successfully.",
  };
}
