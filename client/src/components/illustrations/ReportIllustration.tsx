/** Progress report illustration — bar chart with percentages */
export default function ReportIllustration() {
  const rows = [
    { label: 'Math', pct: 85, color: '#3AAFE8' },
    { label: 'English', pct: 72, color: '#48C07A' },
    { label: 'Science', pct: 90, color: '#FFD044' },
  ]

  return (
    <svg viewBox="0 0 116 76" fill="none" style={{ width: '100%', height: 'auto' }} aria-hidden="true">
      <rect width="116" height="76" rx="8" fill="#FFF0E6" />
      {/* Card */}
      <rect x="10" y="12" width="96" height="54" rx="5" fill="white" stroke="#FFD4B8" strokeWidth="1.5" />
      {/* Title */}
      <text x="18" y="26" fontFamily="'Poppins',sans-serif" fontSize="7.5" fill="#FF8B5A" fontWeight="700">
        Progress Report
      </text>
      {/* Rows */}
      {rows.map(({ label, pct, color }, i) => (
        <g key={label}>
          <text x="18" y={39 + i * 14} fontFamily="'Inter',sans-serif" fontSize="7" fill="#718096">
            {label}
          </text>
          <rect x="46" y={32 + i * 14} width="54" height="6" rx="3" fill="#F0F0F0" />
          <rect x="46" y={32 + i * 14} width={54 * pct / 100} height="6" rx="3" fill={color} />
          <text x="104" y={39 + i * 14} fontFamily="'Inter',sans-serif" fontSize="7" fill={color} fontWeight="600" textAnchor="end">
            {pct}%
          </text>
        </g>
      ))}
    </svg>
  )
}
