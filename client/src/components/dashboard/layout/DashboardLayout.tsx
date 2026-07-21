import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSidebar } from '@/hooks/useSidebar'
import DashboardSidebar from './DashboardSidebar'
import DashboardNavbar from '../navbar/DashboardNavbar'

export default function DashboardLayout() {
  const { expanded, mobileOpen, toggleExpanded, toggleMobile, closeMobile } =
    useSidebar()

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarWidth = isMobile ? 0 : expanded ? 260 : 72

  return (
    <div className="min-h-screen font-inter text-text" style={{ background: '#F8F5F0' }}>
      {/* ── Sidebar ── */}
      <DashboardSidebar
        expanded={expanded}
        mobileOpen={mobileOpen}
        onToggleExpanded={toggleExpanded}
        onCloseMobile={closeMobile}
      />

      {/* ── Navbar ── */}
      <DashboardNavbar
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
