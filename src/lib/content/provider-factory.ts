import { DEFAULT_CONTENT_PROVIDER, CONTENT_PROVIDER } from "./constants";
import { mdxBlogProvider } from "./providers/mdx-provider";
import type { BlogContentProvider } from "./types";

export class ContentProviderFactory {
  static createBlogProvider(): BlogContentProvider {
    switch (DEFAULT_CONTENT_PROVIDER) {
      case CONTENT_PROVIDER.MDX:
        return mdxBlogProvider;

      case CONTENT_PROVIDER.PRISMA:
        throw new Error(
          "Prisma content provider has not been implemented yet."
        );

      case CONTENT_PROVIDER.CMS:
        throw new Error(
          "CMS content provider has not been implemented yet."
        );

      default:
        return mdxBlogProvider;
    }
  }
}