'use client';

import { useState, useEffect } from 'react';
import { LoaderCircle, MapPin } from 'lucide-react';

interface PropertyMapProps {
  location: { lat: number; lng: number };
  address: string;
}

export function PropertyMap({ location, address }: PropertyMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // In a real app, you would load a map library like Google Maps or Mapbox
    // This is a placeholder for demonstration purposes
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-muted">
      {!mapLoaded ? (
        <div className="flex h-full items-center justify-center flex-col">
          <LoaderCircle className="animate-spin text-primary h-6 w-6" />

          <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
        </div>
      ) : (
        <>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
            <MapPin className="h-8 w-8" />
          </div>
          <div className="absolute bottom-4 left-4 rounded-md bg-background p-3 shadow-md">
            <p className="text-sm font-medium">{address}</p>
            <p className="text-xs text-muted-foreground">
              Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
