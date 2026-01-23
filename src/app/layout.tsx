import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'ReikiThreads Foundation | Weaving Light into Your Life',
  description: 'Certified Reiki Master offering complementary energy healing, chakra balancing, and holistic wellness support. Experience peace, balance, and self-healing.',
  keywords: 'Reiki, Energy Healing, Chakra Balancing, Distance Reiki, Holistic Wellness, Spiritual Healing, Aura Cleansing',
  authors: [{ name: 'ReikiThreads Foundation' }],
  openGraph: {
    title: 'ReikiThreads Foundation | Weaving Light into Your Life',
    description: 'Certified Reiki Master offering complementary energy healing and holistic wellness support.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ReikiThreads Foundation',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/reikithreadfull.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
