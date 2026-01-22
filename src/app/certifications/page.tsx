'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, CheckCircle, Download, Shield } from 'lucide-react'

const certifications = [
  {
    title: 'Certified Reiki Master Certification',
    issuer: 'International Reiki Institute',
    description: 'Advanced certification enabling distance healing and use of sacred symbols for deeper energy work.',
    skills: ['Distance Healing', 'Sacred Symbols', 'Mental/Emotional Healing', 'Energy Channeling'],
    verified: true,
  },
  {
    title: 'Holistic Energy Healing Certificate',
    issuer: 'Online Wellness Academy',
    description: 'Comprehensive course covering energy anatomy, chakra systems, and holistic healing principles.',
    skills: ['Chakra Healing', 'Energy Anatomy', 'Holistic Wellness', 'Self-Healing Techniques'],
    verified: true,
  },
  {
    title: 'Meditation & Mindfulness Practitioner',
    issuer: 'Mindful Living Institute',
    description: 'Training in guided meditation techniques and mindfulness-based stress reduction methods.',
    skills: ['Guided Meditation', 'Mindfulness', 'Stress Reduction', 'Breathing Techniques'],
    verified: true,
  },
  {
    title: 'Aura Reading & Cleansing',
    issuer: 'Spiritual Wellness Academy',
    description: 'Specialized training in understanding and working with the human energy field and aura.',
    skills: ['Aura Reading', 'Energy Cleansing', 'Protection Techniques', 'Intuitive Development'],
    verified: true,
  },
]

const trainingPhilosophy = [
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Committed to ongoing education and staying current with evolving healing practices.',
  },
  {
    icon: Shield,
    title: 'Ethical Practice',
    description: 'All certifications from reputable institutions with transparent credentials.',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'Each course completed with dedication to mastering the techniques taught.',
  },
]

export default function CertificationsPage() {
  return (
    <>
      {/* Hero Section - Professional Icon Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-black overflow-hidden flex items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-white/90 font-medium text-sm">Verified Credentials</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                  Certifications &
                  <span className="block mt-2 bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                    Training
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                  className="h-1 w-24 bg-gradient-to-r from-gold-400 to-emerald-400 rounded-full"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-emerald-100/80 leading-relaxed max-w-xl"
              >
                Transparency and credibility are core to our practice. Our certified qualifications reflect dedication to authentic, professional energy healing.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '4+', label: 'Certifications' },
                  { value: '100%', label: 'Verified' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-emerald-200/70 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span>View Services</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Icon Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Award,
                  title: 'Reiki Master',
                  subtitle: 'Certified Practitioner',
                  gradient: 'from-gold-500 to-gold-600'
                },
                {
                  icon: Shield,
                  title: 'Verified Training',
                  subtitle: 'International Institute',
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: BookOpen,
                  title: 'Holistic Wellness',
                  subtitle: 'Comprehensive Courses',
                  gradient: 'from-emerald-400 to-emerald-500'
                },
                {
                  icon: CheckCircle,
                  title: 'Ethical Practice',
                  subtitle: 'Transparent Standards',
                  gradient: 'from-gold-400 to-gold-500'
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-emerald-200/70">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Primary Certification */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card border-2 border-gold-200 bg-gradient-to-br from-white to-gold-50">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-40 flex-shrink-0 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-xl">
                  <Award className="w-20 h-20 text-emerald-900" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium text-sm">Verified Certification</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-2">
                    Certified Reiki Master
                  </h2>
                  <p className="text-emerald-600 font-medium mb-4">International Reiki Institute</p>
                  <p className="text-emerald-700/80 leading-relaxed mb-6">
                    This advanced certification enables practitioner-level Reiki healing, including the use
                    of sacred symbols for distance healing and deeper emotional/mental healing work. This certification represents a significant milestone in the Reiki training path.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      Distance Healing
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      Sacred Symbols
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      Mental/Emotional Healing
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      Energy Channeling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Additional Training
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
            >
              Online Course Certifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-700/80 mt-4 max-w-2xl mx-auto"
            >
              Complementary training completed through accredited online platforms to
              expand knowledge and skills in holistic wellness practices.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.slice(1).map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 text-xs font-medium">Verified</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-emerald-900">
                      {cert.title}
                    </h3>
                    <p className="text-emerald-600 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-emerald-700/80 leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium text-sm tracking-wider uppercase"
            >
              Our Commitment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-3"
            >
              Training Philosophy
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPhilosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-emerald-100/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-12 bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 bg-white rounded-2xl shadow-lg shadow-emerald-950/5 border border-emerald-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                    Certificate Privacy Note
                  </h3>
                  <p className="text-emerald-700/80 leading-relaxed">
                    Original certificate documents are available for verification upon request.
                    For privacy and security, certificate ID numbers and personal details are
                    not displayed publicly. Verification requests are handled confidentially.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
              Experience Our<br />
              <span className="gradient-text">Certified Practice</span>
            </h2>
            <p className="text-emerald-700/80 text-lg mb-10">
              Our credentials reflect our commitment to providing authentic, professional
              energy healing services. Ready to experience the difference?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary group">
                Book a Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
