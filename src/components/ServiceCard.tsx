'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/types/type';
import { Clock, DollarSign, Plus, Check, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/client';
import { useLanguage } from '@/lib/i18n/client';
import Image from 'next/image';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  packageType: 'standard' | 'premium';
  onToggle: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSelected,
  packageType,
  onToggle,
}) => {
  const { t } = useTranslation();
  const [language] = useLanguage();

  // Helper function to get translation path
  const getTranslationPath = (serviceId: string) => {
    // Determine if it's a premium service
    const type = serviceId.startsWith('luxe-') ? 'premium' : 'standard';

    // Convert kebab-case to camelCase for the key
    let key = serviceId.replace(/^luxe-/, ''); // Remove 'luxe-' prefix if present
    key = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase

    return `services.${type}.${key}`;
  };

  // Get the translation path for this service
  const translationPath = getTranslationPath(service.id);

  // Handle potential image errors
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = '/images/placeholder-service.jpg'; // Fallback image
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`
        bg-white rounded-xl overflow-hidden border transition-all duration-300 shadow-md hover:shadow-lg
        ${
          isSelected
            ? packageType === 'standard'
              ? 'border-blue-500 ring-2 ring-blue-200'
              : 'border-amber-500 ring-2 ring-amber-200'
            : 'border-gray-200 hover:border-gray-300'
        }
      `}
    >
      {/* Image Section with Fallback */}
      <div className='h-48 relative overflow-hidden'>
        {/* La animación de pulso solo debe aparecer mientras la imagen está cargando */}
        <div className='absolute inset-0 bg-gray-200'></div>
        <Image
          src={service.img || `/images/services/${service.id}.jpg`}
          alt={t(`${translationPath}.name`, { fallback: service.name })}
          width={400}
          height={192}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-105 relative z-10'
          onError={handleImageError}
          unoptimized={service.img?.startsWith('http')}
          priority={true}
        />

        {/* Overlay para el gradiente */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-20'></div>

        {/* Service name overlay on the image */}
        <div className='absolute bottom-0 left-0 right-0 p-4 text-white z-30'>
          <h3 className='text-xl font-semibold drop-shadow-md'>
            {t(`${translationPath}.name`, { fallback: service.name })}
          </h3>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-gray-600 mb-4 h-12 line-clamp-2 text-sm'>
          {t(`${translationPath}.short`, { fallback: service.description })}
        </p>

        {/* <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center text-gray-700 text-sm'>
            <Clock size={16} className='mr-1 text-gray-500' />
            <span>
              {service.duration}{' '}
              {service.duration === 1
                ? t('services.hours.one', { fallback: 'hour' })
                : t('services.hours.multiple', { fallback: 'hours' })}
            </span>
          </div>
          <div className='flex items-center font-medium text-gray-900'>
            <DollarSign size={16} className='mr-1 text-gray-500' />
            <span>${service.price}</span>
          </div>
        </div> */}

        <div className='flex flex-col gap-2'>
          {/* Link to service details page */}
          <Link
            href={`/services/${service.id}`}
            className='inline-flex items-center justify-center w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200'
          >
            {t('services.actions.details', { fallback: 'View Details' })}
            <ArrowRight size={16} className='ml-2' />
          </Link>

          {/* Add/Remove service button */}
          <button
            onClick={() => onToggle(service)}
            className={`
              w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors duration-300
              ${
                isSelected
                  ? packageType === 'standard'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }
            `}
          >
            {isSelected ? (
              <>
                <Check size={18} className='mr-2' />
                {t('services.actions.selected', { fallback: 'Selected' })}
              </>
            ) : (
              <>
                <Plus size={18} className='mr-2' />
                {t('services.actions.addToBooking', {
                  fallback: 'Add to Booking',
                })}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
