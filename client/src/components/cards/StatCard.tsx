// ── Types ────────────────────────────────────────────────────────────────────

export interface StatCardProps {
  /** Stat value (e.g. '12,400+') */
  value: string
  /** Stat label */
  label: string
  /** Emoji icon */
  icon: string
  /** Accent color for the value */
  color: string
}

// ── Stat Card Component ─────────────────────────────────────────────────────

export default function StatCard({ value, label, icon, color }: StatCardProps) {
  return (
    <article
      className="text-center transition-transform duration-250 ease-out hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: '32px 24px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: 38, marginBottom: 12 }}>{icon}</div>

      {/* Value */}
      <div
        className="font-poppins font-bold"
        style={{ fontSize: 38, color, lineHeight: 1, marginBottom: 6 }}
      >
        {value}
      </div>

      {/* Label */}
      <p className="text-text-mid font-medium" style={{ fontSize: 14 }}>
        {label}
      </p>
    </article>
  )
}
