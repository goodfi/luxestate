import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Home, Ruler, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <Link
        href={`/investments/${property.slug}`}
        className="relative block h-48 w-full overflow-hidden"
      >
        <Image
          src={property.coverImage || '/placeholder.svg?height=400&width=600'}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary text-primary-foreground">
            {property.status}
          </Badge>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{property.location}</span>
        </div>

        <Link href={`/investments/${property.slug}`} className="mt-1 block">
          <h3 className="line-clamp-1 text-lg font-bold">{property.name}</h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {property.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Home className="h-4 w-4 text-muted-foreground" />
              <span>{property.totalUnits} units</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              <span>{property.areaRange} m²</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-medium text-muted-foreground">
              From
            </div>
            <div className="text-lg font-bold">
              €{property.priceFrom.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button
            asChild
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Link href={`/investments/${property.slug}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
