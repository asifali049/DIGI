import type { MDXComponents } from "mdx/types";
import type { ReactElement } from "react";
import Link from "next/link";

import { CodeBlock } from "./code-block";

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
        {...props}
      />
    ),

    h2: (props) => (
      <h2
        className="mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
        {...props}
      />
    ),

    p: (props) => (
      <p
        className="leading-7 [&:not(:first-child)]:mt-6"
        {...props}
      />
    ),

    ul: (props) => (
      <ul
        className="my-6 ml-6 list-disc"
        {...props}
      />
    ),

    ol: (props) => (
      <ol
        className="my-6 ml-6 list-decimal"
        {...props}
      />
    ),

    li: (props) => (
      <li
        className="mt-2"
        {...props}
      />
    ),

    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 pl-6 italic"
        {...props}
      />
    ),

    hr: (props) => (
      <hr
        className="my-8"
        {...props}
      />
    ),

    table: (props) => (
      <div className="my-6 w-full overflow-x-auto">
        <table
          className="w-full"
          {...props}
        />
      </div>
    ),

    a: ({ href = "", ...props }) => {
      const external = href.startsWith("http");

      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
            {...props}
          />
        );
      }

      return (
        <Link
          href={href}
          className="font-medium underline underline-offset-4"
          {...props}
        />
      );
    },

    pre: ({ children }) => {
      let code = "";
      let language = "";

      if (
        children &&
        typeof children === "object" &&
        "props" in children
      ) {
        const child = children as ReactElement<{
          children?: string;
          className?: string;
        }>;

        code =
          typeof child.props.children === "string"
            ? child.props.children
            : "";

        language =
          child.props.className?.replace(
            "language-",
            ""
          ) ?? "";
      }

      return (
        <CodeBlock
          code={code}
          language={language}
        >
          {children}
        </CodeBlock>
      );
    },

    code: (props) => <code {...props} />,

    ...components,
  };
}