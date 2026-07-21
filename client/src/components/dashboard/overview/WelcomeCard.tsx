import { Sparkles } from 'lucide-react'
import { welcomeData } from '@/data/mock/dashboard'

// ── Component ────────────────────────────────────────────────────────────────

export default function WelcomeCard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3AAFE8 0%, #1E91CC 60%, #1570A0 100%)',
        borderRadius: 16,
        padding: '28px 32px',
        color: '#fff',
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute"
        style={{
          top: -30,
          right: -30,
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: -50,
          right: 80,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={18} style={{ color: '#FFD044' }} />
          <span
            style={{
              fontSize: 13,
              fontFamily: "'Inter', sans-serif",
              opacity: 0.85,
            }}
          >
            {welcomeData.todayDate}
          </span>
        </div>

        <h1
          className="font-poppins font-bold"
          style={{ fontSize: 26, lineHeight: 1.3, marginBottom: 8 }}
        >
          {welcomeData.greeting}, {welcomeData.teacherName}! 👋
        </h1>

        <p
          style={{
            fontSize: 14,
            fontFamily: "'Inter', sans-serif",
            opacity: 0.85,
            maxWidth: 500,
            lineHeight: 1.5,
          }}
        >
          {welcomeData.motivationalQuote}
        </p>
      </div>
    </div>
  )
}
