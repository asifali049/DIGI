import type { ContentProvider } from "./types";
import { ContentProviderFactory } from "./provider-factory";

class ContentService implements ContentProvider {
  readonly blog = ContentProviderFactory.createBlogProvider();
}

export const content = new ContentService();