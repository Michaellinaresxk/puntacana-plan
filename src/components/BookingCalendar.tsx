'use client';

import React, { useState } from 'react';

import { DateRange, DayPicker } from 'react-day-picker';
import { format, addDays, isBefore, isAfter } from 'date-fns';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '@/ context/BookingContext';

const BookingCalendar = () => {
  const { packageType, selectedServices, dates, setDates, guests, setGuests } =
    useBooking();
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    dates ? { from: dates.startDate, to: dates.endDate } : undefined
  );

  // Ensure we can only book dates in the future
  const disabledDays = { before: new Date() };

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      setDateRange(range);
      setDates({
        startDate: range.from,
        endDate: range.to,
      });
    }
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(Number(e.target.value));
  };

  if (!packageType || selectedServices.length === 0) {
    return null;
  }

  return (
    <section id='calendar' className='py-24 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Select Your Dates
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Choose your check-in and check-out dates and number of guests.
          </p>
        </div>

        <motion.div
          className='max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
            <div className='flex flex-col md:flex-row gap-8'>
              {/* Calendar */}
              <div className='flex-1'>
                <div className='mb-4 flex items-center'>
                  <CalendarIcon className='mr-2 h-5 w-5 text-gray-600' />
                  <h3 className='text-lg font-medium text-gray-900'>
                    Select Dates
                  </h3>
                </div>

                <div className='calendar-container p-2 border border-gray-200 rounded-lg bg-white'>
                  <DayPicker
                    mode='range'
                    selected={dateRange}
                    onSelect={handleRangeSelect}
                    disabled={disabledDays}
                    numberOfMonths={1}
                    className='rdp-custom'
                    styles={{
                      caption: { color: '#1e3a8a' },
                      day_selected: {
                        backgroundColor:
                          packageType === 'standard' ? '#3b82f6' : '#f59e0b',
                      },
                      day_today: {
                        color:
                          packageType === 'standard' ? '#3b82f6' : '#f59e0b',
                      },
                    }}
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className='flex-1'>
                <div className='mb-4 flex items-center'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Booking Summary
                  </h3>
                </div>

                <div className='bg-gray-50 p-4 rounded-lg mb-6'>
                  {dateRange?.from && dateRange?.to ? (
                    <div className='text-gray-700'>
                      <p className='font-medium'>Selected Dates:</p>
                      <p className='mb-2'>
                        {format(dateRange.from, 'PP')} -{' '}
                        {format(dateRange.to, 'PP')}
                      </p>
                      <p className='text-sm text-gray-500'>
                        {Math.ceil(
                          (dateRange.to.getTime() - dateRange.from.getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{' '}
                        days
                      </p>
                    </div>
                  ) : (
                    <p className='text-gray-500 italic'>
                      Please select check-in and check-out dates
                    </p>
                  )}
                </div>

                <div className='mb-6'>
                  <label className='block text-gray-700 mb-2 flex items-center'>
                    <Users className='mr-2 h-5 w-5' />
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={handleGuestsChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {dateRange?.from && dateRange?.to && (
                  <div className='mt-8'>
                    <a
                      href='#payment'
                      className={`
                        inline-flex items-center justify-center w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-300
                        ${
                          packageType === 'standard'
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-amber-500 text-white hover:bg-amber-600'
                        }
                      `}
                    >
                      Proceed to Payment
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
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCalendar;
