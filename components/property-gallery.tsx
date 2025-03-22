'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // If no images provided, use placeholders
  const galleryImages =
    images.length > 0
      ? images
      : Array.from({ length: 8 }).map(
          (_, i) => `/placeholder.svg?height=800&width=1200&text=Image ${i + 1}`
        );

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
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-md"
            onClick={() => {
              setCurrentIndex(index);
              setShowLightbox(true);
            }}
          >
            <Image
              src={image || '/placeholder.svg'}
              alt={`Property image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40"></div>
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
              src={galleryImages[currentIndex] || '/placeholder.svg'}
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
  );
}
