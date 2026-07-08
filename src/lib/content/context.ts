import { cache } from "react";
import { getContentContext } from "./draft";

export interface ContentContext {
  draft: boolean;
}

export const getCachedContentContext = cache(
  async (): Promise<ContentContext> => {
    return getContentContext();
  }
);