import { useState, useCallback, useEffect } from 'react'

interface UseSidebarReturn {
  expanded: boolean
  mobileOpen: boolean
  toggleExpanded: () => void
  toggleMobile: () => void
  closeMobile: () => void
}

export function useSidebar(): UseSidebarReturn {
  const [expanded, setExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  // Close mobile sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return { expanded, mobileOpen, toggleExpanded, toggleMobile, closeMobile }
}
