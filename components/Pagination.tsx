'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `/investments?${params.toString()}`;
  };

  // Generate page numbers to display
  const generatePagination = (currentPage: number, totalPages: number) => {
    // If there are 7 or fewer pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If current page is among the first 3 pages
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
    }

    // If current page is among the last 3 pages
    if (currentPage >= totalPages - 2) {
      return [
        1,
        2,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // If current page is somewhere in the middle
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const pageNumbers = generatePagination(currentPage, totalPages);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <PaginationPrevious
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        currentPage={currentPage}
        createPageURL={createPageURL}
      />

      {pageNumbers.map((page, i) => (
        <div key={i}>
          {page === '...' ? (
            <PaginationEllipsis />
          ) : (
            <PaginationItem
              page={page}
              currentPage={currentPage}
              createPageURL={createPageURL}
            />
          )}
        </div>
      ))}

      <PaginationNext
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        currentPage={currentPage}
        totalPages={totalPages}
        createPageURL={createPageURL}
      />
    </div>
  );
}

interface PaginationItemProps {
  page: number | string;
  currentPage: number;
  createPageURL: (pageNumber: number | string) => string;
}

export function PaginationItem({
  page,
  currentPage,
  createPageURL,
}: PaginationItemProps) {
  return (
    <Button
      variant={currentPage === page ? 'default' : 'outline'}
      size="icon"
      asChild={currentPage !== page}
    >
      {currentPage !== page ? (
        <Link href={createPageURL(page)}>
          {page}
          <span className="sr-only">Page {page}</span>
        </Link>
      ) : (
        <span>
          {page}
          <span className="sr-only">Page {page}</span>
        </span>
      )}
    </Button>
  );
}

export function PaginationEllipsis() {
  return (
    <Button variant="outline" size="icon" disabled>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </Button>
  );
}

interface PaginationPreviousProps {
  variant: 'default' | 'outline';
  size: 'icon';
  disabled: boolean;
  currentPage: number;
  createPageURL: (pageNumber: number | string) => string;
}

export function PaginationPrevious({
  variant,
  size,
  disabled,
  currentPage,
  createPageURL,
}: PaginationPreviousProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      asChild={currentPage > 1}
    >
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      ) : (
        <span>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </span>
      )}
    </Button>
  );
}

interface PaginationNextProps {
  variant: 'default' | 'outline';
  size: 'icon';
  disabled: boolean;
  currentPage: number;
  totalPages: number;
  createPageURL: (pageNumber: number | string) => string;
}

export function PaginationNext({
  variant,
  size,
  disabled,
  currentPage,
  totalPages,
  createPageURL,
}: PaginationNextProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      asChild={currentPage < totalPages}
    >
      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      ) : (
        <span>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </span>
      )}
    </Button>
  );
}

export const PaginationContent = () => {
  return null;
};
export const PaginationLink = () => {
  return null;
};
