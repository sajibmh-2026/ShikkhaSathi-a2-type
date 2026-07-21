import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import SearchBox from './SearchBox'
import NotificationBell from './NotificationBell'
import ProfileDropdown from './ProfileDropdown'
import SettingsButton from './SettingsButton'

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

interface DashboardNavbarProps {
  sidebarExpanded: boolean
  onToggleMobile: () => void
  notificationCount?: number
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DashboardNavbar({
  sidebarExpanded,
  onToggleMobile,
  notificationCount = 0,
}: DashboardNavbarProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarWidth = isMobile ? 0 : sidebarExpanded ? 260 : 72
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
      {/* ── Left: Hamburger (mobile) + Page Title ── */}
      <div className="flex items-center gap-3">
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

        <h1
          className="font-poppins font-bold text-text"
          style={{ fontSize: 18, lineHeight: 1.2 }}
        >
          {pageTitle}
        </h1>
      </div>

      {/* ── Right: Search | Notifications | Settings | Profile ── */}
      <div className="flex items-center gap-1.5">
        <SearchBox onSearch={(q) => console.log('Search:', q)} />
        <NotificationBell
          count={notificationCount}
          onClick={() => navigate('/dashboard/notifications')}
        />
        <SettingsButton onClick={() => navigate('/dashboard/settings')} />
        <ProfileDropdown userName="Teacher" userInitials="TS" />
      </div>
    </header>
  )
}
