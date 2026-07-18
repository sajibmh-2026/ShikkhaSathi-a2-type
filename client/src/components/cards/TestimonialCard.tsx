import TeacherAvatar from '@/components/illustrations/TeacherAvatar'

// ── Design Tokens ────────────────────────────────────────────────────────────

const YELLOW = '#FFD044'

// ── Types ────────────────────────────────────────────────────────────────────

export interface TestimonialCardProps {
  /** Testimonial quote */
  quote: string
  /** Teacher name */
  name: string
  /** School name and location */
  school: string
  /** Accent color hex */
  accent: string
  /** Hair fill color */
  hair: string
  /** Shirt fill color */
  shirt: string
}

// ── Testimonial Card Component ───────────────────────────────────────────────

export default function TestimonialCard({
  quote,
  name,
  school,
  accent,
  hair,
  shirt,
}: TestimonialCardProps) {
  return (
    <article
      className="bg-white transition-transform duration-250 ease-out hover:-translate-y-1"
      style={{
        borderRadius: 20,
        padding: '32px 28px',
        boxShadow: '0 2px 12px rgba(26,43,60,0.07)',
      }}
    >
      {/* Decorative open-quote mark */}
      <div
        style={{
          fontSize: 42,
          color: `${accent}44`,
          fontFamily: 'serif',
          lineHeight: 1,
          marginBottom: 10,
        }}
      >
        "
      </div>

      {/* Quote text */}
      <p
        className="text-text-mid italic"
        style={{ fontSize: 15, lineHeight: 1.72, marginBottom: 24 }}
      >
        "{quote}"
      </p>

      {/* Author row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <TeacherAvatar accent={accent} hair={hair} shirt={shirt} />
        <div>
          <div className="font-poppins font-bold text-text" style={{ fontSize: 15 }}>
            {name}
          </div>
          <div className="text-text-muted" style={{ fontSize: 12, marginTop: 2 }}>
            {school}
          </div>
          {/* Star rating */}
          <div style={{ display: 'flex', gap: 2, marginTop: 6 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: YELLOW, fontSize: 13 }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
