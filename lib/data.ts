import type { Property, PropertyUnit } from './types';

// Mock data for demonstration purposes
// In a real app, this would be fetched from an API or database

const properties: Property[] = [
  {
    id: '1',
    slug: 'riverside-residences',
    name: 'Riverside Residences',
    type: 'Apartment Building',
    status: 'Under Construction',
    location: 'City Center, Riverside District',
    shortDescription:
      'Luxury apartments with stunning river views in the heart of the city.',
    description:
      'Riverside Residences offers premium living spaces with panoramic views of the river and city skyline. Each apartment features high-end finishes, spacious layouts, and modern amenities. The building includes a fitness center, rooftop terrace, and 24/7 concierge service.',
    coverImage: '/house1.jpg',
    images: Array(8)
      .fill('')
      .map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=Riverside Image ${i + 1}`
      ),
    priceFrom: 250000,
    priceTo: 750000,
    pricePerSqm: 5000,
    totalUnits: 50,
    availableUnits: 35,
    areaRange: '45-120',
    completionDate: 'Q4 2025',
    features: [
      'Floor-to-ceiling windows',
      'Private balconies',
      'Smart home technology',
      'Underfloor heating',
      'High-end kitchen appliances',
      'Marble bathrooms',
      'Hardwood flooring',
      'Secure underground parking',
      'Storage units',
    ],
    coordinates: { lat: 52.229676, lng: 21.012229 },
    locationDescription:
      'Located in the vibrant Riverside District, just steps away from restaurants, cafes, and cultural attractions. The property offers easy access to public transportation and major highways.',
    nearbyAmenities: [
      { name: 'Central Park', distance: '5 min walk' },
      { name: 'Shopping Mall', distance: '10 min walk' },
      { name: 'Metro Station', distance: '3 min walk' },
      { name: 'International School', distance: '15 min drive' },
      { name: 'Hospital', distance: '10 min drive' },
      { name: 'Business District', distance: '5 min drive' },
    ],
    tags: ['River View', 'City Center', 'Luxury'],
  },
  {
    id: '2',
    slug: 'green-valley-villas',
    name: 'Green Valley Villas',
    type: 'Townhouses',
    status: 'Pre-Sale',
    location: 'Green Valley, Northern District',
    shortDescription:
      'Modern townhouses in a peaceful green neighborhood with excellent infrastructure.',
    description:
      'Green Valley Villas is a collection of contemporary townhouses designed for comfortable family living. Each home features a private garden, spacious interiors, and energy-efficient solutions. The gated community includes a playground, walking paths, and 24/7 security.',
    coverImage: '/house2.jpg',
    images: Array(8)
      .fill('')
      .map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=Green Valley Image ${
            i + 1
          }`
      ),
    priceFrom: 350000,
    priceTo: 550000,
    pricePerSqm: 3500,
    totalUnits: 30,
    availableUnits: 30,
    areaRange: '120-180',
    completionDate: 'Q2 2026',
    features: [
      'Private gardens',
      'Garage for two cars',
      'Open-plan living areas',
      'Energy-efficient design',
      'Triple glazing',
      'Heat recovery ventilation',
      'Solar panels',
      'Smart home systems',
      'High ceilings',
    ],
    coordinates: { lat: 52.259676, lng: 21.022229 },
    locationDescription:
      'Situated in the peaceful Green Valley neighborhood, surrounded by parks and green spaces. The area offers excellent schools, shopping centers, and recreational facilities, all within a short drive.',
    nearbyAmenities: [
      { name: 'Green Valley Park', distance: '2 min walk' },
      { name: 'Elementary School', distance: '5 min walk' },
      { name: 'Supermarket', distance: '5 min drive' },
      { name: 'Sports Complex', distance: '10 min drive' },
      { name: 'Shopping Center', distance: '15 min drive' },
    ],
    tags: ['Family-Friendly', 'Green Area', 'Energy-Efficient'],
  },
  {
    id: '3',
    slug: 'skyline-towers',
    name: 'Skyline Towers',
    type: 'High-Rise',
    status: 'Ready to Move In',
    location: 'Business District, Eastern Quarter',
    shortDescription:
      'Exclusive high-rise apartments with premium amenities in the business district.',
    description:
      'Skyline Towers offers luxury living in the heart of the business district. The development consists of two towers with apartments ranging from compact studios to spacious penthouses. Residents enjoy access to a swimming pool, fitness center, spa, co-working space, and concierge services.',
    coverImage: '/house3.jpg',
    images: Array(8)
      .fill('')
      .map(
        (_, i) =>
          `/placeholder.svg?height=800&width=1200&text=Skyline Image ${i + 1}`
      ),
    priceFrom: 200000,
    priceTo: 1200000,
    pricePerSqm: 7000,
    totalUnits: 120,
    availableUnits: 45,
    areaRange: '35-200',
    completionDate: 'Completed',
    features: [
      'Floor-to-ceiling windows',
      'Panoramic city views',
      'Smart home technology',
      'Premium finishes',
      '24/7 concierge',
      'Swimming pool',
      'Fitness center',
      'Spa and wellness area',
      'Co-working space',
      'Rooftop terrace',
    ],
    coordinates: { lat: 52.239676, lng: 21.032229 },
    locationDescription:
      'Located in the dynamic Business District, offering immediate access to corporate offices, restaurants, and entertainment venues. The property is well-connected to public transportation and major highways.',
    nearbyAmenities: [
      { name: 'Corporate Offices', distance: 'Walking distance' },
      { name: 'Fine Dining', distance: 'In the building' },
      { name: 'Metro Station', distance: '2 min walk' },
      { name: 'Shopping Mall', distance: '5 min walk' },
      { name: 'Airport', distance: '20 min drive' },
    ],
    tags: ['Business District', 'Luxury', 'Ready to Move In'],
  },
  {
    id: '4',
    slug: 'harmony-gardens',
    name: 'Harmony Gardens',
    type: 'Apartment Building',
    status: 'Under Construction',
    location: 'West Side, Garden District',
    shortDescription:
      'Modern apartments surrounded by lush gardens and recreational areas.',
    description:
      'Harmony Gardens is a residential complex designed for those who appreciate nature and tranquility without sacrificing urban convenience. The development features spacious apartments with large balconies, surrounded by landscaped gardens, walking paths, and recreational areas.',
    coverImage: '/room6.jpg',
    images: Array(8)
      .fill('')
      .map((_, i) => `/room${i + 1}.jpg`),
    priceFrom: 180000,
    priceTo: 450000,
    pricePerSqm: 4000,
    totalUnits: 80,
    availableUnits: 60,
    areaRange: '45-110',
    completionDate: 'Q3 2025',
    features: [
      'Large balconies',
      'Floor-to-ceiling windows',
      'Energy-efficient design',
      'Underfloor heating',
      'Smart home features',
      'Landscaped gardens',
      'Playground',
      'Outdoor fitness area',
      'Bicycle storage',
    ],
    coordinates: { lat: 52.219676, lng: 21.002229 },
    locationDescription:
      'Located in the peaceful Garden District on the West Side, offering a perfect balance of tranquility and urban convenience. The area is known for its parks, recreational facilities, and excellent schools.',
    nearbyAmenities: [
      { name: 'Botanical Garden', distance: '10 min walk' },
      { name: 'Public Park', distance: '5 min walk' },
      { name: 'School', distance: '10 min walk' },
      { name: 'Supermarket', distance: '5 min drive' },
      { name: 'Medical Center', distance: '10 min drive' },
    ],
    tags: ['Green Area', 'Family-Friendly', 'Modern'],
  },
  {
    id: '5',
    slug: 'urban-lofts',
    name: 'Urban Lofts',
    type: 'Loft Apartments',
    status: 'Ready to Move In',
    location: 'Arts District, Downtown',
    shortDescription:
      'Industrial-style loft apartments in the vibrant Arts District.',
    description:
      'Urban Lofts offers unique living spaces in converted industrial buildings. Each loft features high ceilings, exposed brick walls, large windows, and open-plan layouts. The development includes a co-working space, art gallery, and rooftop terrace with city views.',
    coverImage: '/room3.jpg',
    images: Array(8)
      .fill('')
      .map((_, i) => `/room${i + 1}.jpg`),
    priceFrom: 220000,
    priceTo: 500000,
    pricePerSqm: 4500,
    totalUnits: 40,
    availableUnits: 15,
    areaRange: '50-120',
    completionDate: 'Completed',
    features: [
      'High ceilings',
      'Exposed brick walls',
      'Large industrial windows',
      'Open-plan layouts',
      'Designer kitchens',
      'Co-working space',
      'Art gallery',
      'Rooftop terrace',
      'Bicycle storage',
    ],
    coordinates: { lat: 52.249676, lng: 21.022229 },
    locationDescription:
      'Situated in the vibrant Arts District, surrounded by galleries, studios, cafes, and boutiques. The area is known for its creative atmosphere, cultural events, and nightlife.',
    nearbyAmenities: [
      { name: 'Art Galleries', distance: 'Walking distance' },
      { name: 'Cafes & Restaurants', distance: 'Walking distance' },
      { name: 'Theater', distance: '5 min walk' },
      { name: 'Metro Station', distance: '7 min walk' },
      { name: 'University', distance: '15 min walk' },
    ],
    tags: ['Arts District', 'Loft Style', 'Creative'],
  },
  {
    id: '6',
    slug: 'seaside-apartments',
    name: 'Seaside Apartments',
    type: 'Apartment Building',
    status: 'Pre-Sale',
    location: 'Coastal Area, Southern District',
    shortDescription:
      'Luxury apartments with stunning sea views and beach access.',
    description:
      'Seaside Apartments offers premium living spaces with panoramic sea views and direct beach access. Each apartment features high-end finishes, spacious terraces, and modern amenities. The complex includes a swimming pool, spa, fitness center, and beachfront restaurant.',
    coverImage: '/room1.jpg',
    images: Array(8)
      .fill('')
      .map((_, i) => `/room${i + 1}.jpg`),
    priceFrom: 300000,
    priceTo: 900000,
    pricePerSqm: 6000,
    totalUnits: 60,
    availableUnits: 60,
    areaRange: '50-150',
    completionDate: 'Q2 2026',
    features: [
      'Sea views',
      'Spacious terraces',
      'Floor-to-ceiling windows',
      'Premium finishes',
      'Smart home technology',
      'Swimming pool',
      'Spa and wellness center',
      'Fitness center',
      'Beachfront restaurant',
      'Direct beach access',
    ],
    coordinates: { lat: 52.209676, lng: 21.042229 },
    locationDescription:
      'Located in the prestigious Coastal Area, offering stunning sea views and direct beach access. The property is a short drive from the city center, shopping centers, and international schools.',
    nearbyAmenities: [
      { name: 'Beach', distance: 'Direct access' },
      { name: 'Marina', distance: '5 min walk' },
      { name: 'Restaurants', distance: 'Walking distance' },
      { name: 'Shopping Center', distance: '10 min drive' },
      { name: 'International School', distance: '15 min drive' },
    ],
    tags: ['Sea View', 'Beach Access', 'Luxury'],
  },
  {
    id: '7',
    slug: 'seaside-apartments2',
    name: 'Seaside Apartments',
    type: 'Apartment Building',
    status: 'Pre-Sale',
    location: 'Coastal Area, Southern District',
    shortDescription:
      'Luxury apartments with stunning sea views and beach access.',
    description:
      'Seaside Apartments offers premium living spaces with panoramic sea views and direct beach access. Each apartment features high-end finishes, spacious terraces, and modern amenities. The complex includes a swimming pool, spa, fitness center, and beachfront restaurant.',
    coverImage: '/room1.jpg',
    images: Array(8)
      .fill('')
      .map((_, i) => `/room${i + 1}.jpg`),
    priceFrom: 300000,
    priceTo: 900000,
    pricePerSqm: 6000,
    totalUnits: 60,
    availableUnits: 60,
    areaRange: '50-150',
    completionDate: 'Q2 2026',
    features: [
      'Sea views',
      'Spacious terraces',
      'Floor-to-ceiling windows',
      'Premium finishes',
      'Smart home technology',
      'Swimming pool',
      'Spa and wellness center',
      'Fitness center',
      'Beachfront restaurant',
      'Direct beach access',
    ],
    coordinates: { lat: 52.209676, lng: 21.042229 },
    locationDescription:
      'Located in the prestigious Coastal Area, offering stunning sea views and direct beach access. The property is a short drive from the city center, shopping centers, and international schools.',
    nearbyAmenities: [
      { name: 'Beach', distance: 'Direct access' },
      { name: 'Marina', distance: '5 min walk' },
      { name: 'Restaurants', distance: 'Walking distance' },
      { name: 'Shopping Center', distance: '10 min drive' },
      { name: 'International School', distance: '15 min drive' },
    ],
    tags: ['Sea View', 'Beach Access', 'Luxury'],
  },
];

// Mock property units
const propertyUnits: PropertyUnit[] = [];

// Generate units for each property
properties.forEach((property) => {
  const totalUnits = property.totalUnits;
  const availableUnits = property.availableUnits;
  const soldUnits = totalUnits - availableUnits;

  // Generate floor distribution
  const floors = ['Ground', '1st', '2nd', '3rd', '4th', '5th'];
  const unitsPerFloor = Math.ceil(totalUnits / floors.length);

  // Generate units
  for (let i = 0; i < totalUnits; i++) {
    const floor = floors[Math.floor(i / unitsPerFloor)];
    const unitNumber = `${floor[0]}${(i % unitsPerFloor) + 1}`.padStart(3, '0');

    // Randomize bedrooms (1-3)
    const bedrooms = Math.floor(Math.random() * 3) + 1;

    // Area based on bedrooms
    const baseArea = 40;
    const area = baseArea + bedrooms * 15 + Math.floor(Math.random() * 10);

    // Price based on area and price per sqm
    const price = Math.round((area * property.pricePerSqm) / 100) * 100;

    // Status - distribute available and sold units
    let status: 'Available' | 'Reserved' | 'Sold';
    if (i < soldUnits) {
      status = 'Sold';
    } else if (i < soldUnits + Math.floor(availableUnits * 0.2)) {
      status = 'Reserved';
    } else {
      status = 'Available';
    }

    propertyUnits.push({
      id: `${property.id}-${unitNumber}`,
      propertyId: property.id,
      unitNumber,
      floor,
      bedrooms,
      area,
      price,
      status,
      floorPlan: `/placeholder.svg?height=800&width=800&text=Floor Plan ${unitNumber}`,
    });
  }
});

// Helper functions to get data
export function getFilteredProperties({
  page = 1,
  query = '',
  filters = {
    types: [] as string[],
    statuses: [] as string[],
    locations: [] as string[],
    priceMin: 0,
    priceMax: 10000,
    areaMin: 0,
    areaMax: 200,
  },
}: {
  page?: number;
  query?: string;
  filters?: {
    types: string[];
    statuses: string[];
    locations: string[];
    priceMin: number;
    priceMax: number;
    areaMin: number;
    areaMax: number;
  };
}) {
  const pageSize = 6;

  // Filter properties based on search query and filters
  const filteredProperties = properties.filter((property) => {
    // Search filter
    if (
      query &&
      !property.name.toLowerCase().includes(query.toLowerCase()) &&
      !property.location.toLowerCase().includes(query.toLowerCase()) &&
      !property.description.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }

    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(property.type)) {
      return false;
    }

    // Status filter
    if (
      filters.statuses.length > 0 &&
      !filters.statuses.includes(property.status)
    ) {
      return false;
    }

    // Location filter
    if (
      filters.locations.length > 0 &&
      !filters.locations.some((loc) => property.location.includes(loc))
    ) {
      return false;
    }

    // Price filter
    const avgPrice = property.pricePerSqm;

    console.log(avgPrice);
    if (avgPrice < filters.priceMin || avgPrice > filters.priceMax) {
      return false;
    }

    // Area filter
    const areaRange = property.areaRange.split('-').map(Number);
    if (areaRange.length !== 2 || areaRange.some(isNaN)) {
      return false; // Skip properties with invalid areaRange
    }
    const [minArea, maxArea] = areaRange;
    if (maxArea < filters.areaMin || minArea > filters.areaMax) {
      return false;
    }

    return true;
  });

  // Calculate pagination
  const totalProperties = filteredProperties.length;
  const totalPages = Math.ceil(totalProperties / pageSize);
  const paginatedProperties = filteredProperties.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return {
    properties: paginatedProperties,
    totalProperties,
    totalPages,
  };
}

export function getInvestmentBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getPropertyUnits(propertyId: string) {
  return propertyUnits.filter((unit) => unit.propertyId === propertyId);
}

export function getInvestmentTypes() {
  return [...new Set(properties.map((property) => property.type))];
}

export function getInvestmentStatuses() {
  return [...new Set(properties.map((property) => property.status))];
}

export function getInvestmentLocations() {
  // Extract district names from locations
  const locations = properties.map((property) => {
    const parts = property.location.split(',');
    return parts[parts.length - 1].trim();
  });
  return [...new Set(locations)];
}
