import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://mylifestory.app'),
  title: 'MyLifeStory™ — The most important book you\'ll ever write.',
  description: 'Preserve your life story as a beautifully written, printed hardcover memoir — guided by AI, crafted in your own words, delivered to your door.',
  keywords: 'memoir, legacy book, life story, autobiography, family history, hardcover book',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  verification: { google: 'B5TnQvNxV5q9bmropnWsHgvHvAtHM2wJDC_u_V-lXUw' },
  openGraph: {
    title: 'MyLifeStory™',
    description: 'Your story, preserved forever. Leave your family more than memories.',
    url: 'https://mylifestory.app',
    siteName: 'MyLifeStory™',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'MyLifeStory™' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyLifeStory™',
    description: 'Your story, preserved forever. Leave your family more than memories.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
