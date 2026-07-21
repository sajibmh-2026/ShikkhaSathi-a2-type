import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, Search, Bell, ChevronDown, LogOut, User, Settings } from 'lucide-react'

// ── Page Titles ──────────────────────────────────────────────────────────────

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Overview',
  '/dashboard/planner': 'AI Lesson Planner',
  '/dashboard/worksheets': 'AI Worksheet Generator',
  '/dashboard/exams': 'AI Exam Generator',
  '/dashboard/reports': 'Parent Report Generator',
  '/dashboard/history': 'History',
  '/dashboard/profile': 'Profile',
  '/dashboard/settings': 'Settings',
}

// ── Props ────────────────────────────────────────────────────────────────────

interface DashboardTopbarProps {
  sidebarExpanded: boolean
  onToggleMobile: () => void
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DashboardTopbar({
  sidebarExpanded,
  onToggleMobile,
}: DashboardTopbarProps) {
  const { pathname } = useLocation()
  const [profileOpen, setProfileOpen] = useState(false)

  const sidebarWidth = sidebarExpanded ? 260 : 72
  const pageTitle = PAGE_TITLES[pathname] || 'Dashboard'

  return (
    <header
      className="fixed top-0 right-0 z-197 flex items-center justify-between bg-white"
      style={{
        left: sidebarWidth,
        height: 64,
        padding: '0 24px',
        borderBottom: '1px solid #E2E8EF',
        transition: 'left 0.3s ease-in-out',
      }}
    >
      {/* ── Left: Mobile Menu + Page Title ── */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center cursor-pointer"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            border: 'none',
            background: '#EEF9FF',
          }}
          onClick={onToggleMobile}
          aria-label="Open sidebar"
        >
          <Menu size={20} style={{ color: '#3AAFE8' }} />
        </button>

        {/* Page title */}
        <h1
          className="font-poppins font-bold text-text"
          style={{ fontSize: 18, lineHeight: 1.2 }}
        >
          {pageTitle}
        </h1>
      </div>

      {/* ── Right: Search, Notification, Profile ── */}
      <div className="flex items-center gap-2">
        {/* Search (desktop only) */}
        <div
          className="hidden md:flex items-center gap-2"
          style={{
            background: '#F8FAFC',
            border: '1.5px solid #E2E8EF',
            borderRadius: 10,
            padding: '8px 14px',
            width: 220,
            transition: 'border-color 0.2s',
          }}
        >
          <Search size={16} style={{ color: '#718096', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search..."
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: 13,
              fontFamily: "'Inter', sans-serif",
              color: '#1A2B3C',
              width: '100%',
            }}
          />
        </div>

        {/* Notification bell */}
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
          onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          aria-label="Notifications"
        >
          <Bell size={19} style={{ color: '#718096' }} />
          {/* Badge */}
          <span
            className="absolute"
            style={{
              top: 7,
              right: 8,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#FF8B5A',
              border: '2px solid white',
            }}
          />
        </button>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer"
            style={{
              padding: '6px 10px',
              borderRadius: 10,
              border: 'none',
              background: 'transparent',
              transition: 'background 0.2s',
            }}
            onClick={() => setProfileOpen((prev) => !prev)}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {/* Avatar */}
            <div
              className="flex items-center justify-center font-poppins font-bold text-white"
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #3AAFE8, #1E91CC)',
                fontSize: 13,
              }}
            >
              TS
            </div>
            {/* Name (desktop only) */}
            <span
              className="hidden md:block font-poppins font-medium text-text"
              style={{ fontSize: 13 }}
            >
              Teacher
            </span>
            <ChevronDown size={14} className="hidden md:block" style={{ color: '#718096' }} />
          </button>

          {/* Dropdown menu */}
          {profileOpen && (
            <>
              {/* Backdrop to close */}
              <div
                className="fixed inset-0 z-49"
                onClick={() => setProfileOpen(false)}
              />
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
                {[
                  { icon: User, label: 'Profile', path: '/dashboard/profile' },
                  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
                  { icon: LogOut, label: 'Log Out', path: '/' },
                ].map(({ icon: ItemIcon, label, path }) => (
                  <Link
                    key={label}
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
                    onClick={() => setProfileOpen(false)}
                  >
                    <ItemIcon size={16} style={{ color: '#718096' }} />
                    {label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
