"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="p-2 rounded-lg border border-slate-200 text-slate-500
                   hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors
            ${page === currentPage
              ? "bg-blue-600 text-white"
              : "border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="p-2 rounded-lg border border-slate-200 text-slate-500
                   hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
