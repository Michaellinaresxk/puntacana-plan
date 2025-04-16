'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative h-screen w-full flex items-center justify-center overflow-hidden font-[family-name:var(--font-geist-sans)]'>
      {/* Background image with overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{
          backgroundImage: 'url("/images/hero-background.jpg")',
        }}
      >
        <div className='absolute inset-0 bg-black/50 z-10'></div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 relative z-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
            RelaxInn <span className='text-amber-400'>Vacation Homes</span>
          </h1>

          <p className='text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto'>
            Experience the ultimate luxury getaway in Punta Cana with our
            exclusive vacation homes and premium services
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='#packages'>
              <button className='px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300 text-lg'>
                Explore Packages
              </button>
            </Link>

            <Link href='#contact'>
              <button className='px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold rounded-lg transition-colors duration-300 text-lg'>
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-0 right-0 flex justify-center z-20'>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href='#packages'>
            <ArrowDownCircle
              size={48}
              className='text-white/80 hover:text-amber-400 cursor-pointer transition-colors duration-300'
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
