import HeroIllustration from '@/components/illustrations/HeroIllustration'

// ── Trust Badges Data ────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: '👩‍🏫', text: '1,200+ Teachers' },
  { icon: '🆓', text: 'Free to Start' },
  { icon: '🇧🇩', text: 'Made for Bangladesh' },
] as const

// ── Floating Badge Component ─────────────────────────────────────────────────

interface FloatingBadgeProps {
  children: React.ReactNode
  position: 'top-right' | 'bottom-left'
  animationClass: string
}

function FloatingBadge({ children, position, animationClass }: FloatingBadgeProps) {
  const positionClasses = {
    'top-right': 'top-[8%] -right-[2%]',
    'bottom-left': 'bottom-[14%] -left-[4%]',
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} ${animationClass} bg-white rounded-xl flex items-center gap-2`}
      style={{
        padding: position === 'top-right' ? '9px 16px' : '11px 16px',
        borderRadius: position === 'top-right' ? 12 : 13,
        boxShadow: '0 6px 20px rgba(26,43,60,0.12)',
      }}
    >
      {children}
    </div>
  )
}

// ── Hero Section Component ───────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="flex items-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F8F5F0 0%, #EDF5FF 55%, #E8F8EF 100%)',
        padding: '100px 24px 64px',
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 1200 }}>
        {/* ── Two-Column Grid ── */}
        <div
          className="items-center"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* ── Left: Content ── */}
          <div>
            {/* Badge pill */}
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                background: 'rgba(58,175,232,0.09)',
                border: '1px solid rgba(58,175,232,0.19)',
                borderRadius: 100,
                padding: '6px 18px',
              }}
            >
              <span style={{ fontSize: 14 }}>✨</span>
              <span
                className="font-poppins font-semibold text-sky"
                style={{ fontSize: 13 }}
              >
                AI for Primary Education
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-poppins font-extrabold text-text leading-tight mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.15 }}
            >
              Teach Smarter.
              <br />
              <span className="text-sky">Inspire Every </span>
              <span className="text-green">Student.</span>
            </h1>

            {/* Description */}
            <p
              className="text-text-mid mb-9 max-w-[460px]"
              style={{ fontSize: 17, lineHeight: 1.75 }}
            >
              Save hours preparing lessons, worksheets, and weekly exams with AI
              designed for primary school teachers — from Play Group to Class 5.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                type="button"
                className="font-poppins font-bold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:filter hover:brightness-110"
                style={{
                  fontSize: 16,
                  padding: '14px 34px',
                  borderRadius: 13,
                  border: 'none',
                  background: '#3AAFE8',
                  boxShadow: '0 6px 22px rgba(58,175,232,0.27)',
                }}
              >
                Start Free →
              </button>
              <button
                type="button"
                className="font-poppins font-semibold text-text cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontSize: 16,
                  padding: '14px 28px',
                  borderRadius: 13,
                  border: '1.5px solid #E2E8EF',
                  background: 'white',
                  boxShadow: '0 2px 10px rgba(26,43,60,0.06)',
                }}
              >
                Explore Features
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-[22px]">
              {TRUST_BADGES.map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-[7px] text-text-muted font-medium"
                  style={{ fontSize: 13 }}
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Illustration ── */}
          <div className="relative hidden lg:block" style={{ position: 'relative' }}>
            {/* Floating illustration */}
            <div className="ss-float">
              <HeroIllustration />
            </div>

            {/* Floating badge: AI Ready */}
            <FloatingBadge position="top-right" animationClass="ss-float2">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: 'rgba(58,175,232,0.13)',
                }}
              >
                ✨
              </div>
              <span className="font-poppins font-semibold text-sky" style={{ fontSize: 12 }}>
                AI Ready!
              </span>
            </FloatingBadge>

            {/* Floating badge: 2 min */}
            <FloatingBadge position="bottom-left" animationClass="ss-float3">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: '#E8F8EF',
                  fontSize: 16,
                }}
              >
                ⏱️
              </div>
              <div>
                <div className="font-poppins font-bold text-green leading-none" style={{ fontSize: 14 }}>
                  2 min
                </div>
                <div className="text-text-muted" style={{ fontSize: 11 }}>
                  per lesson plan
                </div>
              </div>
            </FloatingBadge>
          </div>
        </div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 1023px) {
          section[aria-label="Hero"] > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
