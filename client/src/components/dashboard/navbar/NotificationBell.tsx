import { Bell } from 'lucide-react'

// ── Props ────────────────────────────────────────────────────────────────────

interface NotificationBellProps {
  count?: number
  onClick?: () => void
}

// ── Component ────────────────────────────────────────────────────────────────

export default function NotificationBell({
  count = 0,
  onClick,
}: NotificationBellProps) {
  const displayCount = count > 99 ? '99+' : count > 0 ? String(count) : null

  return (
    <button
      type="button"
      className="relative flex items-center justify-center cursor-pointer"
      style={{
        width: 38,
        height: 38,
        borderRadius: 10,
        border: 'none',
        background: 'transparent',
        transition: 'background 0.2s',
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      aria-label={`Notifications${count > 0 ? ` (${count} unread)` : ''}`}
    >
      <Bell size={19} style={{ color: '#718096' }} />

      {/* Badge — dot or count */}
      {count > 0 && (
        <span
          className="absolute flex items-center justify-center"
          style={
            displayCount
              ? {
                  top: 2,
                  right: 2,
                  minWidth: 18,
                  height: 18,
                  borderRadius: 9,
                  background: '#FF8B5A',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  padding: '0 4px',
                  lineHeight: 1,
                }
              : {
                  top: 7,
                  right: 8,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#FF8B5A',
                  border: '2px solid #fff',
                }
          }
        >
          {displayCount}
        </span>
      )}
    </button>
  )
}
