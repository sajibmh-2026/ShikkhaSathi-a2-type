// ── Types ────────────────────────────────────────────────────────────────────

export interface StepCardProps {
  /** Step number string (e.g. '01') */
  num: string
  /** Emoji icon */
  icon: string
  /** Step title */
  title: string
  /** Step description */
  description: string
  /** Accent color hex (e.g. '#3AAFE8') */
  color: string
}

// ── Step Card Component ──────────────────────────────────────────────────────

export default function StepCard({ num, icon, title, description, color }: StepCardProps) {
  return (
    <article
      className="bg-white text-center transition-transform duration-250 ease-out hover:-translate-y-1"
      style={{
        borderRadius: 20,
        padding: '32px 22px',
        boxShadow: '0 2px 12px rgba(26,43,60,0.07)',
      }}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center mx-auto"
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: `${color}18`,
          border: `2px solid ${color}28`,
          marginBottom: 16,
          fontSize: 30,
        }}
      >
        {icon}
      </div>

      {/* Step number pill */}
      <div
        className="inline-block font-poppins font-bold"
        style={{
          background: `${color}18`,
          color,
          borderRadius: 100,
          padding: '3px 14px',
          fontSize: 11,
          letterSpacing: '0.06em',
          marginBottom: 12,
        }}
      >
        STEP {num}
      </div>

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
