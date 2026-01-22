'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function DisclaimerPage() {
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
              <AlertCircle className="w-6 h-6 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Legal Notice</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Disclaimer
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
          <div className="max-w-3xl mx-auto prose prose-emerald">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="p-8 bg-gold-50 rounded-xl border-l-4 border-gold-500 mb-8">
                <h3 className="text-xl font-serif font-bold text-emerald-900 mt-0">Important Notice</h3>
                <p className="text-emerald-700 mb-0">
                  ReikiThreads Foundation practices Reiki as a <strong>complementary energy wellness method</strong> and 
                  <strong> does not replace medical treatment</strong>. Please read this disclaimer carefully before 
                  using our services.
                </p>
              </div>

              <h2 className="text-2xl font-serif font-bold text-emerald-900">Nature of Services</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                The services provided by ReikiThreads Foundation, including but not limited to Reiki energy healing, 
                distance Reiki, chakra balancing, aura cleansing, and meditative healing sessions, are complementary 
                wellness practices intended to promote relaxation, stress reduction, and general well-being.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Not Medical Treatment</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                Our services are <strong>NOT</strong> intended to:
              </p>
              <ul className="text-emerald-700/80 space-y-2">
                <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
                <li>Replace professional medical advice, diagnosis, or treatment</li>
                <li>Substitute care from licensed healthcare providers</li>
                <li>Make any guarantees regarding health outcomes</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Healthcare Responsibility</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                We strongly encourage all clients to:
              </p>
              <ul className="text-emerald-700/80 space-y-2">
                <li>Continue seeing and following the advice of their licensed healthcare providers</li>
                <li>Never discontinue any medication or treatment without consulting their physician</li>
                <li>Seek immediate medical attention for any medical emergencies</li>
                <li>Disclose any medical conditions or concerns before sessions</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Individual Results</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                Experiences with energy healing vary from person to person. We make no claims about specific 
                outcomes, and results cannot be guaranteed. Any testimonials shared on our website represent 
                individual experiences and should not be construed as promises of similar results.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Practitioner Qualifications</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                Our practitioners are Certified Reiki Masters who have completed training through 
                recognized institutions. We are NOT licensed physicians, psychologists, or healthcare 
                professionals unless specifically stated otherwise.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Assumption of Risk</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                By using our services, you acknowledge that you understand and accept this disclaimer. 
                You assume full responsibility for your own health decisions and agree that ReikiThreads 
                Foundation is not liable for any effects, direct or indirect, that may result from the 
                services provided.
              </p>

              <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-8">Consent</h2>
              <p className="text-emerald-700/80 leading-relaxed">
                By booking or participating in any session with ReikiThreads Foundation, you confirm that 
                you have read, understood, and agree to this disclaimer. You also confirm that you are 
                seeking our services for complementary wellness support, not as a substitute for medical care.
              </p>

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
