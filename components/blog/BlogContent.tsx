"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/sanity/types";

/* ── Custom Portable Text components ──────────────────────────── */
const components = {
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => {
      const url = urlFor(value).width(800).url();
      return (
        <figure className="my-8">
          <img
            src={url}
            alt={value.alt ?? ""}
            className="w-full rounded-xl"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-400 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({
      value,
    }: {
      value: { type: "info" | "warning" | "tip"; text: string };
    }) => {
      const styles = {
        info: "border-blue-500 bg-blue-50 text-blue-900",
        warning: "border-amber-500 bg-amber-50 text-amber-900",
        tip: "border-emerald-500 bg-emerald-50 text-emerald-900",
      };
      return (
        <div
          className={`border-l-4 p-4 rounded-r-xl my-6 ${styles[value.type] ?? styles.info}`}
        >
          {value.text}
        </div>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogContent({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="blog-prose max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <PortableText value={body} components={components} />
    </div>
  );
}
