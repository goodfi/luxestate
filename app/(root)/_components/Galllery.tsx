'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Gallery = () => {
  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-2">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Projects Gallery
        </h2>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg"
              onClick={() => {
                setCurrentIndex(i);
                setShowLightbox(true);
              }}
            >
              <Image
                src={`/room${i}.jpg`}
                alt={`Gallery image ${i + 1}`}
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
        {showLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-white/10"
              onClick={() => setShowLightbox(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={`/room${currentIndex}.jpg` || '/placeholder.svg'}
                alt={`Property image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
