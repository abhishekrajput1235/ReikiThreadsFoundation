'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar, Tag, Clock, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 'what-is-reiki',
    title: 'Understanding Reiki: A Beginner\'s Guide',
    excerpt: 'Discover the fundamentals of Reiki energy healing, its origins, principles, and how it can support your wellness journey. Perfect for those new to energy healing.',
    category: 'Reiki Basics',
    date: 'January 15, 2026',
    readTime: '5 min read',
    featured: true,
    image: '/images/blog-reiki-guide.jpg'
  },
  {
    id: 'distance-healing-explained',
    title: 'How Distance Reiki Works: Healing Beyond Physical Space',
    excerpt: 'Learn about the science and practice behind distance healing. Understand how energy transcends physical boundaries and why distance sessions are just as effective.',
    category: 'Distance Healing',
    date: 'January 10, 2026',
    readTime: '4 min read',
    featured: true,
    image: '/images/blog-distance-healing.jpg'
  },
  {
    id: 'chakra-basics',
    title: 'Chakra Basics: Understanding Your Energy Centers',
    excerpt: 'Explore the seven main chakras and their role in maintaining physical, emotional, and spiritual balance. A complete guide to your body\'s energy system.',
    category: 'Chakra Healing',
    date: 'January 5, 2026',
    readTime: '6 min read',
    featured: true,
    image: '/images/blog-chakra-energy.jpg'
  },
  {
    id: 'reiki-certified-master-symbols',
    title: 'The Power of Certified Reiki Master: Sacred Symbols Explained',
    excerpt: 'Discover how Certified Reiki Master certification enables deeper healing through the use of sacred symbols and distance healing techniques.',
    category: 'Reiki Basics',
    date: 'December 28, 2025',
    readTime: '5 min read',
    featured: false,
    image: '/images/blog-reiki-symbols.jpg'
  },
  {
    id: 'self-care-energy-tips',
    title: '10 Daily Energy Self-Care Practices',
    excerpt: 'Simple techniques you can practice at home to maintain your energy balance, reduce stress, and support your overall well-being.',
    category: 'Self-Care',
    date: 'December 20, 2025',
    readTime: '4 min read',
    featured: false,
    image: '/images/blog-self-care.jpg'
  },
  {
    id: 'preparing-for-reiki-session',
    title: 'How to Prepare for Your First Reiki Session',
    excerpt: 'What to expect, how to prepare, and tips for getting the most out of your healing experience with practical guidance for newcomers.',
    category: 'Getting Started',
    date: 'December 15, 2025',
    readTime: '3 min read',
    featured: false,
    image: '/images/blog-reiki-preparation.jpg'
  },
  {
    id: 'stress-anxiety-reiki',
    title: 'Using Reiki for Stress and Anxiety Relief',
    excerpt: 'Learn how Reiki can be a powerful tool for managing stress and anxiety. Discover techniques and practices for daily stress management.',
    category: 'Stress Relief',
    date: 'December 10, 2025',
    readTime: '4 min read',
    featured: false,
    image: '/images/blog-stress-relief.jpg'
  },
  {
    id: 'crystal-healing-guide',
    title: 'Crystal Healing: Working with Gemstones for Energy Balance',
    excerpt: 'An introduction to using crystals for healing and energy work. Learn about popular crystals and how to incorporate them into your wellness routine.',
    category: 'Crystal Healing',
    date: 'December 5, 2025',
    readTime: '5 min read',
    featured: false,
    image: '/images/blog-crystals-healing.jpg'
  },
  {
    id: 'manifestation-energy',
    title: 'Energy Work for Manifestation and Goal Achievement',
    excerpt: 'Discover how Reiki and energy healing can support your manifestation practices and help you achieve your goals with greater clarity and focus.',
    category: 'Manifestation',
    date: 'November 28, 2025',
    readTime: '4 min read',
    featured: false,
    image: '/images/blog-manifestation.jpg'
  },
  {
    id: 'pet-animal-healing',
    title: 'Reiki Healing for Pets and Animals',
    excerpt: 'Learn how Reiki can benefit your pets and other animals. Discover gentle energy healing techniques for companion animals.',
    category: 'Pet Healing',
    date: 'November 20, 2025',
    readTime: '3 min read',
    featured: false,
    image: '/images/blog-pet-healing.jpg'
  },
  {
    id: 'relationship-healing-energy',
    title: 'Energy Healing for Relationships and Emotional Bonds',
    excerpt: 'Explore how Reiki can support healthy relationships, resolve emotional conflicts, and strengthen connections with loved ones.',
    category: 'Relationship Healing',
    date: 'November 15, 2025',
    readTime: '4 min read',
    featured: false,
    image: '/images/blog-relationship-healing.jpg'
  },
  {
    id: 'abundance-prosperity-reiki',
    title: 'Reiki for Financial Abundance and Prosperity',
    excerpt: 'Learn how energy healing can help clear blocks to abundance and create a positive relationship with money and prosperity.',
    category: 'Abundance',
    date: 'November 10, 2025',
    readTime: '4 min read',
    featured: false,
    image: '/images/blog-abundance.jpg'
  }
]

const categories = [
  'All Posts',
  'Reiki Basics',
  'Distance Healing',
  'Chakra Healing',
  'Self-Care',
  'Getting Started',
  'Stress Relief',
  'Crystal Healing',
  'Manifestation',
  'Pet Healing',
  'Relationship Healing',
  'Abundance',
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section - Professional Blog Design */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-emerald-900 via-emerald-800 to-black overflow-hidden flex items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Content & Search */}
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
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-white/90 font-medium text-sm">Knowledge & Insights</span>
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
                    Insights
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
                Explore articles on Reiki, energy healing, chakra wellness, and self-care practices to support your spiritual journey.
              </motion.p>



              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                {[
                  { value: '12+', label: 'Articles' },
                  { value: '8', label: 'Categories' },
                  { value: '5 min', label: 'Avg. Read' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-emerald-200/70 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Popular Topics Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Sparkles,
                  title: 'Reiki Basics',
                  count: '3 articles',
                  gradient: 'from-gold-500 to-gold-600'
                },
                {
                  icon: Calendar,
                  title: 'Chakra Healing',
                  count: '2 articles',
                  gradient: 'from-emerald-500 to-emerald-600'
                },
                {
                  icon: Tag,
                  title: 'Self-Care',
                  count: '4 articles',
                  gradient: 'from-emerald-400 to-emerald-500'
                },
                {
                  icon: Clock,
                  title: 'Distance Healing',
                  count: '2 articles',
                  gradient: 'from-gold-400 to-gold-500'
                }
              ].map((topic, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="group relative text-left"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <topic.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{topic.title}</h3>
                    <p className="text-sm text-emerald-200/70">{topic.count}</p>
                  </div>
                </motion.button>
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
            <span className="text-xs uppercase tracking-wider text-emerald-200/50">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-emerald-200/50 to-transparent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories - Refined Design with Search */}
      <section className="py-4 bg-white/80 backdrop-blur-sm border-b border-emerald-100/50 sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-4">
            {/* Search Bar Row */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-11 pr-4 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-sm text-emerald-900 placeholder-emerald-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                />
              </div>
            </div>

            {/* Categories Row */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Filter:</span>
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 ${index === 0
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40'
                    : 'bg-emerald-50/80 text-emerald-700 hover:bg-emerald-100 hover:scale-105 border border-emerald-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-emerald-900">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500 text-emerald-900 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-emerald-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-emerald-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-emerald-700/70 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-500">{post.date}</span>
                    <span className="text-gold-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-emerald-900">All Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5">
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
                    <span className="text-xs text-emerald-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-emerald-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-emerald-700/70 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-emerald-500">{post.date}</span>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-emerald-100/80 text-lg mb-8">
              Join our community and receive healing insights, wellness tips,
              and exclusive offers directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-emerald-200/60 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
