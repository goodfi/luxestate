'use client';

import { useSearchParams } from 'next/navigation';
import { PropertyCard } from '@/components/property-card';

import { getFilteredProperties } from '@/lib/data';
import { Pagination } from './Pagination';

export function PropertyGrid() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query') || '';

  // Get filter params
  const types = searchParams.getAll('type');
  const statuses = searchParams.getAll('status');
  const locations = searchParams.getAll('location');
  const priceMin = Number(searchParams.get('priceMin')) || 0;
  const priceMax = Number(searchParams.get('priceMax')) || 10000;
  const areaMin = Number(searchParams.get('areaMin')) || 0;
  const areaMax = Number(searchParams.get('areaMax')) || 200;

  // In a real app, this would be a server action or API call
  const { properties, totalProperties, totalPages } = getFilteredProperties({
    page,
    query,
    filters: {
      types,
      statuses,
      locations,
      priceMin,
      priceMax,
      areaMin,
      areaMax,
    },
  });

  if (properties.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <h3 className="text-lg font-semibold">No properties found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{properties.length}</span> of{' '}
          <span className="font-medium">{totalProperties}</span> properties
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} currentPage={page} />
      )}
    </div>
  );
}
