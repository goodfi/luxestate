import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">LuxEstate</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium real estate developer specializing in luxury residential
              and commercial properties.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#investments"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter to receive updates on new properties
              and special offers.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LuxEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
