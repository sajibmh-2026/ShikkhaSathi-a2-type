import {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'
import { recentActivities } from '@/data/mock/dashboard'

// ── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
}

// ── Component ────────────────────────────────────────────────────────────────

export default function RecentActivities() {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8EF',
        borderRadius: 14,
        padding: '20px',
      }}
    >
      <h3
        className="font-poppins font-semibold text-text"
        style={{ fontSize: 16, marginBottom: 16 }}
      >
        Recent Activities
      </h3>

      <div className="flex flex-col gap-0">
        {recentActivities.map((activity, index) => {
          const Icon = ICON_MAP[activity.icon] || BookOpen
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3"
              style={{
                padding: '12px 0',
                borderBottom:
                  index < recentActivities.length - 1
                    ? '1px solid #F0F0F0'
                    : 'none',
              }}
            >
              {/* Icon dot */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background:
                    activity.color === '#3AAFE8'
                      ? '#EEF9FF'
                      : activity.color === '#48C07A'
                        ? '#E8F8EF'
                        : activity.color === '#FFD044'
                          ? '#FFF8E0'
                          : '#FFF0E6',
                }}
              >
                <Icon size={16} style={{ color: activity.color }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div
                  className="font-poppins font-medium text-text"
                  style={{ fontSize: 13, marginBottom: 2 }}
                >
                  {activity.title}
                </div>
                <div
                  className="text-text-muted"
                  style={{ fontSize: 12, lineHeight: 1.4 }}
                >
                  {activity.description}
                </div>
              </div>

              {/* Timestamp */}
              <span
                className="text-text-muted shrink-0"
                style={{ fontSize: 11 }}
              >
                {activity.timestamp}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
