import { Suspense } from 'react';
import { PropertySearch } from '@/components/property-search';
import { PropertyFilters } from '@/components/property-filters';
import { PropertyGrid } from '@/components/property-grid';
import { PropertyListSkeleton } from '@/components/propert-list-skeleton';

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Investments
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse our current and upcoming real estate investments
          </p>
        </div>

        <PropertySearch />

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="">
            <Suspense fallback={<PropertyListSkeleton />}>
              <PropertyFilters />
            </Suspense>
          </aside>

          <main>
            <Suspense fallback={<PropertyListSkeleton />}>
              <PropertyGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
