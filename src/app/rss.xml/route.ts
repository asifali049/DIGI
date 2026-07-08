import { getBlogPosts } from "@/lib/blog";
import { generateRSS } from "@/lib/rss";

export async function GET() {
  const posts = await getBlogPosts();

  const rss = generateRSS(posts);

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}