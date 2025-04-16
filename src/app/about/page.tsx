'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Heart, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <Navbar />

      <main className='flex-grow pt-16'>
        {/* Hero de la página About Us */}
        <section className='relative bg-gray-900 py-24 text-white'>
          <div
            className='absolute inset-0 bg-cover bg-center opacity-30'
            style={{ backgroundImage: 'url("/images/about-bg.jpg")' }}
          />
          <div className='container mx-auto px-6 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <motion.h1
                className='text-4xl md:text-5xl font-bold mb-6'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Sobre RelaxInn
              </motion.h1>
              <motion.p
                className='text-lg text-white/80 mb-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Descubra la historia detrás de nuestras exclusivas casas
                vacacionales y nuestro compromiso con experiencias de lujo en
                Punta Cana.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              {/* Imagen */}
              <motion.div
                className='rounded-xl overflow-hidden shadow-lg'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='aspect-w-4 aspect-h-3 bg-gray-200'>
                  {/* Aquí irá la imagen real, por ahora usamos un placeholder */}
                  <div
                    className='w-full h-full bg-cover bg-center'
                    style={{
                      backgroundImage: 'url("/api/placeholder/800/600")',
                    }}
                  ></div>
                </div>
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Nuestra Historia
                </h2>

                <div className='space-y-4 text-gray-700'>
                  <p>
                    RelaxInn Vacation Homes nació en 2010 con una visión clara:
                    ofrecer experiencias vacacionales de lujo que combinen la
                    privacidad de un hogar con los servicios de un resort de
                    cinco estrellas.
                  </p>
                  <p>
                    Fundada por un grupo de entusiastas del turismo dominicano,
                    nuestra empresa comenzó con apenas tres propiedades en la
                    zona de Punta Cana. A lo largo de los años, hemos crecido
                    hasta gestionar más de 25 exclusivas residencias
                    vacacionales en las áreas más prestigiosas de República
                    Dominicana.
                  </p>
                  <p>
                    Lo que nos distingue no es solo la calidad de nuestras
                    propiedades, sino nuestro enfoque en el servicio
                    personalizado. Creemos que cada huésped merece una
                    experiencia única, adaptada a sus preferencias particulares.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Nuestros Valores
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Los principios que guían nuestra misión de ofrecer experiencias
                vacacionales excepcionales.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* Valor 1 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                  <Award className='h-6 w-6 text-amber-500' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Excelencia
                </h3>
                <p className='text-gray-600'>
                  Nos esforzamos por superar las expectativas en cada aspecto de
                  nuestro servicio, desde la calidad de nuestras propiedades
                  hasta la atención al cliente.
                </p>
              </motion.div>

              {/* Valor 2 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                  <Heart className='h-6 w-6 text-amber-500' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Pasión
                </h3>
                <p className='text-gray-600'>
                  Amamos lo que hacemos y esa pasión se refleja en cada detalle,
                  creando experiencias memorables para nuestros huéspedes.
                </p>
              </motion.div>

              {/* Valor 3 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                  <Users className='h-6 w-6 text-amber-500' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Hospitalidad
                </h3>
                <p className='text-gray-600'>
                  Creemos en el arte de la verdadera hospitalidad, tratando a
                  cada huésped como a un invitado especial en nuestra propia
                  casa.
                </p>
              </motion.div>

              {/* Valor 4 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6'>
                  <Calendar className='h-6 w-6 text-amber-500' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  Innovación
                </h3>
                <p className='text-gray-600'>
                  Continuamente buscamos formas de mejorar y evolucionar,
                  adoptando nuevas ideas y tecnologías para elevar la
                  experiencia del huésped.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Conozca a Nuestro Equipo
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Personas apasionadas dedicadas a crear experiencias vacacionales
                excepcionales.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Miembro 1 */}
              <motion.div
                className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className='aspect-w-1 aspect-h-1 bg-gray-200'>
                  {/* Foto del miembro, usamos placeholder */}
                  <div
                    className='w-full h-full bg-cover bg-center'
                    style={{
                      backgroundImage: 'url("/api/placeholder/300/300")',
                    }}
                  ></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                    Ramón Brito
                  </h3>
                  <p className='text-amber-500 font-medium mb-3'>
                    Director General
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Con más de 15 años de experiencia en el sector hotelero de
                    lujo, Ramón lidera nuestro equipo con pasión y visión.
                  </p>
                  <div className='flex space-x-3'>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Miembro 2 */}
              <motion.div
                className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className='aspect-w-1 aspect-h-1 bg-gray-200'>
                  <div
                    className='w-full h-full bg-cover bg-center'
                    style={{
                      backgroundImage: 'url("/api/placeholder/300/300")',
                    }}
                  ></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                    María Rodríguez
                  </h3>
                  <p className='text-amber-500 font-medium mb-3'>
                    Directora de Servicios
                  </p>
                  <p className='text-gray-600 mb-4'>
                    María es la mente maestra detrás de nuestros exclusivos
                    servicios, siempre buscando nuevas formas de sorprender a
                    nuestros huéspedes.
                  </p>
                  <div className='flex space-x-3'>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Miembro 3 */}
              <motion.div
                className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className='aspect-w-1 aspect-h-1 bg-gray-200'>
                  <div
                    className='w-full h-full bg-cover bg-center'
                    style={{
                      backgroundImage: 'url("/api/placeholder/300/300")',
                    }}
                  ></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                    Carlos Méndez
                  </h3>
                  <p className='text-amber-500 font-medium mb-3'>
                    Gerente de Propiedades
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Carlos supervisa todas nuestras propiedades, asegurando que
                    cada una mantenga los más altos estándares de calidad y
                    confort.
                  </p>
                  <div className='flex space-x-3'>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className='text-center mt-12'>
              <Link
                href='/contact'
                className='inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors'
              >
                Conozca más sobre nuestro equipo{' '}
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Experiencias compartidas por aquellos que han disfrutado de
                nuestras casas vacacionales.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Testimonio 1 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className='flex items-center mb-4'>
                  <div className='h-12 w-12 rounded-full bg-gray-200 mr-4'>
                    <div
                      className='w-full h-full bg-cover bg-center rounded-full'
                      style={{
                        backgroundImage: 'url("/api/placeholder/100/100")',
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Laura y Miguel
                    </h4>
                    <p className='text-gray-500 text-sm'>España</p>
                  </div>
                </div>
                <div className='mb-4 flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-700 italic'>
                  "¡Una experiencia inolvidable! La propiedad era espectacular y
                  el servicio superó todas nuestras expectativas. Ramón nos
                  ayudó a planificar cada detalle de nuestra estadía."
                </p>
              </motion.div>

              {/* Testimonio 2 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className='flex items-center mb-4'>
                  <div className='h-12 w-12 rounded-full bg-gray-200 mr-4'>
                    <div
                      className='w-full h-full bg-cover bg-center rounded-full'
                      style={{
                        backgroundImage: 'url("/api/placeholder/100/100")',
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      John & Sarah
                    </h4>
                    <p className='text-gray-500 text-sm'>Estados Unidos</p>
                  </div>
                </div>
                <div className='mb-4 flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-700 italic'>
                  "Hemos reservado con RelaxInn tres veces y cada experiencia ha
                  sido mejor que la anterior. Las casas son impecables, pero lo
                  que realmente marca la diferencia es el servicio
                  personalizado."
                </p>
              </motion.div>

              {/* Testimonio 3 */}
              <motion.div
                className='bg-white p-6 rounded-xl shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className='flex items-center mb-4'>
                  <div className='h-12 w-12 rounded-full bg-gray-200 mr-4'>
                    <div
                      className='w-full h-full bg-cover bg-center rounded-full'
                      style={{
                        backgroundImage: 'url("/api/placeholder/100/100")',
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Familia Moreno
                    </h4>
                    <p className='text-gray-500 text-sm'>Colombia</p>
                  </div>
                </div>
                <div className='mb-4 flex text-amber-400'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-700 italic'>
                  "Viajamos con niños y RelaxInn hizo que nuestras vacaciones
                  fueran perfectas. La casa era espaciosa y los servicios para
                  niños excelentes. El chef privado fue un lujo que disfrutamos
                  enormemente."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-amber-50'>
          <div className='container mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Comience a Planificar Su Escapada de Ensueño
              </h2>
              <p className='text-lg text-gray-700 mb-8'>
                Descubra el lujo y la comodidad de nuestras exclusivas casas
                vacacionales en Punta Cana. Nuestro equipo está listo para crear
                una experiencia personalizada que supere sus expectativas.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='#packages'>
                  <button className='px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300 text-lg'>
                    Ver Paquetes
                  </button>
                </Link>

                <Link href='/contact'>
                  <button className='px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-300 text-lg'>
                    Contáctenos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
