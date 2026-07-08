"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  blogSchema,
  type BlogFormValues,
} from "@/schemas/blog.schema";

interface UseBlogFormOptions {
  defaultValues?: Partial<BlogFormValues>;
}

export function useBlogForm({
  defaultValues,
}: UseBlogFormOptions = {}) {
  return useForm<BlogFormValues>({
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

    mode: "onBlur",
  });
}