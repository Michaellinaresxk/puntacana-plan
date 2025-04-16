'use client';

import { BookingProvider } from '@/ context/BookingContext';
import BookingCalendar from '@/components/BookingCalendar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'; // Tu componente Hero existente
import Navbar from '@/components/Navbar';
import PackageSelector from '@/components/PackageSelector';
import PaymentForm from '@/components/PaymentForm';
import ServiceList from '@/components/ServicesList';

export default function Home() {
  return (
    <BookingProvider>
      <div className='flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] hero-image'>
        <Navbar />
        {/* Contenido principal */}
        <main className='flex-grow'>
          <div className='grid grid-rows-[1fr] items-center'>
            <Hero />
          </div>
          <PackageSelector />
          <ServiceList />
          <BookingCalendar />
          <PaymentForm />
        </main>

        {/* Footer explícitamente al final */}
        <Footer />
      </div>
    </BookingProvider>
  );
}
