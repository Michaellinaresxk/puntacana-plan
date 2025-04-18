'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50 pt-24'>
        <div className='container mx-auto px-6 py-12'>
          <div className='flex  items-center space-x-4 my-6'>
            <Link
              href='/'
              className='flex items-center text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100'
            >
              <ArrowLeft size={20} className='mr-2' />
              {t('services.actions.backToHome', {
                fallback: 'Back to Home',
              })}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto'
          >
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>
              Terms of Service
            </h1>

            <div className='prose prose-lg max-w-none'>
              <p>Last updated: April 18, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use
                of the RelaxInn Vacation Homes website, mobile applications, and
                services (collectively, the "Services"). By accessing or using
                our Services, you agree to be bound by these Terms and our
                Privacy Policy.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                <strong>2.1 Eligibility.</strong> You must be at least 18 years
                old to use our Services. By using our Services, you represent
                and warrant that you meet this requirement.
              </p>

              <p>
                <strong>2.2 Account Creation.</strong> To access certain
                features of our Services, you may need to create an account. You
                are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>

              <p>
                <strong>2.3 Prohibited Uses.</strong> You agree not to:
              </p>
              <ul>
                <li>Use our Services for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with the operation of our Services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our Services to transmit harmful code or content</li>
              </ul>

              <h2>3. Bookings and Reservations</h2>
              <p>
                <strong>3.1 Booking Process.</strong> When you make a booking
                through our Services, you agree to provide accurate and complete
                information. We reserve the right to verify the information you
                provide.
              </p>

              <p>
                <strong>3.2 Confirmation.</strong> Your booking is not confirmed
                until you receive a confirmation from us. We reserve the right
                to decline any booking at our discretion.
              </p>

              <p>
                <strong>3.3 Pricing and Payments.</strong> All prices are
                displayed in US Dollars and are subject to change. You agree to
                pay all fees and charges associated with your booking.
              </p>

              <h2>4. Cancellation and Refund Policy</h2>
              <p>
                <strong>4.1 Cancellations by You.</strong> Cancellation policies
                vary depending on the specific booking. The applicable
                cancellation policy will be displayed during the booking
                process.
              </p>

              <p>
                <strong>4.2 Cancellations by Us.</strong> We reserve the right
                to cancel your booking in case of force majeure, unavailability
                of accommodations, or other extraordinary circumstances. In such
                cases, we will offer you a full refund or alternative
                accommodations, where possible.
              </p>

              <p>
                <strong>4.3 Refunds.</strong> Refunds, when applicable, will be
                processed using the same method of payment used for the original
                transaction, unless otherwise specified.
              </p>

              <h2>5. User Content</h2>
              <p>
                <strong>5.1 Ownership.</strong> You retain ownership of any
                content you submit through our Services ("User Content").
                However, you grant us a non-exclusive, worldwide, royalty-free
                license to use, reproduce, modify, adapt, publish, and display
                such User Content for the purpose of providing and promoting our
                Services.
              </p>

              <p>
                <strong>5.2 Responsibility.</strong> You are solely responsible
                for your User Content and the consequences of posting it. You
                represent and warrant that your User Content does not violate
                any third-party rights.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                Our Services and their contents, features, and functionality are
                owned by RelaxInn Vacation Homes and are protected by copyright,
                trademark, and other intellectual property laws. You may not
                reproduce, distribute, modify, create derivative works of,
                publicly display, or otherwise use our content without our prior
                written consent.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                Our Services are provided on an "as is" and "as available"
                basis, without any warranties of any kind, either express or
                implied. We do not guarantee that our Services will be
                uninterrupted, error-free, or completely secure.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, RelaxInn Vacation Homes
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to
                loss of profits, data, or use, arising out of or in any way
                connected with the use of our Services.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless RelaxInn Vacation Homes
                and its officers, directors, employees, and agents from any
                claims, liabilities, damages, losses, and expenses, including
                reasonable attorneys' fees, arising out of or in any way
                connected with your access to or use of our Services or your
                violation of these Terms.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Dominican Republic, without regard to its
                conflict of law provisions.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the updated Terms on this
                page and updating the "Last updated" date.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                Email: legal@relaxinn.com
                <br />
                Phone: +1 (809) 555-1234
                <br />
                Address: Hacienda B-25, Puntacana Resort & Club, Punta Cana,
                Dominican Republic
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
