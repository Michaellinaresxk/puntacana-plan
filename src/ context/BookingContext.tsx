'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  BookingDate,
  BookingDetails,
  Customer,
  PackageType,
  Service,
} from '@/types/type';

interface BookingContextType {
  packageType: PackageType | null;
  selectedServices: Service[];
  dates: BookingDate | null;
  guests: number;
  customer: Customer | null;
  specialRequests: string;
  totalPrice: number;
  setPackageType: (packageType: PackageType) => void;
  addService: (service: Service) => void;
  removeService: (serviceId: string) => void;
  setDates: (dates: BookingDate) => void;
  setGuests: (guests: number) => void;
  setCustomer: (customer: Customer) => void;
  setSpecialRequests: (requests: string) => void;
  calculateTotalPrice: () => number;
  resetBooking: () => void;
  getBookingDetails: () => BookingDetails;
}

const defaultBookingContext: BookingContextType = {
  packageType: null,
  selectedServices: [],
  dates: null,
  guests: 1,
  customer: null,
  specialRequests: '',
  totalPrice: 0,
  setPackageType: () => {},
  addService: () => {},
  removeService: () => {},
  setDates: () => {},
  setGuests: () => {},
  setCustomer: () => {},
  setSpecialRequests: () => {},
  calculateTotalPrice: () => 0,
  resetBooking: () => {},
  getBookingDetails: () => ({
    packageType: 'standard',
    selectedServices: [],
    dates: { startDate: new Date(), endDate: new Date() },
    guests: 1,
    specialRequests: '',
    totalPrice: 0,
  }),
};

const BookingContext = createContext<BookingContextType>(defaultBookingContext);

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [packageType, setPackageType] = useState<PackageType | null>(null);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [dates, setDates] = useState<BookingDate | null>(null);
  const [guests, setGuests] = useState<number>(1);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addService = (service: Service) => {
    // Check if service is already selected
    if (!selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
      calculateTotalPrice();
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(
      selectedServices.filter((service) => service.id !== serviceId)
    );
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    const servicesPrice = selectedServices.reduce(
      (sum, service) => sum + service.price,
      0
    );
    const calculatedTotal = servicesPrice;
    setTotalPrice(calculatedTotal);
    return calculatedTotal;
  };

  const resetBooking = () => {
    setPackageType(null);
    setSelectedServices([]);
    setDates(null);
    setGuests(1);
    setCustomer(null);
    setSpecialRequests('');
    setTotalPrice(0);
  };

  const getBookingDetails = (): BookingDetails => {
    if (!packageType || !dates) {
      throw new Error('Booking details incomplete');
    }

    return {
      packageType,
      selectedServices,
      dates,
      guests,
      specialRequests,
      totalPrice,
    };
  };

  const value = {
    packageType,
    selectedServices,
    dates,
    guests,
    customer,
    specialRequests,
    totalPrice,
    setPackageType,
    addService,
    removeService,
    setDates,
    setGuests,
    setCustomer,
    setSpecialRequests,
    calculateTotalPrice,
    resetBooking,
    getBookingDetails,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
