'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Sparkles, Globe, Heart, Leaf, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react'

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
    image: '/images/img/ReikiEnergy.jpg'
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
    image: '/images/img/distanceHealing.jpg'
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
    image: '/images/img/chakryabalancing.jpg'
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
    image: '/images/img/DepressionHealing.jpg'
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
    image: '/images/img/FinancialAbundance.jpg'
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
    image: '/images/img/carriarGrowth.jpg'
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
    image: '/images/img/relationShipHeals.jpg'
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
    image: '/images/img/goalsAchievement.jpg'
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
    image: '/images/img/CrystelHealing1.jpg'
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
    image: '/images/img/petHealing.jpg'
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
    image: '/images/img/auraCleaning.jpg'
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
    image: '/images/img/MeditativeHealingSessions.jpg'
  },
]

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll to update active index based on card positions
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // Scroll to specific card
  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (!sliderRef.current || !card) return;
    const container = sliderRef.current;
    const scrollPosition = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

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

      {/* Services Slider */}
      <section className="py-16 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-3"
            >
              Our Healing Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-700/70 max-w-xl mx-auto"
            >
              Swipe or use arrows to explore our range of energy healing services
            </motion.p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 -ml-2 md:-ml-4"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.5)'
              }}
            >
              <ChevronLeft className="w-6 h-6 text-emerald-800" />
            </button>

            <button
              onClick={() => scrollToCard(Math.min(services.length - 1, activeIndex + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 -mr-2 md:-mr-4"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.5)'
              }}
            >
              <ChevronRight className="w-6 h-6 text-emerald-800" />
            </button>

            {/* Slider Track */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-[10%] md:px-[15%] hide-scrollbar items-center"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                // More noticeable scale difference
                const scale = isActive ? 1.05 : Math.max(0.75, 1 - distance * 0.15);
                const opacity = isActive ? 1 : Math.max(0.5, 1 - distance * 0.25);

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className={`service-card flex-shrink-0 snap-center rounded-2xl overflow-hidden relative transition-all duration-500 ease-out ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      width: isActive ? '80vw' : '65vw',
                      maxWidth: isActive ? '700px' : '550px',
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      boxShadow: isActive
                        ? '0 30px 60px -15px rgba(0, 0, 0, 0.35)'
                        : '0 10px 20px -5px rgba(0, 0, 0, 0.15)',
                      filter: isActive ? 'none' : 'brightness(0.9)'
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(1.1) saturate(0.85)' }}
                      />
                    </div>

                    {/* Vignette effect */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, transparent 20%, rgba(197,206,197,0.5) 100%)'
                      }}
                    />

                    {/* Decorative curtain-like gradients on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#c5cec5]/60 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#c5cec5]/60 to-transparent pointer-events-none" />

                    {/* Decorative candle glow effects */}
                    <div className="absolute bottom-16 left-6 w-3 h-3 rounded-full opacity-50 animate-pulse z-10" style={{ backgroundColor: '#fff9e6', boxShadow: '0 0 15px 8px rgba(255,249,230,0.4)' }} />
                    <div className="absolute bottom-16 right-6 w-3 h-3 rounded-full opacity-50 animate-pulse z-10" style={{ backgroundColor: '#fff9e6', boxShadow: '0 0 15px 8px rgba(255,249,230,0.4)', animationDelay: '0.5s' }} />

                    {/* Content Container */}
                    <div className="relative z-10 px-4 md:px-6 py-5 md:py-6">
                      {/* Header Section with Glass Background */}
                      <div
                        className="text-center mb-3 px-4 md:px-6 py-3 rounded-xl mx-auto max-w-lg"
                        style={{
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.4)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {/* Elegant Script Title */}
                        <h2
                          className="text-xl md:text-2xl lg:text-3xl font-serif italic font-normal mb-1 tracking-wide"
                          style={{
                            color: 'black',
                            fontFamily: "'Brush Script MT', 'Segoe Script', 'Bradley Hand', cursive",
                            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                            letterSpacing: '0.02em'
                          }}
                        >
                          {service.title.split('(')[0].trim()}
                        </h2>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#4a7c64]/70" />
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" style={{ color: '#4a7c64' }}>
                            <path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" fill="currentColor" opacity="0.8" />
                          </svg>
                          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#4a7c64]/70" />
                        </div>

                        {/* Subtitle with Duration */}
                        <p
                          className="text-xs md:text-sm font-medium tracking-wider"
                          style={{
                            color: 'black',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {service.duration} Sessions
                        </p>
                      </div>

                      {/* Spacer for background image visibility */}
                      <div className="h-20 md:h-24" />

                      {/* Benefits Section with Glass Background */}
                      <div
                        className="text-center max-w-lg mx-auto px-4 md:px-6 py-3 rounded-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.4)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {/* Main Benefit - Highlighted */}
                        <p
                          className="text-xs md:text-sm font-semibold mb-2 tracking-wide"
                          style={{
                            color: 'black',
                            letterSpacing: '0.03em'
                          }}
                        >
                          {service.benefits[0]}
                        </p>

                        {/* Other Benefits */}
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                          {service.benefits.slice(1, 3).map((benefit, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <svg
                                className="w-3 h-3 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ color: 'black' }}
                              >
                                <path
                                  d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z"
                                  fill="currentColor"
                                  opacity="0.8"
                                />
                              </svg>
                              <span
                                className="text-xs md:text-sm"
                                style={{ color: 'black' }}
                              >
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Bar */}
                    {/* Modern Bottom CTA Bar */}
                    <div
                      className="relative z-10 px-4 md:px-6 py-4 mt-auto"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                        backdropFilter: 'blur(8px)',
                        borderTop: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      <div className="flex items-center justify-center gap-4">
                        <Link href="/book" className="btn-primary group">
                          Book a Session
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {/* <Link href="/contact" className="btn-secondary">
                          Contact Us
                        </Link> */}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => scrollToCard(index)}
                className={`rounded-full transition-all duration-300 hover:scale-125 ${index === activeIndex ? 'w-6 h-2' : 'w-2 h-2'
                  }`}
                style={{
                  backgroundColor: index === activeIndex ? '#065942' : '#c5cec5'
                }}
              />
            ))}
          </div> */}
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
