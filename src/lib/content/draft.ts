import { draftMode } from "next/headers";

export async function isDraftModeEnabled(): Promise<boolean> {
  const { isEnabled } = await draftMode();
  return isEnabled;
}

export async function getContentContext() {
  return {
    draft: await isDraftModeEnabled(),
  };
}