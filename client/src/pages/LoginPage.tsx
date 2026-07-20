import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '@/components/ui/AuthLayout'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend auth
    console.log('Login:', { email, password })
  }

  return (
    <AuthLayout>
      {/* ── Header ── */}
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-text mb-2" style={{ fontSize: 28 }}>
          Welcome back 👋
        </h1>
        <p className="text-text-mid" style={{ fontSize: 15 }}>
          Log in to your ShikkhaSathi AI account
        </p>
      </div>

      {/* ── Google OAuth ── */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 font-poppins font-semibold text-text cursor-pointer"
        style={{
          background: '#FFFFFF',
          border: '1.5px solid #E2E8EF',
          borderRadius: 12,
          padding: '13px 20px',
          fontSize: 14,
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#F8FAFC'
          e.currentTarget.style.borderColor = '#CBD5E0'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#FFFFFF'
          e.currentTarget.style.borderColor = '#E2E8EF'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
          <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
        Continue with Google
      </button>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px" style={{ background: '#E2E8EF' }} />
        <span className="text-text-muted" style={{ fontSize: 13 }}>or sign in with email</span>
        <div className="flex-1 h-px" style={{ background: '#E2E8EF' }} />
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-poppins font-medium text-text mb-2" style={{ fontSize: 13 }}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 10,
              border: '1.5px solid #E2E8EF',
              fontSize: 14,
              fontFamily: "'Inter', sans-serif",
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#3AAFE8')}
            onBlur={(e) => (e.target.style.borderColor = '#E2E8EF')}
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="font-poppins font-medium text-text" style={{ fontSize: 13 }}>
              Password
            </label>
            <Link to="/forgot-password" className="font-poppins font-medium text-sky no-underline" style={{ fontSize: 13 }}>
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 48px 12px 16px',
                borderRadius: 10,
                border: '1.5px solid #E2E8EF',
                fontSize: 14,
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#3AAFE8')}
              onBlur={(e) => (e.target.style.borderColor = '#E2E8EF')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted cursor-pointer"
              style={{ background: 'none', border: 'none', fontSize: 16 }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full font-poppins font-bold text-white cursor-pointer"
          style={{
            background: '#3AAFE8',
            border: 'none',
            borderRadius: 12,
            padding: '14px 24px',
            fontSize: 15,
            boxShadow: '0 6px 20px #3AAFE840',
            transition: 'transform 0.2s ease, filter 0.2s ease',
            marginTop: 8,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.filter = 'brightness(1.06)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.filter = 'brightness(1)'
          }}
        >
          Log In
        </button>
      </form>

      {/* ── Footer link ── */}
      <p className="text-center text-text-mid mt-8" style={{ fontSize: 14 }}>
        Don&apos;t have an account?{' '}
        <Link to="/register" className="font-poppins font-semibold text-sky no-underline">
          Get Started
        </Link>
      </p>
    </AuthLayout>
  )
}
