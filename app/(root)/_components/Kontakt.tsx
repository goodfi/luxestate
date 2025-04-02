import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import React from 'react';

const Kontakt = () => {
  return (
    <section id="contact" className="bg-muted py-24">
      <div className="container mx-auto px-2">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Interested in our properties? Our team is ready to answer all your
            questions and help you find your dream home.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-background p-8 shadow">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    123 Main Street, City Center
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@luxestate.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-background p-8 shadow">
            <h3 className="text-xl font-bold">Send Us a Message</h3>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Property Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="I'm interested in..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
