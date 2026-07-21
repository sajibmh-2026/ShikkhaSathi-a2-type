import { Link } from 'react-router-dom'

interface SidebarLogoProps {
  expanded: boolean
}

export default function SidebarLogo({ expanded }: SidebarLogoProps) {
  return (
    <Link
      to="/dashboard"
      className="flex items-center gap-2.5 no-underline group"
      aria-label="ShikkhaSathi AI Dashboard"
    >
      {/* Owl icon container */}
      <div
        className="flex items-center justify-center text-xl shrink-0"
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          background: 'linear-gradient(135deg, #3AAFE8, #1E91CC)',
          boxShadow: '0 4px 12px rgba(58, 175, 232, 0.27)',
          transition: 'transform 0.2s ease',
        }}
      >
        🦉
      </div>
      {/* Brand text — hidden when collapsed */}
      {expanded && (
        <div className="leading-none overflow-hidden">
          <span
            className="font-poppins text-text"
            style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.1 }}
          >
            ShikkhaSathi
          </span>
          <span
            className="block font-poppins text-sky"
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.05em' }}
          >
            AI
          </span>
        </div>
      )}
    </Link>
  )
}
