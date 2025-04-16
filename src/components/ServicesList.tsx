'use client';

import React, { useState, useEffect } from 'react';

import { Service as ServiceType } from '@/lib/types';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Plus, Check, Search } from 'lucide-react';
import { useBooking } from '@/ context/BookingContext';
import { SERVICES } from '@/constants/constants';

const ServiceList = () => {
  const { packageType, selectedServices, addService, removeService } =
    useBooking();
  const [filteredServices, setFilteredServices] = useState<ServiceType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (packageType) {
      const services = SERVICES.filter(
        (service) =>
          service.packageType.includes(packageType) &&
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id='services' className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            {packageType === 'standard'
              ? 'Punta Cana Plan Services'
              : 'Punta Cana Luxe Services'}
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Select the services you would like to include in your booking.
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
              placeholder='Search services...'
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
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`
                bg-white rounded-xl overflow-hidden border transition-all duration-300 shadow-md
                ${
                  isServiceSelected(service.id)
                    ? packageType === 'standard'
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-amber-500 ring-2 ring-amber-200'
                    : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {service.name}
                </h3>
                <p className='text-gray-600 mb-4 h-16'>{service.description}</p>

                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center text-gray-700'>
                    <Clock size={18} className='mr-1 text-gray-500' />
                    <span>
                      {service.duration}{' '}
                      {service.duration === 1 ? 'hour' : 'hours'}
                    </span>
                  </div>
                  <div className='flex items-center font-medium text-gray-900'>
                    <DollarSign size={18} className='mr-1 text-gray-500' />
                    <span>${service.price}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleServiceToggle(service)}
                  className={`
                    w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors duration-300
                    ${
                      isServiceSelected(service.id)
                        ? packageType === 'standard'
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }
                  `}
                >
                  {isServiceSelected(service.id) ? (
                    <>
                      <Check size={18} className='mr-2' />
                      Selected
                    </>
                  ) : (
                    <>
                      <Plus size={18} className='mr-2' />
                      Add to Booking
                    </>
                  )}
                </button>
              </div>
            </motion.div>
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
                className='inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300'
              >
                Select Dates
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList;
