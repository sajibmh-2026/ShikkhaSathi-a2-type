/** Exam illustration — test paper with questions */
export default function ExamIllustration() {
  return (
    <svg viewBox="0 0 128 84" fill="none" style={{ width: '100%', maxWidth: 300, height: 'auto' }} overflow="hidden" aria-hidden="true">
      <rect width="128" height="84" rx="8" fill="#FFF8E0" />
      {/* Paper */}
      <rect x="14" y="8" width="100" height="68" rx="5" fill="white" stroke="#FFE680" strokeWidth="1.5" />
      {/* Header */}
      <rect x="22" y="16" width="84" height="9" rx="3" fill="#FFD044" opacity="0.3" />
      <text x="24" y="25" fontFamily="'Poppins',sans-serif" fontSize="8" fill="#9A6800" fontWeight="600">
        Weekly Exam — Class 3
      </text>
      <line x1="22" y1="31" x2="104" y2="31" stroke="#FFE8A0" strokeWidth="1" />
      {/* Questions */}
      <text x="24" y="44" fontFamily="'Inter',sans-serif" fontSize="7.5" fill="#718096">
        Q1: What is 5 × 6?
      </text>
      <text x="24" y="57" fontFamily="'Inter',sans-serif" fontSize="7.5" fill="#718096">
        Q2: Spell "pencil"
      </text>
      <text x="24" y="70" fontFamily="'Inter',sans-serif" fontSize="7.5" fill="#718096">
        Q3: Name a planet
      </text>
      {/* Star badge */}
      <circle cx="104" cy="72" r="11" fill="#FFD044" />
      <text x="99" y="77" fontSize="12" fill="white">
        ★
      </text>
    </svg>
  )
}
