import Link from 'next/link';
import React from 'react';
// import { LanguageSwitcher } from './language-switvher';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">LuxEstate</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="#investments"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Investments
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <LanguageSwitcher /> */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            Contact Us
          </Button>
          <Link href={'/investments'}>
            <Button size="sm" className="hidden md:flex">
              View Properties
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
