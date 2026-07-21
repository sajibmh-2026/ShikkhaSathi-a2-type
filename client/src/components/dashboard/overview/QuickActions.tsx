import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'
import { quickActions } from '@/data/mock/dashboard'

// ── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
}

// ── Component ────────────────────────────────────────────────────────────────

export default function QuickActions() {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {quickActions.map((action) => {
        const Icon = ICON_MAP[action.icon] || BookOpen
        return (
          <button
            key={action.label}
            type="button"
            className="flex flex-col items-start cursor-pointer text-left"
            style={{
              background: '#fff',
              border: '1px solid #E2E8EF',
              borderRadius: 14,
              padding: '18px 16px',
              transition: 'box-shadow 0.2s, transform 0.15s',
            }}
            onClick={() => navigate(action.path)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,43,60,0.08)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: action.bgColor,
                marginBottom: 12,
              }}
            >
              <Icon size={20} style={{ color: action.color }} />
            </div>
            <span
              className="font-poppins font-semibold text-text"
              style={{ fontSize: 14, marginBottom: 4 }}
            >
              {action.label}
            </span>
            <span
              className="text-text-muted"
              style={{ fontSize: 12, lineHeight: 1.4 }}
            >
              {action.description}
            </span>
          </button>
        )
      })}
    </div>
  )
}
