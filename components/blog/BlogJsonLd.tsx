import type { BlogPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

const BASE = "https://citadeldigitalsignage.com";

export default function BlogJsonLd({ post }: { post: BlogPost }) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : `${BASE}/logo.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name ?? "Citadel Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Citadel Digital Signage",
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
