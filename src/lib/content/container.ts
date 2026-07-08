import { ContentProviderFactory } from "./provider-factory";
import type { BlogContentProvider } from "./types";

export class ContentContainer {
  private static blogProvider: BlogContentProvider;

  static getBlogProvider(): BlogContentProvider {
    if (!this.blogProvider) {
      this.blogProvider = ContentProviderFactory.createBlogProvider();
    }

    return this.blogProvider;
  }
}