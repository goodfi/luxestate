'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  getInvestmentTypes,
  getInvestmentStatuses,
  getInvestmentLocations,
} from '@/lib/data';

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get dynamic filter options
  const investmentTypes = getInvestmentTypes();
  const investmentStatuses = getInvestmentStatuses();
  const locations = getInvestmentLocations();

  // Parse current filters from URL
  const initialFilters = {
    types: searchParams.getAll('type'),
    statuses: searchParams.getAll('status'),
    locations: searchParams.getAll('location'),
    priceMin: Number(searchParams.get('priceMin')) || 0,
    priceMax: Number(searchParams.get('priceMax')) || 10000,
    areaMin: Number(searchParams.get('areaMin')) || 0,
    areaMax: Number(searchParams.get('areaMax')) || 200,
  };

  const [filters, setFilters] = useState(initialFilters);

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Clear existing filter params
    params.delete('type');
    params.delete('status');
    params.delete('location');
    params.delete('priceMin');
    params.delete('priceMax');
    params.delete('areaMin');
    params.delete('areaMax');
    params.delete('page');

    // Add new filter params
    filters.types.forEach((type) => params.append('type', type));
    filters.statuses.forEach((status) => params.append('status', status));
    filters.locations.forEach((location) =>
      params.append('location', location)
    );

    if (filters.priceMin > 0)
      params.set('priceMin', filters.priceMin.toString());
    if (filters.priceMax < 10000)
      params.set('priceMax', filters.priceMax.toString());
    if (filters.areaMin > 0) params.set('areaMin', filters.areaMin.toString());
    if (filters.areaMax < 200)
      params.set('areaMax', filters.areaMax.toString());

    router.push(`/investments?${params.toString()}`);
  };

  const resetFilters = () => {
    setFilters({
      types: [],
      statuses: [],
      locations: [],
      priceMin: 0,
      priceMax: 10000,
      areaMin: 0,
      areaMax: 200,
    });
  };

  const handleCheckboxChange = (
    category: 'types' | 'statuses' | 'locations',
    value: string
  ) => {
    setFilters((prev) => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [category]: newValues };
    });
  };

  // Desktop filters
  const DesktopFilters = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {filters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-8 text-xs"
          >
            <X className="mr-1 h-3 w-3" />
            Reset
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={['type', 'status', 'location']}>
        <AccordionItem value="type">
          <AccordionTrigger>Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {investmentTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={filters.types.includes(type)}
                    onCheckedChange={() => handleCheckboxChange('types', type)}
                  />
                  <label htmlFor={`type-${type}`} className="text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="status">
          <AccordionTrigger>Status</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {investmentStatuses.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={filters.statuses.includes(status)}
                    onCheckedChange={() =>
                      handleCheckboxChange('statuses', status)
                    }
                  />
                  <label htmlFor={`status-${status}`} className="text-sm">
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={filters.locations.includes(location)}
                    onCheckedChange={() =>
                      handleCheckboxChange('locations', location)
                    }
                  />
                  <label htmlFor={`location-${location}`} className="text-sm">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  // Mobile filters
  return (
    <>
      <div className="hidden lg:block ">
        <DesktopFilters />
        <div className="flex flex-col gap-8 mt-4">
          <div>
            <p className="text-sm font-medium">Price per m² (€)</p>

            <div className="space-y-4">
              <Slider
                value={[filters.priceMin, filters.priceMax]}
                min={0}
                max={10000}
                step={100}
                className="mt-4"
                onValueChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceMin: value[0],
                    priceMax: value[1],
                  }))
                }
              />
              <div className="flex items-center justify-between text-sm">
                <span>€{filters.priceMin}</span>
                <span>€{filters.priceMax}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Area(m²)</p>
            <div className="space-y-4">
              <Slider
                value={[filters.areaMin, filters.areaMax]}
                min={0}
                max={200}
                step={5}
                onValueChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    areaMin: value[0],
                    areaMax: value[1],
                  }))
                }
                className="mt-4"
              />
              <div className="flex items-center justify-between text-sm">
                <span>{filters.areaMin} m²</span>
                <span>{filters.areaMax} m²</span>
              </div>
            </div>
          </div>

          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center  gap-1"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-5">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-8 mt-4">
              <DesktopFilters />
              <div>
                <p className="text-sm font-medium">Price per m² (€)</p>

                <div className="space-y-4">
                  <Slider
                    value={[filters.priceMin, filters.priceMax]}
                    min={0}
                    max={10000}
                    step={100}
                    className="mt-4"
                    onValueChange={(value) =>
                      setFilters((prev) => ({
                        ...prev,
                        priceMin: value[0],
                        priceMax: value[1],
                      }))
                    }
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>€{filters.priceMin}</span>
                    <span>€{filters.priceMax}</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Area(m²)</p>
                <div className="space-y-4">
                  <Slider
                    value={[filters.areaMin, filters.areaMax]}
                    min={0}
                    max={200}
                    step={5}
                    onValueChange={(value) =>
                      setFilters((prev) => ({
                        ...prev,
                        areaMin: value[0],
                        areaMax: value[1],
                      }))
                    }
                    className="mt-4"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>{filters.areaMin} m²</span>
                    <span>{filters.areaMax} m²</span>
                  </div>
                </div>
              </div>

              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-8 text-xs"
          >
            <X className="mr-1 h-3 w-3" />
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}
