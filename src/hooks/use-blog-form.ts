"use client";

import { useMemo } from "react";

import {
  DefaultValues,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  blogFormSchema,
  DEFAULT_BLOG_FORM_VALUES,
  type BlogFormValues,
} from "@/schemas/blog.schema";

interface UseBlogFormOptions {
  defaultValues?: Partial<BlogFormValues>;
}

function mergeDefaultValues(
  defaultValues?: Partial<BlogFormValues>
): DefaultValues<BlogFormValues> {
  return {
    ...DEFAULT_BLOG_FORM_VALUES,
    ...defaultValues,
  };
}

export function useBlogForm({
  defaultValues,
}: UseBlogFormOptions = {}) {
  const values = useMemo(
    () => mergeDefaultValues(defaultValues),
    [defaultValues]
  );

  return useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),

    defaultValues: values,

    mode: "onBlur",

    reValidateMode: "onChange",

    criteriaMode: "all",

    shouldFocusError: true,

    shouldUnregister: false,
  });
}