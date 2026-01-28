'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Heart, Shield, Star, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import HeroSection from '@/components/HeroSection'

const features = [
  {
    icon: Sparkles,
    title: 'Certified Reiki Healing',
    description: 'Energy healing sessions by a Certified Reiki Master designed to restore balance and promote wellness through authentic, traditional techniques.',
  },
  {
    icon: Heart,
    title: 'Holistic Energy Wellness',
    description: 'Comprehensive approach combining chakra balancing, aura cleansing, and meditative practices for complete mind-body-spirit harmony.',
  },
  {
    icon: Shield,
    title: 'Confidential & Ethical Practice',
    description: 'Safe, private sessions with complete respect for your journey, boundaries, and personal healing process in a sacred, supportive space.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Wellness Enthusiast',
    content: 'The distance Reiki session was absolutely transformative. I felt a profound sense of peace and clarity that lasted for days, and my chronic anxiety finally began to lift. This was exactly what I needed!',
    rating: 5,
    image: '/images/testimonial-woman-1.jpg'
  },
  {
    name: 'Michael R.',
    role: 'Business Professional',
    content: 'After years of overwhelming stress, ReikiThreads helped me find true balance. The chakra alignment session was exactly what I needed — I finally feel centered and capable of handling life\'s challenges.',
    rating: 5,
    image: '/images/testimonial-man-1.jpg'
  },
  {
    name: 'Priya K.',
    role: 'Yoga Practitioner',
    content: 'As someone who practices yoga daily, I truly appreciate the authentic and ethical approach here. ReikiThreads has deepened my practice and brought a new level of peace to my life. Highly recommended!',
    rating: 5,
    image: '/images/testimonial-woman-2.jpg'
  },
  {
    name: 'David L.',
    role: 'Athlete',
    content: 'The Reiki sessions helped me recover faster from injuries and maintain better focus during competitions.',
    rating: 5,
    image: '/images/testimonial-athlete.jpg'
  },
  {
    name: 'Emma T.',
    role: 'Artist',
    content: 'Reiki opened up my creative channels. I feel more inspired and connected to my artistic flow.',
    rating: 5,
    image: '/images/testimonial-man-first.jpg'
  },
  {
    name: 'James W.',
    role: 'Retiree',
    content: 'At 65, I thought my health issues were permanent. Reiki showed me that healing is always possible.',
    rating: 5,
    image: '/images/testimonial-senior.jpg'
  }
]

const blogPosts = [
  {
    title: 'Understanding Reiki: A Beginner\'s Guide',
    excerpt: 'Discover the fundamentals of Reiki energy healing and how it can support your wellness journey with gentle, powerful techniques that have helped thousands find balance and peace.',
    category: 'Reiki Basics',
    readTime: '5 min read',
    image: '/images/reiki-healing.jpg'
  },
  {
    title: 'How Distance Reiki Works',
    excerpt: 'Learn about the science and practice behind distance healing and how energy transcends physical space to bring profound healing benefits wherever you are in the world.',
    category: 'Distance Healing',
    readTime: '4 min read',
    image: '/images/img/distanceHealing.jpg'
  },
  {
    title: 'Chakra Basics: Your Energy Centers',
    excerpt: 'Explore the seven main chakras and their vital role in maintaining physical, emotional, and spiritual balance for optimal health and well-being.',
    category: 'Chakra Healing',
    readTime: '6 min read',
    image: '/images/img/ChakraBalancing.jpg'
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}


      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-2">10+</div>
              <div className="text-xl font-medium">Years of Experience</div>
              <div className="text-emerald-200/70 mt-2">🌟 Dedicated to authentic energy healing</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-xl font-medium">Lives Transformed</div>
              <div className="text-emerald-200/70 mt-2">💚 Through compassionate, ethical healing</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-2">25+</div>
              <div className="text-xl font-medium">Countries Served</div>
              <div className="text-emerald-200/70 mt-2">🌍 Global energy connections worldwide</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Our Healing Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
            >
              Comprehensive Energy Healing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-emerald-700/70 max-w-3xl mx-auto mt-4"
            >
              Discover our comprehensive range of specialized Reiki healing services, each designed to address your unique physical, emotional, and spiritual wellness needs with compassion and expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Chakra Balancing',
                description: '🌟 Restore perfect harmony to your seven energy centers, releasing deep blockages and awakening your natural vitality and inner wisdom.',
                image: '/images/chakra.jpg'
              },
              {
                title: 'Stress & Anxiety Relief',
                description: '🧘‍♀️ Experience gentle, transformative energy healing that calms your mind, dissolves anxiety, and restores your inner sanctuary of peace.',
                image: '/images/img/anxiety.jpg'
              },
              {
                title: 'Emotional Healing',
                description: '💖 Address deep emotional wounds, past traumas, and relationship challenges through compassionate energy work that brings healing and liberation.',
                image: '/images/img/emotionalhealing.jpg'
              },
              {
                title: 'Physical Pain Relief',
                description: '🏥 Support your body\'s natural healing intelligence for chronic pain, injuries, and discomfort through gentle, non-invasive energy alignment.',
                image: '/images/img/physicalrelief.jpeg'
              },
              {
                title: 'Spiritual Growth',
                description: '✨ Deepen your spiritual connection, awaken your intuition, and align with your highest purpose through guided energy transformation.',
                image: '/images/img/easyspiritualgrowthtips.jpg'
              },
              {
                title: 'Distance Healing',
                description: '🌍 Experience the full power of Reiki remotely from anywhere in the world — energy transcends space for profound healing wherever you are.',
                image: '/images/img/remotelyhealing.webp'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer border-2 border-transparent hover:border-green-500 rounded-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-emerald-700/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary group">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Our Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
            >
              Healing with Integrity
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card text-center group border-2 border-transparent hover:border-green-500 rounded-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-emerald-700/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img
                  src="/images/practitioner.jpg"
                  alt="Reiki Master at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-gradient-to-br from-gold-100 to-gold-200 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 font-medium text-sm tracking-wider uppercase">
                About ReikiThreads
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3 mb-6">
                Your Journey to<br />
                <span className="gradient-text">Balance & Healing</span>
              </h2>
              <p className="text-emerald-700/80 text-lg leading-relaxed mb-6">
                ReikiThreads Foundation was born from a deep calling to share the transformative
                power of energy healing. As a Certified Reiki Master with over a decade of experience,
                our mission is to create a safe, nurturing space where you can experience genuine
                healing and rediscover your inner balance and natural vitality.
              </p>
              <p className="text-emerald-700/80 text-lg leading-relaxed mb-6">
                We believe in the body's innate ability to heal itself when given the right
                support. Through ethical, compassionate practice, we guide you on a journey
                of self-discovery and energetic alignment, helping you overcome physical pain,
                emotional challenges, and spiritual disconnection with grace and wisdom.
              </p>
              <p className="text-emerald-700/80 text-lg leading-relaxed mb-8">
                Our approach combines traditional Reiki techniques with modern understanding
                of energy work, offering both in-person and distance healing sessions to serve
                clients worldwide. Every session is tailored to your unique needs and energy
                signature for maximum healing benefit and transformation.
              </p>
              <Link href="/about" className="btn-secondary group">
                Learn Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
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
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-3"
            >
              Voices of Healing
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-emerald-50/90 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-emerald-200/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-white group">
              Read More Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold-600 font-medium text-sm tracking-wider uppercase"
              >
                Healing Insights
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
              >
                Latest from Our Blog
              </motion.h2>
            </div>
            <Link href="/blog" className="text-emerald-700 hover:text-gold-600 font-medium flex items-center mt-4 md:mt-0 transition-colors">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card group cursor-pointer border-2 border-transparent hover:border-green-500 rounded-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-emerald-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-emerald-700/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Frequently Asked Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
            >
              Your Questions Answered
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What is Reiki and how does it work?',
                answer: 'Reiki is a Japanese energy healing technique that promotes relaxation and stress reduction. It works by channeling universal life energy to support the body\'s natural healing processes.'
              },
              {
                question: 'Do I need to believe in Reiki for it to work?',
                answer: 'No prior belief is necessary. Reiki works on an energetic level and many people experience benefits regardless of their beliefs. An open mind helps, but results can occur even with skepticism.'
              },
              {
                question: 'What can I expect during a Reiki session?',
                answer: 'Sessions are typically conducted with you fully clothed, lying comfortably on a treatment table. You may feel warmth, tingling, or deep relaxation. Some people see colors or have emotional releases.'
              },
              {
                question: 'How many sessions do I need?',
                answer: 'This varies by individual. Some notice immediate benefits, while others may need multiple sessions for deeper healing. We recommend starting with 3-4 sessions for optimal results.'
              },
              {
                question: 'Can Reiki be done remotely?',
                answer: 'Yes! Distance Reiki is equally effective as in-person sessions. Energy transcends physical space, and many clients report similar or even more profound experiences with remote healing.'
              },
              {
                question: 'Is Reiki a replacement for medical treatment?',
                answer: 'Reiki is a complementary therapy that works alongside conventional medicine. It should not replace professional medical care, but can support and enhance traditional treatments.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream-50 rounded-xl p-8 border border-emerald-100"
              >
                <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-emerald-700/80 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-emerald-700/70 mb-6">
              Have more questions? We're here to help.
            </p>
            <Link href="/contact" className="btn-secondary group">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-black p-12 md:p-20 text-center overflow-hidden"
          >
            {/* Background orbs */}
            <div className="orb orb-gold w-64 h-64 -top-32 -left-32 opacity-20" />
            <div className="orb orb-gold w-48 h-48 -bottom-24 -right-24 opacity-20" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Ready to Begin Your<br />
                <span className="text-gold-400">Healing Journey?</span>
              </h2>
              <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto mb-10">
                ✨ Take the first step towards profound balance and inner peace. Book your complimentary
                consultation and discover how Reiki energy healing can transform your wellness journey
                and bring harmony to every aspect of your life.
              </p>
              <Link href="/book" className="btn-primary group text-lg px-10 py-5">
                Schedule Your Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
