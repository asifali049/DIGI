import { contentCollections } from "./config";

export async function getCollection<
  T extends keyof typeof contentCollections
>(collection: T) {
  return contentCollections[collection].loader();
}

export async function getCollections() {
  const entries = await Promise.all(
    Object.entries(contentCollections).map(
      async ([key, collection]) => [
        key,
        await collection.loader(),
      ] as const
    )
  );

  return Object.fromEntries(entries) as {
    [K in keyof typeof contentCollections]: Awaited<
      ReturnType<(typeof contentCollections)[K]["loader"]>
    >;
  };
}