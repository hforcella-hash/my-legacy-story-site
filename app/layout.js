import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
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
  title: 'MyLifeStory™ — The most important book you\'ll ever write.',
  description: 'Preserve your life story as a beautifully written, printed hardcover memoir — guided by AI, crafted in your own words, delivered to your door.',
  keywords: 'memoir, legacy book, life story, autobiography, family history, hardcover book',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  openGraph: {
    title: 'MyLifeStory™',
    description: 'Your story, preserved forever. Leave your family more than memories.',
    url: 'https://mylegacystoryapp.com',
    siteName: 'MyLifeStory',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
