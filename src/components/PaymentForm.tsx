'use client';

import React, { useState } from 'react';

import {
  CreditCard,
  Phone,
  CheckCircle,
  AlertCircle,
  Building,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/ context/BookingContext';
import { Customer } from '@/types/type';

const PaymentForm = () => {
  const router = useRouter();
  const {
    packageType,
    selectedServices,
    dates,
    guests,
    customer,
    setCustomer,
    calculateTotalPrice,
    resetBooking,
  } = useBooking();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [formData, setFormData] = useState<Customer>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passportNumber: '',
    nationality: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate if we can show the payment form
  if (!packageType || selectedServices.length === 0 || !dates) {
    return null;
  }

  const totalPrice = calculateTotalPrice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

  const validateForm = (): boolean => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setFormError('Please fill out all required fields');
      return false;
    }

    if (!formData.passportNumber) {
      setFormError('Passport number is required for resort access');
      return false;
    }

    if (!selectedPaymentMethod) {
      setFormError('Please select a payment method');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, you would process the payment here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      setCustomer(formData);
      setIsSuccess(true);

      // Reset booking after a delay
      setTimeout(() => {
        resetBooking();
        router.push('/confirmation');
      }, 3000);
    } catch (error) {
      setFormError(
        'An error occurred during payment processing. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='payment' className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Complete Your Booking
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Enter your details and select a payment method to confirm your
            reservation.
          </p>
        </div>

        <motion.div
          className='max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {isSuccess ? (
            <div className='bg-green-50 border border-green-200 rounded-xl p-8 text-center'>
              <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
              <h3 className='text-2xl font-semibold text-gray-900 mb-2'>
                Booking Successful!
              </h3>
              <p className='text-gray-600 mb-6'>
                Thank you for your booking. We are redirecting you to the
                confirmation page...
              </p>
            </div>
          ) : (
            <div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 mb-4'>
                      Personal Information
                    </h3>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='firstName'
                      >
                        First Name *
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='lastName'
                      >
                        Last Name *
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='email'
                      >
                        Email *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='phone'
                      >
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='passportNumber'
                      >
                        Passport Number *{' '}
                        <span className='text-sm text-gray-500'>
                          (Required for resort access)
                        </span>
                      </label>
                      <input
                        type='text'
                        id='passportNumber'
                        name='passportNumber'
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 mb-2'
                        htmlFor='nationality'
                      >
                        Nationality *
                      </label>
                      <input
                        type='text'
                        id='nationality'
                        name='nationality'
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-900 mb-4'>
                      Payment Method
                    </h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                      {PAYMENT_METHODS.map((method: PaymentMethod) => (
                        <div
                          key={method.id}
                          onClick={() => handlePaymentMethodSelect(method.id)}
                          className={`
                            border rounded-lg p-4 cursor-pointer transition-all duration-300
                            ${
                              selectedPaymentMethod === method.id
                                ? packageType === 'standard'
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-amber-500 bg-amber-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }
                          `}
                        >
                          <div className='flex items-center'>
                            {method.icon === 'credit-card' && (
                              <CreditCard className='w-5 h-5 mr-3 text-gray-600' />
                            )}
                            {method.icon === 'smartphone' && (
                              <Phone className='w-5 h-5 mr-3 text-gray-600' />
                            )}
                            {method.icon === 'bank' && (
                              <Building className='w-5 h-5 mr-3 text-gray-600' />
                            )}
                            {method.icon === 'paypal' && (
                              <span className='mr-3 font-bold text-blue-600'>
                                <svg
                                  className='w-5 h-5'
                                  viewBox='0 0 24 24'
                                  fill='currentColor'
                                >
                                  <path d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.146-.05.296-.077.448-.146.816-.335 1.508-.565 2.146-.611 1.694-1.452 3.112-2.464 4.238-.963 1.066-2.056 1.82-3.248 2.251-1.258.454-2.73.665-4.303.665H7.51l-.55 5.88a.7.7 0 0 1-.693.612h-.044l.853-21.337z' />
                                </svg>
                              </span>
                            )}
                            <div>
                              <h4 className='font-medium text-gray-900'>
                                {method.name}
                              </h4>
                              <p className='text-sm text-gray-600'>
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='bg-gray-50 rounded-lg p-4 mb-6'>
                      <h4 className='font-medium text-gray-900 mb-2'>
                        Booking Summary
                      </h4>
                      <div className='space-y-2 mb-4'>
                        <div className='flex justify-between text-gray-700'>
                          <span>Package:</span>
                          <span className='font-medium'>
                            {packageType === 'standard'
                              ? 'Punta Cana Plan'
                              : 'Punta Cana Luxe'}
                          </span>
                        </div>
                        <div className='flex justify-between text-gray-700'>
                          <span>Selected Services:</span>
                          <span className='font-medium'>
                            {selectedServices.length}
                          </span>
                        </div>
                        <div className='flex justify-between text-gray-700'>
                          <span>Dates:</span>
                          <span className='font-medium'>
                            {dates &&
                              `${dates.startDate.toLocaleDateString()} - ${dates.endDate.toLocaleDateString()}`}
                          </span>
                        </div>
                        <div className='flex justify-between text-gray-700'>
                          <span>Guests:</span>
                          <span className='font-medium'>{guests}</span>
                        </div>
                      </div>

                      <div className='border-t border-gray-300 pt-4 mb-2'>
                        <div className='flex justify-between text-lg font-bold'>
                          <span>Total:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {formError && (
                  <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start'>
                    <AlertCircle className='w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0' />
                    <p className='text-red-700'>{formError}</p>
                  </div>
                )}

                <div className='flex justify-end'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={`
                      py-4 px-8 rounded-lg font-semibold transition-colors duration-300 flex items-center
                      ${
                        packageType === 'standard'
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-amber-500 text-white hover:bg-amber-600'
                      }
                      ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Booking
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
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          ></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentForm;
