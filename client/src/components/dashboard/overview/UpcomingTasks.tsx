import { Clock, CheckCircle2 } from 'lucide-react'
import { upcomingTasks, type Task } from '@/data/mock/dashboard'

// ── Priority Styles ──────────────────────────────────────────────────────────

const PRIORITY_STYLES: Record<
  Task['priority'],
  { color: string; bg: string; label: string }
> = {
  high: { color: '#FF8B5A', bg: '#FFF0E6', label: 'High' },
  medium: { color: '#FFD044', bg: '#FFF8E0', label: 'Medium' },
  low: { color: '#48C07A', bg: '#E8F8EF', label: 'Low' },
}

// ── Component ────────────────────────────────────────────────────────────────

export default function UpcomingTasks() {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8EF',
        borderRadius: 14,
        padding: '20px',
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock size={18} style={{ color: '#FF8B5A' }} />
        <h3
          className="font-poppins font-semibold text-text"
          style={{ fontSize: 16 }}
        >
          Upcoming Tasks
        </h3>
      </div>

      <div className="flex flex-col gap-0">
        {upcomingTasks.map((task, index) => {
          const priority = PRIORITY_STYLES[task.priority]
          return (
            <div
              key={task.id}
              className="flex items-center gap-3"
              style={{
                padding: '12px 0',
                borderBottom:
                  index < upcomingTasks.length - 1
                    ? '1px solid #F0F0F0'
                    : 'none',
                opacity: task.completed ? 0.55 : 1,
              }}
            >
              {/* Checkbox */}
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  border: task.completed
                    ? 'none'
                    : `2px solid ${priority.color}`,
                  background: task.completed ? '#48C07A' : 'transparent',
                }}
              >
                {task.completed && <CheckCircle2 size={14} color="#fff" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div
                  className="font-poppins font-medium text-text"
                  style={{
                    fontSize: 13,
                    marginBottom: 2,
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-text-muted" style={{ fontSize: 11 }}>
                    {task.subject}
                  </span>
                  <span className="text-text-muted" style={{ fontSize: 11 }}>
                    •
                  </span>
                  <span className="text-text-muted" style={{ fontSize: 11 }}>
                    {task.dueDate}
                  </span>
                </div>
              </div>

              {/* Priority badge */}
              <span
                className="shrink-0 font-poppins font-semibold"
                style={{
                  fontSize: 10,
                  color: priority.color,
                  background: priority.bg,
                  padding: '3px 8px',
                  borderRadius: 6,
                }}
              >
                {priority.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
