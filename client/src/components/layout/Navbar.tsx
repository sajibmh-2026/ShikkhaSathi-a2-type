import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

// ── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

// ── Logo Component ───────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="ShikkhaSathi AI Home">
      {/* Owl icon container */}
      <div
        className="flex items-center justify-center text-xl"
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: 'linear-gradient(135deg, #3AAFE8, #1E91CC)',
          boxShadow: '0 4px 12px rgba(58, 175, 232, 0.27)',
        }}
      >
        🦉
      </div>
      {/* Brand text */}
      <div className="leading-none">
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
    </Link>
  )
}

// ── Navbar Component ─────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position for background change
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 right-0 z-[200] transition-all duration-300',
        scrolled
          ? 'bg-white/96 backdrop-blur-[14px] shadow-[0_2px_20px_rgba(26,43,60,0.07)]'
          : 'bg-transparent'
      )}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1200, height: 68, padding: '0 24px' }}
      >
        {/* ── Logo ── */}
        <Logo />

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="font-medium text-text-mid transition-colors duration-200 hover:text-sky no-underline"
              style={{ fontSize: 14 }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTAs ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="font-poppins font-semibold text-sky transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 no-underline"
            style={{
              fontSize: 14,
              padding: '9px 20px',
              borderRadius: 10,
              border: '1.5px solid #3AAFE8',
              background: 'transparent',
            }}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="font-poppins font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 no-underline"
            style={{
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 10,
              border: 'none',
              background: '#3AAFE8',
              boxShadow: '0 4px 16px rgba(58, 175, 232, 0.31)',
            }}
          >
            Get Started
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center cursor-pointer"
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            border: 'none',
            background: scrolled ? '#EEF9FF' : 'rgba(58, 175, 232, 0.1)',
          }}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X size={22} className="text-sky" />
          ) : (
            <Menu size={22} className="text-sky" />
          )}
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-0 top-[68px] z-[199] md:hidden transition-all duration-300',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel */}
        <div
          className={cn(
            'absolute right-0 top-0 w-[280px] max-w-[85vw] bg-white shadow-[-4px_0_24px_rgba(26,43,60,0.1)] transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ height: 'calc(100vh - 68px)' }}
        >
          {/* Nav links */}
          <div className="flex flex-col px-4 pt-6 gap-1">
            {NAV_LINKS.map(({ label, path }, i) => (
              <Link
                key={label}
                to={path}
                className="font-medium text-text-mid no-underline transition-colors duration-200 hover:text-sky hover:bg-sky-light"
                style={{
                  fontSize: 15,
                  padding: '12px 16px',
                  borderRadius: 10,
                  animationDelay: `${i * 60}ms`,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 my-4 h-px bg-border" />

          {/* CTAs */}
          <div className="flex flex-col px-4 gap-3">
            <Link
              to="/login"
              className="w-full text-center font-poppins font-semibold text-sky no-underline transition-all duration-200 hover:brightness-110"
              style={{
                fontSize: 15,
                padding: '12px 20px',
                borderRadius: 10,
                border: '1.5px solid #3AAFE8',
                background: 'transparent',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full text-center font-poppins font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                fontSize: 15,
                padding: '13px 22px',
                borderRadius: 10,
                border: 'none',
                background: '#3AAFE8',
                boxShadow: '0 4px 16px rgba(58, 175, 232, 0.31)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
