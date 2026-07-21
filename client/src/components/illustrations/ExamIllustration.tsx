/** Exam illustration — test paper with questions */
export default function ExamIllustration() {
  return (
    <svg viewBox="0 0 128 84" fill="none" style={{ width: '100%', maxWidth: 300, height: 'auto' }} overflow="hidden" aria-hidden="true">
      <rect width="128" height="84" rx="8" fill="#FFF8E0" />
      {/* Paper */}
      <rect x="8" y="6" width="112" height="72" rx="5" fill="white" stroke="#FFE680" strokeWidth="1.5" />
      {/* Header */}
      <rect x="16" y="14" width="96" height="10" rx="3" fill="#FFD044" opacity="0.3" />
      <text x="20" y="23" fontFamily="'Poppins',sans-serif" fontSize="6.5" fill="#9A6800" fontWeight="600">
        Weekly Exam — Class 3
      </text>
      <line x1="16" y1="28" x2="112" y2="28" stroke="#FFE8A0" strokeWidth="0.8" />
      {/* Questions */}
      <text x="20" y="40" fontFamily="'Inter',sans-serif" fontSize="6" fill="#718096">
        Q1: What is 5 × 6?
      </text>
      <text x="20" y="52" fontFamily="'Inter',sans-serif" fontSize="6" fill="#718096">
        Q2: Spell "pencil"
      </text>
      <text x="20" y="64" fontFamily="'Inter',sans-serif" fontSize="6" fill="#718096">
        Q3: Name a planet
      </text>
      {/* Star badge */}
      <circle cx="100" cy="66" r="10" fill="#FFD044" />
      <text x="96" y="70" fontSize="9" fill="white">
        ★
      </text>
    </svg>
  )
}
