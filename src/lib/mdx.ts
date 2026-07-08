import fs from "node:fs/promises";
import path from "node:path";

const BLOG_PATH = path.join(process.cwd(), "src", "content", "blog");

export async function getMdxFile(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export async function getAllMdxFiles() {
  try {
    const files = await fs.readdir(BLOG_PATH);

    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
        file,
      }));
  } catch {
    return [];
  }
}

export async function mdxFileExists(slug: string) {
  const file = await getMdxFile(slug);
  return file !== null;
}