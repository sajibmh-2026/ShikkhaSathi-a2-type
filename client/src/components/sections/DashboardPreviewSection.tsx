// ── Design Tokens ────────────────────────────────────────────────────────────

const SKY = '#3AAFE8'
const SKY_DARK = '#1E91CC'
const SKY_LIGHT = '#EEF9FF'
const GREEN = '#48C07A'
const GREEN_LIGHT = '#E8F8EF'
const YELLOW_LIGHT = '#FFF8E0'
const ORANGE = '#FF8B5A'
const ORANGE_LIGHT = '#FFF0E6'
const TEXT = '#1A2B3C'
const TEXT_MUTED = '#718096'
const BORDER = '#E2E8EF'
const WHITE = '#FFFFFF'

// ── Mini Bar Chart (inline SVG) ──────────────────────────────────────────────

function MiniBarChart() {
  const bars = [
    { day: 'Mon', v: 4 },
    { day: 'Tue', v: 7 },
    { day: 'Wed', v: 5 },
    { day: 'Thu', v: 9 },
    { day: 'Fri', v: 6 },
    { day: 'Sat', v: 3 },
    { day: 'Sun', v: 1 },
  ]
  const maxV = 10
  const chartH = 72

  return (
    <svg viewBox="0 0 218 108" fill="none" style={{ width: '100%' }} aria-hidden="true">
      {bars.map(({ day, v }, i) => {
        const bh = (v / maxV) * chartH
        const x = 12 + i * 29
        const isTop = v === Math.max(...bars.map((b) => b.v))
        return (
          <g key={day}>
            <rect
              x={x}
              y={chartH - bh + 4}
              width="20"
              height={bh}
              rx="4"
              fill={isTop ? GREEN : SKY}
              opacity={isTop ? 0.9 : 0.75}
            />
            <text
              x={x + 10}
              y="103"
              textAnchor="middle"
              fontFamily="'Inter',sans-serif"
              fontSize="9"
              fill={TEXT_MUTED}
            >
              {day}
            </text>
          </g>
        )
      })}
      <line x1="6" y1="76" x2="212" y2="76" stroke={BORDER} strokeWidth="1" />
    </svg>
  )
}

// ── Sidebar Nav Items ────────────────────────────────────────────────────────

const SIDEBAR_NAV = [
  { icon: '🏠', label: 'Dashboard', active: true },
  { icon: '📚', label: 'My Lessons', active: false },
  { icon: '👥', label: 'Students', active: false },
  { icon: '📊', label: 'Reports', active: false },
  { icon: '⚙️', label: 'Settings', active: false },
]

// ── Stats Data ───────────────────────────────────────────────────────────────

const STATS = [
  { label: 'Students', value: '32', icon: '👥', color: SKY, bg: SKY_LIGHT },
  { label: 'Lessons This Week', value: '9', icon: '📚', color: GREEN, bg: GREEN_LIGHT },
  { label: 'Avg Score', value: '78%', icon: '⭐', color: '#C09010', bg: YELLOW_LIGHT },
  { label: 'Hours Saved', value: '4.5h', icon: '⏰', color: ORANGE, bg: ORANGE_LIGHT },
]

// ── Recent Lessons Data ──────────────────────────────────────────────────────

const RECENT_LESSONS = [
  { subject: 'Math', topic: 'Addition — Class 2', time: '2h ago', color: SKY },
  { subject: 'English', topic: 'Reading: Animals', time: '5h ago', color: GREEN },
  { subject: 'Science', topic: 'Plant Life Cycle', time: '1d ago', color: ORANGE },
  { subject: 'Bangla', topic: 'স্বরবর্ণ পরিচয়', time: '2d ago', color: '#A78BFA' },
]

// ── Quick Actions Data ───────────────────────────────────────────────────────

const QUICK_ACTIONS = ['✨ New Lesson', '📋 Worksheet', '📝 Exam', '📨 Report']

// ── Dashboard Preview Section Component ──────────────────────────────────────

export default function DashboardPreviewSection() {
  return (
    <section
      aria-label="Dashboard Preview"
      style={{ background: '#F8F5F0', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* ── Section Header ── */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          {/* Badge pill */}
          <div
            className="inline-block"
            style={{
              background: `${SKY}1A`,
              borderRadius: 100,
              padding: '5px 18px',
              marginBottom: 12,
            }}
          >
            <span
              className="font-poppins font-semibold uppercase"
              style={{ fontSize: 12, letterSpacing: '0.06em', color: SKY }}
            >
              Teacher Dashboard
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-poppins font-bold text-text"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: 12 }}
          >
            Everything in one place
          </h2>

          {/* Description */}
          <p
            className="text-text-mid mx-auto"
            style={{ fontSize: 16, maxWidth: 460 }}
          >
            Your AI teaching assistant — lessons, students, reports, and quick
            actions all at a glance.
          </p>
        </div>

        {/* ── Browser Frame ── */}
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(26,43,60,0.16)',
            border: `1px solid ${BORDER}`,
          }}
        >
          {/* ── Chrome Bar ── */}
          <div
            style={{
              background: '#F0F4F8',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {/* Traffic light dots */}
            <div style={{ display: 'flex', gap: 6 }}>
              {['#FF5F57', '#FFBD2E', '#28CA41'].map((c) => (
                <div
                  key={c}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: c,
                  }}
                />
              ))}
            </div>
            {/* URL bar */}
            <div
              style={{
                flex: 1,
                background: WHITE,
                borderRadius: 7,
                padding: '5px 14px',
                fontSize: 12,
                color: TEXT_MUTED,
                fontFamily: "'Inter',sans-serif",
              }}
            >
              app.shikkhasathi.ai/dashboard
            </div>
          </div>

          {/* ── Dashboard Body ── */}
          <div
            style={{
              display: 'flex',
              background: '#F8FAFC',
              minHeight: 460,
            }}
          >
            {/* ── Sidebar ── */}
            <div
              className="ss-db-sidebar"
              style={{
                width: 200,
                background: TEXT,
                padding: '20px 12px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column' as const,
              }}
            >
              {/* Logo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 28,
                  paddingLeft: 8,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    background: SKY,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  🦉
                </div>
                <span className="font-poppins font-bold" style={{ fontSize: 12, color: WHITE }}>
                  ShikkhaSathi
                </span>
              </div>

              {/* Nav items */}
              {SIDEBAR_NAV.map(({ icon, label, active }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '9px 12px',
                    borderRadius: 8,
                    marginBottom: 2,
                    background: active ? `${SKY}28` : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: active ? 600 : 400,
                      color: active ? SKY : '#8BA0B8',
                      fontFamily: "'Inter',sans-serif",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}

              {/* Create with AI card */}
              <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                <div
                  style={{
                    background: `${SKY}22`,
                    borderRadius: 10,
                    padding: 12,
                    border: `1px solid ${SKY}30`,
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 4 }}>✨</div>
                  <div
                    className="font-poppins font-semibold"
                    style={{ fontSize: 11, color: SKY, marginBottom: 4 }}
                  >
                    Create with AI
                  </div>
                  <div style={{ fontSize: 10, color: '#8BA0B8' }}>
                    Start a new lesson
                  </div>
                </div>
              </div>
            </div>

            {/* ── Main Area ── */}
            <div className="ss-db-main" style={{ flex: 1, padding: 22, overflow: 'hidden' }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 18,
                }}
              >
                <div>
                  <h3
                    className="font-poppins font-bold text-text"
                    style={{ fontSize: 16, marginBottom: 2 }}
                  >
                    Good morning, Ms. Rina! ☀️
                  </h3>
                  <p style={{ fontSize: 12, color: TEXT_MUTED }}>
                    Thursday, 18 July 2026
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${SKY}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    🔔
                  </div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg,${SKY},${SKY_DARK})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 15,
                    }}
                  >
                    👩
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                className="ss-db-stats"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                {STATS.map(({ label, value, icon, color, bg }) => (
                  <div
                    key={label}
                    style={{ background: bg, borderRadius: 10, padding: '10px 12px' }}
                  >
                    <div style={{ fontSize: 18, marginBottom: 3 }}>{icon}</div>
                    <div
                      className="font-poppins font-bold"
                      style={{ fontSize: 16, color, lineHeight: 1 }}
                    >
                      {value}
                    </div>
                    <div style={{ fontSize: 10, color: TEXT_MUTED, marginTop: 2 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart + Lessons */}
              <div
                className="ss-db-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                }}
              >
                {/* Chart */}
                <div
                  style={{ background: WHITE, borderRadius: 12, padding: 14 }}
                >
                  <div
                    className="font-poppins font-semibold text-text"
                    style={{ fontSize: 12, marginBottom: 10 }}
                  >
                    Weekly Lessons Created
                  </div>
                  <MiniBarChart />
                </div>

                {/* Recent Lessons */}
                <div
                  style={{ background: WHITE, borderRadius: 12, padding: 14 }}
                >
                  <div
                    className="font-poppins font-semibold text-text"
                    style={{ fontSize: 12, marginBottom: 10 }}
                  >
                    Recent AI Lessons
                  </div>
                  {RECENT_LESSONS.map(({ subject, topic, time, color }) => (
                    <div
                      key={topic}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 9,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          background: color,
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: TEXT }}>
                          {topic}
                        </div>
                        <div style={{ fontSize: 10, color: TEXT_MUTED }}>
                          {subject} · {time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="ss-db-actions"
                style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' as const }}
              >
                {QUICK_ACTIONS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    className="font-poppins font-semibold cursor-pointer"
                    style={{
                      background: `${SKY}12`,
                      color: SKY,
                      border: `1px solid ${SKY}30`,
                      borderRadius: 8,
                      padding: '7px 14px',
                      fontSize: 11,
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Responsive Styles ── */}
        <style>{`
          @media (max-width: 1000px) {
            .ss-db-sidebar { width: 160px !important; }
          }
          @media (max-width: 768px) {
            .ss-db-sidebar { display: none !important; }
            .ss-db-stats { grid-template-columns: repeat(2, 1fr) !important; }
            .ss-db-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
