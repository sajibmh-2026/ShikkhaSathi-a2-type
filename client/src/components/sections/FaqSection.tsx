import { useState, useCallback } from 'react'
import FaqItem from '@/components/cards/FaqItem'

// ── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Is ShikkhaSathi AI free to start?',
    a: 'Yes! You can start completely free with our Starter plan — no credit card required. Create up to 20 lessons, 10 worksheets, and 5 exams per month at no cost.',
  },
  {
    q: 'Can it generate content in Bangla?',
    a: 'Absolutely. ShikkhaSathi AI supports both English and Bangla. You can generate lesson plans, worksheets, and parent reports in either language, or in a bilingual mixed format.',
  },
  {
    q: 'Is it suitable for Play Group and Class 1 students?',
    a: 'Yes! Our AI is specifically calibrated for primary education from Play Group through Class 5. All content is age-appropriate, simple, and engaging.',
  },
  {
    q: 'How long does it take to create a lesson plan?',
    a: 'Most teachers create a complete lesson plan in under 2 minutes. Just enter your topic, class level, and subject — the AI handles the rest instantly.',
  },
  {
    q: 'Can I share materials with other teachers?',
    a: "Yes. Our platform includes a teachers' resource library where you can save, share, and discover materials created by the community.",
  },
  {
    q: 'Do parents need to download an app?',
    a: 'No app needed. Progress reports can be sent as PDF via WhatsApp, email, or printed directly. We keep it simple for everyone.',
  },
  {
    q: "Is my students' data private and safe?",
    a: "Student data is stored securely and never shared with third parties. We follow education data privacy standards. Your students' information belongs only to you.",
  },
  {
    q: 'Can I use it on my mobile phone?',
    a: 'Yes! ShikkhaSathi AI works beautifully on mobile, tablet, and desktop. Many teachers use it on their smartphone during free periods.',
  },
]

// ── FAQ Section Component ────────────────────────────────────────────────────

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index))
    },
    [],
  )

  return (
    <section
      aria-label="Frequently Asked Questions"
      style={{ background: '#F8F5F0', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 740 }}>
        {/* ── Section Header ── */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          {/* Badge pill */}
          <div
            className="inline-block"
            style={{
              background: 'rgba(58,175,232,0.10)',
              borderRadius: 100,
              padding: '5px 18px',
              marginBottom: 12,
            }}
          >
            <span
              className="font-poppins font-semibold text-sky uppercase"
              style={{ fontSize: 12, letterSpacing: '0.06em' }}
            >
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-poppins font-bold text-text"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Common questions
          </h2>
        </div>

        {/* ── FAQ List ── */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
          {FAQS.map(({ q, a }, i) => (
            <FaqItem
              key={i}
              question={q}
              answer={a}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
