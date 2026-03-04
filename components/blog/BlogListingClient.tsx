"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/sanity/types";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

const POSTS_PER_PAGE = 9;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BlogListingClient({ posts }: { posts: BlogPost[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <>
      {posts.length === 0 ? (
        <p className="text-center text-slate-400 py-16">
          No blog posts yet. Check back soon!
        </p>
      ) : (
        <>
          <motion.div
            key={page}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paginated.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>

          <BlogPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => {
              setPage(p);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </>
      )}
    </>
  );
}
