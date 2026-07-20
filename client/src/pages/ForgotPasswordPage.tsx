import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '@/components/ui/AuthLayout'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend password reset
    console.log('Reset password for:', email)
    setSent(true)
  }

  return (
    <AuthLayout>
      {/* ── Header ── */}
      <div className="mb-8">
        <Link to="/login" className="inline-flex items-center gap-2 text-text-muted no-underline mb-4" style={{ fontSize: 14 }}>
          ← Back to Log In
        </Link>
        <h1 className="font-poppins font-bold text-text mb-2" style={{ fontSize: 28 }}>
          Reset your password 🔑
        </h1>
        <p className="text-text-mid" style={{ fontSize: 15 }}>
          {sent
            ? 'Check your inbox for a password reset link.'
            : "Enter your email and we'll send you a reset link."}
        </p>
      </div>

      {sent ? (
        /* ── Success state ── */
        <div className="flex flex-col items-center gap-5">
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#EEFBF3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}
          >
            ✅
          </div>
          <p className="text-text-mid text-center" style={{ fontSize: 15, lineHeight: 1.6 }}>
            We&apos;ve sent a password reset link to{' '}
            <strong className="text-text">{email}</strong>.
            <br />
            Please check your inbox and follow the instructions.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="font-poppins font-semibold cursor-pointer"
            style={{
              background: '#F8FAFC',
              border: '1.5px solid #E2E8EF',
              borderRadius: 12,
              padding: '12px 24px',
              fontSize: 14,
              color: '#4A5568',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EDF2F7')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#F8FAFC')}
          >
            Didn&apos;t receive it? Try again
          </button>
        </div>
      ) : (
        /* ── Email form ── */
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            Send Reset Link
          </button>
        </form>
      )}

      {/* ── Footer ── */}
      <p className="text-center text-text-mid mt-8" style={{ fontSize: 14 }}>
        Remember your password?{' '}
        <Link to="/login" className="font-poppins font-semibold text-sky no-underline">
          Log In
        </Link>
      </p>
    </AuthLayout>
  )
}
