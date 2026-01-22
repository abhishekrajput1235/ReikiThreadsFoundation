'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Award, Heart, BookOpen, Users, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Every session is approached with genuine care and understanding for your unique journey.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We practice with complete transparency, never making claims beyond our expertise.',
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'Your boundaries, beliefs, and comfort are honored throughout every interaction.',
  },
  {
    icon: BookOpen,
    title: 'Growth',
    description: 'Committed to continuous learning and sharing knowledge with our community.',
  },
]

const timeline = [
  {
    year: 'The Beginning',
    title: 'A Personal Journey',
    description: 'Our founder\'s healing journey began with discovering Reiki during a challenging period of life, experiencing firsthand its transformative power.',
  },
  {
    year: 'Training',
    title: 'Certified Practice',
    description: 'Completed rigorous training and certification as a Certified Reiki Master, along with multiple online courses in holistic wellness and energy healing.',
  },
  {
    year: 'Foundation',
    title: 'ReikiThreads Born',
    description: 'ReikiThreads Foundation was established with a mission to share authentic, ethical energy healing with those seeking balance and peace.',
  },
  {
    year: 'Today',
    title: 'Growing Community',
    description: 'Now serving clients both in-person and globally through distance healing, building a community centered on wellness and self-discovery.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-gold w-96 h-96 -top-48 -right-48 opacity-20 animate-pulse-slow" />
          <div className="orb orb-emerald w-96 h-96 -bottom-48 -left-48 opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="orb orb-gold w-64 h-64 top-1/3 left-1/4 opacity-10" />
        </div>

        {/* Dot Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 mb-8 shadow-lg"
              >
                <Award className="w-5 h-5 text-gold-400" />
                <span className="text-gold-300 font-medium text-sm tracking-wide">Certified Reiki Master</span>
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
              >
                <span className="text-white block">About Our</span>
                <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-emerald-400 bg-clip-text text-transparent block">
                  Foundation
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-emerald-100/80 leading-relaxed mb-8 max-w-xl"
              >
                ReikiThreads Foundation is dedicated to sharing the gentle, transformative power
                of energy healing with those seeking balance, peace, and self-discovery.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8 mb-10"
              >
                {[
                  { value: '500+', label: 'Sessions' },
                  { value: '200+', label: 'Clients' },
                  { value: '5.0', label: 'Rating' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-emerald-300/70 text-sm mt-1">{stat.label}</div>
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
                  href="/services"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative Elements Behind */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

                {/* Image with Glassmorphism Frame */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/40 via-emerald-400/40 to-transparent p-[2px] -z-10">
                    <div className="absolute inset-[2px] rounded-3xl bg-black" />
                  </div>

                  {/* Image */}
                  <img
                    src="images/img/about2.png"
                    alt="Reiki session - gentle healing environment"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Quote Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                      <Sparkles className="w-8 h-8 text-gold-400 mb-3" />
                      <p className="text-white/90 font-serif italic text-lg leading-relaxed">
                        "Energy flows where intention goes"
                      </p>
                      <div className="h-1 w-16 bg-gradient-to-r from-gold-400 to-emerald-400 rounded-full mt-4" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -top-6 -left-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-2xl shadow-emerald-500/40 rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>

                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-900">10+</div>
                    <div className="text-xs text-emerald-600 font-medium">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-emerald-300/50">
            <span className="text-xs uppercase tracking-wider">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-emerald-300/30 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-emerald-300/50 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section - Professional Redesign */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left - Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80"
                  alt="Peaceful healing environment"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        Weaving Light Into Every Life
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Creating compassionate spaces for healing and self-discovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8"
            >
              {/* Header */}
              <div>
                <span className="inline-block text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
                  Our Mission
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6">
                  Your Journey to
                  <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-gold-600 bg-clip-text text-transparent">
                    Healing & Balance
                  </span>
                </h2>
              </div>

              {/* Mission Statement */}
              <p className="text-lg text-emerald-700/90 leading-relaxed">
                At ReikiThreads, we believe healing is a deeply personal journey. Our mission is to provide a safe, nurturing space where you can explore the benefits of energy healing without pressure or judgment.
              </p>

              {/* Key Principles Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    title: 'Safe Space',
                    desc: 'Judgment-free environment'
                  },
                  {
                    icon: Heart,
                    title: 'Complementary',
                    desc: 'Supporting your wellness'
                  },
                  {
                    icon: Award,
                    title: 'Ethical Practice',
                    desc: 'Honest & transparent'
                  },
                  {
                    icon: Users,
                    title: 'Personalized',
                    desc: 'Tailored to your needs'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-emerald-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Important Notice */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-gold-50/50 rounded-2xl p-6 border border-emerald-200/50">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-2">Important Notice</h4>
                    <p className="text-sm text-emerald-700/90 leading-relaxed italic">
                      "ReikiThreads Foundation practices Reiki as a complementary energy wellness method and does not replace medical treatment. We encourage clients to continue working with their healthcare providers."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practitioner Section - Clean Elegant Design */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-gold-600 font-medium text-sm tracking-widest uppercase mb-4"
            >
              Your Practitioner
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-900"
            >
              Meet Your Guide on the
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-gold-600 bg-clip-text text-transparent">
                Healing Journey
              </span>
            </motion.h2>
          </div>

          {/* Main Content - Clean Split Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left - Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="sticky top-32">
                  {/* Main Image */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/img/master2.webp"
                      alt="Reiki Master Practitioner"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                    {/* Certification Badge Overlay */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-emerald-600 font-medium">Certified</div>
                            <div className="text-xl font-bold text-emerald-900">Reiki Master</div>
                            <div className="text-xs text-emerald-600 mt-1">10+ Years Experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Title */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
                    Founder & Certified Reiki Master
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-gold-500 rounded-full" />
                </div>

                {/* Bio Content */}
                <div className="space-y-6 text-lg text-emerald-700/90 leading-relaxed">
                  <p>
                    As a <strong className="text-emerald-900 font-semibold">Certified Reiki Master</strong> with over a decade of experience in energy healing, I bring both formal training and heartfelt dedication to every session. My journey began during a transformative period when I discovered Reiki's profound ability to restore balance and inner peace.
                  </p>

                  <p>
                    Beyond my Reiki certification, I've completed extensive training in <strong className="text-emerald-900 font-semibold">holistic wellness, chakra healing, crystal therapy, and various energy healing modalities</strong>. I'm committed to continuous learning to better serve those who seek guidance.
                  </p>

                  <p>
                    My approach is simple: create a compassionate, judgment-free space where you can explore your own healing potential. I believe true wellness comes from within, and my role is to facilitate that natural process with care and integrity.
                  </p>

                  <p>
                    Having supported hundreds of clients worldwide through both in-person and distance healing, I understand that each journey is unique. Whether you're seeking stress relief, emotional healing, or enhanced well-being, I'm here to walk alongside you.
                  </p>
                </div>

                {/* Expertise Pills */}
                <div>
                  <p className="text-sm font-semibold text-emerald-900 mb-4 uppercase tracking-wider">
                    Certifications & Specialties
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Certified Reiki Master',
                      'Holistic Wellness',
                      'Energy Healing',
                      'Distance Healing',
                      'Chakra Balancing',
                      'Crystal Healing'
                    ].map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200/50 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>



              </motion.div>
              {/* CTA */}
              <div className="flex items-center justify-center lg:col-span-2">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 group"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm tracking-wider uppercase"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mt-3"
            >
              Guiding Principles
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-emerald-700/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium text-sm tracking-wider uppercase"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mt-3"
            >
              The ReikiThreads Story
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gold-500/30" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gold-500 border-4 border-emerald-900" />

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <span className="text-gold-400 text-sm font-medium">{item.year}</span>
                  <h3 className="text-xl font-serif font-semibold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-emerald-100/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
              Ready to Experience<br />
              <span className="gradient-text">Energy Healing?</span>
            </h2>
            <p className="text-emerald-700/80 text-lg mb-10">
              Whether you're new to Reiki or continuing your wellness journey,
              we're here to support you with compassion and care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-primary group">
                Book Your Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
