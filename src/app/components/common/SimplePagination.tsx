import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SimplePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 mt-8 pb-20" aria-label="Bladsynavigasie">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 dark:border-border text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Vorige bladsy"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded text-sm font-bold transition-colors ${
            page === currentPage
              ? 'bg-custom-primary text-white'
              : 'border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-muted'
          }`}
          aria-label={`Bladsy ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 dark:border-border text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Volgende bladsy"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};
