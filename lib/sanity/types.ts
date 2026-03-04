import type { PortableTextBlock } from "next-sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Author {
  name: string;
  role?: string;
  avatar?: SanityImage;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  excerpt: string;
  coverImage: SanityImage;
  body: PortableTextBlock[];
  topics: string[];
  industry?: string;
  featured: boolean;
  estimatedReadingTime: number;
}
