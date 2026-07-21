import { Link, useLocation } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

interface SidebarNavItemProps {
  icon: LucideIcon
  label: string
  path: string
  expanded: boolean
  onClick?: () => void
}

export default function SidebarNavItem({
  icon: Icon,
  label,
  path,
  expanded,
  onClick,
}: SidebarNavItemProps) {
  const { pathname } = useLocation()
  const isActive = pathname === path || (path !== '/dashboard' && pathname.startsWith(path))

  return (
    <Link
      to={path}
      onClick={onClick}
      className="flex items-center gap-3 no-underline relative group"
      style={{
        padding: expanded ? '10px 16px' : '10px 0',
        justifyContent: expanded ? 'flex-start' : 'center',
        borderRadius: 10,
        background: isActive ? '#EEF9FF' : 'transparent',
        borderLeft: isActive ? '3px solid #3AAFE8' : '3px solid transparent',
        transition: 'all 0.2s ease',
        color: isActive ? '#3AAFE8' : '#4A5568',
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = '#F8FAFC'
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = 'transparent'
      }}
    >
      {/* Icon */}
      <Icon
        size={20}
        style={{
          color: isActive ? '#3AAFE8' : '#718096',
          flexShrink: 0,
          transition: 'color 0.2s',
        }}
      />

      {/* Label — hidden when collapsed */}
      {expanded && (
        <span
          className="font-poppins whitespace-nowrap overflow-hidden"
          style={{
            fontSize: 14,
            fontWeight: isActive ? 600 : 500,
            color: isActive ? '#3AAFE8' : '#4A5568',
            transition: 'color 0.2s',
          }}
        >
          {label}
        </span>
      )}

      {/* Tooltip for collapsed state */}
      {!expanded && (
        <div
          className="absolute left-full ml-3 px-3 py-1.5 font-poppins font-medium text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            fontSize: 13,
            background: '#1A2B3C',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(26,43,60,0.15)',
            zIndex: 50,
            transition: 'opacity 0.15s ease',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {label}
        </div>
      )}
    </Link>
  )
}
