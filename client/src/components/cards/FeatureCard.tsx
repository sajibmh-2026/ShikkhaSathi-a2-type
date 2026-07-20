import type { ReactNode } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────

export interface FeatureCardProps {
  /** SVG icon component (32×32) */
  icon: ReactNode
  /** Mini illustration shown in the card header */
  illustration: ReactNode
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Accent color hex (e.g. '#3AAFE8') */
  accent: string
  /** Light background color for the card header */
  headerBg: string
  /** Button label text */
  buttonLabel: string
}

// ── Feature Card Component ───────────────────────────────────────────────────

export default function FeatureCard({
  icon,
  illustration,
  title,
  description,
  accent,
  headerBg,
  buttonLabel,
}: FeatureCardProps) {
  return (
    <article
      className="bg-white overflow-hidden transition-transform duration-250 ease-out hover:-translate-y-1.5"
      style={{
        borderRadius: 20,
        boxShadow: '0 2px 14px rgba(26,43,60,0.07)',
      }}
    >
      {/* ── Header: icon + illustration ── */}
      <div
        className="flex justify-between items-start"
        style={{ background: headerBg, padding: '22px 22px 14px' }}
      >
        {/* Icon container */}
        <div
          className="bg-white flex items-center justify-center"
          style={{
            padding: 10,
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(26,43,60,0.08)',
          }}
        >
          {icon}
        </div>
        {/* Mini illustration */}
        <div style={{ width: 116, flexShrink: 0 }}>
          {illustration}
        </div>
      </div>

      {/* ── Body: text + button ── */}
      <div style={{ padding: '20px 22px 24px' }}>
        <h3
          className="font-poppins font-bold text-text"
          style={{ fontSize: 18, marginBottom: 10 }}
        >
          {title}
        </h3>
        <p
          className="text-text-mid"
          style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}
        >
          {description}
        </p>
        <button
          type="button"
          className="font-poppins font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          style={{
            fontSize: 13,
            padding: '8px 18px',
            borderRadius: 9,
            border: `1px solid ${accent}40`,
            background: `${accent}18`,
            color: accent,
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}
