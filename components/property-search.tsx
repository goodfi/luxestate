'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';

export function PropertySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery === initialQuery) return;

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearchQuery) {
      params.set('query', debouncedSearchQuery);
    } else {
      params.delete('query');
    }

    // Reset page when search changes
    params.delete('page');

    router.push(`/investments?${params.toString()}`);
  }, [debouncedSearchQuery, initialQuery, router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (searchQuery) {
      params.set('query', searchQuery);
    } else {
      params.delete('query');
    }

    // Reset page when search changes
    params.delete('page');

    router.push(`/investments?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search by location, property name, or features..."
        className="pl-10 pr-20"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        type="submit"
        size="sm"
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        Search
      </Button>
    </form>
  );
}
