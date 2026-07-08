import type { ContentProviderType } from "./types";

export const CONTENT_PROVIDER = {
  MDX: "mdx",
  PRISMA: "prisma",
  CMS: "cms",
} as const;

export const DEFAULT_CONTENT_PROVIDER: ContentProviderType =
  CONTENT_PROVIDER.MDX;