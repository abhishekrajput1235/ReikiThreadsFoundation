'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  { id: 'reiki-healing', name: 'Reiki Energy Healing (Certified Reiki Master)', duration: '60 min' },
  { id: 'distance-reiki', name: 'Distance Reiki Healing', duration: '45-60 min' },
  { id: 'chakra-balancing', name: 'Chakra Balancing', duration: '75 min' },
  { id: 'aura-cleansing', name: 'Aura Cleansing', duration: '60 min' },
  { id: 'meditative-sessions', name: 'Meditative Healing Sessions', duration: '60-90 min' },
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

export default function BookPage() {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    firstSession: true,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to backend
    console.log('Booking submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-black py-32 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-2xl"
              >
                <Check className="w-14 h-14 text-white stroke-[3]" />
              </motion.div>

              {/* Success Message Card */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4 text-center">
                  Booking Received!
                </h1>
                <p className="text-emerald-600 text-lg text-center mb-8 leading-relaxed">
                  Thank you for choosing ReikiThreads Foundation. We've received your booking request
                  and will contact you within <span className="font-semibold text-emerald-900">24 hours</span> to
                  confirm your session.
                </p>

                {/* What's Next Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-gold-50/30 rounded-2xl p-6 border-2 border-emerald-100">
                  <h2 className="text-xl font-serif font-bold text-emerald-900 mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                    What's Next?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-emerald-900 font-medium">Confirmation Email</p>
                        <p className="text-emerald-600 text-sm mt-0.5">You'll receive a detailed confirmation email shortly</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-emerald-900 font-medium">Date & Time Confirmation</p>
                        <p className="text-emerald-600 text-sm mt-0.5">We'll verify your preferred appointment slot</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-emerald-900 font-medium">Pre-Session Guidance</p>
                        <p className="text-emerald-600 text-sm mt-0.5">Detailed instructions to prepare for your healing journey</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>Return to Home</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-emerald-200 hover:border-emerald-300 text-emerald-900 font-semibold rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>

              {/* Additional Support Info */}
              <p className="text-center text-emerald-100/80 text-sm">
                Questions? Contact us at{' '}
                <a href="mailto:contact@reikithreads.org" className="text-gold-400 hover:text-gold-300 underline font-medium">
                  contact@reikithreads.org
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

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
                <Calendar className="w-4 h-4 text-gold-400" />
                <span className="text-white/90 font-medium text-sm">Schedule Your Session</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                  Book a
                  <span className="block mt-2 bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                    Healing Session
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
                Take the first step on your healing journey. Fill out the form below and we'll be in touch to confirm your appointment.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: '60min', label: 'Session Length' },
                  { value: '24hrs', label: 'Confirmation' },
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
                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/1234567890?text=Hello! I'd like to book a Reiki session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Booking Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Sparkles,
                  title: '5+ Services',
                  subtitle: 'Choose Your Path',
                  gradient: 'from-gold-500 to-gold-600'
                },
                {
                  icon: Calendar,
                  title: 'Flexible Dates',
                  subtitle: 'Book Anytime',
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: Clock,
                  title: 'Quick Setup',
                  subtitle: '24hr Confirmation',
                  gradient: 'from-emerald-400 to-emerald-500'
                },
                {
                  icon: Check,
                  title: 'Easy Process',
                  subtitle: 'Simple Form',
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
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">Complete Form</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Booking Form Section - Professional Design */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">

            {/* Form Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
                Complete Your Booking
              </h2>
              <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
                Fill out the form below to schedule your healing session
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 border-2 border-emerald-100 shadow-xl"
            >
              {/* Step 1: Service Selection */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-emerald-900">
                      Select Your Service
                    </h3>
                    <p className="text-emerald-600 text-sm">Choose the healing service that resonates with you</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`relative flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${formData.service === service.id
                        ? 'border-gold-400 bg-gradient-to-br from-gold-50 to-emerald-50 shadow-lg'
                        : 'border-emerald-100 hover:border-emerald-300 hover:shadow-md'
                        }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex-grow">
                        <p className="font-semibold text-emerald-900 mb-1">{service.name}</p>
                        <p className="text-sm text-emerald-600 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {service.duration}
                        </p>
                      </div>
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${formData.service === service.id
                        ? 'bg-gold-500'
                        : 'bg-emerald-100 group-hover:bg-emerald-200'
                        }`}>
                        {formData.service === service.id && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-emerald-900">
                      Choose Date & Time
                    </h3>
                    <p className="text-emerald-600 text-sm">Select your preferred appointment slot</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time <span className="text-gold-600">*</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a time slot...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Personal Information */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-emerald-900">
                      Your Information
                    </h3>
                    <p className="text-emerald-600 text-sm">Help us prepare for your session</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-emerald-900 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-emerald-900 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-8900"
                        className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-emerald-900 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific concerns, questions, or preferences for your session..."
                      rows={4}
                      className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 resize-none transition-all"
                    />
                  </div>

                  {/* First Session Checkbox */}
                  <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="firstSession"
                        checked={formData.firstSession}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-emerald-300 text-gold-500 focus:ring-gold-400 focus:ring-offset-0"
                      />
                      <div>
                        <span className="text-emerald-900 font-medium">This is my first Reiki session</span>
                        <p className="text-emerald-600 text-sm mt-1">We'll provide extra guidance and take time to answer your questions</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="border-t-2 border-emerald-100 pt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-sm text-emerald-600">
                    By booking, you agree to our{' '}
                    <Link href="/terms" className="text-gold-600 hover:underline font-medium">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/disclaimer" className="text-gold-600 hover:underline font-medium">Disclaimer</Link>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto justify-center"
                  >
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.form>

            {/* WhatsApp Alternative - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="relative overflow-hidden p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-xl text-center group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-white/90 mb-6 max-w-md mx-auto">
                    Get instant confirmation and book your session via WhatsApp messaging
                  </p>
                  <a
                    href="https://wa.me/1234567890?text=Hello! I'd like to book a Reiki session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  >
                    <span>Book via WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
