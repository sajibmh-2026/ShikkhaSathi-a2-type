/** Lesson plan illustration — document with AI arrow */
export default function LessonIllustration() {
  return (
    <svg viewBox="0 0 116 76" fill="none" style={{ width: '100%', height: 'auto' }} overflow="hidden" aria-hidden="true">
      <rect width="116" height="76" rx="8" fill="#EEF9FF" />
      {/* Document */}
      <rect x="8" y="12" width="44" height="54" rx="4" fill="white" stroke="#C8E0F0" strokeWidth="1.5" />
      <rect x="14" y="20" width="32" height="6" rx="2" fill="#3AAFE8" opacity="0.3" />
      <line x1="14" y1="33" x2="44" y2="33" stroke="#D1E9F7" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="40" x2="44" y2="40" stroke="#D1E9F7" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="47" x2="38" y2="47" stroke="#D1E9F7" strokeWidth="1.4" strokeLinecap="round" />
      {/* AI circle */}
      <circle cx="86" cy="36" r="22" fill="#3AAFE8" opacity="0.1" />
      <circle cx="86" cy="36" r="15" fill="#3AAFE8" opacity="0.15" />
      <text x="77" y="41" fontFamily="'Poppins',sans-serif" fontSize="13" fill="#3AAFE8" fontWeight="700">
        AI
      </text>
      {/* Arrow */}
      <path d="M60 36 L68 36" stroke="#3AAFE8" strokeWidth="2" strokeLinecap="round" />
      <polygon points="66,32 73,36 66,40" fill="#3AAFE8" />
    </svg>
  )
}
