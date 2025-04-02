import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[70vh]">
      <Image
        src="/hero-house.jpg"
        alt="Luxury modern home with pool"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto relative z-10 flex h-full flex-col items-start justify-center text-white px-2">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          ARE YOU LOOKING FOR A DREAM PLACE TO LIVE OR INVEST?
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Contact us and our team will gladly answer all your questions and
          arrange a viewing of your dream property.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href={'/investments'}>
            <Button size="lg" className=" text-white">
              View Our Properties
            </Button>
          </Link>
          <Button size="lg" variant="outline" className=" text-foreground">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-10 w-10 animate-bounce text-white" />
      </div>
    </section>
  );
};

export default Hero;
