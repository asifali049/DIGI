import { getAllMdxFiles, getMdxFile } from "@/lib/mdx";
import { renderMDX } from "@/lib/mdx-renderer";
import type { BlogPost } from "@/types/blog";

type BlogFrontmatter = Omit<BlogPost, "content">;

export async function getBlogPost(
  slug: string
): Promise<BlogPost | null> {
  const source = await getMdxFile(slug);

  if (!source) {
    return null;
  }

  const { content, frontmatter } =
    await renderMDX<BlogFrontmatter>(source);

  return {
    ...frontmatter,
    slug,

    // Temporary until we separate rendered/raw blog types
    content: content as never,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = await getAllMdxFiles();

  const posts = await Promise.all(
    files.map(async ({ slug }) => getBlogPost(slug))
  );

  return posts.filter(
    (post): post is BlogPost => post !== null
  );
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return (await getBlogPosts()).filter((post) => post.featured);
}

export async function getPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  return (await getBlogPosts()).filter(
    (post) => post.category.slug === categorySlug
  );
}