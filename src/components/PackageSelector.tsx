'use client';

import React from 'react';
import { Umbrella, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PackageType } from '@/types/type';
import { useBooking } from '@/ context/BookingContext';

const PackageSelector = () => {
  const { packageType, setPackageType } = useBooking();

  const handleSelectPackage = (selected: PackageType) => {
    setPackageType(selected);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const packageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id='packages' className='py-24 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Choose Your Experience
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Select the package that fits your vacation needs. Each option offers
            unique services to enhance your stay.
          </p>
        </div>

        <motion.div
          className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Standard Package */}
          <motion.div
            variants={packageVariants}
            className={`
              bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300
              ${
                packageType === 'standard'
                  ? 'border-blue-500 ring-4 ring-blue-200'
                  : 'border-transparent hover:border-blue-300'
              }
            `}
          >
            <div className='p-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Punta Cana Plan
                </h3>
                <Umbrella className='text-blue-500' size={32} />
              </div>
              <p className='text-gray-600 mb-6'>
                Our standard package offers a complete vacation experience with
                all the essential services.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Airport Transfers
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Golf Cart Rentals
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Catamaran Trips
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-blue-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Private Chef Service
                </li>
              </ul>
              <button
                onClick={() => handleSelectPackage('standard')}
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300
                  ${
                    packageType === 'standard'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white'
                  }
                `}
              >
                {packageType === 'standard' ? 'Selected' : 'Select Package'}
              </button>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            variants={packageVariants}
            className={`
              bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300
              ${
                packageType === 'premium'
                  ? 'border-amber-500 ring-4 ring-amber-200'
                  : 'border-transparent hover:border-amber-300'
              }
            `}
          >
            <div className='p-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Punta Cana Luxe
                </h3>
                <Crown className='text-amber-500' size={32} />
              </div>
              <p className='text-gray-600 mb-6'>
                Our premium package offers an elevated experience with exclusive
                luxury services.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-amber-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Luxe Yacht
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-amber-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Luxe Culinary Service
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-amber-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Luxe Masseuse Service
                </li>
                <li className='flex items-center text-gray-700'>
                  <svg
                    className='w-5 h-5 mr-2 text-amber-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Luxe Arrival - SUV Service
                </li>
              </ul>
              <button
                onClick={() => handleSelectPackage('premium')}
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300
                  ${
                    packageType === 'premium'
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-500 hover:text-white'
                  }
                `}
              >
                {packageType === 'premium' ? 'Selected' : 'Select Package'}
              </button>
            </div>
          </motion.div>
        </motion.div>

        {packageType && (
          <div className='mt-12 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href='#services'
                className='inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300'
              >
                View Available Services
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

export default PackageSelector;
