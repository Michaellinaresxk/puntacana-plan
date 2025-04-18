'use client';

import React, { useState, useEffect } from 'react';
import { Service as ServiceType } from '@/types/type';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/client';
import ServiceCard from './ServiceCard';
import { useBooking } from '@/ context/BookingContext';
import { SERVICES } from '@/constants/serviceList';

const ServiceList = () => {
  const { packageType, selectedServices, addService, removeService } =
    useBooking();
  const [filteredServices, setFilteredServices] = useState<ServiceType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (packageType) {
      const services = SERVICES.filter(
        (service) =>
          service.packageType.includes(packageType) &&
          (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      );
      setFilteredServices(services);
    }
  }, [packageType, searchTerm]);

  const isServiceSelected = (serviceId: string) => {
    return selectedServices.some((service) => service.id === serviceId);
  };

  const handleServiceToggle = (service: ServiceType) => {
    if (isServiceSelected(service.id)) {
      removeService(service.id);
    } else {
      addService(service);
    }
  };

  if (!packageType) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id='services' className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {t(`services.title.${packageType}`)}
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className='max-w-md mx-auto mb-12'>
          <div className='relative'>
            <Search
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={20}
            />
            <input
              type='text'
              placeholder={t('services.actions.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
            />
          </div>
        </div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={isServiceSelected(service.id)}
              packageType={packageType}
              onToggle={handleServiceToggle}
            />
          ))}
        </motion.div>

        {selectedServices.length > 0 && (
          <div className='mt-16 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href='#calendar'
                className={`
                  inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-colors duration-300
                  ${
                    packageType === 'standard'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }
                `}
              >
                {t('services.actions.selectDates')}
                <ExternalLink className='ml-2 w-5 h-5' />
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList;
