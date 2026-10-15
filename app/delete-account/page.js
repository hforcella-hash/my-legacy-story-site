export const metadata = {
  title: 'Delete Your Account — MyLifeStory™',
  description: 'How to delete your MyLifeStory™ account and all associated data.',
}

const SECTIONS = [
  {
    title: 'How to delete your account',
    body: `You can permanently delete your MyLifeStory™ account (by My Legacy Story LLC) and all associated data at any time. Choose either option:

Option 1 — In the app (fastest):
1. Open the MyLifeStory™ app and sign in.
2. Go to Profile.
3. Tap "Delete Account".
4. Confirm. Your account and data are permanently deleted.

Option 2 — By email:
1. From the email address on your account, write to privacy@mylegacystoryapp.com.
2. Use the subject line "Delete my account".
3. We verify the request and permanently delete your account and data.`,
  },
  {
    title: 'What data is deleted',
    body: `When you delete your account, we permanently delete:

• Your profile (name, email address, and account credentials)
• All chapters, stories, and interview responses you created
• All photos you uploaded
• Your book drafts and previews
• Your shipping details (name, address, phone) kept for orders

This data is removed from our live systems promptly and purged from encrypted backups within 90 days.`,
  },
  {
    title: 'What may be retained (and for how long)',
    body: `For legal, tax, and accounting reasons, we may retain a limited set of records after account deletion:

• Order and payment records (handled by our payment processor, Stripe) are kept only as long as required by law — typically up to 7 years. These records do not include your stories, photos, or book content.

Everything else — your stories, photos, chapters, and profile — is deleted as described above.`,
  },
  {
    title: 'Need help?',
    body: `If you have any trouble deleting your account, email us and we will take care of it:

My Legacy Story LLC
privacy@mylegacystoryapp.com
hello@mylegacystoryapp.com`,
  },
]

export default function DeleteAccountPage() {
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
          ← MyLifeStory™
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
          Delete Your Account
        </h1>
        <p style={{ color: '#B8924A', fontSize: '1rem', marginBottom: '0.5rem' }}>
          MyLifeStory™ · My Legacy Story LLC
        </p>
        <p style={{ color: '#C8BEA8', fontSize: '0.95rem', marginBottom: '3rem', lineHeight: 1.7 }}>
          Your stories are yours. You can delete your account and all associated data at any time. This page explains how, and exactly what is deleted and kept.
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
