export const metadata = {
  title: 'Terms of Service — MyLifeStory™',
  description: 'Terms and conditions for using the MyLifeStory™ app and services.',
}

const SECTIONS = [
  {
    title: "1. Agreement to these Terms",
    body: `These Terms of Service ("Terms") are a binding agreement between you and My Legacy Story LLC, a Florida limited liability company ("we," "us"), for the MyLifeStory™ iOS app, the web app at app.mylegacystoryapp.com, the website at mylegacystoryapp.com, and related services (together, the "Service"). By creating an account, making a purchase, or using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.

For the iOS app, Apple's Licensed Application End User License Agreement also applies to your use of the app, to the extent it does not conflict with these Terms. Apple is not responsible for the Service or its content.`,
  },
  {
    title: "2. Eligibility",
    body: `You must be at least 18 years old and able to enter into a binding contract to use the Service. If you use the Service on behalf of an organization, you confirm that you are authorized to bind it.`,
  },
  {
    title: "3. Your account",
    body: `You must provide accurate information, keep your sign-in credentials confidential, and notify us promptly at hello@mylegacystoryapp.com if you believe your account has been accessed without permission. You are responsible for activity under your account.`,
  },
  {
    title: "4. The Service",
    body: `MyLifeStory™ helps you record your life story through guided interviews, AI-assisted chapter writing, photo management, and printed hardcover books. Features may change over time. We may add, change, or remove features and will give reasonable notice of material reductions where practical. The Service is not a substitute for professional legal, medical, financial, or psychological advice.`,
  },
  {
    title: "5. Artificial intelligence",
    body: `The Service uses artificial intelligence provided by third parties, such as OpenAI and Anthropic, to ask questions, transcribe voice answers, and write or polish text. You acknowledge and agree that:

• AI-generated and AI-edited content may be inaccurate, incomplete, outdated, or inconsistent with what you intended, and it may be phrased in ways you did not choose.
• You are responsible for reviewing, correcting, and approving all content before you save it as final, share it, publish it, or order a printed book. The Service provides editing controls so that you can keep your own words.
• You are responsible for the content of your book, including facts, names, dates, and opinions, and for any statements about real people.
• AI features are not a substitute for professional advice. Do not rely on AI output for medical, legal, financial, or similar decisions.
• We do not guarantee that AI features will always be available or produce any particular result.

Our Privacy Policy describes how information is sent to AI providers and how they handle it.`,
  },
  {
    title: "6. Your content",
    body: `You keep ownership of the stories, photos, text, and other material you create or upload ("Your Content"). You grant us a worldwide, non-exclusive, royalty-free license to host, store, process, reproduce, transmit, and display Your Content only as needed to provide the Service to you, including to generate your book, process AI requests, produce and ship your order, and back up your data. This license ends when you delete Your Content or your account, except for copies in backups and records we must keep, as described in the Privacy Policy. We do not use Your Content for advertising and do not sell it.

You represent that you have the rights needed for Your Content, including photos, and that Your Content does not infringe others' rights or violate their privacy. We may remove content that violates these Terms or the law.`,
  },
  {
    title: "7. Information about other people",
    body: `Your stories may involve other people. You are responsible for respecting their privacy and reputation, and for having any permission you need to include their names, images, or information in a book that you may print, share, or give to others. Do not include information about others that you know to be false or that you have no right to share.`,
  },
  {
    title: "8. Acceptable use",
    body: `You agree not to:
• use the Service for any unlawful purpose, or to harass, threaten, defame, or invade the privacy of others;
• create content that impersonates another person, or use AI to create deceptive content about real people;
• upload content that infringes intellectual property or contains malware;
• copy, scrape, reverse engineer, or interfere with the Service or its security;
• circumvent payment, usage limits, or access controls;
• resell or commercially exploit the Service without our written permission.`,
  },
  {
    title: "9. Subscriptions, payments, and renewals",
    body: `Some features require a paid plan (Basic, Pro, or Premium), available monthly or annually at the prices shown at purchase. Paid plans renew automatically at the end of each billing period at the then-current price until you cancel. You can cancel at any time; cancellation takes effect at the end of the current billing period. We may change prices with advance notice, and the change applies from your next renewal.

Purchases made on the web are processed by Stripe. Purchases made in the iOS app are processed by Apple under Apple's terms, and you manage them in your Apple account settings. We may offer discounts or retention offers from time to time.

Except where required by law or as stated in these Terms, fees are non-refundable.`,
  },
  {
    title: "10. Printed books",
    body: `When you order a printed book, it is printed and shipped by our production partner, Lulu, and its carriers.

• Preview. You can preview your book before ordering. Please review it carefully, because printed books are made to order.
• Production and delivery. Production and delivery times are estimates and may vary.
• Accuracy. You are responsible for the accuracy of your shipping address and for any taxes, duties, or customs fees on international shipments.
• Cancellations. You can cancel an order before production begins. Orders cannot be cancelled after production has started.
• Problems. If your book arrives damaged, has a printing error, or is lost in transit, contact us within 30 days of delivery (or of the estimated delivery date, for lost packages) with a description and photos. At our discretion, we will reprint the book or issue a refund.
• Refunds. Apart from the situations above, refunds are decided case by case, for example for a change of mind before production begins. We do not provide return labels for printed books.
• Additional copies. Additional copies of a book are ordered and priced separately.`,
  },
  {
    title: "11. Gifts",
    body: `A gift purchase gives the recipient access to the plan or book described at purchase. Gift codes can be redeemed once and are non-transferable except as stated in the gift information. Gift codes have the expiration date shown at purchase, if any.`,
  },
  {
    title: "12. Intellectual property",
    body: `The Service, including its software, design, text, graphics, and logos, is owned by My Legacy Story LLC or its licensors and is protected by law. MyLifeStory™ and our logos are trademarks of My Legacy Story LLC, with registration pending with the United States Patent and Trademark Office. You may not use our trademarks without our prior written permission. We may use feedback you give us without obligation to you.`,
  },
  {
    title: "13. Third-party services",
    body: `The Service relies on third-party providers, including Apple, Stripe, OpenAI, Anthropic, Lulu, Supabase, Vercel, and Resend. Their own terms and privacy policies apply to your use of their services. We are not responsible for third-party services outside our control, but we choose our providers carefully.`,
  },
  {
    title: "14. Disclaimers",
    body: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND THE ACCURACY OF AI-GENERATED CONTENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE OPERATION.

Although we keep backups, you are responsible for keeping your own copy of your book, for example by downloading the PDF regularly.`,
  },
  {
    title: "15. Limitation of liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA, PROFITS, OR GOODWILL. OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US FOR THE SERVICE IN THE TWELVE MONTHS BEFORE THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100). Some jurisdictions do not allow certain limitations, so some of these limits may not apply to you.`,
  },
  {
    title: "16. Indemnification",
    body: `You will defend and indemnify My Legacy Story LLC and its members, managers, employees, and agents against third-party claims arising from Your Content, your use of the Service, or your violation of these Terms or of others' rights.`,
  },
  {
    title: "17. Termination",
    body: `You may stop using the Service and delete your account at any time. We may suspend or terminate your access if you violate these Terms or the law, or if we discontinue the Service. When your access ends, we will handle your data as described in the Privacy Policy. Provisions that by their nature should survive termination will survive, including ownership, disclaimers, limitation of liability, indemnification, and governing law.`,
  },
  {
    title: "18. Governing law and disputes",
    body: `These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law rules, and by applicable U.S. federal law. Any lawsuit arising from these Terms or the Service must be brought in the state or federal courts located in Florida, and you consent to their jurisdiction. Before filing a claim, please contact us at hello@mylegacystoryapp.com so we can try to resolve it informally.`,
  },
  {
    title: "19. Changes to these Terms",
    body: `We may update these Terms. If a change is material, we will notify you in the app or by email before it takes effect. Your continued use of the Service after the effective date means you accept the updated Terms. If you do not agree, you must stop using the Service.`,
  },
  {
    title: "20. General",
    body: `These Terms and the Privacy Policy are the entire agreement between you and us about the Service. If any provision is found unenforceable, the rest remains in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Notices may be given by email or in the app.`,
  },
  {
    title: "21. Contact",
    body: `My Legacy Story LLC
hello@mylegacystoryapp.com`,
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
          ← MyLifeStory™
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
