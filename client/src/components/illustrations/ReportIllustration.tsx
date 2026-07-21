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
      <rect x="8" y="8" width="112" height="68" rx="5" fill="white" stroke="#FFD4B8" strokeWidth="1.5" />
      {/* Title */}
      <text x="16" y="22" fontFamily="'Poppins',sans-serif" fontSize="6.5" fill="#FF8B5A" fontWeight="700">
        Progress Report
      </text>
      {/* Rows */}
      {rows.map(({ label, pct, color }, i) => (
        <g key={label}>
          <text x="16" y={34 + i * 15} fontFamily="'Inter',sans-serif" fontSize="6" fill="#718096">
            {label}
          </text>
          <rect x="48" y={28 + i * 15} width="62" height="6" rx="3" fill="#F0F0F0" />
          <rect x="48" y={28 + i * 15} width={62 * pct / 100} height="6" rx="3" fill={color} />
          <text x="114" y={34 + i * 15} fontFamily="'Inter',sans-serif" fontSize="6" fill={color} fontWeight="600" textAnchor="end">
            {pct}%
          </text>
        </g>
      ))}
    </svg>
  )
}
