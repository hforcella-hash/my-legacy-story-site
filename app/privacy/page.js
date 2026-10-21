export const metadata = {
  title: 'Privacy Policy — MyLifeStory™',
  description: 'How MyLifeStory™ handles your personal information. Your stories are sacred.',
}

const SECTIONS = [
  {
    title: "The short version",
    body: `Your stories belong to you. We collect only what we need to write, print, and deliver your book and to run your account. We do not sell your personal information, we do not show ads, and we do not use your stories to train our own AI models. You can download or delete your data at any time from your profile. The rest of this policy explains the details.

Last updated: October 19, 2026.`,
  },
  {
    title: "Who we are and how to reach us",
    body: `MyLifeStory™ is operated by My Legacy Story LLC, a Florida limited liability company.

For questions or privacy requests, email hello@mylegacystoryapp.com with "Privacy request" in the subject line.

This policy applies to the MyLifeStory™ iOS app, the web app at app.mylegacystoryapp.com, and the website at mylifestory.app (together, the "Service").`,
  },
  {
    title: "Information you give us",
    body: `• Account details: name, email address, and language preference. Your password is handled by our authentication provider; we do not store it in readable form.
• Your book: the questions you answer, your typed and transcribed answers, chapters and edits, your dedication, chapter titles, and the structure of your book.
• Photos: images you upload, with any captions you write.
• People you mention: names and details about family and friends who appear in your stories. See "Information about other people" below.
• Orders and gifts: shipping name and address, order details, and the name and email address of a gift recipient if you send a gift.
• Support: messages you send us.

We do not ask for your Social Security number, government ID, or bank account details.`,
  },
  {
    title: "Voice answers",
    body: `If you answer by voice, the recording is sent to OpenAI's speech-to-text service so it can be turned into text. We do not keep your audio recordings on our servers. The resulting text is stored with your interview. You can always type your answers instead.`,
  },
  {
    title: "Payments",
    body: `Payments are processed by Stripe on the web and by Apple on iOS. We do not receive or store your full card number. We receive the information we need to run your plan: the plan you chose, the amount, the subscription status, and the last four digits of your card.`,
  },
  {
    title: "Device, usage, and security information",
    body: `When you use the Service we automatically receive basic technical information: device type, operating system, app version, language, IP address, and error reports. We use it to keep the Service secure, diagnose problems, and improve performance. We do not collect GPS or precise location.`,
  },
  {
    title: "Face ID, Touch ID, and reminders on your device",
    body: `If you turn on Face ID or Touch ID sign-in, the check is performed by your device's system. We never receive or store your face or fingerprint data. To make the feature work, the app keeps a sign-in credential on your device; turning the feature off deletes it.

If you allow reminders, they are scheduled on your device.`,
  },
  {
    title: "Cookies and local storage",
    body: `We use only the cookies and local storage that are necessary for the Service: keeping you signed in and remembering preferences such as your language. We do not use advertising or cross-site tracking cookies.`,
  },
  {
    title: "How we use your information",
    body: `We use your information to:
• create, write, print, and deliver your book, including the AI features described below;
• process payments, subscriptions, refunds, and gifts;
• send transactional emails, such as sign-in, receipts, order updates, and gift codes;
• keep the Service secure, prevent fraud and abuse, and fix bugs;
• comply with legal obligations and respond to valid legal requests;
• improve the Service using aggregated or de-identified information that cannot reasonably be linked back to you.

We do not sell personal information. We do not share personal information for cross-context behavioral advertising. We do not use your stories for advertising.`,
  },
  {
    title: "Artificial intelligence",
    body: `MyLifeStory™ uses artificial intelligence to ask you guided questions, transcribe voice answers, and write or polish your chapters.

• What is sent: the text you wrote or the transcript of your answers, your chapter instructions, and the editing level you chose. We do not send your password, payment details, or the full account record.
• Who processes it: OpenAI (guided questions and speech-to-text) and Anthropic (writing and polishing chapters), as our service providers.
• Training: under their API terms, OpenAI and Anthropic do not use content sent through their API to train their models by default. We do not train our own AI models on your stories.
• Retention by AI providers: providers may keep inputs and outputs for a limited period for safety and abuse monitoring, as described in their policies. We cannot change those periods.
• Accuracy: AI can make mistakes, leave out details, or word things in ways you did not intend. You review and approve every chapter before it is printed. The editing level you choose controls how much the AI changes your words.
• Human review: our staff do not routinely read your stories. We access them only with your permission (for example, to help with a support request) or when required by law or to protect safety.`,
  },
  {
    title: "Who we share information with",
    body: `We share information only with service providers who help us run the Service, and only as needed for their function:

• Supabase: database, sign-in, and file storage (hosted on Amazon Web Services).
• Vercel: web hosting for app.mylegacystoryapp.com and mylegacystoryapp.com.
• OpenAI and Anthropic: the AI features described above.
• Stripe: payment processing for web purchases.
• Apple: in-app purchases on iOS.
• Lulu: printing and shipping of printed books. Lulu receives your book file, your name, and your shipping address; its shipping carriers receive the package details.
• Resend: delivery of transactional emails.

We may also disclose information if required by law, to protect the rights and safety of users, or in connection with a merger, acquisition, or sale of assets. We will notify you before your information becomes subject to a different privacy policy.`,
  },
  {
    title: "Where your information is stored",
    body: `Our service providers store and process information in the United States. If you use the Service from outside the United States, your information will be transferred to and processed in the United States. Where European Economic Area or UK law requires it, we rely on appropriate safeguards, such as the European Commission's Standard Contractual Clauses.`,
  },
  {
    title: "How long we keep information",
    body: `We keep your account and book information for as long as your account is active. When you delete your account, we delete your account data, chapters, photos, and interview records, generally within 30 days.

Some information may be kept longer where needed: records of payments and tax obligations (for up to seven years), information needed to resolve disputes or enforce our Terms, and copies in backups, which are overwritten on a rolling schedule.

Printed books that have already been produced and shipped cannot be recalled.`,
  },
  {
    title: "How we protect your information",
    body: `We use encryption in transit (HTTPS/TLS), encryption at rest through our infrastructure providers, database access controls that restrict each account to its own data, restricted staff access, and secrets kept in secure server-side configuration.

No method of transmission or storage is completely secure, so we cannot guarantee absolute security. If a security incident affects your personal information, we will notify you and the authorities as required by law.`,
  },
  {
    title: "Your choices and rights",
    body: `You can:
• view and download your book and chapters as a PDF at any time;
• correct your profile and content in the app;
• delete your account and your data from Profile, then Delete account;
• stop using voice answers or AI features at any time, and turn off reminders and Face ID or Touch ID sign-in in the app or in your device settings;
• opt out of marketing emails using the link in the email. Transactional emails, such as receipts and order updates, will still be sent.

For any other request, email hello@mylegacystoryapp.com. We may need to verify your identity before responding. We respond within the time required by law, generally within 30 to 45 days.`,
  },
  {
    title: "Your rights by location",
    body: `California residents: under the California Consumer Privacy Act, as amended by the California Privacy Rights Act, you have the right to know what personal information we collect, use, and disclose; to request deletion or correction; to opt out of sale or sharing (we do not sell or share personal information); to limit the use of sensitive personal information (we use it only to provide the Service); and not to be discriminated against for exercising your rights. You may use an authorized agent to make a request.

EEA, UK, and Swiss residents: you have the right to access, correct, erase, restrict, or object to processing, to data portability, and to withdraw consent at any time. Our legal bases are: performance of a contract (providing the Service and your orders); legitimate interests (security, fraud prevention, and improving the Service); consent (voice answers and optional emails); and legal obligation (tax and accounting). You may lodge a complaint with your local data protection authority.

Residents of other U.S. states: other state laws may give you similar rights. Contact us to exercise them.`,
  },
  {
    title: "Sensitive information in your stories",
    body: `Your memoir may include sensitive information, such as health, religious beliefs, political views, or other personal history. You decide what to include. We protect it with the same safeguards as the rest of your information, and we do not use it for advertising or to make marketing inferences about you.`,
  },
  {
    title: "Information about other people",
    body: `Your book may describe family members, friends, and others. Please share only what you are comfortable sharing and have the right to share. If someone asks you to remove information about them, you can edit or delete it in the app. Printed books that have already been produced can only be changed with a new order. You can also contact us, and we will help where reasonably possible.`,
  },
  {
    title: "Children",
    body: `The Service is intended for adults aged 18 and older. We do not knowingly collect personal information from children under 18. If you believe a child has provided information to us, contact us and we will delete it.`,
  },
  {
    title: "Changes to this policy",
    body: `We may update this policy from time to time. If a change is material, we will tell you in the app or by email before it takes effect, and where required by law we will ask for your consent. The "Last updated" date at the top shows when the policy was last revised.`,
  },
  {
    title: "Contact",
    body: `My Legacy Story LLC
hello@mylegacystoryapp.com`,
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
