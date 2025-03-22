import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Projects Gallery
        </h2>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`/room${i}.jpg`}
                alt={`Gallery image ${i}`}
                lazyBoundary=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="outline" className="text-black">
                  View Larger
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
