import { BookOpen, Clock, ChevronRight } from 'lucide-react'
import { recentLessonPlans, type LessonPlan } from '@/data/mock/dashboard'

// ── Status Styles ────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<
  LessonPlan['status'],
  { color: string; bg: string; label: string }
> = {
  completed: { color: '#48C07A', bg: '#E8F8EF', label: 'Completed' },
  draft: { color: '#718096', bg: '#F0F0F0', label: 'Draft' },
  scheduled: { color: '#3AAFE8', bg: '#EEF9FF', label: 'Scheduled' },
}

// ── Component ────────────────────────────────────────────────────────────────

export default function RecentLessonPlans() {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8EF',
        borderRadius: 14,
        padding: '20px',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BookOpen size={18} style={{ color: '#3AAFE8' }} />
          <h3
            className="font-poppins font-semibold text-text"
            style={{ fontSize: 16 }}
          >
            Recent Lesson Plans
          </h3>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 cursor-pointer font-poppins"
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#3AAFE8',
            background: 'none',
            border: 'none',
            padding: '4px 8px',
          }}
        >
          View All <ChevronRight size={14} />
        </button>
      </div>

      {/* Table Header — desktop */}
      <div
        className="hidden md:grid text-text-muted"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr 1fr 100px',
          gap: 12,
          padding: '8px 12px',
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: '1px solid #F0F0F0',
        }}
      >
        <span>Lesson</span>
        <span>Subject</span>
        <span>Class</span>
        <span>Date</span>
        <span>Status</span>
      </div>

      {/* Rows */}
      {recentLessonPlans.map((plan) => {
        const status = STATUS_STYLES[plan.status]
        return (
          <div
            key={plan.id}
            className="md:grid flex flex-col"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr 1fr 100px',
              gap: 12,
              padding: '14px 12px',
              borderBottom: '1px solid #F8F8F8',
              alignItems: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#FAFCFE')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            {/* Title + Duration */}
            <div>
              <div
                className="font-poppins font-medium text-text"
                style={{ fontSize: 13, marginBottom: 2 }}
              >
                {plan.title}
              </div>
              <div className="flex items-center gap-1 text-text-muted">
                <Clock size={11} />
                <span style={{ fontSize: 11 }}>{plan.duration}</span>
              </div>
            </div>

            {/* Subject */}
            <span className="text-text-mid" style={{ fontSize: 13 }}>
              {plan.subject}
            </span>

            {/* Class */}
            <span className="text-text-mid" style={{ fontSize: 13 }}>
              {plan.classLevel}
            </span>

            {/* Date */}
            <span className="text-text-muted" style={{ fontSize: 13 }}>
              {plan.date}
            </span>

            {/* Status */}
            <span
              className="font-poppins font-semibold"
              style={{
                fontSize: 11,
                color: status.color,
                background: status.bg,
                padding: '4px 10px',
                borderRadius: 6,
                textAlign: 'center',
                width: 'fit-content',
              }}
            >
              {status.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
