'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-emerald-950/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="/reikithreadfull.png" alt="ReikiThreads logo" className="h-14 object-contain" />
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-semibold transition-colors duration-300 ${
                scrolled ? 'text-emerald-900' : 'text-white'
              }`}>
                ReikiThreads
              </span>
              <span className={`text-xs tracking-wider transition-colors duration-300 ${
                scrolled ? 'text-emerald-600' : 'text-gold-300'
              }`}>
                FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="ml-4 btn-primary text-sm py-3 px-6"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-emerald-900 hover:bg-emerald-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 bg-white rounded-2xl shadow-xl mb-4 mt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center text-sm py-3"
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
