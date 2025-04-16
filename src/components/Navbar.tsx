'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Controlar el scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variantes para animaciones
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  // Variante para el botón de hamburguesa
  const hamburgerVariants = {
    open: { rotate: 90, scale: 1.1 },
    closed: { rotate: 0, scale: 1 },
  };

  const menuItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Paquetes', href: '#packages' },
    { text: 'Servicios', href: '#services' },
    { text: 'Reservar', href: '#calendar' },
    { text: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 font-[family-name:var(--font-geist-sans)] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo con animación */}
          <motion.div
            className='flex-shrink-0'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href='/'
              className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              RelaxInn
            </Link>
          </motion.div>

          {/* Menú Hamburguesa con texto y animación */}
          <motion.div
            className='flex items-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-300 ease-in-out ${
                isScrolled
                  ? 'text-gray-700 hover:text-amber-500'
                  : 'text-white hover:text-amber-300'
              }`}
              aria-expanded={isOpen}
            >
              <span className='mr-2'>Menú</span>
              <motion.div
                variants={hamburgerVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
              >
                <Menu className='h-6 w-6' />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Menú lateral con animación */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay que cubre la pantalla */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black z-40'
              onClick={toggleMenu}
            />

            {/* Menú deslizable */}
            <motion.div
              className='fixed top-0 left-0 bottom-0 w-72 bg-white shadow-xl z-50 overflow-y-auto'
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
            >
              <div className='p-6'>
                <div className='flex items-center justify-between mb-8'>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href='/' className='text-gray-900 font-bold text-xl'>
                      RelaxInn
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={toggleMenu}
                    className='text-gray-700 hover:text-gray-900 focus:outline-none'
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </motion.button>
                </div>

                <nav>
                  <ul className='space-y-4'>
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={menuItemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          href={item.href}
                          className='block py-2 text-gray-700 hover:text-amber-500 transition duration-150 ease-in-out border-b border-gray-100'
                          onClick={toggleMenu}
                        >
                          {item.text}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  className='mt-8 p-4 bg-amber-50 rounded-lg'
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className='text-gray-700 text-sm mb-3'>
                    ¿Necesitas asistencia?
                  </p>
                  <a
                    href='tel:+18095551234'
                    className='flex items-center text-amber-500 font-medium'
                  >
                    <svg
                      className='h-4 w-4 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    +1 (809) 555-1234
                  </a>
                </motion.div>

                {/* Sección adicional en el menú */}
                <motion.div
                  className='mt-8 border-t border-gray-100 pt-6'
                  variants={menuItemVariants}
                >
                  <h3 className='text-sm font-semibold text-gray-900 mb-4'>
                    Visita nuestras redes
                  </h3>
                  <div className='flex space-x-4'>
                    <motion.a
                      href='#'
                      className='text-gray-600 hover:text-amber-500'
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </motion.a>
                    <motion.a
                      href='#'
                      className='text-gray-600 hover:text-amber-500'
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                      </svg>
                    </motion.a>
                    <motion.a
                      href='#'
                      className='text-gray-600 hover:text-amber-500'
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
