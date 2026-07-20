/** Worksheet illustration — stacked documents with checkmark */
export default function SheetIllustration() {
  return (
    <svg viewBox="0 0 116 76" fill="none" style={{ width: '100%', height: 'auto' }} overflow="hidden" aria-hidden="true">
      <rect width="116" height="76" rx="8" fill="#E8F8EF" />
      {/* Back document */}
      <rect x="56" y="18" width="36" height="48" rx="4" fill="white" stroke="#C8ECD8" strokeWidth="1.5" opacity="0.75" />
      <rect x="62" y="26" width="24" height="6" rx="2" fill="#48C07A" opacity="0.2" />
      {/* Front document */}
      <rect x="10" y="8" width="36" height="58" rx="4" fill="white" stroke="#C8ECD8" strokeWidth="1.5" />
      <rect x="16" y="16" width="24" height="6" rx="2" fill="#48C07A" opacity="0.28" />
      <line x1="16" y1="29" x2="40" y2="29" stroke="#C8ECD8" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="16" y1="36" x2="40" y2="36" stroke="#C8ECD8" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="16" y1="43" x2="32" y2="43" stroke="#C8ECD8" strokeWidth="1.3" strokeLinecap="round" />
      {/* Checkmark badge */}
      <circle cx="100" cy="9" r="8" fill="#48C07A" opacity="0.85" />
      <path d="M97 9l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
