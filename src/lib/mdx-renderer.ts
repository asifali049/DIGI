import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";

import { remarkPlugins, rehypePlugins } from "./mdx-options";

type Frontmatter = Record<string, unknown>;

export interface RenderMDXResult<T extends Frontmatter> {
  content: ReactElement;
  frontmatter: T;
}

export async function renderMDX<T extends Frontmatter = Frontmatter>(
  source: string
): Promise<RenderMDXResult<T>> {
  const { content, frontmatter } = await compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
      },
    },
  });

  return {
    content,
    frontmatter,
  };
}