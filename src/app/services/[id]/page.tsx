'use client';

import { useBooking } from '@/ context/BookingContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { SERVICES } from '@/constants/serviceList';
import { useLanguage, useTranslation } from '@/lib/i18n/client';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  DollarSign,
  Info,
  MapPin,
  Plus,
  Sailboat,
  ShoppingBag,
  Users,
  Utensils,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Obtiene datos especiales para servicios específicos
 */
function getExtendedServiceData(serviceId: string) {
  // Mapa de servicios con datos especiales
  const specialServices = {
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
  };

  return specialServices[serviceId as keyof typeof specialServices] || {};
}

/**
 * Convierte el ID del servicio a una ruta de traducción
 */
function getTranslationPath(serviceId: string) {
  // Determinar si es un servicio premium
  const isPremium = serviceId.startsWith('luxe-');
  const type = isPremium ? 'premium' : 'standard';

  // Convertir kebab-case a camelCase para la clave de traducción
  let key = serviceId;
  if (isPremium) {
    key = key.replace('luxe-', '');
  }

  key = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  return `services.${type}.${key}`;
}

/**
 * Obtiene servicios relacionados basados en el tipo de paquete
 */
function getRelatedServices(currentServiceId: string, packageType: string) {
  return SERVICES.filter(
    (service) =>
      service.packageType.includes(packageType) &&
      service.id !== currentServiceId
  ).slice(0, 3); // Limitar a 3 servicios relacionados
}

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { packageType, selectedServices, addService, removeService } =
    useBooking();
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState(0);

  // Obtener ID del servicio de los parámetros de URL
  const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;

  // Buscar el servicio por ID
  const service = SERVICES.find((s) => s.id === serviceId);

  // Si no se encuentra el servicio o no coincide con el tipo de paquete, mostrar mensaje de error
  if (!service || (packageType && !service.packageType.includes(packageType))) {
    return <ServiceNotFoundMessage router={router} t={t} />;
  }

  // Obtener ruta de traducción para este servicio
  const translationPath = getTranslationPath(service.id);

  // Obtener datos extendidos si están disponibles
  const extendedData = getExtendedServiceData(service.id);

  // Verificar si el servicio ya está seleccionado
  const isServiceSelected = selectedServices.some((s) => s.id === service.id);

  // Determinar si es un servicio premium
  const isPremium = service.packageType.includes('premium');
  const primaryColor = isPremium ? 'amber' : 'blue';

  // Obtener servicios relacionados
  const relatedServices = getRelatedServices(
    service.id,
    service.packageType[0]
  );

  // Manejar la selección/deselección de servicios
  const handleServiceToggle = () => {
    if (isServiceSelected) {
      removeService(service.id);
    } else {
      addService(service);
    }
  };

  // Manejar errores de carga de imágenes
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = '/images/placeholder-service.jpg';
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50 pt-24'>
        <div className='container mx-auto px-6 py-12'>
          {/* Botón de Regreso */}
          <BackButton router={router} t={t} />

          {/* Detalles del Servicio */}
          <ServiceDetailsCard
            service={service}
            translationPath={translationPath}
            extendedData={extendedData}
            isPremium={isPremium}
            primaryColor={primaryColor}
            isServiceSelected={isServiceSelected}
            selectedServices={selectedServices}
            handleImageError={handleImageError}
            handleServiceToggle={handleServiceToggle}
            t={t}
          />

          {/* Información Adicional del Servicio */}
          {hasExtendedData(extendedData) && (
            <AdditionalServiceInfo
              extendedData={extendedData}
              primaryColor={primaryColor}
              isPremium={isPremium}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              t={t}
            />
          )}

          {/* Servicios Relacionados */}
          {relatedServices.length > 0 && (
            <RelatedServices
              relatedServices={relatedServices}
              router={router}
              handleImageError={handleImageError}
              t={t}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

/**
 * Componente para mostrar mensaje cuando no se encuentra el servicio
 */
function ServiceNotFoundMessage({ router, t }: { router: any; t: any }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 pt-24'>
      <div className='text-center max-w-md p-8 bg-white rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          {t('services.notFound.title', { fallback: 'Service Not Found' })}
        </h2>
        <p className='text-gray-600 mb-6'>
          {t('services.notFound.message', {
            fallback:
              "The service you're looking for is not available or doesn't match your selected package.",
          })}
        </p>
        <button
          onClick={() => router.back()}
          className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          <ArrowLeft className='inline mr-2' size={18} />
          {t('services.actions.backToServices')}
        </button>
      </div>
    </div>
  );
}

/**
 * Componente para el botón de regreso
 */
function BackButton({ router, t }: { router: any; t: any }) {
  return (
    <button
      onClick={() => router.back()}
      className='mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors'
    >
      <ArrowLeft size={20} className='mr-2' />
      {t('services.actions.backToServices')}
    </button>
  );
}

/**
 * Componente principal para mostrar los detalles del servicio
 */
function ServiceDetailsCard({
  service,
  translationPath,
  extendedData,
  isPremium,
  primaryColor,
  isServiceSelected,
  selectedServices,
  handleImageError,
  handleServiceToggle,
  t,
}: any) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-12'>
      <div className='lg:flex'>
        {/* Imagen del Servicio */}
        <div className='lg:w-2/5 h-80 lg:h-auto relative'>
          <div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
          <img
            src={service.img || `/images/services/${service.id}.jpg`}
            alt={t(`${translationPath}.name`, { fallback: service.name })}
            className='absolute inset-0 w-full h-full object-cover z-10'
            onError={handleImageError}
          />
          <div className='absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-20'></div>

          {/* Insignia Premium/Standard */}
          <div
            className={`absolute top-6 left-6 z-30 px-4 py-2 rounded-full bg-${primaryColor}-500 text-white font-semibold text-sm`}
          >
            {isPremium ? 'Premium' : 'Standard'}
          </div>
        </div>

        {/* Detalles del Servicio */}
        <div className='lg:w-3/5 p-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              {t(`${translationPath}.name`, { fallback: service.name })}
            </h1>

            {/* Información Básica */}
            <ServiceBasicInfo
              service={service}
              extendedData={extendedData}
              t={t}
            />

            {/* Descripción */}
            <div className='prose prose-lg text-gray-700 mb-8'>
              <p className='mb-4'>
                {t(`${translationPath}.full`, {
                  fallback: service.description,
                })}
              </p>

              {extendedData.schedule && (
                <div className='flex items-start mt-2'>
                  <Calendar
                    size={18}
                    className='mr-2 mt-1 text-gray-500 flex-shrink-0'
                  />
                  <span>{extendedData.schedule}</span>
                </div>
              )}
            </div>

            {/* Botones de Acción */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={handleServiceToggle}
                className={`
                  flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300
                  ${
                    isServiceSelected
                      ? isPremium
                        ? 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }
                `}
              >
                {isServiceSelected ? (
                  <>
                    <Check size={18} className='mr-2' />
                    {t('services.actions.selected')}
                  </>
                ) : (
                  <>
                    <Plus size={18} className='mr-2' />
                    {t('services.actions.addToBooking')}
                  </>
                )}
              </button>

              {selectedServices.length > 0 && (
                <a
                  href='/#calendar'
                  className='flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                >
                  <Calendar size={18} className='mr-2' />
                  {t('services.actions.selectDates')}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 * Componente para mostrar la información básica del servicio
 */
function ServiceBasicInfo({ service, extendedData, t }: any) {
  return (
    <div className='flex flex-wrap items-center gap-6 mb-6'>
      {service.duration > 0 && (
        <div className='flex items-center text-gray-700'>
          <Clock size={18} className='mr-2 text-gray-500' />
          <span>
            {service.duration}{' '}
            {service.duration === 1
              ? t('services.hours.one')
              : t('services.hours.multiple')}
          </span>
        </div>
      )}

      <div className='flex items-center font-medium text-gray-900'>
        <DollarSign size={18} className='mr-2 text-gray-500' />
        <span>
          ${service.price} {extendedData.priceUnit}
        </span>
      </div>

      {extendedData.pickupTime && (
        <div className='flex items-center text-gray-700'>
          <MapPin size={18} className='mr-2 text-gray-500' />
          <span>Pickup: {extendedData.pickupTime}</span>
        </div>
      )}

      {extendedData.capacity && (
        <div className='flex items-center text-gray-700'>
          <Users size={18} className='mr-2 text-gray-500' />
          <span>{extendedData.capacity}</span>
        </div>
      )}

      {extendedData.size && (
        <div className='flex items-center text-gray-700'>
          <Sailboat size={18} className='mr-2 text-gray-500' />
          <span>{extendedData.size}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Verificar si el servicio tiene datos extendidos
 */
function hasExtendedData(extendedData: any) {
  return (
    (extendedData.includes && extendedData.includes.length > 0) ||
    (extendedData.whatToBring && extendedData.whatToBring.length > 0) ||
    (extendedData.menuOptions && extendedData.menuOptions.length > 0) ||
    (extendedData.halfDayOption && extendedData.halfDayOption.available)
  );
}

/**
 * Componente para mostrar información adicional del servicio
 */
function AdditionalServiceInfo({
  extendedData,
  primaryColor,
  isPremium,
  selectedMenu,
  setSelectedMenu,
  t,
}: any) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-12 p-8'>
      <h2 className='text-2xl font-bold text-gray-900 mb-6'>
        {t('services.details', { fallback: 'Details' })}
      </h2>

      {/* Opción de Medio Día */}
      {extendedData.halfDayOption && extendedData.halfDayOption.available && (
        <HalfDayOption
          halfDayOption={extendedData.halfDayOption}
          primaryColor={primaryColor}
        />
      )}

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Inclusiones */}
        {extendedData.includes && extendedData.includes.length > 0 && (
          <IncludesSection
            includes={extendedData.includes}
            primaryColor={primaryColor}
            t={t}
          />
        )}

        {/* Qué Traer */}
        {extendedData.whatToBring && extendedData.whatToBring.length > 0 && (
          <WhatToBringSection
            whatToBring={extendedData.whatToBring}
            primaryColor={primaryColor}
            t={t}
          />
        )}
      </div>

      {/* Opciones de Menú */}
      {extendedData.menuOptions && extendedData.menuOptions.length > 0 && (
        <MenuOptionsSection
          menuOptions={extendedData.menuOptions}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          primaryColor={primaryColor}
          isPremium={isPremium}
          t={t}
        />
      )}
    </div>
  );
}

/**
 * Componente para la opción de medio día
 */
function HalfDayOption({ halfDayOption, primaryColor }: any) {
  return (
    <div className='mb-8 p-4 bg-gray-50 rounded-lg'>
      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
        Half-Day Option
      </h3>
      {halfDayOption.times && (
        <div className='space-y-1'>
          {halfDayOption.times.map((time: string, index: number) => (
            <div key={index} className='flex items-center'>
              <Check size={16} className={`mr-2 text-${primaryColor}-500`} />
              <span>{time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Componente para la sección de inclusiones
 */
function IncludesSection({ includes, primaryColor, t }: any) {
  return (
    <div>
      <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
        <Info size={18} className={`mr-2 text-${primaryColor}-500`} />
        {t('services.includes', { fallback: 'Includes' })}
      </h3>
      <ul className='space-y-2'>
        {includes.map((item: string, index: number) => (
          <li key={index} className='flex items-start'>
            <Check
              size={16}
              className={`mr-2 mt-1 text-${primaryColor}-500 flex-shrink-0`}
            />
            <span className='text-gray-700'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Componente para la sección de qué traer
 */
function WhatToBringSection({ whatToBring, primaryColor, t }: any) {
  return (
    <div>
      <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
        <ShoppingBag size={18} className={`mr-2 text-${primaryColor}-500`} />
        {t('services.whatToBring', {
          fallback: 'What to Bring',
        })}
      </h3>
      <ul className='space-y-2'>
        {whatToBring.map((item: string, index: number) => (
          <li key={index} className='flex items-start'>
            <Check
              size={16}
              className={`mr-2 mt-1 text-${primaryColor}-500 flex-shrink-0`}
            />
            <span className='text-gray-700'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Componente para la sección de opciones de menú
 */
function MenuOptionsSection({
  menuOptions,
  selectedMenu,
  setSelectedMenu,
  primaryColor,
  isPremium,
  t,
}: any) {
  return (
    <div className='mt-10'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
        <Utensils size={18} className={`mr-2 text-${primaryColor}-500`} />
        {t('services.menuOptions', { fallback: 'Menu Options' })}
      </h3>

      <div className='mb-4 flex flex-wrap gap-2'>
        {menuOptions.map((menu: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedMenu(index)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedMenu === index
                ? isPremium
                  ? 'bg-amber-500 text-white'
                  : 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {menu.name}
          </button>
        ))}
      </div>

      <div className='bg-gray-50 p-6 rounded-lg'>
        <h4 className='font-medium text-gray-900 mb-4'>
          {menuOptions[selectedMenu].name}
        </h4>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2'>
          {menuOptions[selectedMenu].items.map(
            (item: string, index: number) => (
              <li key={index} className='flex items-center'>
                <Check
                  size={16}
                  className={`mr-2 text-${primaryColor}-500 flex-shrink-0`}
                />
                <span className='text-gray-700'>{item}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

/**
 * Componente para mostrar servicios relacionados
 */
function RelatedServices({
  relatedServices,
  router,
  handleImageError,
  t,
}: any) {
  return (
    <div className='mt-16'>
      <h2 className='text-2xl font-bold text-gray-900 mb-8'>
        {t('services.actions.relatedServices')}
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {relatedServices.map((relatedService: any) => {
          const relatedTranslationPath = getTranslationPath(relatedService.id);

          return (
            <div
              key={relatedService.id}
              className='bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer'
              onClick={() => router.push(`/services/${relatedService.id}`)}
            >
              <div className='h-48 relative'>
                <img
                  src={
                    relatedService.img ||
                    `/images/services/${relatedService.id}.jpg`
                  }
                  alt={t(`${relatedTranslationPath}.name`, {
                    fallback: relatedService.name,
                  })}
                  className='w-full h-full object-cover'
                  onError={handleImageError}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {t(`${relatedTranslationPath}.name`, {
                    fallback: relatedService.name,
                  })}
                </h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {t(`${relatedTranslationPath}.short`, {
                    fallback: relatedService.description,
                  })}
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center text-gray-700'>
                    <Clock size={16} className='mr-1 text-gray-500' />
                    <span className='text-sm'>
                      {relatedService.duration}{' '}
                      {relatedService.duration === 1
                        ? t('services.hours.one')
                        : t('services.hours.multiple')}
                    </span>
                  </div>
                  <div className='flex items-center font-medium text-gray-900'>
                    <DollarSign size={16} className='mr-1 text-gray-500' />
                    <span>${relatedService.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
