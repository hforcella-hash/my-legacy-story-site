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
    legalLine1:   (y) => `© ${y} My Legacy Story LLC. Todos los derechos reservados. MyLifeStory™ es una marca comercial de My Legacy Story LLC.`,
    legalLine2:   'MyLifeStory™ y el logotipo de My Legacy Story son marcas comerciales con registro pendiente en la Oficina de Patentes y Marcas de los EE. UU. My Legacy Story LLC es una sociedad de responsabilidad limitada de Florida.',
  },
}

const gold  = '#B8924A'
const cream = '#F5F0E8'
const ink   = '#0F0C08'
const sans  = '"DM Sans", system-ui, sans-serif'
const serif = '"Cormorant Garamond", Georgia, serif'

export default function HomePage() {
  const [lang, setLang] = useState('en')
  const t = T[lang]
  const appSignup = `${APP_URL}/signup`
  const appSignin = `${APP_URL}/signin`

  return (
    <div style={{ minHeight: '100vh', background: ink, color: cream, fontFamily: serif, overflowX: 'hidden' }}>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(to bottom, rgba(15,12,8,0.95), transparent)',
                    backdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LogoBookBranch size="sm" variant="light" showName={true} />
          <span style={{ fontFamily: sans, fontSize: '9px', color: `${gold}cc`,
                         letterSpacing: '0.15em', textTransform: 'uppercase',
                         padding: '2px 10px', borderRadius: '999px',
                         border: `1px solid ${gold}4d`, background: `${gold}26` }}
                className="hidden sm:inline">
            {t.comingSoon}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => setLang(l => l === 'en' ? 'es' : 'en')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px',
                           padding: '6px 12px', borderRadius: '8px',
                           border: `1px solid ${cream}26`, background: 'transparent',
                           cursor: 'pointer' }}>
            <span style={{ fontFamily: sans, fontSize: '11px', fontWeight: 600,
                           letterSpacing: '0.15em', color: lang === 'en' ? gold : `${cream}59` }}>EN</span>
            <span style={{ color: `${cream}33`, fontSize: '10px' }}>/</span>
            <span style={{ fontFamily: sans, fontSize: '11px', fontWeight: 600,
                           letterSpacing: '0.15em', color: lang === 'es' ? gold : `${cream}59` }}>ES</span>
          </button>
          <a href={appSignin}
             style={{ fontFamily: sans, fontSize: '11px', color: `${cream}80`,
                      textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {t.signIn}
          </a>
        </div>
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
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,12,8,0.92)' }} />

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ width: 48, height: 1, background: gold }} />
            <span style={{ fontFamily: sans, fontSize: '10px', color: `${gold}cc`,
                           letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {t.eyebrow}
            </span>
          </div>

          <h1 style={{ position: 'relative', fontFamily: serif, fontSize: 'clamp(2.5rem,5vw,3.75rem)',
                       fontWeight: 600, color: 'white', lineHeight: 1.1, letterSpacing: '-0.01em',
                       marginBottom: '2rem', maxWidth: 480,
                       textShadow: '0 1px 12px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)' }}>
            {t.headline[0]}<br />
            {t.headline[1]}<br />
            <span style={{ color: gold, fontStyle: 'italic' }}>{t.headline[2]}</span>
          </h1>

          <p style={{ position: 'relative', fontFamily: serif, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.7, maxWidth: 420, marginBottom: '3rem',
                      textShadow: '0 1px 8px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)' }}>
            {t.sub}
          </p>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.features.map(text => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ color: gold, fontSize: '10px', marginTop: 4, flexShrink: 0 }}>✦</span>
                <p style={{ fontFamily: sans, fontSize: '14px', color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.6, textShadow: '0 1px 6px rgba(0,0,0,0.9)', margin: 0 }}>
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
                      background: '#160F08', borderLeft: `1px solid ${gold}1a` }}>
          <p style={{ fontFamily: serif, fontSize: '1.5rem', color: cream, marginBottom: '0.25rem' }}>
            {lang === 'en' ? 'Start your legacy today.' : 'Comienza tu legado hoy.'}
          </p>
          <p style={{ fontFamily: sans, fontSize: '12px', color: `${cream}66`, marginBottom: '2.5rem' }}>
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
            <div style={{ flex: 1, height: 1, background: `${cream}14` }} />
            <span style={{ fontFamily: sans, fontSize: '10px', color: `${cream}40`,
                           textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {lang === 'en' ? 'or' : 'o'}
            </span>
            <div style={{ flex: 1, height: 1, background: `${cream}14` }} />
          </div>

          <a href={appSignin}
             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: 56, border: `1px solid ${cream}26`, color: `${cream}99`,
                      fontFamily: serif, fontSize: '1rem', borderRadius: 12,
                      textDecoration: 'none', transition: 'border-color 0.2s' }}>
            {t.btnSignIn}
          </a>

          <div style={{ marginTop: '3rem', paddingTop: '2rem',
                        borderTop: `1px solid ${cream}0d`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {(lang === 'en'
              ? ['🔒  Your story is private and encrypted', '📖  Download your book as PDF anytime', '📦  Printed hardcover delivered to your door']
              : ['🔒  Tu historia es privada y cifrada', '📖  Descarga tu libro en PDF cuando quieras', '📦  Libro de tapa dura entregado en tu puerta']
            ).map(txt => (
              <p key={txt} style={{ fontFamily: sans, fontSize: '12px', color: `${cream}4d`, margin: 0 }}>{txt}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you'll create ───────────────────────────────────────────── */}
      <section style={{ background: ink, padding: '8rem 5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 64, height: 1, background: `${gold}4d` }} />
              <span style={{ fontFamily: sans, fontSize: '10px', color: `${gold}99`,
                             letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t.section2Eye}
              </span>
              <div style={{ width: 64, height: 1, background: `${gold}4d` }} />
            </div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem,4vw,2.5rem)',
                         fontWeight: 600, color: cream, lineHeight: 1.2, marginBottom: '1rem' }}>
              {t.section2H[0]}<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>{t.section2H[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}80`,
                        maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>
              {t.section2Sub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {t.steps.map(s => (
              <div key={s.num} style={{ border: `1px solid ${gold}26`, borderRadius: 16, padding: '2rem' }}>
                <span style={{ fontFamily: serif, fontSize: '2.5rem', color: `${gold}33`, fontWeight: 600 }}>
                  {s.num}
                </span>
                <h3 style={{ fontFamily: serif, fontSize: '1.25rem', color: cream,
                             fontWeight: 600, margin: '1rem 0 0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}80`, lineHeight: 1.7, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Their Stories ────────────────────────────────────────────────── */}
      <section style={{ background: '#0A0704', padding: '6rem 5rem', borderTop: `1px solid ${gold}1a` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
            <div style={{ width: 32, height: 1, background: `${gold}4d` }} />
            <span style={{ fontFamily: sans, fontSize: '10px', color: `${gold}80`,
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
                  <p style={{ fontFamily: serif, fontSize: 'clamp(1.1rem,2vw,1.35rem)',
                              color: cream, lineHeight: 1.5, marginBottom: '1rem' }}>
                    {card.quote[0]}<br />{card.quote[1]}<br />
                    <span style={{ color: gold, fontStyle: 'italic' }}>{card.quote[2]}</span>
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}66`,
                              lineHeight: 1.7, margin: 0 }}>
                    {card.body}
                  </p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 24, height: 1, background: `${gold}66` }} />
                    <p style={{ fontFamily: sans, fontSize: '10px', color: `${gold}66`,
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
      <section style={{ background: '#0A0704', padding: '8rem 5rem', borderTop: `1px solid ${gold}1a` }}>
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
              <span style={{ fontFamily: sans, fontSize: '10px', color: `${gold}99`,
                             letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t.bookEye}
              </span>
            </div>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(2rem,3.5vw,2.5rem)',
                         fontWeight: 600, color: cream, lineHeight: 1.2, marginBottom: '1rem' }}>
              {t.bookH[0]}<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>{t.bookH[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}80`,
                        lineHeight: 1.7, maxWidth: 400, marginBottom: '1.5rem' }}>
              {t.bookSub}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {t.specs.map(s => (
                <div key={s.label} style={{ border: `1px solid ${gold}1a`, borderRadius: 12,
                                            padding: '0.75rem 1rem' }}>
                  <p style={{ fontFamily: sans, fontSize: '10px', color: `${gold}80`,
                               textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>
                    {s.label}
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '14px', color: cream, margin: 0 }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: serif, fontSize: '3rem', color: gold, fontWeight: 600 }}>$79</span>
              <span style={{ fontFamily: serif, fontSize: '1.5rem', color: `${gold}99`, marginBottom: '0.25rem' }}>.99</span>
              <span style={{ fontFamily: sans, fontSize: '12px', color: `${cream}66`, marginBottom: '0.5rem', marginLeft: '0.5rem' }}>
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
      <section style={{ background: '#080604', borderTop: `1px solid ${gold}1a`, padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex',
                      flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontFamily: sans, fontSize: '10px', color: `${gold}99`,
                        textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>
              {t.appEye}
            </p>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem,3vw,2.25rem)',
                         color: cream, lineHeight: 1.3, marginBottom: '1.25rem' }}>
              {t.appH[0]}<br /><span style={{ color: gold, fontStyle: 'italic' }}>{t.appH[1]}</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}66`,
                        lineHeight: 1.7, maxWidth: 400, marginBottom: '1.5rem' }}>
              {lang === 'en'
                ? 'Answer guided questions, review your chapters, and order your printed book — all from the MyLifeStory app.'
                : 'Responde preguntas guiadas, revisa tus capítulos y pide tu libro impreso — todo desde la app MyLifeStory.'}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {t.appFeatures.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: gold, flexShrink: 0 }} />
                  <span style={{ fontFamily: sans, fontSize: '14px', color: `${cream}80` }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* iPhone */}
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 240, height: 490 }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 44,
                            background: 'linear-gradient(to bottom, #3a3a3c, #1c1c1e, #3a3a3c)',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1.5px #48484a' }} />
              <div style={{ position: 'absolute', top: 6, left: 6, right: 6, bottom: 6,
                            borderRadius: 38, background: 'black', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                              width: 90, height: 25, background: 'black', borderRadius: 999, zIndex: 10 }} />
                <div style={{ position: 'absolute', inset: 0, background: ink,
                              display: 'flex', flexDirection: 'column', paddingTop: 48 }}>
                  <div style={{ display: 'flex', alignItems: 'center', padding: '8px 16px',
                                borderBottom: `1px solid ${gold}26` }}>
                    <LogoBookBranch size="sm" variant="light" showName={true} />
                  </div>
                  <div style={{ margin: '12px 12px 0', borderRadius: 16, padding: '1rem',
                                background: '#1a1510', border: `1px solid ${gold}33` }}>
                    <p style={{ fontFamily: sans, fontSize: '9px', color: `${gold}99`,
                                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                      Chapter 3
                    </p>
                    <p style={{ fontFamily: serif, fontSize: '13px', color: cream, lineHeight: 1.4 }}>
                      My years building<br />the company…
                    </p>
                    <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ flex: 1, height: 4, borderRadius: 2, background: `${gold}26` }}>
                        <div style={{ width: '67%', height: '100%', borderRadius: 2, background: `${gold}b3` }} />
                      </div>
                      <span style={{ fontFamily: sans, fontSize: '8px', color: `${gold}66` }}>67%</span>
                    </div>
                  </div>
                  <div style={{ margin: '8px 12px 0', borderRadius: 16, padding: '1rem',
                                background: '#0d0a06', border: `1px solid ${cream}14` }}>
                    <p style={{ fontFamily: sans, fontSize: '8px', color: `${cream}4d`,
                                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      Today's question
                    </p>
                    <p style={{ fontFamily: serif, fontSize: '11px', fontStyle: 'italic',
                                color: `${cream}b3`, lineHeight: 1.5 }}>
                      "What was the hardest decision you ever made as a leader?"
                    </p>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
                                display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                                padding: '0.75rem 1rem', borderTop: `1px solid ${gold}1a`, background: ink }}>
                    {['📖','✍️','📦','👤'].map((icon, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                                           gap: 2, opacity: i === 1 ? 1 : 0.3 }}>
                        <span style={{ fontSize: 16 }}>{icon}</span>
                        <div style={{ width: 4, height: 4, borderRadius: '50%',
                                      background: i === 1 ? gold : 'transparent' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {[{l:true,t:100,h:32},{l:true,t:145,h:54},{l:true,t:210,h:54},{l:false,t:155,h:72}].map((b,i) => (
                <div key={i} style={{ position: 'absolute',
                                      [b.l ? 'left' : 'right']: -3, top: b.t,
                                      width: 3, height: b.h,
                                      borderRadius: b.l ? '4px 0 0 4px' : '0 4px 4px 0',
                                      background: '#48484a' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── App Store badges ─────────────────────────────────────────────── */}
      <section style={{ background: '#080604', borderTop: `1px solid ${gold}1a`,
                        padding: '4rem 2.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <p style={{ fontFamily: sans, fontSize: '10px', color: `${gold}80`,
                      textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '0.75rem' }}>
            {t.appSoon}
          </p>
          <h3 style={{ fontFamily: serif, fontSize: '1.5rem', color: cream, marginBottom: '0.5rem' }}>
            {t.appTitle}
          </h3>
          <p style={{ fontFamily: sans, fontSize: '12px', color: `${cream}59`,
                      marginBottom: '2rem', lineHeight: 1.7 }}>{t.appSub}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {[{ path: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z', label: 'App Store' },
             { path: 'M3.18 23.76c.3.18.65.22.99.1l12.45-7.19-2.77-2.77-10.67 9.86zm-1.9-20.1C1.1 3.9 1 4.18 1 4.5v15c0 .32.1.6.28.84l.09.08 8.4-8.4v-.2L1.37 3.57l-.09.09zm18.42 8.89l-2.38-1.38-3.06 3.06 3.06 3.05 2.4-1.39c.68-.4.68-1.04-.02-1.34zM4.17.24L16.62 7.43l-2.77 2.77L3.18.34C3.52.22 3.87.06 4.17.24z', label: 'Google Play' }
            ].map(btn => (
              <div key={btn.label}
                   style={{ display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.875rem 1.5rem', borderRadius: 12, width: 192,
                            justifyContent: 'center', opacity: 0.5, cursor: 'not-allowed',
                            border: `1px solid ${cream}1a`, background: `${cream}08` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill={`${cream}99`}>
                  <path d={btn.path} />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontFamily: sans, fontSize: '8px', color: `${cream}66`,
                               textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                    Próximamente
                  </p>
                  <p style={{ fontFamily: sans, fontSize: '14px', color: `${cream}99`,
                               fontWeight: 600 }}>{btn.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{ background: '#050302', borderTop: `1px solid ${gold}14`, padding: '2.5rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                        justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookBranchIcon size={16} />
              <span style={{ fontFamily: sans, fontSize: '12px', color: `${cream}4d`,
                             fontWeight: 600, letterSpacing: '0.05em' }}>
                MyLifeStory™
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { label: 'Help',     href: '/help' },
                { label: 'Privacy',  href: '/privacy' },
                { label: 'Terms',    href: `${APP_URL}/app/terms` },
                { label: 'Contact',  href: 'mailto:hello@mylegacystoryapp.com' },
              ].map(l => (
                <a key={l.label} href={l.href}
                   style={{ fontFamily: sans, fontSize: '12px', color: `${cream}4d`,
                            textDecoration: 'none' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${cream}0d`, paddingTop: '1.5rem',
                        textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            <p style={{ fontFamily: sans, fontSize: '10px', color: `${cream}33`, lineHeight: 1.6 }}>
              {t.legalLine1(new Date().getFullYear())}
            </p>
            <p style={{ fontFamily: sans, fontSize: '10px', color: `${cream}26`, lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>
              {t.legalLine2}
            </p>
            <p style={{ fontFamily: sans, fontSize: '10px', color: `${cream}1f`, lineHeight: 1.6, marginTop: '0.25rem' }}>
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
