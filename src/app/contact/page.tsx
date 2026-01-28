"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section - Professional Dark Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-black overflow-hidden flex items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #10b981 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
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
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span className="text-white/90 font-medium text-sm">
                  We're Here to Help
                </span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                  Get in
                  <span className="block mt-2 bg-gradient-to-r from-gold-400 to-emerald-400 bg-clip-text text-transparent">
                    Touch
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
                Have questions about our services? Ready to start your healing
                journey? We'd love to hear from you.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-8"
              >
                {[
                  { value: "24hrs", label: "Response Time" },
                  { value: "Global", label: "Availability" },
                  { value: "100%", label: "Confidential" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-emerald-200/70 text-sm mt-1">
                      {stat.label}
                    </div>
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
                  href="mailto:hello@reikithreads.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Send Email</span>
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span>Call Us</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Method Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  subtitle: "Quick Response",
                  gradient: "from-gold-500 to-gold-600",
                },
                {
                  icon: Phone,
                  title: "Call Anytime",
                  subtitle: "Direct Support",
                  gradient: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: MapPin,
                  title: "Worldwide",
                  subtitle: "Remote Sessions",
                  gradient: "from-emerald-400 to-emerald-500",
                },
                {
                  icon: Clock,
                  title: "24hr Reply",
                  subtitle: "Fast Support",
                  gradient: "from-gold-400 to-gold-500",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-emerald-200/70">
                      {card.subtitle}
                    </p>
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
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">
              Send Message
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Professional Design */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Section Header */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-3">
                  Let's Connect
                </h2>
                <p className="text-emerald-600">
                  Choose your preferred way to reach out
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "hello@reikithreads.com",
                    link: "mailto:hello@reikithreads.com",
                    description: "Send us a message anytime",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+1 (234) 567-890",
                    link: "tel:+1234567890",
                    description: "Mon-Fri, 9AM - 6PM EST",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Virtual & In-Person",
                    link: null,
                    description: "Available Worldwide",
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    value: "Within 24 Hours",
                    link: null,
                    description: "Quick professional support",
                  },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-emerald-900 text-sm mb-1">
                          {contact.title}
                        </h3>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-emerald-700 hover:text-gold-600 transition-colors font-medium block truncate"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-emerald-700 font-medium">
                            {contact.value}
                          </p>
                        )}
                        <p className="text-emerald-600/70 text-xs mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-emerald-900 mb-4">
                  Follow Our Journey
                </h3>
                <div className="flex gap-3">
                  {[
                    {
                      label: "Instagram",
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                    {
                      label: "Facebook",
                      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 hover:from-gold-500 hover:to-gold-600 flex items-center justify-center transition-all duration-300 group border border-emerald-200 hover:border-gold-500"
                      aria-label={social.label}
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-12 text-center border border-emerald-100 shadow-xl">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-lg">
                    <Send className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-emerald-700/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We'll review your message and
                    respond within 24 hours.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                  >
                    Back to Home
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-xl"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-emerald-600">
                      Fill out the form below and we'll get back to you soon
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
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

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div>
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-8900"
                          className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
                          Subject <span className="text-gold-600">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 transition-all appearance-none cursor-pointer"
                          required
                        >
                          <option value="">Select a topic...</option>
                          <option value="general">General Inquiry</option>
                          <option value="booking">Booking Question</option>
                          <option value="services">Services Information</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-emerald-900 mb-2">
                        Your Message <span className="text-gold-600">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="w-full px-4 py-3.5 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-4 focus:ring-gold-100 resize-none transition-all"
                        required
                      />
                    </div>

                    {/* Error Display */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Privacy & Submit */}}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-emerald-100">
                      <p className="text-sm text-emerald-600">
                        We respect your privacy. See our{" "}
                        <Link
                          href="/privacy"
                          className="text-gold-600 hover:underline font-medium"
                        >
                          Privacy Policy
                        </Link>
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-300 group w-full sm:w-auto justify-center disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* WhatsApp Highlight Card */}
      <section className="bg-white px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl group"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <h3 className="text-white font-bold text-lg">Chat on WhatsApp</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Get instant responses to your questions. We're active and ready to
              help!
            </p>
            <a
              href="https://wa.me/1234567890?text=Hello! I have a question about ReikiThreads services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
            >
              <span>Start Chat</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and healing practices
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {[
                {
                  q: "How do I book a session?",
                  a: "You can book directly through our Book a Session page, or contact us via email, phone, or WhatsApp to schedule an appointment. We'll work with you to find a convenient time.",
                },
                {
                  q: "Do you offer distance healing sessions?",
                  a: "Yes! As a Certified Reiki Master, we offer distance Reiki sessions that are just as effective as in-person sessions, serving clients worldwide. Energy transcends physical boundaries.",
                },
                {
                  q: "What should I expect during my first session?",
                  a: "Your first session includes a brief consultation to understand your needs, followed by a relaxing healing session. You'll receive guidance on what to expect throughout, and we encourage you to ask questions.",
                },
                {
                  q: "Is Reiki a replacement for medical treatment?",
                  a: "No. Reiki is a complementary wellness practice that supports your overall well-being. We always encourage clients to continue working with their healthcare providers. Reiki works alongside conventional medicine.",
                },
                {
                  q: "How long is a typical session?",
                  a: "Standard sessions are usually 60 minutes, though we also offer 30-minute and 90-minute sessions depending on your needs. First-time clients typically benefit from longer sessions.",
                },
                {
                  q: "What should I wear to my session?",
                  a: "Wear comfortable, loose-fitting clothing. You'll remain fully clothed throughout the session. For distance sessions, simply find a quiet, comfortable space in your home.",
                },
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = useState(index === 0); // First one open by default

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-white rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-left text-lg font-bold text-emerald-900 flex-1">
                          {faq.q}
                        </h3>
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-white" />
                          ) : (
                            <Plus className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-left text-emerald-700/90 leading-relaxed pt-4 border-t border-emerald-100 mt-4">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Still Have Questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center p-8 bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Still Have Questions?
              </h3>
              <p className="text-emerald-100/80 mb-6 max-w-md mx-auto">
                We're here to help! Reach out directly and we'll get back to you within 24 hours.
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
