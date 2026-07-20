// ── AuthLayout ───────────────────────────────────────────────────────────────
// Shared layout for Login, Register, and Forgot Password pages
// Left: brand illustration panel | Right: form

import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen" style={{ background: '#F8FAFC' }}>
      {/* ── Left Panel (brand) ── */}
      <div
        className="hidden lg:flex flex-col justify-between flex-1"
        style={{
          background: 'linear-gradient(135deg, #3AAFE8 0%, #1E91CC 60%, #48C07A 100%)',
          padding: 48,
          maxWidth: 520,
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div
            className="flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.2)',
              fontSize: 22,
            }}
          >
            🦉
          </div>
          <div>
            <div className="font-poppins font-bold text-white" style={{ fontSize: 18 }}>
              ShikkhaSathi AI
            </div>
            <div className="font-poppins text-white/70" style={{ fontSize: 11 }}>
              Teach Smarter
            </div>
          </div>
        </Link>

        {/* Center illustration */}
        <div className="flex flex-col items-center justify-center flex-1 text-center px-8">
          <div style={{ fontSize: 72, marginBottom: 24 }}>🎓</div>
          <h2 className="font-poppins font-bold text-white mb-4" style={{ fontSize: 28, lineHeight: 1.3 }}>
            Teach smarter, not harder
          </h2>
          <p className="text-white/80" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 360 }}>
            AI-powered lesson plans, worksheets, exams, and reports — all in one
            platform designed for Bangladeshi primary school teachers.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {[
              { value: '1,200+', label: 'Teachers' },
              { value: '50+', label: 'Schools' },
              { value: '15K+', label: 'Lessons' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-poppins font-bold text-white" style={{ fontSize: 22 }}>
                  {value}
                </div>
                <div className="text-white/60" style={{ fontSize: 12 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <p className="text-white/50" style={{ fontSize: 13, lineHeight: 1.6 }}>
          &ldquo;ShikkhaSathi AI changed how I prepare for class. I save hours
          every week!&rdquo;
          <br />
          <span className="text-white/70 font-medium">
            — Ms. Rina, Class 2 Teacher, Dhaka
          </span>
        </p>
      </div>

      {/* ── Right Panel (form) ── */}
      <div className="flex-1 flex items-center justify-center" style={{ padding: '32px 24px' }}>
        <div className="w-full" style={{ maxWidth: 420 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
