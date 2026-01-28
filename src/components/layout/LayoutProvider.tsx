'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProviderProps {
  children: React.ReactNode
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')

  // Apply admin-specific body styling
  useEffect(() => {
    if (isAdminRoute) {
      document.body.className = 'min-h-screen bg-slate-50 text-slate-900 antialiased'
    } else {
      document.body.className = 'min-h-screen flex flex-col bg-cream-50 text-emerald-950 font-sans antialiased'
    }
  }, [isAdminRoute])

  if (isAdminRoute) {
    // Admin layout - no header/footer
    return (
      <div className="min-h-screen">
        {children}
      </div>
    )
  }

  // Website layout - with header/footer
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
}