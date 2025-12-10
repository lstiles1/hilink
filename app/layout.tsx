import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Hilink',
  description: 'Travel the world with Hilink - Your ultimate travel companion app for seamless bookings, personalized itineraries, and unforgettable experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
