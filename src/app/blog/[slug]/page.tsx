'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Heart, BookOpen, User } from 'lucide-react'

// Sample blog post data (in real app, this would come from props/API)
const blogPost = {
    id: 'what-is-reiki',
    title: 'Understanding Reiki: A Beginner\'s Guide',
    excerpt: 'Discover the fundamentals of Reiki energy healing, its origins, principles, and how it can support your wellness journey.',
    category: 'Reiki Basics',
    date: 'January 15, 2026',
    readTime: '5 min read',
    author: {
        name: 'ReikiThreads Foundation',
        role: 'Certified Reiki Master',
        image: '/images/practitioner.jpg'
    },
    image: '/images/blog-reiki-guide.jpg',
    content: `
    <h2>What is Reiki?</h2>
    <p>Reiki is a Japanese healing technique that promotes relaxation and stress reduction through the gentle laying on of hands. The word "Reiki" is made of two Japanese words: "Rei" meaning "God's Wisdom or the Higher Power" and "Ki" meaning "life force energy."</p>
    
    <p>This ancient practice was developed in 1922 by Japanese Buddhist Mikao Usui and has since spread throughout the world. Reiki practitioners believe that when our life force energy is low or blocked, we're more likely to feel stressed or become ill. Conversely, when energy flows freely, we feel more balanced and capable of handling life's challenges.</p>

    <h2>How Does Reiki Work?</h2>
    <p>During a Reiki session, a practitioner places their hands lightly on or just above specific areas of your body. The session typically lasts between 30-60 minutes, during which you remain fully clothed and may sit or lie down comfortably.</p>

    <p>The practitioner acts as a channel for universal life force energy, allowing it to flow to areas where healing is needed. Many people report feeling sensations of warmth, tingling, or deep relaxation during their sessions.</p>

    <h2>Benefits of Reiki</h2>
    <p>While Reiki is not a replacement for medical treatment, many people find it beneficial for:</p>
    <ul>
      <li>Reducing stress and promoting relaxation</li>
      <li>Supporting the body's natural healing processes</li>
      <li>Enhancing overall well-being and balance</li>
      <li>Improving sleep quality</li>
      <li>Promoting emotional healing and release</li>
      <li>Supporting spiritual growth and self-awareness</li>
    </ul>

    <h2>What to Expect in Your First Session</h2>
    <p>If you're considering trying Reiki, here's what you can typically expect:</p>
    <ol>
      <li><strong>Consultation:</strong> Your practitioner will discuss your health concerns and what you hope to achieve</li>
      <li><strong>Comfortable Setting:</strong> You'll be invited to lie down or sit in a peaceful, calming environment</li>
      <li><strong>The Session:</strong> The practitioner will gently place their hands on or above various parts of your body</li>
      <li><strong>After Care:</strong> You may receive recommendations for self-care and future sessions</li>
    </ol>

    <h2>Is Reiki Right for You?</h2>
    <p>Reiki is generally safe for everyone, including children and pregnant women. It's a gentle, non-invasive practice that works alongside conventional medical treatment. However, it's always recommended to consult with your healthcare provider about any complementary therapies you're considering.</p>

    <p>Many people find Reiki helpful during times of stress, transition, or when seeking deeper connection with themselves. Whether you're dealing with physical discomfort, emotional challenges, or simply want to enhance your overall well-being, Reiki offers a gentle path to healing and balance.</p>

    <h2>Getting Started</h2>
    <p>If you're interested in experiencing Reiki, look for a certified practitioner in your area or consider distance healing sessions, which can be just as effective. At ReikiThreads Foundation, we offer both in-person and distance Reiki sessions, personalized to your unique needs and goals.</p>

    <p>Remember, healing is a journey, not a destination. Reiki can be a beautiful companion on that journey, supporting you in finding balance, peace, and renewed vitality.</p>
  `
}

const relatedPosts = [
    {
        id: 'distance-healing',
        title: 'How Distance Reiki Works',
        image: '/images/blog-distance-healing.jpg',
        category: 'Distance Healing'
    },
    {
        id: 'chakra-basics',
        title: 'Understanding Your Chakras',
        image: '/images/blog-chakra-energy.jpg',
        category: 'Chakra Healing'
    },
    {
        id: 'preparing-session',
        title: 'Preparing for Your First Session',
        image: '/images/blog-reiki-preparation.jpg',
        category: 'Getting Started'
    }
]

export default function BlogDetailPage() {
    return (
        <>
            {/* Hero Section - Clean Magazine Style */}
            <section className="relative pt-24 pb-0 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-emerald-600 hover:text-gold-600 font-medium transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Articles
                            </Link>
                        </motion.div>

                        {/* Category Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold">
                                <Tag className="w-4 h-4" />
                                {blogPost.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-emerald-900 mb-8 leading-tight"
                        >
                            {blogPost.title}
                        </motion.h1>

                        {/* Meta Info Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-emerald-100"
                        >
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100">
                                    <img
                                        src={blogPost.author.image}
                                        alt={blogPost.author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-emerald-900">{blogPost.author.name}</div>
                                    <div className="text-xs text-emerald-600">{blogPost.author.role}</div>
                                </div>
                            </div>

                            <span className="text-emerald-300">•</span>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-emerald-600">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{blogPost.date}</span>
                            </div>

                            <span className="text-emerald-300">•</span>

                            {/* Read Time */}
                            <div className="flex items-center gap-2 text-emerald-600">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{blogPost.readTime}</span>
                            </div>

                            {/* Share Buttons - Right Aligned */}
                            <div className="ml-auto flex items-center gap-2">
                                <span className="text-xs font-semibold text-emerald-600 hidden sm:block">Share:</span>
                                {[
                                    { icon: Facebook, label: 'Facebook' },
                                    { icon: Twitter, label: 'Twitter' },
                                    { icon: Linkedin, label: 'LinkedIn' }
                                ].map((social, i) => (
                                    <button
                                        key={i}
                                        aria-label={`Share on ${social.label}`}
                                        className="w-9 h-9 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image - Clean */}
            <section className="pt-8 pb-12 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={blogPost.image}
                                alt={blogPost.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content - Premium Typography */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">

                        {/* Article Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mb-12 pl-6 border-l-4 border-gold-500 bg-gradient-to-r from-emerald-50 to-transparent p-6 rounded-r-xl"
                        >
                            <p className="text-lg text-emerald-800 leading-relaxed italic">
                                {blogPost.excerpt}
                            </p>
                        </motion.div>

                        {/* Main Article */}
                        <motion.article
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="prose prose-lg prose-emerald max-w-none
                                       first-letter:text-7xl first-letter:font-bold first-letter:text-emerald-900 
                                       first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />

                        {/* Article Footer - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="mt-16"
                        >
                            {/* Tags */}
                            <div className="mb-8">
                                <p className="text-sm font-semibold text-emerald-600 mb-3">Topics:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Reiki', 'Energy Healing', 'Wellness', 'Holistic Health'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm rounded-lg cursor-pointer transition-colors border border-emerald-200"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-8" />

                            {/* Action Section */}
                            <div className="bg-gradient-to-br from-emerald-50 to-gold-50/30 rounded-2xl p-8 text-center border border-emerald-100">
                                <p className="text-xl font-serif font-bold text-emerald-900 mb-2">
                                    Was this article helpful?
                                </p>
                                <p className="text-emerald-600 mb-6">
                                    Let us know what you think and save for later
                                </p>
                                <div className="flex items-center justify-center gap-4 flex-wrap">
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold rounded-xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300 hover:scale-105 shadow-sm">
                                        <Heart className="w-5 h-5" />
                                        Helpful
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105">
                                        <BookOpen className="w-5 h-5" />
                                        Save Article
                                    </button>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 pt-6 border-t border-emerald-200/50 flex items-center justify-center gap-8 text-sm text-emerald-600">
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-4 h-4" />
                                        <span>245 helpful</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>89 saved</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Author Bio - Compact */}
            <section className="py-12 bg-cream-50 border-y border-emerald-100">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-6">About the Author</h3>
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-200">
                                    <img
                                        src={blogPost.author.image}
                                        alt={blogPost.author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-emerald-900 mb-1">
                                    {blogPost.author.name}
                                </h4>
                                <p className="text-emerald-600 text-sm mb-3">{blogPost.author.role}</p>
                                <p className="text-emerald-700/80 leading-relaxed text-sm">
                                    Dedicated to sharing the transformative power of Reiki and energy healing with those seeking balance, peace, and self-discovery. With over 10 years of experience and certified training, we provide authentic, ethical healing services.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-2">
                                Continue Reading
                            </h2>
                            <p className="text-emerald-600">More articles to support your healing journey</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((post, i) => (
                                <Link key={post.id} href={`/blog/${post.id}`}>
                                    <motion.article
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-emerald-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <span className="inline-block px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg mb-3">
                                            {post.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-emerald-900 group-hover:text-gold-600 transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-800">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Ready to Experience Reiki?
                        </h2>
                        <p className="text-emerald-100/80 text-lg mb-8">
                            Book a session and discover the transformative power of energy healing for yourself.
                        </p>
                        <Link
                            href="/book"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:bg-emerald-50 shadow-lg transition-all duration-300"
                        >
                            Book Your Session
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Add custom styles for prose */}
            <style jsx global>{`
        .prose h2 {
          @apply text-2xl font-serif font-bold text-emerald-900 mt-12 mb-6;
        }
        .prose p {
          @apply text-emerald-700/90 leading-relaxed mb-6;
        }
        .prose ul, .prose ol {
          @apply text-emerald-700/90 mb-6;
        }
        .prose li {
          @apply mb-2;
        }
        .prose strong {
          @apply text-emerald-900 font-semibold;
        }
      `}</style>
        </>
    )
}
