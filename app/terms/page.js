export const metadata = {
  title: 'Terms of Service — MyLifeStory',
  description: 'Terms and conditions for using the MyLifeStory app and services.',
}

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating an account or using the MyLifeStory™ app or website, you agree to these Terms of Service. If you do not agree, please do not use our services.

These terms apply to all users of MyLifeStory, including the mobile app, the web app at app.mylegacystoryapp.com, and the marketing site at mylegacystoryapp.com.`,
  },
  {
    title: '2. Description of Service',
    body: `MyLifeStory™ is an AI-powered memoir platform that helps you preserve your life story through guided interview sessions. The service allows you to:

• Complete AI-guided interview sessions to capture your memories
• Review and edit your chapters
• Preview your completed book inside the app
• Order a professional printed hardcover book

The Free plan includes access to your first chapter and a book preview. The Pro plan unlocks all chapters, unlimited interview sessions, PDF export, and the ability to order your printed book.`,
  },
  {
    title: '3. Accounts and Registration',
    body: `You must provide a valid email address and create a password to use MyLifeStory. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activity that occurs under your account
• Notifying us immediately of any unauthorized use at hello@mylegacystoryapp.com

You must be at least 18 years old to create an account. We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: '4. Subscriptions and Billing',
    body: `MyLifeStory Pro is available as a monthly subscription ($9.99/month) or an annual subscription ($99.99/year), billed through the Apple App Store.

• Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period
• You can manage and cancel your subscription at any time through your Apple ID settings (Settings → Apple ID → Subscriptions)
• Cancellation takes effect at the end of the current billing period — you retain Pro access until then
• We do not offer refunds for partial subscription periods, except where required by applicable law
• Prices are subject to change with advance notice

The printed hardcover book is purchased separately and is not included in the Pro subscription price.`,
  },
  {
    title: '5. Printed Book Orders',
    body: `When you place an order for a printed hardcover book:

• Orders are fulfilled through Lulu Press, our print-on-demand partner
• Delivery typically takes 5–10 business days within the United States; international shipping times vary
• Each book is custom-printed to order — we cannot accept returns or offer refunds once printing has begun, unless the book arrives damaged or defective
• If your book arrives damaged, contact us at hello@mylegacystoryapp.com within 14 days with a photo of the damage and we will arrange a replacement at no cost

You are responsible for ensuring your book content is complete and correct before placing your order.`,
  },
  {
    title: '6. Your Content',
    body: `You retain full ownership of all stories, memories, photos, and content you create in MyLifeStory. By using our service, you grant My Legacy Story LLC a limited license to store, process, and display your content solely for the purpose of providing the service to you.

We do not:
• Sell your content to third parties
• Use your stories to train AI models
• Share your content with anyone without your permission

You are responsible for ensuring your content does not infringe on the rights of others. Do not upload content you do not own or have permission to use.`,
  },
  {
    title: '7. AI-Generated Content',
    body: `MyLifeStory uses artificial intelligence (powered by OpenAI) to help shape your answers into memoir chapters. The resulting narrative is based entirely on what you share.

• You are responsible for reviewing all AI-generated chapters before ordering your book
• AI-generated text may contain inaccuracies — always review your chapters carefully
• You retain full ownership of the final content in your book
• By using the AI features, you agree that your interview responses are processed by OpenAI in accordance with their privacy policy (openai.com/privacy)`,
  },
  {
    title: '8. Prohibited Uses',
    body: `You agree not to use MyLifeStory to:

• Violate any applicable law or regulation
• Upload content that is defamatory, obscene, or infringes the rights of others
• Attempt to gain unauthorized access to our systems
• Use automated tools to scrape or extract content from our platform
• Impersonate another person or entity
• Use the service for any commercial purpose other than creating your own personal memoir`,
  },
  {
    title: '9. Intellectual Property',
    body: `MyLifeStory™ and the My Legacy Story logo are trademarks of My Legacy Story LLC, with registration pending with the United States Patent and Trademark Office.

The app, website design, and all technology underlying the service are the property of My Legacy Story LLC. You may not copy, modify, distribute, or reverse-engineer any part of our platform.`,
  },
  {
    title: '10. Disclaimers and Limitation of Liability',
    body: `MyLifeStory is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or that AI-generated content will be perfectly accurate.

To the maximum extent permitted by applicable law, My Legacy Story LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including loss of data or inability to access your content.

Our total liability to you for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.`,
  },
  {
    title: '11. Termination',
    body: `You may delete your account at any time from the Profile section of the app. Upon deletion, your stories and personal data will be permanently removed from our servers within 30 days.

We reserve the right to suspend or terminate your account if you violate these terms. In the event of termination for cause, no refund will be issued for any remaining subscription period.`,
  },
  {
    title: '12. Changes to These Terms',
    body: `We may update these Terms of Service from time to time. When we do, we will update the "Last updated" date at the top of this page and, for significant changes, notify you by email.

Your continued use of MyLifeStory after changes take effect constitutes your acceptance of the new terms.`,
  },
  {
    title: '13. Governing Law',
    body: `These terms are governed by the laws of the State of Florida, United States, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of Florida.`,
  },
  {
    title: '14. Contact',
    body: `My Legacy Story LLC
hello@mylegacystoryapp.com

For questions about these terms, email hello@mylegacystoryapp.com with the subject line "Terms Question."`,
  },
]

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ color: '#B8924A', fontSize: '1rem', marginBottom: '0.5rem' }}>
          Last updated: May 2026
        </p>
        <p style={{ color: '#C8BEA8', fontSize: '0.95rem', marginBottom: '3rem', lineHeight: 1.7 }}>
          These are the terms that govern your use of MyLifeStory™. We've written them in plain language — please read them carefully.
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
