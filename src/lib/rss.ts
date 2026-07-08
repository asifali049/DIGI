import type { BlogPost } from "@/types/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://yourdomain.com";

export function generateRSS(posts: BlogPost[]) {
  const items = posts
    .map((post) => {
      const publishedDate = post.publishedAt
        ? new Date(post.publishedAt)
        : new Date();

      return `
<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${siteUrl}/blog/${post.slug}</link>
  <guid>${siteUrl}/blog/${post.slug}</guid>

  <description><![CDATA[
    ${post.excerpt}
  ]]></description>

  <pubDate>${publishedDate.toUTCString()}</pubDate>

  <category>${post.category.name}</category>

  ${post.tags
    .map((tag) => `<category>${tag}</category>`)
    .join("\n")}
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>

    <title>Premium Digital Agency Blog</title>

    <link>${siteUrl}</link>

    <description>
      Latest articles from Premium Digital Agency.
    </description>

    <language>en-US</language>

    ${items}

  </channel>
</rss>`;
}