'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <FileText className="w-6 h-6 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Legal Notice</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-100/80"
            >
              Last updated: January 2026
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-emerald-700/80 leading-relaxed mb-8">
                Welcome to ReikiThreads Foundation. By accessing our website or using our services, 
                you agree to be bound by these Terms of Service. Please read them carefully.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900">1. Acceptance of Terms</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                By booking a session, using our website, or engaging with our services, you acknowledge 
                that you have read, understood, and agree to these Terms of Service, our Privacy Policy, 
                and our Disclaimer.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">2. Services Description</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                ReikiThreads Foundation offers complementary wellness services including Reiki energy 
                healing, distance Reiki, chakra balancing, aura cleansing, and meditative healing sessions. 
                These services are intended to support general well-being and do not constitute medical 
                treatment.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">3. Booking Policy</h2>
              <h3 className="text-lg font-semibold text-emerald-900 mt-4">Appointments</h3>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>All bookings are subject to availability</li>
                <li>Confirmation will be sent within 24 hours of booking request</li>
                <li>Full payment may be required at time of booking or before the session</li>
                <li>First-time clients may receive a complimentary consultation</li>
              </ul>

              <h3 className="text-lg font-semibold text-emerald-900 mt-4">Distance Sessions</h3>
              <p className="text-emerald-700/80 leading-relaxed">
                For distance Reiki sessions, clients should ensure they are in a quiet, comfortable space 
                during the scheduled time and have reliable means of communication if required.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">4. Cancellation Policy</h2>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li><strong>48+ hours notice:</strong> Full refund or free rescheduling</li>
                <li><strong>24-48 hours notice:</strong> 50% refund or rescheduling with fee</li>
                <li><strong>Less than 24 hours:</strong> No refund, session may be rescheduled once at practitioner's discretion</li>
                <li><strong>No-shows:</strong> Full session fee forfeited</li>
              </ul>
              <p className="text-emerald-700/80 leading-relaxed mt-4">
                Emergencies will be handled on a case-by-case basis with compassion and understanding.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">5. Payment Terms</h2>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Payment methods accepted will be communicated at time of booking</li>
                <li>All prices are subject to change without notice</li>
                <li>Refunds, where applicable, will be processed within 7-14 business days</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">6. Client Responsibilities</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                By using our services, you agree to:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Provide accurate contact and health information</li>
                <li>Disclose any relevant medical conditions or medications</li>
                <li>Arrive on time for in-person sessions</li>
                <li>Be in a suitable environment for distance sessions</li>
                <li>Treat our practitioners with respect</li>
                <li>Continue working with healthcare providers for medical conditions</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">7. Limitation of Liability</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                To the fullest extent permitted by law, ReikiThreads Foundation shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Your use or inability to use our services</li>
                <li>Any changes made to our services or website</li>
                <li>Any information obtained through our services</li>
                <li>Any outcomes or lack thereof from healing sessions</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">8. Intellectual Property</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property 
                of ReikiThreads Foundation and protected by copyright laws. Unauthorized use is prohibited.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">9. User Conduct</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                You agree not to:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Use our services for any unlawful purpose</li>
                <li>Harass, abuse, or harm our practitioners or other clients</li>
                <li>Attempt to interfere with or disrupt our services</li>
                <li>Misrepresent your identity or health information</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">10. Modifications</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting. Continued use of our services constitutes acceptance 
                of modified terms.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">11. Governing Law</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">12. Contact</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <ul className="text-emerald-700/80 space-y-2 mt-4">
                <li><strong>Email:</strong> legal@reikithreads.com</li>
                <li><strong>Phone:</strong> +1 (234) 567-890</li>
              </ul>

              <div className="mt-12 pt-8 border-t border-emerald-100 flex flex-col sm:flex-row gap-4">
                <Link href="/disclaimer" className="text-gold-600 hover:text-gold-700 font-medium">
                  Read our Disclaimer →
                </Link>
                <Link href="/privacy" className="text-gold-600 hover:text-gold-700 font-medium">
                  Read our Privacy Policy →
                </Link>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Contact us with any questions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
