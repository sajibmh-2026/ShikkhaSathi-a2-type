/** Exam illustration — test paper with questions */
export default function ExamIllustration() {
  return (
    <svg viewBox="0 0 116 76" fill="none" style={{ width: 116, height: 76 }} aria-hidden="true">
      <rect width="116" height="76" rx="8" fill="#FFF8E0" />
      {/* Paper */}
      <rect x="14" y="8" width="88" height="60" rx="5" fill="white" stroke="#FFE680" strokeWidth="1.5" />
      {/* Header */}
      <rect x="22" y="16" width="72" height="8" rx="3" fill="#FFD044" opacity="0.3" />
      <text x="24" y="24" fontFamily="'Poppins',sans-serif" fontSize="7.5" fill="#9A6800" fontWeight="600">
        Weekly Exam — Class 3
      </text>
      <line x1="22" y1="30" x2="92" y2="30" stroke="#FFE8A0" strokeWidth="1" />
      {/* Questions */}
      <text x="24" y="41" fontFamily="'Inter',sans-serif" fontSize="7" fill="#718096">
        Q1: What is 5 × 6?
      </text>
      <text x="24" y="53" fontFamily="'Inter',sans-serif" fontSize="7" fill="#718096">
        Q2: Spell "pencil"
      </text>
      <text x="24" y="65" fontFamily="'Inter',sans-serif" fontSize="7" fill="#718096">
        Q3: Name a planet
      </text>
      {/* Star badge */}
      <circle cx="92" cy="64" r="10" fill="#FFD044" />
      <text x="88" y="68" fontSize="10" fill="white">
        ★
      </text>
    </svg>
  )
}
