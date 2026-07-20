import PageHero from '@/components/ui/PageHero'
import BrainIcon from '@/components/icons/features/BrainIcon'
import SheetIcon from '@/components/icons/features/SheetIcon'
import ExamIcon from '@/components/icons/features/ExamIcon'
import ReportIcon from '@/components/icons/features/ReportIcon'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import SheetIllustration from '@/components/illustrations/SheetIllustration'
import ExamIllustration from '@/components/illustrations/ExamIllustration'
import ReportIllustration from '@/components/illustrations/ReportIllustration'

// ── Feature Detail Data ──────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <BrainIcon />,
    illustration: <LessonIllustration />,
    title: 'AI Lesson Planner',
    subtitle: 'Create complete lesson plans in under 2 minutes',
    description:
      'Simply enter your topic, class level, and subject. Our AI generates structured, NCTB-aligned lesson plans with learning objectives, activities, and assessment criteria — ready to use in your next class.',
    steps: [
      'Enter topic and class level',
      'AI generates structured plan',
      'Review, customize, and save',
      'Print or share digitally',
    ],
    color: '#3AAFE8',
    bg: '#EEF9FF',
  },
  {
    icon: <SheetIcon />,
    illustration: <SheetIllustration />,
    title: 'Worksheet Generator',
    subtitle: 'Differentiated worksheets tailored to your students',
    description:
      'Generate practice worksheets with varied difficulty levels. From number tracing for Play Group to word problems for Class 5 — every worksheet is age-appropriate and curriculum-matched.',
    steps: [
      'Select subject and difficulty',
      'Choose question types',
      'AI creates printable worksheet',
      'Include answer key automatically',
    ],
    color: '#48C07A',
    bg: '#E8F8EF',
  },
  {
    icon: <ExamIcon />,
    illustration: <ExamIllustration />,
    title: 'Exam Builder',
    subtitle: 'Balanced exams with proper mark distribution',
    description:
      'Build weekly, monthly, or term exams with a mix of MCQ, short answer, and creative questions. The AI ensures proper Bloom\'s taxonomy coverage and mark distribution across topics.',
    steps: [
      'Set exam scope and duration',
      'Choose question format mix',
      'AI generates balanced paper',
      'Export as PDF or Word',
    ],
    color: '#C09010',
    bg: '#FFF8E0',
  },
  {
    icon: <ReportIcon />,
    illustration: <ReportIllustration />,
    title: 'Progress Reports',
    subtitle: 'Beautiful parent reports in Bangla or English',
    description:
      'Generate comprehensive progress reports that parents actually understand. Subject-wise performance, strengths, areas for improvement, and teacher comments — formatted as PDF and ready to share via WhatsApp.',
    steps: [
      'Select student and time period',
      'AI analyzes performance data',
      'Generate bilingual report',
      'Send via WhatsApp or print',
    ],
    color: '#FF8B5A',
    bg: '#FFF0E6',
  },
]

// ── Feature Detail Block ─────────────────────────────────────────────────────

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number]
  index: number
}) {
  const isReversed = index % 2 !== 0

  return (
    <div
      className="mx-auto flex flex-col items-center gap-10 md:gap-14"
      style={{ maxWidth: 1100, padding: '64px 24px' }}
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 w-full ${
          isReversed ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Illustration side */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div
            style={{
              background: feature.bg,
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {feature.illustration}
          </div>
        </div>

        {/* Content side */}
        <div className={`w-full md:w-1/2 ${isReversed ? 'md:text-right' : ''}`}>
          {/* Icon + Title */}
          <div className={`flex items-center gap-3 mb-3 ${isReversed ? 'md:justify-end' : ''}`}>
            <div
              className="flex items-center justify-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: feature.bg,
              }}
            >
              {feature.icon}
            </div>
            <h3
              className="font-poppins font-bold text-text"
              style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
            >
              {feature.title}
            </h3>
          </div>

          {/* Subtitle */}
          <p
            className="font-poppins font-semibold mb-4"
            style={{ fontSize: 16, color: feature.color }}
          >
            {feature.subtitle}
          </p>

          {/* Description */}
          <p
            className="text-text-mid mb-6"
            style={{ fontSize: 15, lineHeight: 1.72 }}
          >
            {feature.description}
          </p>

          {/* Steps */}
          <div className={`flex flex-col gap-3 ${isReversed ? 'md:items-end' : ''}`}>
            {feature.steps.map((step, i) => (
              <div key={i} className={`flex items-center gap-3 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                <div
                  className="flex items-center justify-center font-poppins font-bold"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: feature.bg,
                    color: feature.color,
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <span className="text-text-mid" style={{ fontSize: 14 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Features Page ────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        badge="Features"
        heading={
          <>
            AI-Powered Tools for
            <br />
            <span className="text-sky">Every Classroom</span>
          </>
        }
        description="From lesson planning to parent reports — ShikkhaSathi AI handles the heavy lifting so you can focus on what matters most: teaching."
      />

      {/* Feature Detail Blocks */}
      <div style={{ background: '#F8F5F0' }}>
        {FEATURES.map((feature, i) => (
          <div key={feature.title}>
            <FeatureBlock feature={feature} index={i} />
            {i < FEATURES.length - 1 && (
              <div
                className="mx-auto"
                style={{
                  maxWidth: 900,
                  height: 1,
                  background: '#E2E8EF',
                  margin: '0 auto',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #E8F8EF 0%, #EEF9FF 50%, #FFF8E0 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
          <h2
            className="font-poppins font-extrabold text-text"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.2, marginBottom: 14 }}
          >
            Ready to try these tools?
          </h2>
          <p className="text-text-mid mb-8" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Start free today — no credit card required.
          </p>
          <a
            href="/"
            className="inline-block font-poppins font-bold text-white"
            style={{
              background: '#3AAFE8',
              borderRadius: 14,
              padding: '14px 36px',
              fontSize: 16,
              boxShadow: '0 8px 26px #3AAFE848',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, filter 0.2s ease',
            }}
          >
            Get Started Free 🚀
          </a>
        </div>
      </section>
    </main>
  )
}
