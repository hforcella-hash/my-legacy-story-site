export const metadata = {
  title: 'Privacy Policy — MyLifeStory',
  description: 'How MyLifeStory handles your personal information. Your stories are sacred.',
}

const SECTIONS = [
  {
    title: 'What we collect',
    body: `We collect only what is necessary to provide the MyLifeStory™ service:

• Your name and email address when you create an account
• The stories, memories, and responses you share during interview sessions
• Photos you choose to upload to your chapters
• Basic usage data (which features you use, app performance)

We do not collect your audio recordings. Voice input is transcribed to text and the audio is discarded immediately.`,
  },
  {
    title: 'How we use your information',
    body: `Your information is used exclusively to:

• Generate and store your personal legacy book
• Power the AI interview and co-authoring features (your stories are sent to OpenAI's API for processing)
• Deliver your printed book orders
• Send occasional service emails (account, receipts, support)

We do not sell your data. We do not use your stories for advertising. We do not train AI models on your personal content.`,
  },
  {
    title: 'Your stories are yours',
    body: `Everything you write, record, and create in MyLifeStory™ belongs to you. You can:

• Download your book at any time as a PDF
• Delete your account and all associated data at any time
• Export your raw chapter content on request

We are stewards of your legacy, not owners of it.`,
  },
  {
    title: 'Data security',
    body: `Your data is stored securely using Supabase (PostgreSQL with row-level security), hosted on AWS infrastructure. Photos are stored in encrypted cloud storage.

All data in transit is encrypted via HTTPS/TLS. Passwords are hashed and never stored in plain text. Access to production data is strictly limited.`,
  },
  {
    title: 'Third-party services',
    body: `MyLifeStory™ uses the following trusted third-party services:

• OpenAI — AI interview and chapter generation (your stories are sent to OpenAI for processing; see openai.com/privacy)
• Supabase — database and file storage
• Stripe — payment processing (when available; card data is never stored by us)

We carefully select partners who meet high privacy standards.`,
  },
  {
    title: 'Location data',
    body: `If you grant location permission, MyLifeStory™ may use your location to enhance your experience — for example, noticing when you are near a place from your past and suggesting a memory prompt. Location data is never stored on our servers and is only used in-session on your device.

You can deny location permission at any time in your device settings without affecting any other features.`,
  },
  {
    title: "Children's privacy",
    body: `MyLifeStory™ is designed for adults. We do not knowingly collect information from anyone under 18. If you believe a minor has created an account, please contact us and we will remove it promptly.`,
  },
  {
    title: 'Your rights',
    body: `Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws, including:

• The right to access your personal data
• The right to correct inaccurate data
• The right to delete your account and data
• The right to data portability

To exercise any of these rights, contact us at privacy@mylegacystoryapp.com.`,
  },
  {
    title: 'Contact',
    body: `My Legacy Story LLC
hello@mylegacystoryapp.com
privacy@mylegacystoryapp.com

For privacy-related requests, please email privacy@mylegacystoryapp.com with the subject line "Privacy Request."`,
  },
]

export default function PrivacyPage() {
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
        <a href="mailto:privacy@mylegacystoryapp.com" style={{ color: '#B8924A', textDecoration: 'none', fontSize: '0.85rem' }}>
          privacy@mylegacystoryapp.com
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
          Privacy Policy
        </h1>
        <p style={{ color: '#B8924A', fontSize: '1rem', marginBottom: '0.5rem' }}>
          Last updated: May 2026
        </p>
        <p style={{ color: '#C8BEA8', fontSize: '0.95rem', marginBottom: '3rem', lineHeight: 1.7 }}>
          Your stories are sacred. This policy explains simply and honestly how MyLifeStory™ handles your personal information.
        </p>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {SECTIONS.map(({ title, body }) => (
            <div key={title} style={{
              borderBottom: '1px solid rgba(184,146,74,0.15)',
              paddingBottom: '2.5rem',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-cormorant, serif)',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#F5F0E8',
                marginBottom: '0.75rem',
              }}>
                {title}
              </h2>
              <p style={{
                color: '#C8BEA8',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                whiteSpace: 'pre-line',
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.75rem', textAlign: 'center', marginTop: '4rem' }}>
          © 2026 My Legacy Story LLC · All rights reserved
        </p>
      </div>
    </main>
  )
}
