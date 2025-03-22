'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Still set something in localStorage so we don't show the banner again
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  const handleCustomize = () => {
    // In a real implementation, this would open a modal with cookie settings
    handleAccept();
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background p-4 shadow-lg md:p-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">We Value Your Privacy</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your browsing experience, display
            personalized content, and analyze site traffic. By clicking
            &quot;Accept&quot;, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleCustomize}>
            Customize
          </Button>
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
