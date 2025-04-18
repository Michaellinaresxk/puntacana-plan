'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Footer } from 'react-day-picker';

// Componente para la página de contacto
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Por favor complete todos los campos requeridos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulación de envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);

      // Resetear el formulario después de un tiempo
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      setFormError(
        'Ha ocurrido un error al enviar su mensaje. Por favor intente nuevamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <Navbar />

      <main className='flex-grow pt-16'>
        {/* Hero de la página de contacto */}
        <section className='relative bg-gray-900 py-24 text-white'>
          <div
            className='absolute inset-0 bg-cover bg-center opacity-30'
            style={{ backgroundImage: 'url("/images/contact-bg.jpg")' }}
          />
          <div className='container mx-auto px-6 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <motion.h1
                className='text-4xl md:text-5xl font-bold mb-6'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contáctenos
              </motion.h1>
              <motion.p
                className='text-lg text-white/80 mb-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Estamos aquí para responder a sus preguntas y ayudarle a
                planificar su estancia perfecta en Punta Cana.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Información de contacto + Formulario */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-6'>
            <div className='grid md:grid-cols-2 gap-12'>
              {/* Información de contacto */}
              <motion.div
                className='bg-gray-50 p-8 rounded-xl shadow-sm'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Información de Contacto
                </h2>

                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <MapPin className='w-6 h-6 text-amber-500 mt-1 flex-shrink-0' />
                    <div className='ml-4'>
                      <h3 className='font-medium text-gray-900'>Dirección</h3>
                      <p className='text-gray-600 mt-1'>
                        Hacienda B-25, Puntacana Resort & Club
                        <br />
                        Punta Cana, La Altagracia
                        <br />
                        República Dominicana
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <Phone className='w-6 h-6 text-amber-500 mt-1 flex-shrink-0' />
                    <div className='ml-4'>
                      <h3 className='font-medium text-gray-900'>Teléfono</h3>
                      <p className='text-gray-600 mt-1'>
                        +1 (809) 555-1234
                        <br />
                        +1 (809) 555-5678
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <Mail className='w-6 h-6 text-amber-500 mt-1 flex-shrink-0' />
                    <div className='ml-4'>
                      <h3 className='font-medium text-gray-900'>Email</h3>
                      <p className='text-gray-600 mt-1'>
                        info@puntacanaplan.com
                        <br />
                        booking@puntacanaplan.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-10'>
                  <h3 className='font-medium text-gray-900 mb-3'>
                    Horario de Atención
                  </h3>
                  <table className='w-full text-gray-600'>
                    <tbody>
                      <tr>
                        <td className='py-1'>Lunes - Viernes:</td>
                        <td className='py-1'>8:00 AM - 8:00 PM</td>
                      </tr>
                      <tr>
                        <td className='py-1'>Sábado:</td>
                        <td className='py-1'>9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className='py-1'>Domingo:</td>
                        <td className='py-1'>10:00 AM - 4:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='mt-10'>
                  <h3 className='font-medium text-gray-900 mb-3'>Síguenos</h3>
                  <div className='flex space-x-4'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-amber-500 transition-colors'
                    >
                      <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Formulario de contacto */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Envíenos un mensaje
                </h2>

                {isSuccess ? (
                  <div className='bg-green-50 border border-green-200 rounded-xl p-8 text-center'>
                    <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      ¡Mensaje Enviado!
                    </h3>
                    <p className='text-gray-600'>
                      Gracias por contactarnos. Nuestro equipo le responderá a
                      la brevedad posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-gray-700 mb-2'
                      >
                        Nombre completo *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        placeholder='Su nombre completo'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-gray-700 mb-2'
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
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        placeholder='Su dirección de email'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-gray-700 mb-2'
                      >
                        Asunto
                      </label>
                      <select
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                      >
                        <option value=''>Seleccione un asunto</option>
                        <option value='reservations'>Reservaciones</option>
                        <option value='services'>
                          Información de servicios
                        </option>
                        <option value='support'>Soporte</option>
                        <option value='feedback'>Comentarios</option>
                        <option value='other'>Otro</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-gray-700 mb-2'
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
                        placeholder='Escriba su mensaje aquí'
                      ></textarea>
                    </div>

                    {formError && (
                      <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700'>
                        {formError}
                      </div>
                    )}

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='inline-flex items-center py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors'
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
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje <Send className='ml-2 h-5 w-5' />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className='py-12 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
              Nuestra Ubicación
            </h2>
            <div className='h-96 bg-gray-200 rounded-xl overflow-hidden'>
              {/* Aquí iría un mapa interactivo, por ahora usamos una imagen placeholder */}
              <div
                className='h-full w-full bg-cover bg-center'
                style={{ backgroundImage: 'url("/api/placeholder/1200/600")' }}
              >
                <div className='h-full w-full flex items-center justify-center bg-gray-800/20'>
                  <div className='bg-white p-4 rounded-lg shadow-md'>
                    <h3 className='font-medium text-gray-900'>
                      Punta Cana Plan
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      Puntacana Resort & Club, Punta Cana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
