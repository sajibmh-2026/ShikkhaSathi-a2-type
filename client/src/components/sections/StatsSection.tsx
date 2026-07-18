import StatCard from '@/components/cards/StatCard'

// ── Design Tokens ────────────────────────────────────────────────────────────

const SKY = '#3AAFE8'
const SKY_DARK = '#1E91CC'
const GREEN = '#48C07A'
const YELLOW = '#FFD044'
const ORANGE = '#FF8B5A'

// ── Stats Data ───────────────────────────────────────────────────────────────

const STATS = [
  { value: '12,400+', label: 'Lessons Created', icon: '📚', color: SKY },
  { value: '1,200+', label: 'Teachers Helped', icon: '👩‍🏫', color: GREEN },
  { value: '28,000+', label: 'Students Supported', icon: '🌟', color: YELLOW },
  { value: '9,600+', label: 'Hours Saved', icon: '⏰', color: ORANGE },
]

// ── Stats Section Component ─────────────────────────────────────────────────

export default function StatsSection() {
  return (
    <section
      aria-label="Platform Statistics"
      style={{
        background: `linear-gradient(135deg, ${SKY} 0%, ${SKY_DARK} 40%, ${GREEN} 100%)`,
        padding: '80px 24px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* ── Section Header ── */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          {/* Heading */}
          <h2
            className="font-poppins font-bold"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              color: '#FFFFFF',
              marginBottom: 12,
            }}
          >
            Trusted by teachers across Bangladesh 🇧🇩
          </h2>

          {/* Description */}
          <p
            className="mx-auto"
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 420,
            }}
          >
            Real numbers from real classrooms — growing every day.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div
          className="ss-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* ── Responsive Styles ── */}
        <style>{`
          @media (max-width: 1000px) {
            .ss-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .ss-stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
