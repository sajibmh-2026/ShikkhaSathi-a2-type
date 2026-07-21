import { Settings } from 'lucide-react'

// ── Props ────────────────────────────────────────────────────────────────────

interface SettingsButtonProps {
  onClick?: () => void
  href?: string
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SettingsButton({ onClick }: SettingsButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center justify-center cursor-pointer"
      style={{
        width: 38,
        height: 38,
        borderRadius: 10,
        border: 'none',
        background: 'transparent',
        transition: 'background 0.2s, transform 0.2s',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#F8FAFC'
        // Rotate gear on hover
        const icon = e.currentTarget.querySelector('svg')
        if (icon) icon.style.transform = 'rotate(45deg)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        const icon = e.currentTarget.querySelector('svg')
        if (icon) icon.style.transform = 'rotate(0deg)'
      }}
      aria-label="Settings"
    >
      <Settings
        size={19}
        style={{ color: '#718096', transition: 'transform 0.3s ease' }}
      />
    </button>
  )
}
