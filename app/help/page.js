'use client'

export const metadata = {
  title: 'Help & Support — MyLifeStory',
  description: 'Get help with MyLifeStory. Find answers to common questions or contact our support team.',
}

const faqs = [
  {
    q: 'How does MyLifeStory work?',
    a: 'MyLifeStory guides you through your life story using an AI-powered interview. You speak or type your answers, and the app organizes them into beautifully written chapters. When you\'re ready, you can preview your book and order a professional hardcover.',
  },
  {
    q: 'What languages is the app available in?',
    a: 'MyLifeStory is available in English and Spanish. You can switch languages from the Profile section inside the app.',
  },
  {
    q: 'How do I order my printed book?',
    a: 'Once you\'ve completed at least one chapter, go to My Book → Order Book. You\'ll be able to choose your cover type, review your book, and place your order. Books are printed and shipped directly to your door.',
  },
  {
    q: 'What is the difference between the Free and Pro plans?',
    a: 'The Free plan lets you complete one chapter and preview your book. The Pro plan unlocks all chapters, unlimited AI interview sessions, PDF export, and priority support.',
  },
  {
    q: 'Can I edit my answers after the interview?',
    a: 'Yes. You can review and edit any chapter content directly inside the app before ordering your book.',
  },
  {
    q: 'Is my story private?',
    a: 'Yes. Your story belongs only to you. We never share your content with third parties. You can read our full Privacy Policy for details.',
  },
  {
    q: 'How do I cancel my Pro subscription?',
    a: 'You can cancel anytime through the App Store on your iPhone (Settings → Apple ID → Subscriptions). Your Pro access continues until the end of the current billing period.',
  },
  {
    q: 'I forgot my password. How do I reset it?',
    a: 'On the Sign In screen, tap "Forgot password?" and enter your email address. You\'ll receive a link to reset your password within a few minutes.',
  },
]

export default function HelpPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#1C1814',
      color: '#F5F0E8',
      fontFamily: 'var(--font-dmsans, sans-serif)',
      padding: '0 1.5rem',
    }}>
      {/* Nav */}
      <nav style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '2rem 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="/" style={{ color: '#B8924A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
          ← MyLifeStory
        </a>
        <a href="mailto:hello@mylegacystoryapp.com" style={{ color: '#B8924A', textDecoration: 'none', fontSize: '0.85rem' }}>
          hello@mylegacystoryapp.com
        </a>
      </nav>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 0 6rem' }}>
        {/* Header */}
        <h1 style={{
          fontFamily: 'var(--font-cormorant, serif)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 600,
          color: '#F5F0E8',
          marginBottom: '0.5rem',
        }}>
          Help & Support
        </h1>
        <p style={{ color: '#B8924A', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Answers to common questions about MyLifeStory.
        </p>

        {/* FAQs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{
              borderBottom: '1px solid rgba(184,146,74,0.15)',
              paddingBottom: '2rem',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-cormorant, serif)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#F5F0E8',
                marginBottom: '0.6rem',
              }}>
                {q}
              </h2>
              <p style={{ color: '#C8BEA8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          border: '1px solid rgba(184,146,74,0.25)',
          borderRadius: '1rem',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-cormorant, serif)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#F5F0E8',
            marginBottom: '0.5rem',
          }}>
            Still need help?
          </h2>
          <p style={{ color: '#C8BEA8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Our team is happy to assist you. Reach out and we'll get back to you within one business day.
          </p>
          <a
            href="mailto:hello@mylegacystoryapp.com"
            style={{
              display: 'inline-block',
              background: '#B8924A',
              color: '#1C1814',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  )
}
