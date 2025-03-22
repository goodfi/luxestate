export interface Property {
  id: string;
  slug: string;
  name: string;
  type: string;
  status: string;
  location: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  priceFrom: number;
  priceTo: number;
  pricePerSqm: number;
  totalUnits: number;
  availableUnits: number;
  areaRange: string;
  completionDate: string;
  features: string[];
  coordinates: { lat: number; lng: number };
  locationDescription: string;
  nearbyAmenities?: { name: string; distance: string }[];
  tags?: string[];
}

export interface PropertyUnit {
  id: string;
  propertyId: string;
  unitNumber: string;
  floor: string;
  bedrooms: number;
  area: number;
  price: number;
  status: 'Available' | 'Reserved' | 'Sold';
  floorPlan?: string;
}
