import type { ReactNode } from 'react'
import FeatureCard from '@/components/cards/FeatureCard'

// Icons
import BrainIcon from '@/components/icons/features/BrainIcon'
import SheetIcon from '@/components/icons/features/SheetIcon'
import ExamIcon from '@/components/icons/features/ExamIcon'
import ReportIcon from '@/components/icons/features/ReportIcon'

// Illustrations
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import SheetIllustration from '@/components/illustrations/SheetIllustration'
import ExamIllustration from '@/components/illustrations/ExamIllustration'
import ReportIllustration from '@/components/illustrations/ReportIllustration'

// ── Feature Data ─────────────────────────────────────────────────────────────

interface Feature {
  icon: ReactNode
  illustration: ReactNode
  title: string
  description: string
  accent: string
  headerBg: string
  buttonLabel: string
}

const FEATURES: Feature[] = [
  {
    icon: <BrainIcon />,
    illustration: <LessonIllustration />,
    title: 'AI Lesson Planner',
    description:
      'Generate complete, curriculum-aligned lesson plans in seconds. Just type your topic and class level.',
    accent: '#3AAFE8',
    headerBg: '#EEF9FF',
    buttonLabel: 'Try Planner →',
  },
  {
    icon: <SheetIcon />,
    illustration: <SheetIllustration />,
    title: 'Worksheet Generator',
    description:
      "Create printable worksheets with exercises tailored to your students' level and subject perfectly.",
    accent: '#48C07A',
    headerBg: '#E8F8EF',
    buttonLabel: 'Create Worksheet →',
  },
  {
    icon: <ExamIcon />,
    illustration: <ExamIllustration />,
    title: 'Weekly Exam Builder',
    description:
      'Build balanced exams with multiple question types. Save, reuse, and share with other teachers.',
    accent: '#C09010',
    headerBg: '#FFF8E0',
    buttonLabel: 'Build Exam →',
  },
  {
    icon: <ReportIcon />,
    illustration: <ReportIllustration />,
    title: 'Parent Progress Reports',
    description:
      'Auto-generate readable progress reports for parents — in Bangla or English, with one click.',
    accent: '#FF8B5A',
    headerBg: '#FFF0E6',
    buttonLabel: 'View Reports →',
  },
]

// ── Features Section Component ───────────────────────────────────────────────

export default function FeaturesSection() {
  return (
    <section
      aria-label="AI-Powered Features"
      style={{ background: '#F8F5F0', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* ── Section Header ── */}
        <div className="text-center mb-[52px]">
          {/* Badge pill */}
          <div
            className="inline-block mb-3"
            style={{
              background: 'rgba(58,175,232,0.10)',
              borderRadius: 100,
              padding: '5px 18px',
            }}
          >
            <span
              className="font-poppins font-semibold text-sky uppercase"
              style={{ fontSize: 12, letterSpacing: '0.06em' }}
            >
              AI-Powered Tools
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-poppins font-bold text-text mx-auto"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              marginBottom: 12,
            }}
          >
            Your classroom, powered by AI ✨
          </h2>

          {/* Description */}
          <p
            className="text-text-mid mx-auto"
            style={{ fontSize: 16, maxWidth: 500 }}
          >
            Four tools that work together to make your teaching life easier,
            every single day.
          </p>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 24,
          }}
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
