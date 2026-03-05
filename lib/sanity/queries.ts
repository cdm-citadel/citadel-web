import { sanityClient, isSanityConfigured } from "./client";
import type { BlogPost } from "./types";

/* ── Shared projection ─────────────────────────────────────────── */
const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  updatedAt,
  author->{name, role, avatar},
  excerpt,
  coverImage,
  body,
  topics,
  industry,
  featured,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
`;

/** Safe fetch — returns fallback when Sanity is not configured */
async function query<T>(groq: string, params?: Record<string, unknown>, fallback: T = [] as T): Promise<T> {
  if (!isSanityConfigured || !sanityClient) return fallback;
  try {
    const result = await sanityClient.fetch<T>(groq, params ?? {});
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

/* ── All published posts (sorted newest first) ─────────────────── */
export async function getAllPosts(): Promise<BlogPost[]> {
  return query<BlogPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {${postFields}}`
  );
}

/* ── Single post by slug ───────────────────────────────────────── */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return query<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {${postFields}}`,
    { slug },
    null
  );
}

/* ── All unique topics across published posts ──────────────────── */
export async function getAllTopics(): Promise<string[]> {
  const raw = await query<string[]>(
    `array::unique(*[_type == "post" && !(_id in path("drafts.**"))].topics[])`
  );
  return raw.filter((t): t is string => typeof t === "string" && t.length > 0);
}

/* ── All unique industries across published posts ──────────────── */
export async function getAllIndustries(): Promise<string[]> {
  return query<string[]>(
    `array::unique(*[_type == "post" && !(_id in path("drafts.**")) && defined(industry)].industry)`
  );
}

/* ── Posts filtered by topic ───────────────────────────────────── */
export async function getPostsByTopic(topic: string): Promise<BlogPost[]> {
  return query<BlogPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**")) && $topic in topics] | order(publishedAt desc) {${postFields}}`,
    { topic }
  );
}

/* ── Posts filtered by industry ────────────────────────────────── */
export async function getPostsByIndustry(industry: string): Promise<BlogPost[]> {
  return query<BlogPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**")) && industry == $industry] | order(publishedAt desc) {${postFields}}`,
    { industry }
  );
}

/* ── Related posts (same industry or overlapping topics) ───────── */
export async function getRelatedPosts(
  currentSlug: string,
  industry?: string,
  topics: string[] = [],
  limit = 3
): Promise<BlogPost[]> {
  return query<BlogPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**")) && slug.current != $currentSlug] | order(
      select(
        industry == $industry => -10,
        count((topics[])[@ in $topics]) > 0 => -5,
        0
      ),
      publishedAt desc
    )[0...$limit] {${postFields}}`,
    { currentSlug, industry: industry ?? "", topics, limit }
  );
}

/* ── All post slugs (for generateStaticParams) ─────────────────── */
export async function getAllPostSlugs(): Promise<string[]> {
  return query<string[]>(
    `*[_type == "post" && !(_id in path("drafts.**"))].slug.current`
  );
}
