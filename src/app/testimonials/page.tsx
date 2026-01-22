'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Quote, User, ChevronLeft, ChevronRight } from 'lucide-react'
import CircularGallery from '@/components/CircularGallery'
import { useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Wellness Enthusiast',
    content: 'The distance Reiki session was truly transformative. Even though we weren\'t in the same room, I felt a profound sense of peace and warmth throughout the session. The energy work helped me release stress I didn\'t even know I was carrying. Days later, I still feel more centered and calm.',
    rating: 5,
    date: 'January 2026',
    service: 'Distance Reiki Healing',
    image: '/images/testimonial-woman-happy.jpg'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Business Professional',
    content: 'After years of chronic stress from work, I was skeptical about energy healing. But my chakra balancing session changed my perspective completely. The practitioner was professional, explained everything clearly, and created such a safe, comfortable space. I\'ve booked monthly sessions since.',
    rating: 5,
    date: 'December 2025',
    service: 'Chakra Balancing',
    image: '/images/testimonial-man-business.jpg'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Yoga Practitioner',
    content: 'As someone who practices yoga daily and is familiar with energy work, I appreciate ReikiThreads\' authentic and ethical approach. The practitioner\'s knowledge of Certified Reiki Master techniques is evident, and the focus on complementary wellness rather than making false promises is refreshing.',
    rating: 5,
    date: 'December 2025',
    service: 'Reiki Energy Healing',
    image: '/images/testimonial-yoga-woman.jpg'
  },
  {
    id: 4,
    name: 'Jennifer L.',
    role: 'Healthcare Worker',
    content: 'The meditative healing session was exactly what I needed after long shifts. The combination of guided meditation and energy work helped me decompress in a way that nothing else had. I appreciate that they\'re clear about Reiki being complementary to medical care.',
    rating: 5,
    date: 'November 2025',
    service: 'Meditative Healing Sessions',
    image: '/images/testimonial-healthcare-woman.jpg'
  },
  {
    id: 5,
    name: 'David Chen',
    role: 'First-Time Client',
    content: 'I was nervous about my first Reiki session, but the pre-session consultation put me completely at ease. Everything was explained clearly, and there was no pressure. The session itself was deeply relaxing, and I\'ve noticed improved sleep since.',
    rating: 5,
    date: 'November 2025',
    service: 'Reiki Energy Healing',
    image: '/images/testimonial-man-first.jpg'
  },
  {
    id: 6,
    name: 'Anonymous',
    role: 'Regular Client',
    content: 'The aura cleansing session left me feeling lighter and more protected. I can\'t explain the science behind it, but I trust my experience. I\'ve been seeing ReikiThreads monthly for six months now, and my overall well-being has improved significantly.',
    rating: 5,
    date: 'October 2025',
    service: 'Aura Cleansing',
    image: '/images/testimonial-meditating.jpg'
  },
  {
    id: 7,
    name: 'Emma Thompson',
    role: 'Artist & Creative',
    content: 'Reiki has opened up my creative channels in ways I never imagined. The energy work helped me break through creative blocks and connect with my artistic flow. My paintings have more depth and emotion since starting sessions.',
    rating: 5,
    date: 'October 2025',
    service: 'Reiki Energy Healing',
    image: '/images/testimonial-artist-creative.jpg'
  },
  {
    id: 8,
    name: 'Robert Kim',
    role: 'Entrepreneur',
    content: 'As a busy entrepreneur, finding time for self-care is challenging. Distance Reiki fits perfectly into my schedule. The sessions help me maintain clarity and reduce the mental noise that comes with running a business.',
    rating: 5,
    date: 'September 2025',
    service: 'Distance Reiki Healing',
    image: '/images/testimonial-entrepreneur.jpg'
  },
  {
    id: 9,
    name: 'Lisa Park',
    role: 'Mother & Teacher',
    content: 'Balancing motherhood, teaching, and personal life was overwhelming. Chakra balancing helped me find my center again. I feel more patient, present, and able to give my best to my family and students.',
    rating: 5,
    date: 'September 2025',
    service: 'Chakra Balancing',
    image: '/images/testimonial-woman-1.jpg'
  },
  {
    id: 10,
    name: 'Carlos Mendez',
    role: 'Athlete',
    content: 'The Reiki sessions have become an essential part of my training regimen. They help with recovery, mental focus, and maintaining the positive mindset needed for competitive sports. Highly recommend for any athlete.',
    rating: 5,
    date: 'August 2025',
    service: 'Reiki Energy Healing',
    image: '/images/testimonial-athlete.jpg'
  },
  {
    id: 11,
    name: 'Maria Gonzalez',
    role: 'Retiree',
    content: 'At 68, I thought my health concerns were just part of aging. Reiki showed me that healing is always possible. The gentle energy work has improved my mobility and given me hope for the future.',
    rating: 5,
    date: 'August 2025',
    service: 'Reiki Energy Healing',
    image: '/images/testimonial-senior.jpg'
  },
  {
    id: 12,
    name: 'Alex Johnson',
    role: 'Student',
    content: 'As a college student dealing with anxiety and pressure, Reiki has been a game-changer. The sessions help me stay grounded during exams and maintain better focus. It\'s become my secret weapon for academic success.',
    rating: 5,
    date: 'July 2025',
    service: 'Stress & Anxiety Healing',
    image: '/images/testimonial-man-1.jpg'
  }
]

const stats = [
  { value: '500+', label: 'Sessions Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '5.0', label: 'Average Rating' },
  { value: '95%', label: 'Return Clients' },
]

export default function TestimonialsPage() {
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
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="text-white/90 font-medium text-sm">Client Experiences</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                  Voices of
                  <span className="block mt-2 bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                    Healing
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
                Real stories from real clients sharing their transformative experiences with our energy healing services.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: '5.0', label: 'Average Rating' },
                  { value: '200+', label: 'Happy Clients' },
                  { value: '100%', label: 'Satisfaction' }
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
                  <span>Book Your Session</span>
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

            {/* Right Column - Review Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Star,
                  title: '5-Star Reviews',
                  subtitle: 'Consistent Excellence',
                  gradient: 'from-gold-500 to-gold-600'
                },
                {
                  icon: User,
                  title: '200+ Clients',
                  subtitle: 'Trusted Worldwide',
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: Quote,
                  title: 'Real Stories',
                  subtitle: 'Authentic Experiences',
                  gradient: 'from-emerald-400 to-emerald-500'
                },
                {
                  icon: ArrowRight,
                  title: 'Join Them',
                  subtitle: 'Start Your Journey',
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
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">Read Stories</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-emerald-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-emerald-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-black rounded-3xl p-10 md:p-16 text-center">
              <Quote className="w-16 h-16 text-gold-400/30 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-8">
                "The distance Reiki session was truly transformative. Even though we weren't in the same room,
                I felt a profound sense of peace and warmth throughout the session. Days later, I still feel
                more centered and calm than I have in years."
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-white font-semibold">Sarah Mitchell</p>
              <p className="text-emerald-200/70 text-sm">Distance Reiki Client</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials - Circular Gallery */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium text-sm tracking-wider uppercase"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-100/70 text-lg max-w-2xl mx-auto"
            >
              Scroll or drag to explore testimonials from our healing community
            </motion.p>
          </div>

          {/* Circular Gallery */}
          <div className="w-full h-[600px] md:h-[700px]">
            <CircularGallery
              items={testimonials.map(t => ({
                image: t.image,
                text: t.name
              }))}
              bend={2.5}
              textColor="#10b981"
              borderRadius={0.08}
              font="bold 24px sans-serif"
              scrollSpeed={2.5}
              scrollEase={0.08}
            />
          </div>
        </div>
      </section>

      {/* Detailed Testimonials - Horizontal Scroll */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Detailed Reviews
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3 mb-4"
            >
              Read Their Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-700/70 text-base max-w-2xl mx-auto"
            >
              Scroll horizontally or use arrows to explore all testimonials
            </motion.p>
          </div>
        </div>

        {/* Horizontal Scroll Container with Arrows */}
        <TestimonialsScroller testimonials={testimonials} />
      </section>

      {/* Share Experience CTA */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
              Share Your<br />
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-emerald-700/80 text-lg mb-10">
              Had a session with ReikiThreads Foundation? We'd love to hear about your
              experience. Your feedback helps us improve and guides others on their healing journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Share Your Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/book" className="btn-secondary">
                Book Your Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Testimonials Scroller Component with Arrow Navigation
function TestimonialsScroller({ testimonials }: { testimonials: typeof testimonials }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 440 // Card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${canScrollLeft
          ? 'opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-emerald-50'
          : 'opacity-0 cursor-not-allowed'
          }`}
      >
        <ChevronLeft className="w-6 h-6 text-emerald-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${canScrollRight
          ? 'opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-emerald-50'
          : 'opacity-0 cursor-not-allowed'
          }`}
      >
        <ChevronRight className="w-6 h-6 text-emerald-600" />
      </button>

      {/* Gradient Fade - Left */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* Gradient Fade - Right */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory px-4 md:px-8 pb-4"
      >
        <div className="flex gap-6 w-max">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-start flex-shrink-0 w-[380px] md:w-[420px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-50"
            >
              {/* Header with Image and Rating */}
              <div className="relative h-32 bg-gradient-to-br from-emerald-500 to-emerald-600">
                <div className="absolute -bottom-12 left-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 px-6 pb-6">
                <h3 className="text-xl font-serif font-bold text-emerald-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-emerald-600 text-sm mb-4">{testimonial.role}</p>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-emerald-200 absolute -top-2 -left-2" />
                  <p className="text-emerald-700/80 leading-relaxed text-sm pl-6">
                    {testimonial.content}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="space-y-2 pt-4 border-t border-emerald-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-medium">Service:</span>
                    <span className="text-emerald-800 text-right">{testimonial.service}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-medium">Date:</span>
                    <span className="text-emerald-800">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
