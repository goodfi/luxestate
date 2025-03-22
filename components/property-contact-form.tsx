'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface PropertyContactFormProps {
  investmentName: string;
}

export function PropertyContactForm({
  investmentName,
}: PropertyContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast('Message sent!', {
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="space-y-2">
        <Input placeholder="Full Name" required />
      </div>
      <div className="space-y-2">
        <Input type="email" placeholder="Email Address" required />
      </div>
      <div className="space-y-2">
        <Input type="tel" placeholder="Phone Number" required />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Message"
          className="min-h-[100px]"
          defaultValue={`I'm interested in ${investmentName}. Please provide more information.`}
          required
        />
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" required />
        <label htmlFor="terms" className="text-xs text-muted-foreground">
          I agree to the processing of my personal data in accordance with the
          Privacy Policy
        </label>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}
