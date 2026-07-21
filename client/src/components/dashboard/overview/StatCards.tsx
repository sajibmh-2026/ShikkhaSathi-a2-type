import {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  type LucideIcon,
} from 'lucide-react'
import { statistics, type StatCard } from '@/data/mock/dashboard'

// ── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
}

// ── Single Card ──────────────────────────────────────────────────────────────

function StatCardItem({ stat }: { stat: StatCard }) {
  const Icon = ICON_MAP[stat.icon] || BookOpen
  const TrendIcon =
    stat.changeType === 'up'
      ? TrendingUp
      : stat.changeType === 'down'
        ? TrendingDown
        : Minus
  const trendColor =
    stat.changeType === 'up'
      ? '#48C07A'
      : stat.changeType === 'down'
        ? '#FF8B5A'
        : '#718096'

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8EF',
        borderRadius: 14,
        padding: '20px',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,43,60,0.08)')
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: stat.bgColor,
          }}
        >
          <Icon size={22} style={{ color: stat.color }} />
        </div>
        <div
          className="flex items-center gap-1"
          style={{ color: trendColor, fontSize: 12, fontWeight: 600 }}
        >
          <TrendIcon size={14} />
          {stat.change}
        </div>
      </div>
      <div
        className="font-poppins font-bold text-text"
        style={{ fontSize: 28, lineHeight: 1.1, marginBottom: 4 }}
      >
        {stat.value}
      </div>
      <div className="text-text-muted" style={{ fontSize: 13 }}>
        {stat.label}
      </div>
    </div>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {statistics.map((stat) => (
        <StatCardItem key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
