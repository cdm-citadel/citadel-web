import { getAllPosts } from "@/lib/sanity/queries";

const BASE = "https://citadeldigitalsignage.com";

export async function GET() {
  let posts: { slug: string; title: string; excerpt: string; publishedAt: string; author?: { name: string } }[] = [];

  try {
    posts = await getAllPosts();
  } catch {
    /* Sanity not configured — return empty feed */
  }

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt ?? ""}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.author?.name ? `<author>${post.author.name}</author>` : ""}
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Citadel Digital Signage Blog</title>
    <link>${BASE}/blog</link>
    <description>Tips, guides, and industry insights on digital signage for every industry.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
