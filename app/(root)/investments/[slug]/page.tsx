import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Home, Ruler, Calendar, Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PropertyGallery } from '@/components/property-gallery';
import { PropertyUnits } from '@/components/property-units';
import { PropertyContactForm } from '@/components/property-contact-form';
import { PropertyMap } from '@/components/property-map';
import { getInvestmentBySlug } from '@/lib/data';

export default function InvestmentPage({
  params,
}: {
  params: { slug: string };
}) {
  // In a real app, this would fetch from an API or database
  const investment = getInvestmentBySlug(params.slug);

  if (!investment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]">
        <Image
          src={
            investment.coverImage || '/placeholder.svg?height=800&width=1600'
          }
          alt={investment.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white md:p-8">
          <div className="container">
            <Link
              href="/investments"
              className="mb-4 inline-flex items-center text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all investments
            </Link>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {investment.name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{investment.location}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-white/20 hover:bg-white/40 text-muted/90 cursor-default"
              >
                {investment.type}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 hover:bg-white/40 text-muted/90 cursor-default"
              >
                {investment.status}
              </Badge>
              {investment.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/40 text-muted/90 cursor-default"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="units">Units</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center rounded-lg border p-4 text-center">
                    <Home className="mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Units
                    </h3>
                    <p className="text-2xl font-bold">
                      {investment.totalUnits}
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-4 text-center">
                    <Ruler className="mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Area Range
                    </h3>
                    <p className="text-2xl font-bold">
                      {investment.areaRange} m²
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-4 text-center">
                    <Calendar className="mb-2 h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Completion
                    </h3>
                    <p className="text-2xl font-bold">
                      {investment.completionDate}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold">
                    About this investment
                  </h2>
                  <div className="prose max-w-none dark:prose-invert">
                    <p>{investment.description}</p>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold">
                    Features & Amenities
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {investment.features?.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="units">
                <PropertyUnits investmentId={investment.id} />
              </TabsContent>

              <TabsContent value="gallery">
                <PropertyGallery images={investment.images || []} />
              </TabsContent>

              <TabsContent value="location">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Location</h2>
                  <p className="text-muted-foreground">
                    {investment.locationDescription}
                  </p>
                  <PropertyMap
                    location={
                      investment.coordinates || {
                        lat: 52.229676,
                        lng: 21.012229,
                      }
                    }
                    address={investment.location}
                  />

                  {investment.nearbyAmenities && (
                    <div className="mt-8">
                      <h3 className="mb-4 text-xl font-bold">
                        Nearby Amenities
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {investment.nearbyAmenities.map((amenity) => (
                          <div
                            key={amenity.name}
                            className="flex items-start gap-2"
                          >
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <div>
                              <span className="font-medium">
                                {amenity.name}
                              </span>
                              <p className="text-sm text-muted-foreground">
                                {amenity.distance}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-24 rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold">
                Interested in this property?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and our sales team will contact you
                shortly.
              </p>
              <PropertyContactForm investmentName={investment.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
