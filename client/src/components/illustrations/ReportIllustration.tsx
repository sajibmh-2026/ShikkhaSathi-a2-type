/** Progress report illustration — bar chart with percentages */
export default function ReportIllustration() {
  const rows = [
    { label: 'Math', pct: 85, color: '#3AAFE8' },
    { label: 'English', pct: 72, color: '#48C07A' },
    { label: 'Science', pct: 90, color: '#FFD044' },
  ]

  return (
    <svg viewBox="0 0 128 84" fill="none" style={{ width: '100%', maxWidth: 300, height: 'auto' }} overflow="hidden" aria-hidden="true">
      <rect width="128" height="84" rx="8" fill="#FFF0E6" />
      {/* Card */}
      <rect x="10" y="12" width="108" height="60" rx="5" fill="white" stroke="#FFD4B8" strokeWidth="1.5" />
      {/* Title */}
      <text x="18" y="28" fontFamily="'Poppins',sans-serif" fontSize="8" fill="#FF8B5A" fontWeight="700">
        Progress Report
      </text>
      {/* Rows */}
      {rows.map(({ label, pct, color }, i) => (
        <g key={label}>
          <text x="18" y={42 + i * 16} fontFamily="'Inter',sans-serif" fontSize="7.5" fill="#718096">
            {label}
          </text>
          <rect x="52" y={35 + i * 16} width="56" height="7" rx="3.5" fill="#F0F0F0" />
          <rect x="52" y={35 + i * 16} width={56 * pct / 100} height="7" rx="3.5" fill={color} />
          <text x="112" y={42 + i * 16} fontFamily="'Inter',sans-serif" fontSize="7.5" fill={color} fontWeight="600" textAnchor="end">
            {pct}%
          </text>
        </g>
      ))}
    </svg>
  )
}
