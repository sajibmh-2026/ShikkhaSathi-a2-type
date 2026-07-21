import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, User, Settings, LogOut } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────

interface ProfileMenuItem {
  icon: typeof User
  label: string
  path: string
  dividerBefore?: boolean
}

interface ProfileDropdownProps {
  userName?: string
  userInitials?: string
  menuItems?: ProfileMenuItem[]
  onLogout?: () => void
}

// ── Default Menu Items ───────────────────────────────────────────────────────

const DEFAULT_MENU: ProfileMenuItem[] = [
  { icon: User, label: 'My Profile', path: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: LogOut, label: 'Log Out', path: '/', dividerBefore: true },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function ProfileDropdown({
  userName = 'Teacher',
  userInitials = 'TS',
  menuItems = DEFAULT_MENU,
  onLogout,
}: ProfileDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <div ref={ref} className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        className="flex items-center gap-2 cursor-pointer"
        style={{
          padding: '6px 10px',
          borderRadius: 10,
          border: 'none',
          background: open ? '#F8FAFC' : 'transparent',
          transition: 'background 0.2s',
        }}
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.background = '#F8FAFC'
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.background = 'transparent'
        }}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="User menu"
      >
        {/* Avatar */}
        <div
          className="flex items-center justify-center font-poppins font-bold text-white select-none"
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #3AAFE8, #1E91CC)',
            fontSize: 13,
          }}
        >
          {userInitials}
        </div>

        {/* Name — desktop */}
        <span
          className="hidden md:block font-poppins font-medium text-text"
          style={{ fontSize: 13 }}
        >
          {userName}
        </span>

        {/* Chevron — desktop */}
        <ChevronDown
          size={14}
          className="hidden md:block transition-transform"
          style={{
            color: '#718096',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-50 bg-white"
          style={{
            width: 200,
            borderRadius: 12,
            border: '1px solid #E2E8EF',
            boxShadow: '0 8px 24px rgba(26,43,60,0.12)',
            padding: '6px',
          }}
        >
          {menuItems.map(({ icon: ItemIcon, label, path, dividerBefore }) => (
            <span key={label}>
              {dividerBefore && (
                <div
                  style={{
                    height: 1,
                    background: '#E2E8EF',
                    margin: '4px 0',
                  }}
                />
              )}
              <Link
                to={path}
                className="flex items-center gap-3 no-underline text-text-mid"
                style={{
                  padding: '10px 12px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = '#F8FAFC')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'transparent')
                }
                onClick={() => {
                  setOpen(false)
                  if (label === 'Log Out') onLogout?.()
                }}
              >
                <ItemIcon size={16} style={{ color: '#718096' }} />
                {label}
              </Link>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
