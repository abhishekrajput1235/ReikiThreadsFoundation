'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2, Heart, Shield, Star } from 'lucide-react'
import styles from './HeroSection.module.css'
import DotGrid from './DotGrid'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}
            style={{ paddingBottom: '100px' }}
        >
            {/* Interactive DotGrid Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Subtle Noise Overlay */}
            <div className={styles.noiseOverlay} style={{ zIndex: 1 }} />

            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    {/* LEFT COLUMN - Content */}
                    <motion.div
                        className={styles.contentColumn}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            style={{ marginTop: '70px' }}
                            className={styles.badge}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Sparkles className={styles.badgeIcon} />
                            <span>Certified Reiki Master</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className={styles.headline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Transform Your Life Through Energy Healing
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className={styles.subheading}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Experience profound relaxation and energetic clarity with certified Reiki sessions.
                            Available in-person and remotely—healing that transcends distance.
                        </motion.p>

                        {/* Features List */}
                        <motion.div
                            className={styles.featuresList}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className={styles.featureItem}>
                                <CheckCircle2 className={styles.featureIcon} />
                                <span>Deep Stress Relief</span>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle2 className={styles.featureIcon} />
                                <span>Emotional Balance</span>
                            </div>
                            <div className={styles.featureItem}>
                                <CheckCircle2 className={styles.featureIcon} />
                                <span>Global Access</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.ctaGroup}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Link href="/book" className={styles.btnPrimary}>
                                <span>Book a Session</span>
                                <ArrowRight className={styles.btnIcon} />
                            </Link>
                            <Link href="/services" className={styles.btnSecondary}>
                                <span>Explore Services</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - Premium Visual */}
                    <motion.div
                        className={styles.visualColumn}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        {/* Main Visual Container */}
                        <div className={styles.heroVisual}>
                            {/* Outer Glow Ring */}
                            <div className={styles.glowRing} />

                            {/* Orbiting Energy Rings */}
                            <div className={styles.orbitRing1}>
                                <div className={styles.orbitDot} />
                            </div>
                            <div className={styles.orbitRing2}>
                                <div className={styles.orbitDot} />
                            </div>
                            <div className={styles.orbitRing3}>
                                <div className={styles.orbitDot} />
                            </div>

                            {/* Center Circle with Logo */}
                            <motion.div
                                className={styles.centerCircle}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <img
                                    src="/reikithreadfull.png"
                                    alt="ReikiThreads"
                                    className={styles.heroLogo}
                                />
                            </motion.div>

                            {/* Floating Service Cards */}
                            <motion.div
                                className={`${styles.serviceCard} ${styles.serviceCard1}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <span className={styles.serviceEmoji}>🪷</span>
                                <span className={styles.serviceText}>Chakra Healing</span>
                            </motion.div>

                            <motion.div
                                className={`${styles.serviceCard} ${styles.serviceCard2}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                            >
                                <span className={styles.serviceEmoji}>✨</span>
                                <span className={styles.serviceText}>Energy Balance</span>
                            </motion.div>

                            <motion.div
                                className={`${styles.serviceCard} ${styles.serviceCard3}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                            >
                                <span className={styles.serviceEmoji}>🌍</span>
                                <span className={styles.serviceText}>Distance Reiki</span>
                            </motion.div>
                        </div>

                        {/* Stats Badges */}
                        <motion.div
                            className={`${styles.statBadge} ${styles.statBadge1}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            <Heart className={styles.statIcon} />
                            <div className={styles.statInfo}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>Healings</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`${styles.statBadge} ${styles.statBadge2}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.7 }}
                        >
                            <Shield className={styles.statIcon} />
                            <div className={styles.statInfo}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>Years Exp</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className={`${styles.statBadge} ${styles.statBadge3}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.9 }}
                        >
                            <Star className={styles.statIcon} />
                            <div className={styles.statInfo}>
                                <span className={styles.statNumber}>25+</span>
                                <span className={styles.statLabel}>Countries</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Scroll</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollDot} />
                </div>
            </motion.div>
        </section>
    )
}