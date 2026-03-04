import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/** Whether Sanity credentials are configured */
export const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId);

/** Sanity client — only usable when credentials are configured */
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;
