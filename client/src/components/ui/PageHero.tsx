// ── PageHero ─────────────────────────────────────────────────────────────────
// Reusable hero section for inner pages (Features, About, Contact)
// Same design language as landing page: gradient bg, badge, heading, description

import type { ReactNode } from 'react'

interface PageHeroProps {
  badge: string
  badgeColor?: string
  badgeBg?: string
  heading: ReactNode
  description: string
  gradient?: string
  children?: ReactNode
}

export default function PageHero({
  badge,
  badgeColor = '#3AAFE8',
  badgeBg = 'rgba(58,175,232,0.10)',
  heading,
  description,
  gradient = 'linear-gradient(135deg, #EEF9FF 0%, #F8F5F0 50%, #E8F8EF 100%)',
  children,
}: PageHeroProps) {
  return (
    <section
      aria-label="Page header"
      style={{
        background: gradient,
        padding: '120px 24px 64px',
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: 680 }}>
        {/* Badge pill */}
        <div
          className="inline-block"
          style={{
            background: badgeBg,
            borderRadius: 100,
            padding: '5px 18px',
            marginBottom: 16,
          }}
        >
          <span
            className="font-poppins font-semibold uppercase"
            style={{ fontSize: 12, letterSpacing: '0.06em', color: badgeColor }}
          >
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-poppins font-extrabold text-text"
          style={{
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            lineHeight: 1.2,
            marginBottom: 18,
          }}
        >
          {heading}
        </h1>

        {/* Description */}
        <p
          className="text-text-mid mx-auto"
          style={{ fontSize: 17, lineHeight: 1.72, maxWidth: 520 }}
        >
          {description}
        </p>

        {/* Optional children (buttons, etc.) */}
        {children && (
          <div style={{ marginTop: 32 }}>{children}</div>
        )}
      </div>
    </section>
  )
}
