'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Sparkles, Globe, Heart, Leaf, Sun, Moon } from 'lucide-react'

const services = [
  {
    id: 'reiki-healing',
    icon: Sparkles,
    title: 'Reiki Energy Healing (Certified Reiki Master)',
    description: 'Experience the gentle, transformative power of healing from a Certified Reiki Master. This foundational service channels universal life energy to support your body\'s natural healing processes.',
    benefits: [
      'Deep relaxation and stress relief',
      'Emotional balance and clarity',
      'Release of energy blockages',
      'Enhanced sense of well-being',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/reiki-healing.jpg'
  },
  {
    id: 'distance-reiki',
    icon: Globe,
    title: 'Distance Reiki Healing',
    description: 'Receive the full benefits of Reiki healing from anywhere in the world. Using Certified Reiki Master distance symbols, energy transcends physical space to reach you wherever you are.',
    benefits: [
      'Same effectiveness as in-person sessions',
      'Convenient from your own space',
      'Flexible scheduling across time zones',
      'Perfect for global clients',
    ],
    duration: '45-60 minutes',
    format: 'Online/Remote',
    price: 'Contact for pricing',
    image: '/images/distance-healing.jpg'
  },
  {
    id: 'chakra-balancing',
    icon: Sun,
    title: 'Chakra Balancing',
    description: 'Restore harmony to your seven main energy centers. This focused session identifies and addresses imbalances in your chakra system, promoting optimal energy flow.',
    benefits: [
      'Improved energy flow',
      'Emotional and physical alignment',
      'Greater self-awareness',
      'Enhanced vitality',
    ],
    duration: '75 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/chakra-energy.jpg'
  },
  {
    id: 'stress-anxiety-healing',
    icon: Heart,
    title: 'Stress, Anxiety & Depression Healing',
    description: 'Specialized Reiki sessions to help release the burdens of stress, anxiety, and depression. We work with you to understand your struggles and tailor therapies for calm and peaceful state of mind.',
    benefits: [
      'Reduced anxiety and stress levels',
      'Emotional release and healing',
      'Improved mental clarity',
      'Restored sense of peace',
    ],
    duration: '60-75 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/stress-relief.jpg'
  },
  {
    id: 'financial-abundance',
    icon: Sparkles,
    title: 'Financial Abundance & Prosperity Healing',
    description: 'Clear negative patterns and energies that limit financial growth. Align your energy with prosperity and abundance to attract greater opportunities and financial success.',
    benefits: [
      'Release of limiting beliefs about money',
      'Increased abundance consciousness',
      'Attract financial opportunities',
      'Greater financial confidence',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/abundance-money.jpg'
  },
  {
    id: 'career-growth',
    icon: Globe,
    title: 'Career Growth & Success Healing',
    description: 'Clear emotional and energetic blocks holding you back professionally. Align with your purpose, attract opportunities, and make empowered career choices.',
    benefits: [
      'Career clarity and direction',
      'Removal of professional blocks',
      'Increased motivation and focus',
      'Attract fulfilling opportunities',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/career-growth.jpg'
  },
  {
    id: 'relationship-healing',
    icon: Heart,
    title: 'Relationship Healing',
    description: 'Resolve misunderstandings, strengthen bonds, and restore harmony in relationships. Whether romantic, family, or professional connections, transform them into extraordinary relationships.',
    benefits: [
      'Improved communication',
      'Emotional healing in relationships',
      'Stronger bonds and trust',
      'Resolution of conflicts',
    ],
    duration: '60-75 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/relationship-healing.jpg'
  },
  {
    id: 'manifestation-healing',
    icon: Sun,
    title: 'Manifestation & Goal Achievement',
    description: 'Clear limiting beliefs and energy blockages that prevent you from achieving your dreams. Turn your intentions into reality through focused energy work.',
    benefits: [
      'Clear limiting beliefs',
      'Enhanced manifestation ability',
      'Goal achievement support',
      'Increased self-confidence',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/manifestation-goals.jpg'
  },
  {
    id: 'crystal-healing',
    icon: Moon,
    title: 'Crystal Healing & Energy Work',
    description: 'Use the power of crystals to address mood swings, health concerns, and blocked energies. Personalized crystal recommendations for healing and balance.',
    benefits: [
      'Crystal energy alignment',
      'Emotional and physical healing',
      'Enhanced intuition',
      'Protective energy field',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/crystal-healing.jpg'
  },
  {
    id: 'pet-healing',
    icon: Leaf,
    title: 'Pet & Animal Healing',
    description: 'Compassionate energy healing for your beloved pets and animals. Help them feel calm, safe, and healed through gentle Reiki and energy work.',
    benefits: [
      'Calm and relaxed pets',
      'Support for health issues',
      'Emotional healing for animals',
      'Stronger pet-owner bond',
    ],
    duration: '30-45 minutes',
    format: 'Distance (for pet owners)',
    price: 'Contact for pricing',
    image: '/images/pet-healing.jpg'
  },
  {
    id: 'aura-cleansing',
    icon: Moon,
    title: 'Aura Cleansing',
    description: 'Clear and refresh your energetic field. This session removes stagnant or negative energy patterns from your aura, leaving you feeling lighter and more protected.',
    benefits: [
      'Removal of negative energy',
      'Strengthened personal boundaries',
      'Increased clarity and lightness',
      'Enhanced spiritual protection',
    ],
    duration: '60 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/aura-cleansing.jpg'
  },
  {
    id: 'meditative-sessions',
    icon: Leaf,
    title: 'Meditative Healing Sessions',
    description: 'Combine the power of guided meditation with Reiki energy healing. This integrative approach deepens your relaxation and enhances the healing experience.',
    benefits: [
      'Deep meditative states',
      'Stress and anxiety relief',
      'Mental clarity and focus',
      'Inner peace and calm',
    ],
    duration: '60-90 minutes',
    format: 'In-person & Distance',
    price: 'Contact for pricing',
    image: '/images/meditation-healing.jpg'
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Professional Dark Design */}
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
                <Heart className="w-4 h-4 text-gold-400" />
                <span className="text-white/90 font-medium text-sm">Ethical & Professional</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                  Healing
                  <span className="block mt-2 bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                    Services
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
                Discover our range of complementary energy wellness services, each designed to support your journey toward balance, peace, and self-healing.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: '5+', label: 'Services Offered' },
                  { value: '500+', label: 'Sessions Done' },
                  { value: '100%', label: 'Personalized' }
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
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Service Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Sparkles,
                  title: 'Reiki Healing',
                  subtitle: 'Energy Balance',
                  gradient: 'from-gold-500 to-gold-600'
                },
                {
                  icon: Globe,
                  title: 'Distance Sessions',
                  subtitle: 'Remote Healing',
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: Sun,
                  title: 'Chakra Balancing',
                  subtitle: 'Energy Centers',
                  gradient: 'from-emerald-400 to-emerald-500'
                },
                {
                  icon: Moon,
                  title: 'Meditation',
                  subtitle: 'Inner Peace',
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
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">Explore Services</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Sticky Stack */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="sticky mb-8"
              style={{
                top: `${80 + index * 20}px`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  transform: `scale(${1 - index * 0.02})`,
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-gold-500/5 pointer-events-none" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Service Image */}
                    <div className="lg:col-span-1">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Floating badge on image */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg z-20">
                          <span className="text-xs font-semibold text-emerald-700">{service.format.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="lg:col-span-1 flex flex-col">
                      {/* Icon & Title */}
                      <div className="mb-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0 rotate-3 hover:rotate-0 transition-all duration-300">


                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent leading-tight">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        {/* Duration & Format Pills */}
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                            <Clock className="w-3.5 h-3.5" />
                            {service.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-700 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-100">
                            <Globe className="w-3.5 h-3.5" />
                            {service.format}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-emerald-800/80 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="mt-auto">
                        <h3 className="text-sm font-bold text-emerald-900 mb-3 uppercase tracking-wide">
                          Key Benefits:
                        </h3>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-emerald-700/90">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-sm flex-shrink-0" />
                              <span className="leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="h-full bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white rounded-2xl p-6 border border-emerald-100 shadow-inner flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                          {/* Price */}
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Investment</p>
                            <p className="text-3xl font-serif font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent">
                              {service.price}
                            </p>
                          </div>

                          {/* CTA Button */}
                          <Link
                            href="/book"
                            className="block w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 group mb-4"
                          >
                            <span className="flex items-center justify-center gap-2">
                              Book This Service
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>

                          {/* Free Consultation */}
                          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-600/80">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Free consultation available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-4">
                Important Notice
              </h3>
              <p className="text-emerald-700/80 leading-relaxed">
                All services offered by ReikiThreads Foundation are complementary wellness practices.
                They are intended to support your overall well-being and do not diagnose, treat, or
                cure any medical condition. We encourage you to continue working with your healthcare
                providers and never discontinue any medical treatment based on energy healing sessions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium text-sm tracking-wider uppercase"
            >
              What to Expect
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-3"
            >
              Your Session Journey
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your needs and answer any questions.' },
              { step: '02', title: 'Preparation', desc: 'Create a calm, comfortable environment.' },
              { step: '03', title: 'Session', desc: 'Experience gentle, restorative energy healing.' },
              { step: '04', title: 'Integration', desc: 'Guidance for continuing your wellness journey.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold-400">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-emerald-100/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
              Ready to Begin<br />
              <span className="gradient-text">Your Healing Journey?</span>
            </h2>
            <p className="text-emerald-700/80 text-lg mb-10">
              Schedule your first session or book a free consultation to discuss
              which service is right for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary group">
                Book a Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
