import {
  LayoutDashboard,
  BookOpen,
  FileText,
  ClipboardCheck,
  Users,
  History,
  User,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import SidebarLogo from './SidebarLogo'
import SidebarNavItem from './SidebarNavItem'

// ── Navigation Data ──────────────────────────────────────────────────────────

const PRIMARY_NAV = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: BookOpen, label: 'Lesson Planner', path: '/dashboard/planner' },
  { icon: FileText, label: 'Worksheets', path: '/dashboard/worksheets' },
  { icon: ClipboardCheck, label: 'Exams', path: '/dashboard/exams' },
  { icon: Users, label: 'Reports', path: '/dashboard/reports' },
  { icon: History, label: 'History', path: '/dashboard/history' },
]

const SECONDARY_NAV = [
  { icon: User, label: 'Profile', path: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
]

// ── Props ────────────────────────────────────────────────────────────────────

interface DashboardSidebarProps {
  expanded: boolean
  mobileOpen: boolean
  onToggleExpanded: () => void
  onCloseMobile: () => void
}

// ── Component ────────────────────────────────────────────────────────────────

export default function DashboardSidebar({
  expanded,
  mobileOpen,
  onToggleExpanded,
  onCloseMobile,
}: DashboardSidebarProps) {
  const sidebarWidth = expanded ? 260 : 72

  return (
    <>
      {/* ── Mobile Backdrop ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-198 lg:hidden"
          style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(2px)' }}
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        role="navigation"
        aria-label="Dashboard navigation"
        className={cn(
          'fixed top-0 left-0 bottom-0 z-199 flex flex-col bg-white',
          'transition-all duration-300 ease-in-out',
          // Desktop
          'lg:translate-x-0',
          // Mobile: slide in/out
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
        style={{
          width: sidebarWidth,
          borderRight: '1px solid #E2E8EF',
          boxShadow: mobileOpen ? '4px 0 24px rgba(26,43,60,0.1)' : 'none',
        }}
      >
        {/* ── Logo Area ── */}
        <div
          className="flex items-center shrink-0"
          style={{
            height: 64,
            padding: expanded ? '0 20px' : '0 16px',
            justifyContent: expanded ? 'flex-start' : 'center',
            borderBottom: '1px solid #E2E8EF',
          }}
        >
          <SidebarLogo expanded={expanded} />
        </div>

        {/* ── Primary Navigation ── */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
          {PRIMARY_NAV.map((item) => (
            <SidebarNavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              expanded={expanded}
              onClick={onCloseMobile}
            />
          ))}

          {/* ── Divider ── */}
          <div
            className="my-3 mx-2"
            style={{ height: 1, background: '#E2E8EF' }}
          />

          {/* ── Section Label ── */}
          {expanded && (
            <span
              className="font-poppins font-semibold uppercase text-text-muted px-2 mb-1"
              style={{ fontSize: 11, letterSpacing: '0.06em' }}
            >
              Account
            </span>
          )}

          {/* ── Secondary Navigation ── */}
          {SECONDARY_NAV.map((item) => (
            <SidebarNavItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              expanded={expanded}
              onClick={onCloseMobile}
            />
          ))}
        </nav>

        {/* ── Collapse Toggle (desktop only) ── */}
        <div
          className="hidden lg:flex items-center justify-center shrink-0 cursor-pointer"
          style={{
            height: 48,
            borderTop: '1px solid #E2E8EF',
            transition: 'background 0.2s',
          }}
          onClick={onToggleExpanded}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {expanded ? (
            <ChevronsLeft size={18} style={{ color: '#718096' }} />
          ) : (
            <ChevronsRight size={18} style={{ color: '#718096' }} />
          )}
        </div>
      </aside>
    </>
  )
}
