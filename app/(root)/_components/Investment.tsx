import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Investment = () => {
  return (
    <section id="investments" className="bg-muted py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Current Investments
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-lg bg-background shadow transition-all hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={`/house${i}.jpg`}
                  alt={`Property ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  {i === 1 ? 'New' : i === 2 ? 'Coming Soon' : 'Last Units'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">City Center, District {i}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Luxury Residence {i}</h3>
                <p className="mt-2 text-muted-foreground">
                  Modern apartments with premium finishes, spacious layouts, and
                  stunning views.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    2-4 Bedrooms
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    60-120 m²
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    Parking
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    Terrace
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-bold">From $250,000</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={'/investments'}>
            <Button size="lg">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Investment;
