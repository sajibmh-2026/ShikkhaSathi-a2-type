import { useState, useRef, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'

// ── Props ────────────────────────────────────────────────────────────────────

interface SearchBoxProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SearchBox({
  onSearch,
  placeholder = 'Search lessons, worksheets, exams...',
}: SearchBoxProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setQuery('')
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (query.trim()) {
        onSearch?.(query.trim())
      }
    },
    [query, onSearch],
  )

  // Auto-focus mobile input when opened
  useEffect(() => {
    if (mobileOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [mobileOpen])

  // Close mobile search on Escape
  useEffect(() => {
    if (!mobileOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen, closeMobile])

  return (
    <>
      {/* ── Desktop: Inline Input ── */}
      <form
        onSubmit={handleSubmit}
        className="hidden md:flex items-center gap-2"
        style={{
          background: '#F8FAFC',
          border: '1.5px solid #E2E8EF',
          borderRadius: 10,
          padding: '8px 14px',
          width: 280,
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#3AAFE8'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(58,175,232,0.12)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#E2E8EF'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <Search size={16} style={{ color: '#718096', flexShrink: 0 }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
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
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Clear search"
          >
            <X size={14} style={{ color: '#718096' }} />
          </button>
        )}
      </form>

      {/* ── Mobile: Icon Toggle ── */}
      <button
        type="button"
        className="md:hidden flex items-center justify-center cursor-pointer"
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          border: 'none',
          background: '#F8FAFC',
        }}
        onClick={() => setMobileOpen(true)}
        aria-label="Open search"
      >
        <Search size={18} style={{ color: '#718096' }} />
      </button>

      {/* ── Mobile: Full-screen Search Modal ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[210] md:hidden">
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(26,43,60,0.4)',
              backdropFilter: 'blur(4px)',
            }}
            onClick={closeMobile}
          />

          {/* Search Panel */}
          <div
            style={{
              position: 'relative',
              background: '#fff',
              padding: '16px 20px',
              borderBottom: '1px solid #E2E8EF',
              boxShadow: '0 4px 20px rgba(26,43,60,0.1)',
            }}
          >
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <Search size={20} style={{ color: '#3AAFE8', flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: 16,
                  fontFamily: "'Inter', sans-serif",
                  color: '#1A2B3C',
                  width: '100%',
                }}
              />
              <button
                type="button"
                onClick={closeMobile}
                style={{
                  border: 'none',
                  background: '#F8FAFC',
                  borderRadius: 8,
                  width: 34,
                  height: 34,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                aria-label="Close search"
              >
                <X size={18} style={{ color: '#718096' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
