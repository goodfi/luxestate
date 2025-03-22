'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { getPropertyUnits } from '@/lib/data';

interface PropertyUnitsProps {
  investmentId: string;
}

export function PropertyUnits({ investmentId }: PropertyUnitsProps) {
  // In a real app, this would fetch from an API or database
  const allUnits = getPropertyUnits(investmentId);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    floors: [] as string[],
    bedrooms: [] as string[],
    status: [] as string[],
    priceMin: 0,
    priceMax: 1000000,
    areaMin: 0,
    areaMax: 200,
  });

  // Get unique filter options
  const floorOptions = [...new Set(allUnits.map((unit) => unit.floor))].sort();
  const bedroomOptions = [
    ...new Set(allUnits.map((unit) => unit.bedrooms.toString())),
  ].sort();
  const statusOptions = [...new Set(allUnits.map((unit) => unit.status))];

  // Filter units based on search and filters
  const filteredUnits = allUnits.filter((unit) => {
    // Search filter
    if (
      searchQuery &&
      !unit.unitNumber.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Floor filter
    if (filters.floors.length > 0 && !filters.floors.includes(unit.floor)) {
      return false;
    }

    // Bedroom filter
    if (
      filters.bedrooms.length > 0 &&
      !filters.bedrooms.includes(unit.bedrooms.toString())
    ) {
      return false;
    }

    // Status filter
    if (filters.status.length > 0 && !filters.status.includes(unit.status)) {
      return false;
    }

    // Price filter
    if (unit.price < filters.priceMin || unit.price > filters.priceMax) {
      return false;
    }

    // Area filter
    if (unit.area < filters.areaMin || unit.area > filters.areaMax) {
      return false;
    }

    return true;
  });

  const handleCheckboxChange = (
    category: 'floors' | 'bedrooms' | 'status',
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

  const resetFilters = () => {
    setFilters({
      floors: [],
      bedrooms: [],
      status: [],
      priceMin: 0,
      priceMax: 1000000,
      areaMin: 0,
      areaMax: 200,
    });
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by unit number..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Filter className="h-4 w-4" />
                Filters
                {Object.values(filters).some((v) =>
                  Array.isArray(v) ? v.length > 0 : v > 0 && v < 1000000
                ) && (
                  <Badge
                    variant="secondary"
                    className="ml-1 h-5 rounded-full px-2 text-xs"
                  >
                    {
                      Object.values(filters).filter((v) =>
                        Array.isArray(v) ? v.length > 0 : v > 0 && v < 1000000
                      ).length
                    }
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Filters</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="h-8 text-xs"
                  >
                    Reset
                  </Button>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Floor</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {floorOptions.map((floor) => (
                      <div key={floor} className="flex items-center space-x-2">
                        <Checkbox
                          id={`floor-${floor}`}
                          checked={filters.floors.includes(floor)}
                          onCheckedChange={() =>
                            handleCheckboxChange('floors', floor)
                          }
                        />
                        <label htmlFor={`floor-${floor}`} className="text-sm">
                          {floor}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Bedrooms</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {bedroomOptions.map((bedrooms) => (
                      <div
                        key={bedrooms}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`bedrooms-${bedrooms}`}
                          checked={filters.bedrooms.includes(bedrooms)}
                          onCheckedChange={() =>
                            handleCheckboxChange('bedrooms', bedrooms)
                          }
                        />
                        <label
                          htmlFor={`bedrooms-${bedrooms}`}
                          className="text-sm"
                        >
                          {bedrooms}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Status</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {statusOptions.map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox
                          id={`status-${status}`}
                          checked={filters.status.includes(status)}
                          onCheckedChange={() =>
                            handleCheckboxChange('status', status)
                          }
                        />
                        <label htmlFor={`status-${status}`} className="text-sm">
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Price (€)</h5>
                  <Slider
                    value={[filters.priceMin, filters.priceMax]}
                    min={0}
                    max={1000000}
                    step={10000}
                    onValueChange={(value) =>
                      setFilters((prev) => ({
                        ...prev,
                        priceMin: value[0],
                        priceMax: value[1],
                      }))
                    }
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span>€{filters.priceMin.toLocaleString()}</span>
                    <span>€{filters.priceMax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">Area (m²)</h5>
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
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span>{filters.areaMin} m²</span>
                    <span>{filters.areaMax} m²</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 sm:hidden">
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Same filter content as popover, but for mobile */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-4 border-b bg-muted p-4 text-sm font-medium">
          <div className="col-span-2">Unit</div>
          <div className="col-span-2">Floor</div>
          <div className="col-span-2">Bedrooms</div>
          <div className="col-span-2">Area</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Status</div>
        </div>

        <div className="divide-y">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="grid grid-cols-12 gap-4 p-4 text-sm"
              >
                <div className="col-span-2 font-medium">{unit.unitNumber}</div>
                <div className="col-span-2">{unit.floor}</div>
                <div className="col-span-2">{unit.bedrooms}</div>
                <div className="col-span-2">{unit.area} m²</div>
                <div className="col-span-2">€{unit.price.toLocaleString()}</div>
                <div className="col-span-2">
                  <Badge
                    variant={
                      unit.status === 'Available'
                        ? 'default'
                        : unit.status === 'Reserved'
                        ? 'secondary'
                        : 'outline'
                    }
                  >
                    {unit.status}
                  </Badge>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">
                No units match your criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
