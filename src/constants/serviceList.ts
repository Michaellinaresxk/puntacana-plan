import { PaymentMethod, PropertyDetails, Service } from '@/types/type';

export const PROPERTY_DETAILS: PropertyDetails = {
  name: 'Hacienda B-25',
  resort: 'Puntacana Resort & Club',
  province: 'La Altagracia',
  municipality: 'Higuey',
  sector: 'Punta Cana',
  zipCode: '23000',
  country: 'Dominican Republic',
};

export const SERVICES: Service[] = [
  // Punta Cana Plan (Standard) Services
  {
    id: 'yoga-standard',
    name: 'Yoga',
    img: 'https://feldenkrais.com/wp-content/uploads/2023/04/david-whipple-PktK6GuC3U4-unsplash-scaled-e1680858426287.jpg',
    description: 'PCP yoga sessions at our beachfront pavilion',
    packageType: ['standard'],
    price: 50,
    duration: 1,
    available: true,
  },

  {
    id: 'bike-rentals',
    name: 'Bike Rentals',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Explore the resort on our comfortable bicycles',
    packageType: ['standard'],
    price: 25,
    duration: 4,
    available: true,
  },
  {
    id: 'airport-transfers',
    name: 'Airport Transfers',
    img: 'https://denomades.imgix.net/destinos/santiago/8/vehiculo-transporte-pasajeros.jpg?w=907&h=494&fit=crop&q=100&auto=format,compress&fm=webp',
    description: 'Convenient transportation to and from Punta Cana Airport',
    packageType: ['standard'],
    price: 75,
    duration: 1,
    available: true,
  },
  {
    id: 'catamaran-trips',
    name: 'Catamaran Trips',
    img: 'https://www.velmundi.com/uploads/RTEmagicC_lagoon_440_01.jpg.jpg',
    description: 'Scenic sailing adventures along the coastline',
    packageType: ['standard'],
    price: 120,
    duration: 4,
    available: true,
  },
  {
    id: 'golf-cart-rentals',
    name: 'Golf Cart Rentals',
    img: 'https://carrosgolf.com.mx/wp-content/uploads/2022/09/Porta-bolsas-de-Golf.jpg',
    description: 'Convenient transportation within the resort',
    packageType: ['standard'],
    price: 65,
    duration: 24,
    available: true,
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'One-on-one fitness sessions with certified trainers',
    packageType: ['standard'],
    price: 70,
    duration: 1,
    available: true,
  },
  {
    id: 'babysitter',
    name: 'Babysitter',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Professional childcare services',
    packageType: ['standard'],
    price: 20,
    duration: 1,
    available: true,
  },
  {
    id: 'horseback-riding',
    name: 'Horseback Riding',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Guided tours on horseback through scenic trails',
    packageType: ['standard'],
    price: 90,
    duration: 2,
    available: true,
  },
  {
    id: 'deep-sea-fishing',
    name: 'Deep-Sea Fishing',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Exciting fishing excursions in the Caribbean Sea',
    packageType: ['standard'],
    price: 250,
    duration: 4,
    available: true,
  },
  {
    id: 'private-chef',
    name: 'Private Chef Service',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Personalized culinary experiences in your accommodation',
    packageType: ['standard'],
    price: 200,
    duration: 3,
    available: true,
  },
  {
    id: 'custom-decorations',
    name: 'Custom Decorations',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Special event decorations for celebrations',
    packageType: ['standard'],
    price: 150,
    duration: 0,
    available: true,
  },
  {
    id: 'adventure-excursions',
    name: 'Adventure Excursions',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Thrilling activities and tours around Punta Cana',
    packageType: ['standard'],
    price: 110,
    duration: 6,
    available: true,
  },
  {
    id: 'karaoke',
    name: 'Private Karaoke Sessions',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Fun karaoke setup in your accommodation',
    packageType: ['standard'],
    price: 120,
    duration: 3,
    available: true,
  },
  {
    id: 'live-music',
    name: 'Live Music Entertainment',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Local musicians performing at your event',
    packageType: ['standard'],
    price: 300,
    duration: 3,
    available: true,
  },
  {
    id: 'grocery-shopping',
    name: 'Grocery Shopping Assistance',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'We shop for groceries and deliver to your accommodation',
    packageType: ['standard'],
    price: 50,
    duration: 0,
    available: true,
  },

  // Punta Cana Luxe (Premium) Services
  {
    id: 'luxe-yacht',
    name: 'Luxe Yacht',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Private luxury yacht charter with crew',
    packageType: ['premium'],
    price: 1500,
    duration: 8,
    available: true,
  },
  {
    id: 'luxe-e-bikes',
    name: 'Luxe E-Bikes',
    img: 'https://bikepacking.com/wp-content/uploads/2023/09/Readers-Rig-Emilys-All-City-Super-Professional_13.jpg',
    description: 'Premium electric bikes for effortless exploration',
    packageType: ['premium'],
    price: 75,
    duration: 4,
    available: true,
  },
  {
    id: 'luxe-golf-cart',
    name: 'Luxe Golf Cart',
    img: 'https://assets-us-01.kc-usercontent.com/b3c539fb-5388-0052-9b2c-d05615ca0363/592b138a-77a6-4203-8069-b8473ff20de9/onward-golf-carts-2-passenger-lifted-4-passenger-and-lifted-6-passenger-1280x720%20%281%29.jpg',
    description: 'Premium golf cart with extended features',
    packageType: ['premium'],
    price: 120,
    duration: 24,
    available: true,
  },
  {
    id: 'luxe-yoga',
    name: 'Luxe Yoga Sessions',
    img: 'https://www.guardian.in/cdn/shop/articles/yoga-asans-for-weight-loss.jpg?v=1705486602&width=1000',
    description: 'Private beachfront yoga with premium amenities',
    packageType: ['premium'],
    price: 120,
    duration: 1.5,
    available: true,
  },
  {
    id: 'luxe-fitness',
    name: 'Luxe Fitness Sessions',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Elite personal training with specialized equipment',
    packageType: ['premium'],
    price: 150,
    duration: 1.5,
    available: true,
  },
  {
    id: 'luxe-culinary',
    name: 'Luxe Culinary Service',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Gourmet chef experience with premium ingredients',
    packageType: ['premium'],
    price: 500,
    duration: 4,
    available: true,
  },
  {
    id: 'luxe-masseuse',
    name: 'Luxe Masseuse Service',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Premium spa treatments in your accommodation',
    packageType: ['premium'],
    price: 200,
    duration: 2,
    available: true,
  },
  {
    id: 'luxe-arrival',
    name: 'Luxe Arrival - SUV Service',
    img: 'https://imfixies.pt/2416-medium_default/blb-beetle-8-speed-700c-classic-city-bike.jpg',
    description: 'Luxury SUV airport transfer with premium amenities',
    packageType: ['premium'],
    price: 150,
    duration: 1,
    available: true,
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'azul',
    name: 'Azul',
    description:
      'Dominican payment processor accepting local and international cards',
    icon: 'credit-card',
    isAvailable: true,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Secure online payment service',
    icon: 'paypal',
    isAvailable: true,
  },
  {
    id: 'cardnet',
    name: 'CardNet',
    description: 'Local Dominican Republic payment network',
    icon: 'credit-card',
    isAvailable: true,
  },
  {
    id: 'tpago',
    name: 'tPago',
    description: 'Mobile payment service in Dominican Republic',
    icon: 'smartphone',
    isAvailable: true,
  },
  {
    id: 'visanet',
    name: 'VisaNet Dominicana',
    description: 'Process Visa card payments in Dominican Republic',
    icon: 'credit-card',
    isAvailable: true,
  },
  {
    id: 'bank-transfer',
    name: 'Bank Transfer',
    description: 'Direct bank transfer to our account',
    icon: 'bank',
    isAvailable: true,
  },
];

export type TourServiceData = {
  pickupTime: string;
  duration?: string;
  schedule?: string;
  includes: string[];
  whatToBring: string[];
};

export type YachtServiceData = {
  size: string;
  capacity: string;
  schedule: string;
  includes: string[];
  halfDayOption?: {
    available: boolean;
    times: string[];
  };
  menuOptions: Array<{
    name: string;
    items: string[];
  }>;
};

export const SPECIAL_SERVICES_DATA: Record<string, any> = {
  'saona-island-tour': {
    type: 'tour',
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
  'luxe-yacht': {
    type: 'yacht',
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
  // Añadir más servicios especiales según sea necesario
};
