'use client'
import { useState } from 'react'
import { LogoBookBranch, BookBranchIcon } from '../components/Logo'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://my-legacy-story.vercel.app'

const T = {
  en: {
    comingSoon:  'Coming soon to App Store',
    signIn:      'Sign In',
    eyebrow:     'MyLifeStory',
    headline:    ['The most', 'important book', "you'll ever write."],
    sub:         "Your children will ask about your life long after you're gone. Leave them more than memories — leave them your story, in your own words, bound in a hardcover book that lasts generations.",
    features:    [
      'AI-guided conversations draw out your deepest stories',
      'Your words shaped into a beautifully written memoir',
      'Printed as a premium hardcover book to pass down',
    ],
    quoteText:   'An intellectual and cultural legacy to inspire and educate those that follow.',
    btnBegin:    'Begin Your Legacy Story →',
    btnSignIn:   'Sign In →',
    section2Eye: "What You'll Create",
    section2H:   ['A book your family will treasure', 'for generations.'],
    section2Sub: 'Not a scrapbook. Not a photo album. A real, professionally structured memoir — printed in hardcover, yours to keep forever.',
    steps: [
      { num: '01', title: 'Your Life, Interviewed',  body: 'Our AI asks you thoughtful questions about your childhood, career, values, and the stories only you can tell. Speak or type — at your own pace.' },
      { num: '02', title: 'Written Beautifully',     body: 'Your answers are shaped into a flowing, emotionally resonant memoir. Chapters on your beliefs, your family, your defining moments.' },
      { num: '03', title: 'Printed & Delivered',     body: 'Order your hardcover legacy book at any time. Premium color print, linen wrap cover, delivered to your door in 5–10 business days.' },
    ],
    portraitQ:    ['My father was a brilliant man.', 'But I never truly knew his story —', 'until it was too late to ask.'],
    portraitBody: "MyLifeStory was built for men and women who have built something worth remembering — a career, a family, a set of values. People who understand that the most lasting gift they can give their children is not money. It's the truth of who they are.",
    portraitTag:  'For the generation that follows',
    dividerQ:     ['The stories we leave behind become', ' the stories they live by.'],
    bookEye:      'The Legacy Book',
    bookH:        ['Hold your story', 'in your hands.'],
    bookSub:      'A museum-quality hardcover printed by Lulu Press — the same trusted printer used by publishers worldwide. Your memories, bound to last a lifetime.',
    specs:        [{ label: 'Format', value: 'Hardcover · Linen' }, { label: 'Size', value: '6 × 9 in' }, { label: 'Print', value: 'Premium Color' }, { label: 'Delivery', value: '5–10 business days' }],
    btnStart:     "Start Writing — It's Free",
    finalQ:       ['Every family deserves to know', 'where they came from.'],
    finalSub:     'Your story is worth telling. Your family deserves to hear it.',
    btnFinal:     'Begin Your Legacy Story',
    appSoon:      'Coming soon',
    appTitle:     'The native app is on its way.',
    appSub:       'In the meantime, write your story from any web browser. The iPhone and Android app is coming very soon.',
    appFeatures:  ['AI-guided interview questions', 'Review and edit every chapter', 'Order your hardcover with one tap'],
    appH:         ['Your legacy,', 'always in your pocket.'],
    appEye:       'More than a book',
    photoCred:    'Photography by',
    via:          'via',
    navHow:       'How it works',
    navBooks:     'Our books',
    navApp:       'The app',
    navWhy:       'Why us',
    navStory:     'Our story',
    navFaq:       'FAQ',
    navPricing:   'Pricing',
    storyEye:     'Our Story',
    storyH:       ['Born from a handshake', 'in Atlanta.'],
    storySub:     'MyLifeStory didn\'t start in a boardroom. It started in a convention hall, between two colleagues who share a passion — and a dream.',
    storyBody:    [
      'It was at an industry expo in Atlanta. Two colleagues who had spent years working together managing international markets found themselves at the same company booth, greeting visitors.',
      'One of them was going on about AI — the things it could do, the doors it was opening. The other listened, then said something that changed everything: "I\'ve had a project in my head for over 8 years. I\'ve told many people about it. Everyone says \'wow, great idea\' — but nobody ever does anything."',
      'The idea was simple and profound: a way for people to preserve their life story as a real, beautiful book. Something their children and grandchildren could hold in their hands long after they were gone.',
      '"If you help me find the right AI tools, I\'ll help you build it." They shook hands.',
      'One of them had no computer of his own. No programming experience. Just a fascination with AI and a willingness to learn everything from scratch. The other had a lifetime of stories and a dream that had waited long enough — over 8 years.',
      'That handshake became MyLifeStory.',
    ],
    storyQuote:   '"No computer. No code experience. Just the conviction that this dream deserved to exist."',
    storyAuthor:  '— The Builder, Co-founder',
    storyQuote2:  '"A ten year idea finally come true. A dream to write a life story for our loved ones as a legacy of our lives."',
    storyAuthor2: '— The Dreamer, Co-founder',
    vsEye:        'Why MyLifeStory',
    vsH:          ['Not just an app.', 'Not just a book.'],
    vsSub:        'MyLifeStory is the only platform that combines a guided AI experience with a professional printed memoir — connected end to end.',
    vsRows: [
      { feature: 'AI writes your full narrative',        mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Connected app + book experience',      mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Guided voice interview',               mls: true,  sw: true,  rm: true,  ms: false },
      { feature: 'Hardcover book included',              mls: true,  sw: true,  rm: true,  ms: true  },
      { feature: 'In-app book preview before ordering',  mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Unlimited photos per chapter',         mls: true,  sw: true,  rm: false, ms: true  },
      { feature: 'Native iOS mobile app',                mls: true,  sw: false, rm: true,  ms: false },
      { feature: 'Bilingual (EN + ES)',                  mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Edit content anytime',                 mls: true,  sw: true,  rm: false, ms: false },
      { feature: 'No page-count surcharges',             mls: true,  sw: true,  rm: false, ms: true  },
    ],
    pricingEye:   'Pricing',
    pricingH:     ['Simple, honest', 'pricing.'],
    pricingSub:   'Start for free. Upgrade when you\'re ready to unlock your full story.',
    pricingFree:  'Free',
    pricingPro:   'Pro',
    pricingFreeSub: 'Begin your story at no cost.',
    pricingProSub:  'Everything you need to complete and print your book.',
    pricingMonth:   '/month',
    pricingYear:    '/year',
    pricingOr:      'or',
    pricingSave:    'Save 2 months',
    pricingFreeFeatures: ['First chapter free', 'AI interview session', 'Book preview included'],
    pricingProFeatures:  ['All chapters unlocked', 'Unlimited AI interviews', 'Full book preview', 'Hardcover print & delivery', 'PDF export', 'Priority support'],
    pricingCta:     'Start Free →',
    pricingProCta:  'Get Pro →',
    faqEye:       'FAQ',
    faqH:         'Common questions.',
    faqs: [
      { q: 'Do I need any technical experience?', a: 'None at all. MyLifeStory is designed for anyone — you simply speak or type your answers and the app does the rest.' },
      { q: 'How long does it take to complete my book?', a: 'At your own pace. Some people finish in a weekend, others write a chapter a month. Your story waits for you.' },
      { q: 'Who owns my story?', a: 'You do. Always. We never share, sell, or use your content for anything other than creating your book.' },
      { q: 'What does the printed book look like?', a: 'A premium hardcover, 6×9 inches, with a linen-wrap cover and full-color interior. Printed by Lulu Press, the same trusted printer used by professional publishers worldwide.' },
      { q: 'Can I write in Spanish?', a: 'Yes. MyLifeStory is fully bilingual — English and Spanish. The AI interview adapts to whichever language you choose.' },
      { q: 'Is there a free version?', a: 'Yes. You can start for free, complete your first chapter, and preview your book. Upgrade to Pro to unlock all chapters and order your hardcover.' },
    ],
    legalLine1:   (y) => `© ${y} My Legacy Story LLC. All rights reserved. MyLifeStory™ is a trademark of My Legacy Story LLC.`,
    legalLine2:   'MyLifeStory™ and the My Legacy Story logo are trademarks pending registration with the United States Patent and Trademark Office. My Legacy Story LLC is a Florida limited liability company.',
  },
  es: {
    comingSoon:  'Próximamente en App Store',
    signIn:      'Iniciar sesión',
    eyebrow:     'MyLifeStory',
    headline:    ['El libro más', 'importante que', 'jamás escribirás.'],
    sub:         'Tus hijos preguntarán sobre tu vida mucho después de que te hayas ido. Déjales algo más que recuerdos — déjales tu historia, en tus propias palabras, en un libro de tapa dura que dure generaciones.',
    features:    [
      'Conversaciones guiadas por IA que extraen tus historias más profundas',
      'Tus palabras convertidas en unas memorias bellamente escritas',
      'Impreso como un libro de tapa dura premium para transmitir',
    ],
    quoteText:   'Un legado intelectual y cultural para inspirar y educar a quienes nos siguen.',
    btnBegin:    'Comenzar Tu Historia de Legado →',
    btnSignIn:   'Iniciar Sesión →',
    section2Eye: 'Lo que crearás',
    section2H:   ['Un libro que tu familia atesorará', 'por generaciones.'],
    section2Sub: 'No es un álbum de recortes. No es un álbum de fotos. Una memoria profesionalmente estructurada — impresa en tapa dura, tuya para siempre.',
    steps: [
      { num: '01', title: 'Tu vida, entrevistada',   body: 'Nuestra IA te hace preguntas reflexivas sobre tu infancia, carrera, valores e historias que solo tú puedes contar. Habla o escribe — a tu propio ritmo.' },
      { num: '02', title: 'Escrita hermosamente',    body: 'Tus respuestas se convierten en unas memorias fluidas y emocionalmente resonantes. Capítulos sobre tus creencias, tu familia, tus momentos definitorios.' },
      { num: '03', title: 'Impresa y entregada',     body: 'Pide tu libro de legado en tapa dura cuando quieras. Impresión a color premium, cubierta de lino, entregado en tu puerta en 5–10 días hábiles.' },
    ],
    portraitQ:    ['Mi padre era un hombre brillante.', 'Pero nunca conocí verdaderamente su historia —', 'hasta que fue demasiado tarde para preguntar.'],
    portraitBody: 'MyLifeStory fue creado para hombres y mujeres que han construido algo que vale la pena recordar — una carrera, una familia, unos valores. Personas que entienden que el regalo más duradero que pueden dar a sus hijos no es el dinero. Es la verdad de quiénes son.',
    portraitTag:  'Para la generación que sigue',
    dividerQ:     ['Las historias que dejamos atrás se convierten en', ' las historias por las que ellos viven.'],
    bookEye:      'El Libro del Legado',
    bookH:        ['Sostén tu historia', 'en tus manos.'],
    bookSub:      'Un libro de tapa dura de calidad museística impreso por Lulu Press — la misma imprenta de confianza de editores de todo el mundo. Tus memorias, encuadernadas para durar toda una vida.',
    specs:        [{ label: 'Formato', value: 'Tapa dura · Lino' }, { label: 'Tamaño', value: '15 × 23 cm' }, { label: 'Impresión', value: 'Color Premium' }, { label: 'Envío', value: '5–10 días hábiles' }],
    btnStart:     'Comienza a Escribir — Es Gratis',
    finalQ:       ['Toda familia merece saber', 'de dónde viene.'],
    finalSub:     'Tu historia vale la pena contar. Tu familia merece escucharla.',
    btnFinal:     'Comienza Tu Historia de Legado',
    appSoon:      'Próximamente',
    appTitle:     'La app nativa llega pronto.',
    appSub:       'Mientras tanto, escribe tu historia desde cualquier navegador web. La app para iPhone y Android llega muy pronto.',
    appFeatures:  ['Preguntas de entrevista guiadas por IA', 'Revisa y edita cada capítulo', 'Pide tu tapa dura con un toque'],
    appH:         ['Tu legado,', 'siempre en tu bolsillo.'],
    appEye:       'Más que un libro',
    photoCred:    'Fotografías por',
    via:          'vía',
    navHow:       'Cómo funciona',
    navBooks:     'Nuestros libros',
    navApp:       'La app',
    navWhy:       'Por qué nosotros',
    navStory:     'Nuestra historia',
    navFaq:       'FAQ',
    navPricing:   'Precios',
    storyEye:     'Nuestra Historia',
    storyH:       ['Nació de un apretón de manos', 'en Atlanta.'],
    storySub:     'MyLifeStory no empezó en una sala de reuniones. Empezó en un stand de exposición, entre dos colegas que comparten una pasión — y un sueño.',
    storyBody:    [
      'Era una expo del sector en Atlanta. Dos colegas que llevaban años trabajando juntos gestionando mercados internacionales coincidieron en el stand de la empresa, atendiendo a los visitantes.',
      'Uno de ellos hablaba con entusiasmo sobre la IA — lo que podía hacer, las puertas que abría. El otro escuchó, y entonces dijo algo que lo cambió todo: "Llevo más de 8 años con un proyecto en la cabeza. Se lo he contado a mucha gente. Todos dicen \'qué buena idea\' — pero nadie hace nada."',
      'La idea era simple y profunda: una forma de que las personas preserven su historia de vida en un libro real y hermoso. Algo que sus hijos y nietos pudieran tener en las manos mucho después de que ellos se fueran.',
      '"Si me ayudas a encontrar las herramientas de IA correctas, yo te ayudo a construirlo." Se estrecharon la mano.',
      'Uno de ellos no tenía computadora propia. Sin experiencia en programación. Solo una fascinación por la IA y las ganas de aprenderlo todo desde cero. El otro tenía toda una vida de historias y un sueño que había esperado más de 8 años.',
      'Ese apretón de manos se convirtió en MyLifeStory.',
    ],
    storyQuote:   '"Sin computadora. Sin código. Solo la convicción de que este sueño merecía existir."',
    storyAuthor:  '— El Constructor, Co-fundador',
    storyQuote2:  '"Una idea de diez años finalmente hecha realidad. Un sueño de escribir la historia de vida de nuestros seres queridos como legado de sus vidas."',
    storyAuthor2: '— El Soñador, Co-fundador',
    vsEye:        'Por qué MyLifeStory',
    vsH:          ['No solo una app.', 'No solo un libro.'],
    vsSub:        'MyLifeStory es la única plataforma que combina una experiencia de app guiada por IA con una memoria impresa profesional — conectadas de principio a fin.',
    vsRows: [
      { feature: 'IA redacta toda tu narrativa',           mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Experiencia app + libro conectada',      mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Entrevista guiada por voz',              mls: true,  sw: true,  rm: true,  ms: false },
      { feature: 'Libro de tapa dura incluido',            mls: true,  sw: true,  rm: true,  ms: true  },
      { feature: 'Vista previa antes de pedir el libro',   mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Fotos ilimitadas por capítulo',          mls: true,  sw: true,  rm: false, ms: true  },
      { feature: 'App móvil nativa para iOS',              mls: true,  sw: false, rm: true,  ms: false },
      { feature: 'Bilingüe (EN + ES)',                     mls: true,  sw: false, rm: false, ms: false },
      { feature: 'Editar el contenido en cualquier momento', mls: true, sw: true, rm: false, ms: false },
      { feature: 'Sin cargos por páginas extra',           mls: true,  sw: true,  rm: false, ms: true  },
    ],
    pricingEye:   'Precios',
    pricingH:     ['Simple y honesto.', ''],
    pricingSub:   'Empieza gratis. Actualiza cuando estés listo para desbloquear tu historia completa.',
    pricingFree:  'Gratis',
    pricingPro:   'Pro',
    pricingFreeSub: 'Empieza tu historia sin costo.',
    pricingProSub:  'Todo lo que necesitas para completar e imprimir tu libro.',
    pricingMonth:   '/mes',
    pricingYear:    '/año',
    pricingOr:      'o',
    pricingSave:    'Ahorra 2 meses',
    pricingFreeFeatures: ['Primer capítulo gratis', 'Sesión de entrevista IA', 'Vista previa del libro'],
    pricingProFeatures:  ['Todos los capítulos', 'Entrevistas IA ilimitadas', 'Vista previa completa', 'Impresión y envío del libro', 'Exportar PDF', 'Soporte prioritario'],
    pricingCta:     'Comenzar Gratis →',
    pricingProCta:  'Obtener Pro →',
    faqEye:       'Preguntas',
    faqH:         'Preguntas frecuentes.',
    faqs: [
      { q: '¿Necesito experiencia técnica?', a: 'Para nada. MyLifeStory está diseñado para cualquier persona — simplemente hablas o escribes tus respuestas y la app hace el resto.' },
      { q: '¿Cuánto tiempo tarda en completarse el libro?', a: 'A tu propio ritmo. Algunos terminan en un fin de semana, otros escriben un capítulo al mes. Tu historia te espera.' },
      { q: '¿De quién es mi historia?', a: 'Tuya. Siempre. Nunca compartimos, vendemos ni usamos tu contenido para nada que no sea crear tu libro.' },
      { q: '¿Cómo es el libro impreso?', a: 'Una tapa dura premium, 15×23 cm, con cubierta de lino y interior a todo color. Impreso por Lulu Press, la misma imprenta de confianza de editores profesionales en todo el mundo.' },
      { q: '¿Puedo escribir en español?', a: 'Sí. MyLifeStory es completamente bilingüe — inglés y español. La entrevista de IA se adapta al idioma que elijas.' },
      { q: '¿Hay versión gratuita?', a: 'Sí. Puedes comenzar gratis, completar tu primer capítulo y previsualizar tu libro. Actualiza a Pro para desbloquear todos los capítulos y pedir tu tapa dura.' },
    ],
    legalLine1:   (y) => `© ${y} My Legacy Story LLC. Todos los derechos reservados. MyLifeStory™ es una marca comercial de My Legacy Story LLC.`,
    legalLine2:   'MyLifeStory™ y el logotipo de My Legacy Story son marcas comerciales con registro pendiente en la Oficina de Patentes y Marcas de los EE. UU. My Legacy Story LLC es una sociedad de responsabilidad limitada de Florida.',
  },
}

const gold  = '#B8924A'
const cream = '#F5F0E8'
const ink   = '#0F0C08'
const sans  = '"DM Sans", system-ui, sans-serif'
const serif = '"Cormorant Garamond", Georgia, serif'
const inkText = '#1C1814'   // dark text for light backgrounds
const muted   = '#6B5A4E'   // muted text for light backgrounds
const subtle  = '#EDE8DF'   // subtle card/section variant

export default function HomePage() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = T[lang]
  const appSignup = `${APP_URL}/signup`
  const appSignin = `${APP_URL}/signin`

  const navLinks = [
    { label: t.navHow,     href: '#how' },
    { label: t.navBooks,   href: '#books' },
    { label: t.navApp,     href: '#app' },
    { label: t.navWhy,     href: '#vs' },
    { label: t.navPricing, href: '#pricing' },
    { label: t.navStory,   href: '#story' },
    { label: t.navFaq,     href: '#faq' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: cream, color: inkText, fontFamily: serif, overflowX: 'hidden' }}>
      <style>{`
        @media (min-width: 768px) {
          .md-nav-links { display: flex !important; align-items: center; gap: 2rem; }
          .hamburger-btn { display: none !important; }
          .desktop-signin { display: inline !important; }
        }
        @media (max-width: 767px) {
          .desktop-signin { display: none !important; }
        }
      `}</style>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    backdropFilter: 'blur(8px)' }}>
        {/* Main bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1rem 1.5rem',
                      background: menuOpen ? 'rgba(245,240,232,0.99)' : 'rgba(245,240,232,0.97)' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <LogoBookBranch size="sm" variant="dark" showName={true} />
            <span style={{ fontFamily: sans, fontSize: '9px', fontWeight: 700,
                           padding: '2px 6px', borderRadius: '5px',
                           background: `${gold}26`, color: gold,
                           border: `1px solid ${gold}44`, letterSpacing: '0.08em',
                           textTransform: 'uppercase', lineHeight: 1.2 }}>
              Beta
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'none' }} className="md-nav-links">
            {navLinks.map(item => (
              <a key={item.label} href={item.href}
                 style={{ fontFamily: sans, fontSize: '15px', color: `${inkText}80`,
                          textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                 onMouseEnter={e => e.target.style.color = inkText}
                 onMouseLeave={e => e.target.style.color = `${inkText}80`}>
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Lang toggle */}
            <button onClick={() => setLang(l => l === 'en' ? 'es' : 'en')}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px',
                             padding: '5px 10px', borderRadius: '8px',
                             border: `1px solid ${inkText}20`, background: 'transparent', cursor: 'pointer' }}>
              <span style={{ fontFamily: sans, fontSize: '13px', fontWeight: 600,
                             letterSpacing: '0.15em', color: lang === 'en' ? gold : `${inkText}50` }}>EN</span>
              <span style={{ color: `${inkText}40`, fontSize: '12px' }}>/</span>
              <span style={{ fontFamily: sans, fontSize: '13px', fontWeight: 600,
                             letterSpacing: '0.15em', color: lang === 'es' ? gold : `${inkText}50` }}>ES</span>
            </button>

            {/* Sign in — hidden on mobile */}
            <a href={appSignin} className="desktop-signin"
               style={{ fontFamily: sans, fontSize: '13px', color: `${inkText}70`,
                        textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {t.signIn}
            </a>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(o => !o)} className="hamburger-btn"
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
                             gap: 5, width: 36, height: 36, padding: '6px',
                             background: 'transparent', border: 'none', cursor: 'pointer' }}
                    aria-label="Menu">
              <span style={{ display: 'block', height: 1.5, background: menuOpen ? gold : inkText,
                             borderRadius: 2, transition: 'all 0.25s',
                             transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', height: 1.5, background: menuOpen ? gold : inkText,
                             borderRadius: 2, transition: 'all 0.25s',
                             opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', height: 1.5, background: menuOpen ? gold : inkText,
                             borderRadius: 2, transition: 'all 0.25s',
                             transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{ background: 'rgba(245,240,232,0.99)', borderTop: `1px solid ${gold}20`,
                        padding: '1.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((item, i) => (
              <a key={item.label} href={item.href}
                 onClick={() => setMenuOpen(false)}
                 style={{ fontFamily: sans, fontSize: '19px', color: inkText,
                          textDecoration: 'none', padding: '1rem 0',
                          borderBottom: i < navLinks.length - 1 ? `1px solid ${gold}15` : 'none',
                          letterSpacing: '0.02em', display: 'block' }}>
                {item.label}
              </a>
            ))}
            <a href={appSignin} onClick={() => setMenuOpen(false)}
               style={{ fontFamily: sans, fontSize: '17px', color: gold,
                        textDecoration: 'none', padding: '1.25rem 0 0',
                        letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
              {t.signIn} →
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap' }}>

        {/* Left */}
        <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column',
                      justifyContent: 'center', padding: '8rem 5rem 4rem',
                      position: 'relative', overflow: 'hidden', minHeight: '85vh' }}>
          <div style={{ position: 'absolute', inset: 0,
                        backgroundImage: `url('https://images.pexels.com/photos/8837491/pexels-photo-8837491.jpeg?auto=compress&cs=tinysrgb&w=1400')`,
                        backgroundSize: 'cover', backgroundPosition: 'center top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,12,8,0.72) 0%, rgba(15,12,8,0.45) 50%, rgba(15,12,8,0.08) 100%)' }} />

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ width: 48, height: 1, background: gold }} />
            <span style={{ fontFamily: sans, fontSize: '10px', color: `${gold}cc`,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.eyebrow}
            </span>
          </div>

          <h1 style={{ position: 'relative', fontFamily: serif, fontSize: 'clamp(3rem,5vw,4.5rem)',
                       fontWeight: 600, color: 'white', lineHeight: 1.1, letterSpacing: '-0.01em',
                       marginBottom: '2rem', maxWidth: 480,
                       textShadow: '0 1px 12px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)' }}>
            {t.headline[0]}<br />
            {t.headline[1]}<br />
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.headline[2]}</span>
          </h1>

          <p style={{ position: 'relative', fontFamily: serif, fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8, maxWidth: 420, marginBottom: '3rem',
                      textShadow: '0 1px 8px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)' }}>
            {t.sub}
          </p>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.features.map(text => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ color: gold, fontSize: '10px', marginTop: 4, flexShrink: 0 }}>✦</span>
                <p style={{ fontFamily: sans, fontSize: '17px', color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.75, textShadow: '0 1px 6px rgba(0,0,0,0.9)', margin: 0 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', width: 96, height: 1,
                        background: `${gold}33`, margin: '3rem 0' }} />

          <div style={{ position: 'relative', maxWidth: 340 }}>
            <div style={{ color: `${gold}66`, fontSize: '3rem', fontFamily: serif,
                          lineHeight: 1, marginBottom: '0.5rem' }}>"</div>
            <p style={{ fontFamily: serif, fontSize: '1rem', fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.7)', lineHeight: 1.7,
                        textShadow: '0 1px 8px rgba(0,0,0,0.9)', margin: 0 }}>
              {t.quoteText}
            </p>
          </div>
        </div>

        {/* Right — CTA */}
        <div style={{ width: 'min(100%, 480px)', display: 'flex', flexDirection: 'column',
                      justifyContent: 'center', padding: '4rem 3.5rem',
                      background: subtle, borderLeft: `1px solid ${gold}30` }}>
          <p style={{ fontFamily: serif, fontSize: '1.5rem', color: inkText, marginBottom: '0.25rem' }}>
            {lang === 'en' ? 'Start your legacy today.' : 'Comienza tu legado hoy.'}
          </p>
          <p style={{ fontFamily: sans, fontSize: '18px', color: muted, marginBottom: '2.5rem' }}>
            {lang === 'en' ? 'Free to start. Your story, forever preserved.' : 'Gratis para empezar. Tu historia, preservada para siempre.'}
          </p>

          <a href={appSignup}
             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: 56, background: gold, color: cream, fontFamily: serif,
                      fontSize: '1.1rem', fontWeight: 600, borderRadius: 12,
                      textDecoration: 'none', marginBottom: '1rem',
                      transition: 'background 0.2s' }}
             onMouseOver={e => e.currentTarget.style.background = '#D4AF72'}
             onMouseOut={e => e.currentTarget.style.background = gold}>
            {t.btnBegin}
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
            <div style={{ flex: 1, height: 1, background: `${inkText}12` }} />
            <span style={{ fontFamily: sans, fontSize: '12px', color: `${inkText}40`,
                           textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {lang === 'en' ? 'or' : 'o'}
            </span>
            <div style={{ flex: 1, height: 1, background: `${inkText}12` }} />
          </div>

          <a href={appSignin}
             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: 56, border: `1px solid ${inkText}20`, color: inkText,
                      fontFamily: serif, fontSize: '1rem', borderRadius: 12,
                      textDecoration: 'none', transition: 'border-color 0.2s' }}>
            {t.btnSignIn}
          </a>

          <div style={{ marginTop: '3rem', paddingTop: '2rem',
                        borderTop: `1px solid ${inkText}10`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {(lang === 'en'
              ? ['🔒  Your story is private and encrypted', '📖  Download your book as PDF anytime', '📦  Printed hardcover delivered to your door']
              : ['🔒  Tu historia es privada y cifrada', '📖  Descarga tu libro en PDF cuando quieras', '📦  Libro de tapa dura entregado en tu puerta']
            ).map(txt => (
              <p key={txt} style={{ fontFamily: sans, fontSize: '18px', color: muted, margin: 0 }}>{txt}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you'll create ───────────────────────────────────────────── */}
      <section id="how" style={{ background: cream, padding: '8rem 5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 64, height: 1, background: `${gold}4d` }} />
              <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                             letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t.section2Eye}
              </span>
              <div style={{ width: 64, height: 1, background: `${gold}4d` }} />
            </div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,4vw,3rem)',
                         fontWeight: 600, color: inkText, lineHeight: 1.2, marginBottom: '1rem' }}>
              {t.section2H[0]}<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>{t.section2H[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '17px', color: muted,
                        maxWidth: 400, margin: '0 auto', lineHeight: 1.8 }}>
              {t.section2Sub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {t.steps.map(s => (
              <div key={s.num} style={{ border: `1px solid ${gold}30`, borderRadius: 16, padding: '2rem', background: subtle }}>
                <span style={{ fontFamily: serif, fontSize: '2.5rem', color: gold, fontWeight: 600 }}>
                  {s.num}
                </span>
                <h3 style={{ fontFamily: serif, fontSize: '1.25rem', color: inkText,
                             fontWeight: 600, margin: '1rem 0 0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: sans, fontSize: '17px', color: muted, lineHeight: 1.8, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Their Stories ────────────────────────────────────────────────── */}
      <section style={{ background: cream, padding: '6rem 5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
            <div style={{ width: 32, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {lang === 'en' ? 'Their Stories' : 'Sus Historias'}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                img: 'https://images.unsplash.com/photo-1672415259182-bdfca36cc661?auto=format&fit=crop&w=800&q=85',
                alt: 'A father and son — passing something valuable down',
                quote: [t.portraitQ[0], t.portraitQ[1], t.portraitQ[2]],
                body: t.portraitBody,
                tag: t.portraitTag,
                italic: true,
              },
              {
                img: 'https://images.pexels.com/photos/8528402/pexels-photo-8528402.jpeg?auto=compress&cs=tinysrgb&w=800',
                alt: 'A businesswoman with a story worth preserving',
                quote: lang === 'en'
                  ? ['"I built a business, raised a family,', 'and almost let my story', 'disappear with me."']
                  : ['"Construí un negocio, crié a mi familia,', 'y casi dejo que mi historia', 'desapareciera conmigo."'],
                body: lang === 'en'
                  ? 'MyLifeStory is for every person who has lived a life worth remembering — and who wants their children and grandchildren to truly know who they were, what they stood for, and what they loved.'
                  : 'MyLifeStory es para toda persona que ha vivido una vida que vale la pena recordar — y que quiere que sus hijos y nietos sepan de verdad quién fue, en qué creyó y qué amó.',
                tag: lang === 'en' ? 'For every generation' : 'Para cada generación',
                italic: false,
              },
            ].map((card, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ width: '100%', height: 256, borderRadius: 16,
                              overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <img src={card.img} alt={card.alt}
                       style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <div style={{ position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(10,7,4,0.5), transparent)' }} />
                </div>
                <div>
                  <div style={{ color: `${gold}40`, fontSize: '3rem', fontFamily: serif,
                                lineHeight: 1, marginBottom: '0.5rem' }}>"</div>
                  <p style={{ fontFamily: serif, fontSize: 'clamp(1.25rem,2vw,1.6rem)',
                              color: inkText, lineHeight: 1.5, marginBottom: '1rem' }}>
                    {card.quote[0]}<br />{card.quote[1]}<br />
                    <span style={{ color: gold, fontStyle: 'italic' }}>{card.quote[2]}</span>
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '17px', color: muted,
                              lineHeight: 1.8, margin: 0 }}>
                    {card.body}
                  </p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 24, height: 1, background: `${gold}66` }} />
                    <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                                textTransform: 'uppercase', letterSpacing: '0.2em', margin: 0 }}>
                      {card.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo divider ────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', height: 'clamp(18rem, 26vw, 26rem)', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/32768955/pexels-photo-32768955.jpeg?auto=compress&cs=tinysrgb&w=1800"
             alt="Hands across generations"
             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,12,8,0.90)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 48, height: 1, background: `${gold}99` }} />
            <BookBranchIcon size={22} />
            <div style={{ width: 48, height: 1, background: `${gold}99` }} />
          </div>
          <p style={{ fontFamily: serif, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: 'white',
                      maxWidth: 720, lineHeight: 1.4, fontWeight: 600, margin: 0 }}>
            "{t.dividerQ[0]}
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.dividerQ[1]}</span>"
          </p>
        </div>
      </div>

      {/* ── The Book ─────────────────────────────────────────────────────── */}

      <section id="books" style={{ background: cream, padding: '8rem 5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex',
                      flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          {/* Mockup */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ position: 'relative', width: 256, height: 320 }}>
              <div style={{ position: 'absolute', inset: 0, transform: 'translate(12px,12px)',
                            background: 'rgba(0,0,0,0.4)', borderRadius: 4, filter: 'blur(20px)' }} />
              <div style={{ position: 'relative', width: '100%', height: '100%',
                            background: '#1A140E', borderRadius: 4,
                            border: `1px solid ${gold}33`,
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            justifyContent: 'space-between', padding: '2.5rem 2rem',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 32, height: 1, background: `${gold}80` }} />
                  <BookBranchIcon size={20} />
                  <div style={{ width: 32, height: 1, background: `${gold}80` }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: sans, fontSize: '8px', color: `${gold}80`,
                              letterSpacing: '0.2em', textTransform: 'uppercase',
                              marginBottom: '0.5rem' }}>The Story of</p>
                  <p style={{ fontFamily: serif, fontSize: '1.25rem', color: cream,
                              fontWeight: 600, lineHeight: 1.3 }}>Jonathan<br />Doe</p>
                  <div style={{ width: 32, height: 1, background: `${gold}66`, margin: '0.75rem auto' }} />
                  <p style={{ fontFamily: serif, fontSize: '11px', fontStyle: 'italic', color: `${gold}99` }}>
                    A Legacy Book
                  </p>
                </div>
                <p style={{ fontFamily: sans, fontSize: '7px', color: `${cream}33`,
                            letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  MyLifeStory™
                </p>
              </div>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: '100%',
                            background: '#120D08', borderLeft: `1px solid ${gold}1a`, borderRadius: '0 4px 4px 0' }} />
            </div>
          </div>

          {/* Details */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 1, background: `${gold}4d` }} />
              <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                             letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t.bookEye}
              </span>
            </div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,3.5vw,3rem)',
                         fontWeight: 600, color: inkText, lineHeight: 1.2, marginBottom: '1rem' }}>
              {t.bookH[0]}<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>{t.bookH[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '17px', color: muted,
                        lineHeight: 1.8, maxWidth: 400, marginBottom: '1.5rem' }}>
              {t.bookSub}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {t.specs.map(s => (
                <div key={s.label} style={{ border: `1px solid ${gold}25`, borderRadius: 12,
                                            padding: '0.75rem 1rem' }}>
                  <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                               textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>
                    {s.label}
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '17px', color: inkText, margin: 0 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: serif, fontSize: '3rem', color: gold, fontWeight: 600 }}>$79</span>
              <span style={{ fontFamily: serif, fontSize: '1.5rem', color: gold, marginBottom: '0.25rem' }}>.99</span>
              <span style={{ fontFamily: sans, fontSize: '15px', color: muted, marginBottom: '0.5rem', marginLeft: '0.5rem' }}>
                {lang === 'en' ? 'per printed copy' : 'por copia impresa'}
              </span>
            </div>
            <a href={appSignup}
               style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.875rem 2rem', background: gold, color: cream,
                        fontFamily: serif, fontSize: '1rem', fontWeight: 600,
                        borderRadius: 12, textDecoration: 'none' }}>
              {t.btnStart} <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '7rem 2.5rem',
                        textAlign: 'center', borderTop: `1px solid ${gold}1a`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0,
                      backgroundImage: `url('https://images.pexels.com/photos/31224331/pexels-photo-31224331.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                      backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,12,8,0.95)' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ width: 64, height: 1, background: `${gold}33` }} />
            <BookBranchIcon size={20} />
            <div style={{ width: 64, height: 1, background: `${gold}33` }} />
          </div>
          <p style={{ fontFamily: serif, fontSize: 'clamp(1.75rem,3.5vw,2.25rem)',
                      color: 'white', lineHeight: 1.4, fontWeight: 600, marginBottom: '2rem',
                      textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            "{t.finalQ[0]}<br />
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.finalQ[1]}</span>"
          </p>
          <p style={{ fontFamily: sans, fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '3rem' }}>
            {t.finalSub}
          </p>
          <a href={appSignup}
             style={{ display: 'inline-flex', alignItems: 'center', height: 56,
                      padding: '0 2.5rem', background: gold, color: cream,
                      fontFamily: serif, fontSize: '1.1rem', fontWeight: 600,
                      borderRadius: 12, textDecoration: 'none' }}>
            {t.btnFinal}
          </a>
        </div>
      </section>

      {/* ── App section ──────────────────────────────────────────────────── */}
      <section id="app" style={{ background: cream, borderTop: `1px solid ${gold}1a`, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex',
                      flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                        textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>
              {t.appEye}
            </p>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem,3vw,2.75rem)',
                         color: inkText, lineHeight: 1.3, marginBottom: '1.25rem' }}>
              {t.appH[0]}<br /><span style={{ color: gold, fontStyle: 'italic' }}>{t.appH[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '17px', color: muted,
                        lineHeight: 1.8, maxWidth: 400, marginBottom: '1.5rem' }}>
              {lang === 'en'
                ? 'Answer guided questions, review your chapters, and order your printed book — all from the MyLifeStory app.'
                : 'Responde preguntas guiadas, revisa tus capítulos y pide tu libro impreso — todo desde la app MyLifeStory.'}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {t.appFeatures.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: gold, flexShrink: 0 }} />
                  <span style={{ fontFamily: sans, fontSize: '17px', color: muted }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* iPhone carousel */}
          <ScreenshotCarousel />
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section id="story" style={{ background: cream, padding: '8rem 2.5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 40, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.storyEye}
            </span>
          </div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,4vw,3.2rem)',
                       fontWeight: 600, color: inkText, lineHeight: 1.2, marginBottom: '1rem' }}>
            {t.storyH[0]}<br />
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.storyH[1]}</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: '19px', color: muted,
                      lineHeight: 1.8, marginBottom: '3rem' }}>
            {t.storySub}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {t.storyBody.map((para, i) => (
              <p key={i} style={{ fontFamily: sans, fontSize: '19px', color: `${inkText}d9`,
                                  lineHeight: 1.8 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Framed quotes — two co-founders side by side */}
          <div style={{ margin: '3rem 0', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { quote: t.storyQuote2, author: t.storyAuthor2 },
              { quote: t.storyQuote,  author: t.storyAuthor },
            ].map(({ quote, author }, i) => (
              <div key={i} style={{ flex: '1 1 260px', padding: '4px',
                                    background: `linear-gradient(135deg, ${gold}cc, #8a6830, ${gold}cc, #6b5025)`,
                                    borderRadius: '6px',
                                    boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)' }}>
                <div style={{ background: '#F5F0E8', borderRadius: '3px', padding: '2rem 2rem 1.5rem', height: '100%' }}>
                  <div style={{ border: `1px solid ${gold}40`, borderRadius: '2px', padding: '1.75rem 1.75rem 1.25rem', height: '100%',
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span style={{ color: gold, fontSize: '10px' }}>✦</span>
                        <span style={{ color: gold, fontSize: '10px' }}>✦</span>
                      </div>
                      <p style={{ fontFamily: serif, fontSize: 'clamp(1.25rem,2vw,1.6rem)', fontStyle: 'italic',
                                  color: inkText, lineHeight: 1.75, textAlign: 'center', marginBottom: '1.25rem' }}>
                        {quote}
                      </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: gold, fontSize: '10px' }}>✦</span>
                      <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                                  letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center' }}>
                        {author}
                      </p>
                      <span style={{ color: gold, fontSize: '10px' }}>✦</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem',
                        padding: '2rem', border: `1px solid ${gold}25`, borderRadius: '1rem',
                        background: subtle }}>
            {[
              { icon: '⚡', role: lang === 'en' ? 'The Builder' : 'El Constructor', detail: lang === 'en' ? 'Zero code experience, built with AI' : 'Sin código, construido con IA' },
              { icon: '✦', role: lang === 'en' ? 'The Dreamer' : 'El Soñador', detail: lang === 'en' ? '8 years of vision, a lifetime of stories' : '8 años de visión, toda una vida de historias' },
            ].map(p => (
              <div key={p.role} style={{ flex: 1, minWidth: 160 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%',
                              background: `${gold}26`, border: `1px solid ${gold}4d`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  {p.icon}
                </div>
                <p style={{ fontFamily: sans, fontSize: '14px', color: gold, textTransform: 'uppercase',
                            letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{p.role}</p>
                <p style={{ fontFamily: sans, fontSize: '16px', color: muted }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS Competitors ───────────────────────────────────────────────── */}
      <section id="vs" style={{ background: cream, padding: '8rem 2.5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 40, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.vsEye}
            </span>
          </div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,4vw,3.2rem)',
                       fontWeight: 600, color: inkText, lineHeight: 1.2, marginBottom: '0.75rem' }}>
            {t.vsH[0]}<br />
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.vsH[1]}</span>
          </h2>
          <p style={{ fontFamily: sans, fontSize: '19px', color: muted,
                      lineHeight: 1.8, marginBottom: '3rem' }}>
            {t.vsSub}
          </p>

          {/* Table */}
          <div style={{ overflowX: 'auto', borderRadius: '16px', border: `1px solid ${gold}30`,
                        boxShadow: '0 4px 24px rgba(28,24,20,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: sans, minWidth: 520 }}>
              <thead>
                <tr style={{ background: subtle }}>
                  <th style={{ textAlign: 'left', padding: '1.1rem 1.25rem', fontSize: '13px',
                               color: `${inkText}60`, fontWeight: 500, letterSpacing: '0.1em',
                               textTransform: 'uppercase', borderBottom: `1px solid ${gold}20`,
                               width: '38%' }}>
                    {lang === 'en' ? 'Feature' : 'Característica'}
                  </th>
                  {[
                    { label: 'MyLifeStory', highlight: true },
                    { label: 'Storyworth',  highlight: false },
                    { label: 'Remento',     highlight: false },
                    { label: 'MemoryGram',  highlight: false },
                  ].map(col => (
                    <th key={col.label} style={{
                      textAlign: 'center', padding: '1.1rem 0.75rem',
                      fontSize: col.highlight ? '13px' : '12px',
                      fontWeight: col.highlight ? 700 : 500,
                      color: col.highlight ? gold : `${inkText}50`,
                      borderBottom: `1px solid ${gold}20`,
                      background: col.highlight ? `rgba(184,146,74,0.12)` : 'transparent',
                      borderLeft: col.highlight ? `2px solid ${gold}60` : 'none',
                      borderRight: col.highlight ? `2px solid ${gold}60` : 'none',
                      position: 'relative',
                    }}>
                      {col.highlight && (
                        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em',
                                      color: '#0d0a06', background: gold, borderRadius: '4px',
                                      padding: '2px 6px', display: 'inline-block',
                                      marginBottom: '4px', textTransform: 'uppercase' }}>
                          {lang === 'en' ? 'Best' : 'Mejor'}
                        </div>
                      )}
                      <div>{col.label}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.vsRows.map((row, i) => (
                  <tr key={i} style={{
                    borderBottom: `1px solid ${gold}15`,
                    background: i % 2 === 0 ? 'rgba(184,146,74,0.04)' : 'transparent',
                  }}>
                    <td style={{ padding: '1rem 1.25rem', fontSize: '17px',
                                 color: inkText, fontWeight: 400, lineHeight: 1.4 }}>
                      {row.feature}
                    </td>
                    {[
                      { val: row.mls, highlight: true },
                      { val: row.sw,  highlight: false },
                      { val: row.rm,  highlight: false },
                      { val: row.ms,  highlight: false },
                    ].map((cell, j) => (
                      <td key={j} style={{
                        textAlign: 'center', padding: '1rem 0.75rem',
                        background: cell.highlight ? `rgba(184,146,74,0.07)` : 'transparent',
                        borderLeft:  cell.highlight ? `2px solid ${gold}40` : 'none',
                        borderRight: cell.highlight ? `2px solid ${gold}40` : 'none',
                      }}>
                        {cell.val
                          ? <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                           width: 26, height: 26, borderRadius: '50%',
                                           background: cell.highlight ? `${gold}22` : 'rgba(74,222,128,0.1)',
                                           color: cell.highlight ? gold : '#4ade80',
                                           fontSize: '13px', fontWeight: 700 }}>✓</span>
                          : <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                           width: 26, height: 26, borderRadius: '50%',
                                           background: 'transparent',
                                           color: muted, fontSize: '13px' }}>✗</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              {/* Score row */}
              <tfoot>
                <tr style={{ background: subtle, borderTop: `1px solid ${gold}25` }}>
                  <td style={{ padding: '1rem 1.25rem', fontSize: '17px',
                               color: `${inkText}60`, fontWeight: 600, letterSpacing: '0.05em',
                               textTransform: 'uppercase' }}>
                    {lang === 'en' ? 'Total' : 'Total'}
                  </td>
                  {[
                    { count: t.vsRows.filter(r => r.mls).length, highlight: true },
                    { count: t.vsRows.filter(r => r.sw).length,  highlight: false },
                    { count: t.vsRows.filter(r => r.rm).length,  highlight: false },
                    { count: t.vsRows.filter(r => r.ms).length,  highlight: false },
                  ].map((cell, j) => (
                    <td key={j} style={{
                      textAlign: 'center', padding: '1rem 0.75rem',
                      background: cell.highlight ? `rgba(184,146,74,0.12)` : 'transparent',
                      borderLeft:  cell.highlight ? `2px solid ${gold}60` : 'none',
                      borderRight: cell.highlight ? `2px solid ${gold}60` : 'none',
                      borderBottom: cell.highlight ? `2px solid ${gold}60` : 'none',
                    }}>
                      <span style={{ fontFamily: serif, fontSize: cell.highlight ? '1.4rem' : '1.1rem',
                                     fontWeight: 700, color: cell.highlight ? gold : `${inkText}40` }}>
                        {cell.count}<span style={{ fontSize: '0.7em', opacity: 0.6 }}>/{t.vsRows.length}</span>
                      </span>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p style={{ fontFamily: sans, fontSize: '13px', color: muted,
                      marginTop: '1rem', textAlign: 'right', letterSpacing: '0.03em' }}>
            {lang === 'en'
              ? 'Based on publicly available information. Last reviewed May 2025.'
              : 'Basado en información pública. Última revisión mayo 2025.'}
          </p>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ background: cream, padding: '8rem 2.5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 40, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.pricingEye}
            </span>
          </div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,4vw,3.2rem)',
                       fontWeight: 600, color: inkText, lineHeight: 1.2, marginBottom: '0.75rem' }}>
            {t.pricingH[0]}<br />
            {t.pricingH[1] && <span style={{ color: gold, fontStyle: 'italic' }}>{t.pricingH[1]}</span>}
          </h2>
          <p style={{ fontFamily: sans, fontSize: '19px', color: muted,
                      lineHeight: 1.8, marginBottom: '3rem' }}>
            {t.pricingSub}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>

            {/* Free tier */}
            <div style={{ flex: '1 1 280px', border: `1px solid ${gold}25`, borderRadius: '16px',
                          padding: '2rem', background: subtle }}>
              <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {t.pricingFree}
              </p>
              <p style={{ fontFamily: serif, fontSize: '3rem', fontWeight: 700, color: inkText,
                          lineHeight: 1, marginBottom: '0.25rem' }}>$0</p>
              <p style={{ fontFamily: sans, fontSize: '16px', color: muted,
                          marginBottom: '1.75rem' }}>{t.pricingFreeSub}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex',
                           flexDirection: 'column', gap: '0.75rem' }}>
                {t.pricingFreeFeatures.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: `${gold}60`, marginTop: 2, flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: sans, fontSize: '17px', color: muted }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={appSignup}
                 style={{ display: 'block', textAlign: 'center', padding: '0.9rem',
                          border: `1px solid ${gold}40`, borderRadius: '10px', fontFamily: sans,
                          fontSize: '17px', fontWeight: 600, color: gold, textDecoration: 'none',
                          transition: 'all 0.2s' }}>
                {t.pricingCta}
              </a>
            </div>

            {/* Pro tier */}
            <div style={{ flex: '1 1 280px', border: `2px solid ${gold}`, borderRadius: '16px',
                          padding: '2rem', background: `linear-gradient(135deg, rgba(184,146,74,0.12), rgba(184,146,74,0.04))`,
                          position: 'relative', overflow: 'hidden' }}>
              {/* Best value badge */}
              <div style={{ position: 'absolute', top: 0, right: 0, background: gold,
                            color: ink, fontFamily: sans, fontSize: '10px', fontWeight: 700,
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            padding: '5px 14px', borderBottomLeftRadius: '10px' }}>
                {lang === 'en' ? 'Best Value' : 'Mejor Valor'}
              </div>
              <p style={{ fontFamily: sans, fontSize: '13px', color: gold,
                          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {t.pricingPro}
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '0.1rem' }}>
                <p style={{ fontFamily: serif, fontSize: '3rem', fontWeight: 700, color: inkText, lineHeight: 1 }}>
                  $9.99
                </p>
                <p style={{ fontFamily: sans, fontSize: '17px', color: muted,
                            marginBottom: '0.4rem' }}>{t.pricingMonth}</p>
              </div>
              <p style={{ fontFamily: sans, fontSize: '16px', color: muted, marginBottom: '0.5rem' }}>
                {t.pricingOr}{' '}
                <strong style={{ color: gold }}>$99.99{t.pricingYear}</strong>
                {' '}
                <span style={{ display: 'inline-block', background: `${gold}22`, color: gold,
                               fontSize: '10px', fontWeight: 700, padding: '2px 8px',
                               borderRadius: '4px', letterSpacing: '0.05em' }}>
                  {t.pricingSave}
                </span>
              </p>
              <p style={{ fontFamily: sans, fontSize: '16px', color: muted,
                          marginBottom: '1.75rem' }}>{t.pricingProSub}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex',
                           flexDirection: 'column', gap: '0.75rem' }}>
                {t.pricingProFeatures.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: gold, marginTop: 2, flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: sans, fontSize: '17px', color: inkText }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={appSignup}
                 style={{ display: 'block', textAlign: 'center', padding: '0.9rem',
                          background: gold, borderRadius: '10px', fontFamily: sans,
                          fontSize: '17px', fontWeight: 700, color: ink, textDecoration: 'none' }}>
                {t.pricingProCta}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: cream, padding: '8rem 2.5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 40, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '13px', color: gold,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.faqEye}
            </span>
          </div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(2.5rem,4vw,3.2rem)',
                       fontWeight: 600, color: inkText, marginBottom: '3rem' }}>
            {t.faqH}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {t.faqs.map(({ q, a }, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${gold}20`, padding: '2rem 0' }}>
                <p style={{ fontFamily: serif, fontSize: '1.4rem', fontWeight: 600,
                            color: inkText, marginBottom: '0.75rem' }}>{q}</p>
                <p style={{ fontFamily: sans, fontSize: '18px', color: muted,
                            lineHeight: 1.8 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Store badges ─────────────────────────────────────────────── */}
      <section style={{ background: subtle, borderTop: `1px solid ${gold}1a`,
                        padding: '4rem 2.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <p style={{ fontFamily: sans, fontSize: '14px', color: gold,
                      textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '0.75rem' }}>
            {t.appSoon}
          </p>
          <h3 style={{ fontFamily: serif, fontSize: '2rem', color: inkText, marginBottom: '0.5rem' }}>
            {t.appTitle}
          </h3>
          <p style={{ fontFamily: sans, fontSize: '18px', color: muted,
                      marginBottom: '2rem', lineHeight: 1.8 }}>{t.appSub}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {[{ path: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z', label: 'App Store' },
             { path: 'M3.18 23.76c.3.18.65.22.99.1l12.45-7.19-2.77-2.77-10.67 9.86zm-1.9-20.1C1.1 3.9 1 4.18 1 4.5v15c0 .32.1.6.28.84l.09.08 8.4-8.4v-.2L1.37 3.57l-.09.09zm18.42 8.89l-2.38-1.38-3.06 3.06 3.06 3.05 2.4-1.39c.68-.4.68-1.04-.02-1.34zM4.17.24L16.62 7.43l-2.77 2.77L3.18.34C3.52.22 3.87.06 4.17.24z', label: 'Google Play' }
            ].map(btn => (
              <div key={btn.label}
                   style={{ display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.875rem 1.5rem', borderRadius: 12, width: 192,
                            justifyContent: 'center', opacity: 0.5, cursor: 'not-allowed',
                            border: `1px solid ${inkText}15`, background: `${inkText}05` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill={`${inkText}60`}>
                  <path d={btn.path} />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontFamily: sans, fontSize: '11px', color: muted,
                               textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                    Próximamente
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '16px', color: inkText,
                               fontWeight: 600 }}>{btn.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{ background: subtle, borderTop: `1px solid ${gold}20`, padding: '2.5rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                        justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookBranchIcon size={16} />
              <span style={{ fontFamily: sans, fontSize: '14px', color: `${inkText}70`,
                             fontWeight: 600, letterSpacing: '0.05em' }}>
                MyLifeStory™
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { label: 'Help',     href: '/help' },
                { label: 'Privacy',  href: '/privacy' },
                { label: 'Terms',    href: '/terms' },
                { label: 'Contact',  href: 'mailto:hello@mylegacystoryapp.com' },
              ].map(l => (
                <a key={l.label} href={l.href}
                   style={{ fontFamily: sans, fontSize: '14px', color: `${inkText}60`,
                            textDecoration: 'none' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${inkText}10`, paddingTop: '1.5rem',
                        textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <p style={{ fontFamily: sans, fontSize: '12px', color: `${inkText}40`, lineHeight: 1.6 }}>
              {t.legalLine1(new Date().getFullYear())}
            </p>
            <p style={{ fontFamily: sans, fontSize: '12px', color: `${inkText}30`, lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>
              {t.legalLine2}
            </p>
            <p style={{ fontFamily: sans, fontSize: '12px', color: `${inkText}25`, lineHeight: 1.6, marginTop: '0.25rem' }}>
              {t.photoCred}{' '}
              {[
                { name: 'Yan Krukau',       href: 'https://www.pexels.com/@yankrukau' },
                { name: 'KCN Photographie', href: 'https://www.pexels.com/@kcn-photographie' },
                { name: 'Karola G',         href: 'https://www.pexels.com/@karolg' },
                { name: 'Eyupcan Timur',    href: 'https://www.pexels.com/@eyupcan-timur' },
              ].map((p, i, arr) => (
                <span key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                     style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>
                    {p.name}
                  </a>
                  {i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
              {' '}{t.via}{' '}
              <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>Pexels</a>
              {'; '}
              <a href="https://unsplash.com/@colemanglover" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>Coleman Glover</a>
              {' '}{t.via}{' '}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>Unsplash</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const SCREENS = [
  '/screen-1.png',
  '/screen-2.png',
  '/screen-3.png',
  '/screen-4.png',
  '/screen-5.png',
]

function ScreenshotCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + SCREENS.length) % SCREENS.length)
  const next = () => setIdx(i => (i + 1) % SCREENS.length)

  const btnStyle = {
    width: 36, height: 36,
    borderRadius: '50%',
    border: '1.5px solid rgba(184,146,74,0.4)',
    background: 'rgba(28,24,20,0.8)',
    color: '#B8924A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    fontSize: 18,
    flexShrink: 0,
    transition: 'border-color 0.15s',
  }

  return (
    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={prev} style={btnStyle} aria-label="Previous screenshot">&#8249;</button>

        {/* iPhone frame */}
        <div style={{ position: 'relative', width: 240, height: 490 }}>
          {/* Body */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 44,
                        background: 'linear-gradient(to bottom, #3a3a3c, #1c1c1e, #3a3a3c)',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1.5px #48484a' }} />
          {/* Screen area */}
          <div style={{ position: 'absolute', top: 6, left: 6, right: 6, bottom: 6,
                        borderRadius: 38, background: 'black', overflow: 'hidden' }}>
            {/* Dynamic island */}
            <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                          width: 90, height: 25, background: 'black', borderRadius: 999, zIndex: 10 }} />
            {/* Screenshot */}
            <img
              key={idx}
              src={SCREENS[idx]}
              alt={`App screenshot ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Side buttons */}
          {[{l:true,t:100,h:32},{l:true,t:145,h:54},{l:true,t:210,h:54},{l:false,t:155,h:72}].map((b,i) => (
            <div key={i} style={{ position: 'absolute',
                                  [b.l ? 'left' : 'right']: -3, top: b.t,
                                  width: 3, height: b.h,
                                  borderRadius: b.l ? '4px 0 0 4px' : '0 4px 4px 0',
                                  background: '#48484a' }} />
          ))}
        </div>

        <button onClick={next} style={btnStyle} aria-label="Next screenshot">&#8250;</button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 6 }}>
        {SCREENS.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{
            width: i === idx ? 16 : 6, height: 6, borderRadius: 3,
            background: i === idx ? '#B8924A' : 'rgba(184,146,74,0.3)',
            cursor: 'pointer', transition: 'all 0.2s',
          }} />
        ))}
      </div>
    </div>
  )
}
