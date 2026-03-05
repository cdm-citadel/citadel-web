import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * POST /api/revalidate
 * On-demand ISR endpoint — called by a Sanity webhook when blog content is
 * published, updated, or deleted.
 *
 * Env var required:
 *   SANITY_REVALIDATE_SECRET – shared secret set in both Sanity webhook config and Vercel env vars
 */

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate all blog-related paths
    revalidatePath("/blog");
    revalidatePath("/blog/[slug]", "page");
    revalidatePath("/blog/topic/[topic]", "page");
    revalidatePath("/blog/industry/[industry]", "page");
    revalidatePath("/sitemap.xml");
    revalidatePath("/feed.xml");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
