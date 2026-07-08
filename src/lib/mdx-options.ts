import type { PluggableList } from "unified";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export const remarkPlugins: PluggableList = [
  remarkGfm,
];

export const rehypePlugins: PluggableList = [
  rehypeSlug,

  [
    rehypeAutolinkHeadings,
    {
      behavior: "wrap",
    },
  ],

  [
    rehypePrettyCode,
    {
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
      keepBackground: false,
      defaultLang: "text",
    },
  ],
];