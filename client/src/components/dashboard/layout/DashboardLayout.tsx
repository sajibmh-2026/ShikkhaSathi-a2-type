import { Outlet } from 'react-router-dom'
import { useSidebar } from '@/hooks/useSidebar'
import DashboardSidebar from './DashboardSidebar'
import DashboardTopbar from './DashboardTopbar'

export default function DashboardLayout() {
  const { expanded, mobileOpen, toggleExpanded, toggleMobile, closeMobile } =
    useSidebar()

  const sidebarWidth = expanded ? 260 : 72

  return (
    <div className="min-h-screen font-inter text-text" style={{ background: '#F8F5F0' }}>
      {/* ── Sidebar ── */}
      <DashboardSidebar
        expanded={expanded}
        mobileOpen={mobileOpen}
        onToggleExpanded={toggleExpanded}
        onCloseMobile={closeMobile}
      />

      {/* ── Topbar ── */}
      <DashboardTopbar
        sidebarExpanded={expanded}
        onToggleMobile={toggleMobile}
      />

      {/* ── Main Content ── */}
      <main
        style={{
          marginLeft: sidebarWidth,
          paddingTop: 64,
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: 1100,
            padding: '32px 24px',
          }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  )
}
