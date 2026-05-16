const sizes = {
  sm: { icon: 28, fontSize: '0.95rem', gap: '8px' },
  md: { icon: 40, fontSize: '1.25rem', gap: '10px' },
  lg: { icon: 64, fontSize: '2rem',    gap: '14px' },
}

export function LogoBookBranch({ variant = 'light', size = 'md', showName = true }) {
  const { icon, fontSize, gap } = sizes[size]
  const gold   = '#B8924A'
  const cream  = '#F5F0E8'
  const ink    = '#1C1814'
  const stroke = variant === 'light' ? cream : ink
  const accent = gold

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      <svg width={icon} height={icon} viewBox="0 0 48 48" fill="none">
        <path d="M24 38 C24 38 10 34 8 14 L8 10 C8 10 16 12 24 18"
          stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 38 C24 38 38 34 40 14 L40 10 C40 10 32 12 24 18"
          stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18 L24 38"
          stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 28 C24 28 28 24 32 22"
          stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 24 C24 24 20 20 18 17"
          stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="22" r="2" fill={accent} />
        <circle cx="18" cy="17" r="1.5" fill={accent} />
        <circle cx="28" cy="19" r="1.2" fill={accent} opacity="0.7" />
      </svg>
      {showName && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize,
            fontWeight: 600,
            color: variant === 'light' ? cream : ink,
            letterSpacing: '0.02em',
          }}>
            MyLegacyStory
            <sup style={{ fontSize: '0.45em', color: accent, marginLeft: '1px' }}>™</sup>
          </span>
        </div>
      )}
    </div>
  )
}

export function BookBranchIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="18" height="24" rx="2"
        stroke="#C4A36A" strokeWidth="1.5" fill="none" />
      <line x1="12" y1="12" x2="22" y2="12" stroke="#C4A36A" strokeWidth="1" opacity="0.6" />
      <line x1="12" y1="16" x2="22" y2="16" stroke="#C4A36A" strokeWidth="1" opacity="0.6" />
      <line x1="12" y1="20" x2="18" y2="20" stroke="#C4A36A" strokeWidth="1" opacity="0.6" />
      <circle cx="30" cy="14" r="4" stroke="#C4A36A" strokeWidth="1.5" fill="none" />
      <line x1="26" y1="18" x2="22" y2="22" stroke="#C4A36A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="28" r="3" stroke="#C4A36A" strokeWidth="1.5" fill="none" />
      <line x1="26" y1="26" x2="22" y2="24" stroke="#C4A36A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default LogoBookBranch
