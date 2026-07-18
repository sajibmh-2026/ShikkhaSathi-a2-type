import TestimonialCard from '@/components/cards/TestimonialCard'

// ── Design Tokens ────────────────────────────────────────────────────────────

const SKY = '#3AAFE8'
const GREEN = '#48C07A'
const ORANGE = '#FF8B5A'

// ── Testimonials Data ────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'ShikkhaSathi AI has completely changed how I prepare for class. What used to take two hours now takes ten minutes. My students are more engaged than ever!',
    name: 'Ms. Rina Akter',
    school: 'Nayapur Primary School, Rajshahi',
    accent: SKY,
    hair: '#5C3D2E',
    shirt: SKY,
  },
  {
    quote:
      'Creating worksheets for different levels used to be so stressful. Now I make custom materials for every student. The parents love the progress reports too!',
    name: 'Ms. Fatema Begum',
    school: 'Grameen Biddyalay, Sylhet',
    accent: GREEN,
    hair: '#3D2B1F',
    shirt: GREEN,
  },
  {
    quote:
      'I teach Play Group to Class 2 — each class needs different content. ShikkhaSathi AI understands that. It feels like having a co-teacher who never gets tired!',
    name: 'Ms. Champa Islam',
    school: 'Shishu Niketan, Chittagong',
    accent: ORANGE,
    hair: '#5C3D2E',
    shirt: ORANGE,
  },
]

// ── Testimonials Section Component ───────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section
      aria-label="Teacher Testimonials"
      style={{ background: '#EDF5FF', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* ── Section Header ── */}
        <div className="text-center mb-[52px]">
          {/* Badge pill */}
          <div
            className="inline-block mb-3"
            style={{
              background: 'rgba(255,208,68,0.19)',
              borderRadius: 100,
              padding: '5px 18px',
            }}
          >
            <span
              className="font-poppins font-semibold uppercase"
              style={{ fontSize: 12, letterSpacing: '0.06em', color: '#9A6800' }}
            >
              Teacher Stories
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-poppins font-bold text-text"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Teachers love ShikkhaSathi AI ❤️
          </h2>
        </div>

        {/* ── Testimonials Grid ── */}
        <div
          className="ss-testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
