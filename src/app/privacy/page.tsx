'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
              <Shield className="w-6 h-6 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Legal Notice</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Privacy Policy
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
                ReikiThreads Foundation ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900">Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-emerald-900 mt-6">Personal Information</h3>
              <p className="text-emerald-700/80 leading-relaxed">
                We may collect personal information that you voluntarily provide when:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6 mb-6">
                <li>Booking a session or consultation</li>
                <li>Filling out contact forms</li>
                <li>Subscribing to our newsletter</li>
                <li>Communicating with us via email, phone, or messaging</li>
              </ul>
              <p className="text-emerald-700/80 leading-relaxed">
                This information may include your name, email address, phone number, and any details 
                you choose to share about your wellness goals or health concerns.
              </p>

              <h3 className="text-lg font-semibold text-emerald-900 mt-6">Automatically Collected Information</h3>
              <p className="text-emerald-700/80 leading-relaxed">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website information</li>
                <li>Device information</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">How We Use Your Information</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Process bookings and provide our services</li>
                <li>Communicate with you about appointments and services</li>
                <li>Send newsletters and wellness content (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Information Sharing</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We do NOT sell, trade, or rent your personal information to third parties. We may share 
                information only:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>With service providers who assist in our operations (e.g., payment processors)</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Data Security</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Session Confidentiality</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                All information shared during healing sessions is kept strictly confidential. 
                We will never disclose details of your sessions to anyone without your explicit 
                written consent, except where required by law.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Your Rights</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                You have the right to:
              </p>
              <ul className="text-emerald-700/80 space-y-2 list-disc pl-6">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Cookies</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                Our website may use cookies to enhance your experience. You can choose to disable 
                cookies through your browser settings, though this may affect some website functionality.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Children's Privacy</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                Our services are not intended for individuals under 18 years of age without parental 
                consent. We do not knowingly collect information from children.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Changes to This Policy</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page 
                with an updated revision date.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Contact Us</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us at:
              </p>
              <ul className="text-emerald-700/80 space-y-2 mt-4">
                <li><strong>Email:</strong> privacy@reikithreads.com</li>
                <li><strong>Phone:</strong> +1 (234) 567-890</li>
              </ul>

              <div className="mt-12 pt-8 border-t border-emerald-100">
                <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-2">
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
