import type { ReactNode } from 'react'
import ChallengeCard from '@/components/cards/ChallengeCard'

// Icons
import ClockIcon from '@/components/icons/challenges/ClockIcon'
import FocusIcon from '@/components/icons/challenges/FocusIcon'
import BookIcon from '@/components/icons/challenges/BookIcon'
import FamilyIcon from '@/components/icons/challenges/FamilyIcon'

// ── Challenge Data ───────────────────────────────────────────────────────────

interface Challenge {
  icon: ReactNode
  title: string
  description: string
  bgColor: string
  borderColor: string
}

const CHALLENGES: Challenge[] = [
  {
    icon: <ClockIcon />,
    title: 'Lesson prep takes hours',
    description:
      'Planning every class, worksheet, and exam manually drains your energy before teaching even begins.',
    bgColor: '#FFF0E6',
    borderColor: '#FFD4B8',
  },
  {
    icon: <FocusIcon />,
    title: 'Students lose focus easily',
    description:
      'Keeping young learners engaged requires fresh, interactive content — which takes even more time.',
    bgColor: '#FFF8E0',
    borderColor: '#FFE8A0',
  },
  {
    icon: <BookIcon />,
    title: 'English reading is difficult',
    description:
      'Many students struggle with English reading in primary school and need extra custom materials.',
    bgColor: '#EEF9FF',
    borderColor: '#C8E0F0',
  },
  {
    icon: <FamilyIcon />,
    title: 'Parents miss student progress',
    description:
      "Busy parents rarely know how their child is doing until report cards — often too late to help.",
    bgColor: '#E8F8EF',
    borderColor: '#B8E8CC',
  },
]

// ── Challenges Section Component ─────────────────────────────────────────────

export default function ChallengesSection() {
  return (
    <section
      aria-label="Classroom Challenges"
      style={{ background: '#EDF5FF', padding: '80px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* ── Section Header ── */}
        <div className="text-center mb-[52px]">
          {/* Badge pill */}
          <div
            className="inline-block mb-3"
            style={{
              background: 'rgba(255,139,90,0.10)',
              borderRadius: 100,
              padding: '5px 18px',
            }}
          >
            <span
              className="font-poppins font-semibold uppercase"
              style={{
                fontSize: 12,
                letterSpacing: '0.06em',
                color: '#FF8B5A',
              }}
            >
              Real Classroom Struggles
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
            We hear you, Teacher. 💙
          </h2>

          {/* Description */}
          <p
            className="text-text-mid mx-auto"
            style={{ fontSize: 16, maxWidth: 500 }}
          >
            Every day, dedicated teachers face the same exhausting challenges.
            You are not alone.
          </p>
        </div>

        {/* ── Challenge Cards Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 24,
          }}
        >
          {CHALLENGES.map((challenge) => (
            <ChallengeCard key={challenge.title} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  )
}
