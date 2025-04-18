'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Check,
  Plus,
  Calendar,
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/client';
import { useLanguage } from '@/lib/i18n/client';
import { useBooking } from '@/ context/BookingContext';
import { SERVICES } from '@/constants/serviceList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { packageType, selectedServices, addService, removeService } =
    useBooking();
  const { t } = useTranslation();
  const [language] = useLanguage();

  // Get service ID from URL parameters
  const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;

  // Find the service by ID
  const service = SERVICES.find((s) => s.id === serviceId);

  // Handle image loading errors
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = '/images/placeholder-service.jpg'; // Fallback image
  };

  // If service not found or doesn't match package type, show error message
  if (!service || (packageType && !service.packageType.includes(packageType))) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 pt-24'>
        <div className='text-center max-w-md p-8 bg-white rounded-xl shadow-lg'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Service Not Found
          </h2>
          <p className='text-gray-600 mb-6'>
            The service you're looking for is not available or doesn't match
            your selected package.
          </p>
          <button
            onClick={() => router.back()}
            className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            <ArrowLeft className='inline mr-2' size={18} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

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

  const isServiceSelected = selectedServices.some((s) => s.id === service.id);

  const handleServiceToggle = () => {
    if (isServiceSelected) {
      removeService(service.id);
    } else {
      addService(service);
    }
  };

  const isPremium = service.packageType.includes('premium');

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50 pt-24'>
        <div className='container mx-auto px-6 py-12'>
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className='mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors'
          >
            <ArrowLeft size={20} className='mr-2' />
            {t('services.actions.backToServices', {
              fallback: 'Back to Services',
            })}
          </button>

          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='md:flex'>
              {/* Service Image */}
              <div className='md:w-1/2 h-80 md:h-auto relative'>
                <div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
                <img
                  src={`/images/services/${service.id}.jpg`}
                  alt={t(`${translationPath}.name`, { fallback: service.name })}
                  className='absolute inset-0 w-full h-full object-cover'
                  onError={handleImageError}
                />
                <div className='absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent'></div>
              </div>

              {/* Service Details */}
              <div className='md:w-1/2 p-8'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                    {t(`${translationPath}.name`, { fallback: service.name })}
                  </h1>

                  <div className='flex items-center space-x-6 mb-6'>
                    <div className='flex items-center text-gray-700'>
                      <Clock size={18} className='mr-2 text-gray-500' />
                      <span>
                        {service.duration}{' '}
                        {service.duration === 1
                          ? t('services.hours.one', { fallback: 'hour' })
                          : t('services.hours.multiple', { fallback: 'hours' })}
                      </span>
                    </div>
                    <div className='flex items-center font-medium text-gray-900'>
                      <DollarSign size={18} className='mr-2 text-gray-500' />
                      <span>${service.price}</span>
                    </div>
                  </div>

                  <div className='prose prose-lg text-gray-700 mb-8'>
                    <p>
                      {t(`${translationPath}.full`, {
                        fallback: service.description,
                      })}
                    </p>
                  </div>

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
                          {t('services.actions.selected', {
                            fallback: 'Selected',
                          })}
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

                    {selectedServices.length > 0 && (
                      <a
                        href='/#calendar'
                        className={`
                        flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300
                        border border-gray-300 bg-white text-gray-800 hover:bg-gray-50
                      `}
                      >
                        <Calendar size={18} className='mr-2' />
                        {t('services.actions.selectDates', {
                          fallback: 'Select Dates',
                        })}
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className='mt-16'>
            <h2 className='text-2xl font-bold text-gray-900 mb-8'>
              {t('services.actions.relatedServices', {
                fallback: 'You might also like',
              })}
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Aquí podrías mostrar servicios relacionados */}
              {/* Ejemplo: Servicios del mismo tipo, con precios similares, etc. */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
