import type { ReactNode } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────

export interface ChallengeCardProps {
  /** SVG icon component (36×36) */
  icon: ReactNode
  /** Challenge title */
  title: string
  /** Challenge description */
  description: string
  /** Light background color (e.g. '#FFF0E6') */
  bgColor: string
  /** Border color (e.g. '#FFD4B8') */
  borderColor: string
}

// ── Challenge Card Component ─────────────────────────────────────────────────

export default function ChallengeCard({
  icon,
  title,
  description,
  bgColor,
  borderColor,
}: ChallengeCardProps) {
  return (
    <article
      style={{
        background: bgColor,
        border: `1.5px solid ${borderColor}`,
        borderRadius: 20,
        padding: '28px 24px',
        boxShadow: '0 2px 10px rgba(26,43,60,0.05)',
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: 16 }}>{icon}</div>

      {/* Title */}
      <h3
        className="font-poppins font-bold text-text"
        style={{ fontSize: 17, marginBottom: 10 }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-text-mid"
        style={{ fontSize: 14, lineHeight: 1.65 }}
      >
        {description}
      </p>
    </article>
  )
}
