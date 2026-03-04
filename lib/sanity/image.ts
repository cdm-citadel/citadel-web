import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";
import type { SanityImage } from "./types";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Chainable image URL builder — returns empty string when Sanity is not configured */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: SanityImage): any {
  if (!builder) {
    const noop = (): any => new Proxy({} as any, { get: () => noop });
    noop.url = () => "";
    return new Proxy(noop as any, { get: (_t, p) => (p === "url" ? () => "" : noop) });
  }
  return builder.image(source);
}
