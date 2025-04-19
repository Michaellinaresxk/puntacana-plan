// lib/serviceUtils.ts

// Types for special service data
type MenuOption = {
  name: string;
  items: string[];
};

type HalfDayOption = {
  available: boolean;
  times?: string[];
  price?: number;
};

type SpecialServiceData = {
  pickupTime?: string;
  priceUnit?: string;
  capacity?: string;
  size?: string;
  schedule?: string;
  includes?: string[];
  whatToBring?: string[];
  halfDayOption?: HalfDayOption;
  menuOptions?: MenuOption[];
  // Add any additional fields that might be needed in the future
};

/**
 * Returns detailed information for special services
 * @param serviceId - The ID of the service
 * @returns An object with special service data if available
 */
export function getSpecialServiceData(serviceId: string): SpecialServiceData {
  // Map of service IDs to their special data
  const specialServiceMap: Record<string, SpecialServiceData> = {
    // Saona Island Tour
    'saona-island-tour': {
      pickupTime: '7:30 AM',
      priceUnit: 'per person',
      includes: [
        'Tour guide',
        'Round-trip transportation from your villa',
        'Catamaran ride',
        'Buffet lunch on the beach',
        'Open bar on the catamaran (beer, water, soda, and rum)',
        'Onboard entertainment and animation',
      ],
      whatToBring: [
        'Towel',
        'Sunscreen',
        'Swimwear',
        'Camera',
        'Cash (for souvenirs or local purchases)',
      ],
    },

    // Luxe Yacht Experience
    'luxe-yacht': {
      size: '50 Feet',
      capacity: 'Up to 19 People',
      schedule: 'Monday, April 21st, 9:00 AM – 5:30 PM',
      includes: [
        'Private 50ft Yacht with Fuel',
        'Professional Crew (Captain and Sailor)',
        'Snorkeling Equipment',
        'Visit to Caribbean Island Destinations',
        'Private Round-Trip Transportation',
      ],
      halfDayOption: {
        available: true,
        times: ['9:00 AM – 1:00 PM', '1:30 PM – 5:30 PM'],
      },
      menuOptions: [
        {
          name: 'Classic Menu #1',
          items: [
            'Ice',
            'Beers',
            'Water',
            'Hot Dogs',
            'Soft Drinks',
            'Tropical Fruits',
            'Premium Burgers',
            'Nachos with Guacamole',
          ],
        },
        {
          name: 'Classic Menu #2',
          items: [
            'Ice',
            'Beers',
            'Water',
            'Pork Ribs',
            'Soft Drinks',
            'Pork Chops',
            'Pasta Salad',
            'Tropical Fruits',
            'Chicken Breast',
            'Nachos with Guacamole',
          ],
        },
        {
          name: 'Premium Menu #3',
          items: [
            'Ice',
            'Beers',
            'Water',
            'Salmon',
            'Soft Drinks',
            'Pasta Salad',
            'Fresh Lobster',
            'Tropical Fruits',
            'Nachos with Guacamole',
            'Premium Cheese & Ham Platter',
          ],
        },
      ],
    },

    // Add more special services as needed
  };

  return specialServiceMap[serviceId] || {};
}

/**
 * Converts kebab-case service IDs to camelCase for translation paths
 * @param serviceId - The ID of the service in kebab-case
 * @returns The translation path for the service
 */
export function getServiceTranslationPath(serviceId: string): string {
  // Determine if it's a premium service
  const isPremium = serviceId.startsWith('luxe-');
  const type = isPremium ? 'premium' : 'standard';

  // Convert the ID to a format that matches your translation keys
  let key = serviceId;

  // Remove 'luxe-' prefix if present
  if (isPremium) {
    key = key.replace('luxe-', '');
  }

  // Convert kebab-case to camelCase for the translation key
  key = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  return `services.${type}.${key}`;
}

/**
 * Gets related services based on the current service and package type
 * @param currentServiceId - The ID of the current service
 * @param packageType - The package type (standard or premium)
 * @param services - The array of all services
 * @param limit - Maximum number of related services to return
 * @returns Array of related services
 */
export function getRelatedServices(
  currentServiceId: string,
  packageType: string,
  services: any[],
  limit = 3
) {
  return services
    .filter(
      (service) =>
        service.packageType.includes(packageType) &&
        service.id !== currentServiceId
    )
    .slice(0, limit);
}
