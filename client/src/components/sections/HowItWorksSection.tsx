import StepCard from '@/components/cards/StepCard'

// ── Design Tokens ────────────────────────────────────────────────────────────

const SKY = '#3AAFE8'
const GREEN = '#48C07A'
const YELLOW = '#FFD044'
const ORANGE = '#FF8B5A'

// ── Steps Data ───────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    icon: '📝',
    title: 'Create a Lesson',
    description: 'Type your topic, class level, and subject. Takes 10 seconds.',
    color: SKY,
  },
  {
    num: '02',
    icon: '✨',
    title: 'AI Builds Materials',
    description: 'Lesson plan, worksheets, and exam questions generated instantly.',
    color: GREEN,
  },
  {
    num: '03',
    icon: '👩‍🏫',
    title: 'Teach Your Students',
    description: 'Walk into class with everything ready. Focus on your students.',
    color: YELLOW,
  },
  {
    num: '04',
    icon: '📊',
    title: 'Track Progress',
    description: 'Monitor results and share reports with parents automatically.',
    color: ORANGE,
  },
]

// ── How It Works Section Component ───────────────────────────────────────────

export default function HowItWorksSection() {
  return (
    <section
      aria-label="How It Works"
      style={{ background: '#EDF5FF', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* ── Section Header ── */}
        <div className="text-center mb-[52px]">
          {/* Badge pill */}
          <div
            className="inline-block mb-3"
            style={{
              background: 'rgba(72,192,122,0.10)',
              borderRadius: 100,
              padding: '5px 18px',
            }}
          >
            <span
              className="font-poppins font-semibold text-green uppercase"
              style={{ fontSize: 12, letterSpacing: '0.06em' }}
            >
              Simple Process
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-poppins font-bold text-text"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Ready to teach in 4 steps
          </h2>
        </div>

        {/* ── Steps Grid ── */}
        <div
          className="ss-step-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {STEPS.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>

        {/* ── Responsive grid styles ── */}
        <style>{`
          @media (max-width: 1000px) {
            .ss-step-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .ss-step-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
