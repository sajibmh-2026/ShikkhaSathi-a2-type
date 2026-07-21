import { useState } from 'react'
import { BarChart3 } from 'lucide-react'
import { weeklyActivity, type ChartData } from '@/data/mock/dashboard'

// ── Constants ────────────────────────────────────────────────────────────────

const CHART_HEIGHT = 180
const BAR_RADIUS = 4
const COLORS = {
  lessons: '#3AAFE8',
  worksheets: '#48C07A',
  exams: '#FFD044',
}

// ── Component ────────────────────────────────────────────────────────────────

export default function ActivityChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const maxVal = Math.max(
    ...weeklyActivity.map((d) => d.lessons + d.worksheets + d.exams),
    1,
  )

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
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} style={{ color: '#3AAFE8' }} />
          <h3
            className="font-poppins font-semibold text-text"
            style={{ fontSize: 16 }}
          >
            Weekly Activity
          </h3>
        </div>

        {/* Legend */}
        <div className="hidden sm:flex items-center gap-4">
          {Object.entries(COLORS).map(([key, color]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: color,
                }}
              />
              <span
                className="text-text-muted capitalize"
                style={{ fontSize: 11 }}
              >
                {key}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <svg
          viewBox={`0 0 ${weeklyActivity.length * 60 + 20} ${CHART_HEIGHT + 30}`}
          style={{ width: '100%', height: CHART_HEIGHT + 30, minWidth: 280 }}
        >
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1={10}
              y1={CHART_HEIGHT * (1 - ratio) + 5}
              x2={weeklyActivity.length * 60 + 10}
              y2={CHART_HEIGHT * (1 - ratio) + 5}
              stroke="#F0F0F0"
              strokeWidth={1}
            />
          ))}

          {/* Bars */}
          {weeklyActivity.map((day: ChartData, i: number) => {
            const x = i * 60 + 20
            const isHovered = hoveredIndex === i
            const total = day.lessons + day.worksheets + day.exams
            const barHeight = (total / maxVal) * (CHART_HEIGHT - 20)
            const barY = CHART_HEIGHT - barHeight + 5

            return (
              <g
                key={day.label}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Stacked bar */}
                {(() => {
                  const segments: { key: keyof Omit<ChartData, 'label'>; value: number; color: string }[] = [
                    { key: 'lessons', value: day.lessons, color: COLORS.lessons },
                    { key: 'worksheets', value: day.worksheets, color: COLORS.worksheets },
                    { key: 'exams', value: day.exams, color: COLORS.exams },
                  ]
                  let currentY = barY
                  return segments.map((seg) => {
                    if (seg.value === 0) return null
                    const segHeight = (seg.value / maxVal) * (CHART_HEIGHT - 20)
                    const rect = (
                      <rect
                        key={seg.key}
                        x={x}
                        y={currentY}
                        width={32}
                        height={Math.max(segHeight, 2)}
                        rx={BAR_RADIUS}
                        fill={seg.color}
                        opacity={isHovered ? 1 : 0.85}
                        style={{ transition: 'opacity 0.2s' }}
                      />
                    )
                    currentY += segHeight
                    return rect
                  })
                })()}

                {/* Day label */}
                <text
                  x={x + 16}
                  y={CHART_HEIGHT + 20}
                  textAnchor="middle"
                  fill="#718096"
                  fontSize={11}
                  fontFamily="'Inter', sans-serif"
                >
                  {day.label}
                </text>

                {/* Tooltip */}
                {isHovered && (
                  <g>
                    <rect
                      x={x - 10}
                      y={barY - 40}
                      width={52}
                      height={32}
                      rx={6}
                      fill="#1A2B3C"
                    />
                    <text
                      x={x + 16}
                      y={barY - 28}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={10}
                      fontFamily="'Inter', sans-serif"
                    >
                      {total} items
                    </text>
                    <text
                      x={x + 16}
                      y={barY - 16}
                      textAnchor="middle"
                      fill="#A0AEC0"
                      fontSize={9}
                      fontFamily="'Inter', sans-serif"
                    >
                      L:{day.lessons} W:{day.worksheets} E:{day.exams}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
