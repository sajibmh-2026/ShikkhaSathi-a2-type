import { Zap, Calendar, MessageSquare, Layers } from 'lucide-react'
import { aiUsage } from '@/data/mock/dashboard'

// ── Component ────────────────────────────────────────────────────────────────

export default function AIUsageSummary() {
  const tokenPercent = Math.round((aiUsage.tokensUsed / aiUsage.tokensLimit) * 100)
  const requestPercent = Math.round(
    (aiUsage.requestsToday / aiUsage.requestsLimit) * 100,
  )

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8EF',
        borderRadius: 14,
        padding: '20px',
      }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Zap size={18} style={{ color: '#FFD044' }} />
        <h3
          className="font-poppins font-semibold text-text"
          style={{ fontSize: 16 }}
        >
          AI Usage
        </h3>
      </div>

      {/* Token Usage */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Layers size={14} style={{ color: '#718096' }} />
            <span className="text-text-mid" style={{ fontSize: 13 }}>
              Tokens Used
            </span>
          </div>
          <span
            className="font-poppins font-semibold text-text"
            style={{ fontSize: 13 }}
          >
            {(aiUsage.tokensUsed / 1000).toFixed(1)}k /{' '}
            {(aiUsage.tokensLimit / 1000).toFixed(0)}k
          </span>
        </div>
        <div
          style={{
            height: 8,
            background: '#F0F0F0',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${tokenPercent}%`,
              background:
                tokenPercent > 80
                  ? 'linear-gradient(90deg, #FF8B5A, #FF6B3A)'
                  : 'linear-gradient(90deg, #3AAFE8, #1E91CC)',
              borderRadius: 4,
              transition: 'width 0.6s ease',
            }}
          />
        </div>
        <span className="text-text-muted" style={{ fontSize: 11 }}>
          {tokenPercent}% used this month
        </span>
      </div>

      {/* Daily Requests */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <MessageSquare size={14} style={{ color: '#718096' }} />
            <span className="text-text-mid" style={{ fontSize: 13 }}>
              Requests Today
            </span>
          </div>
          <span
            className="font-poppins font-semibold text-text"
            style={{ fontSize: 13 }}
          >
            {aiUsage.requestsToday} / {aiUsage.requestsLimit}
          </span>
        </div>
        <div
          style={{
            height: 8,
            background: '#F0F0F0',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${requestPercent}%`,
              background: 'linear-gradient(90deg, #48C07A, #36A866)',
              borderRadius: 4,
              transition: 'width 0.6s ease',
            }}
          />
        </div>
        <span className="text-text-muted" style={{ fontSize: 11 }}>
          {requestPercent}% of daily limit
        </span>
      </div>

      {/* Plan Info */}
      <div
        className="flex items-center justify-between"
        style={{
          background: '#EDF5FF',
          borderRadius: 10,
          padding: '12px 14px',
        }}
      >
        <div>
          <span
            className="font-poppins font-semibold"
            style={{ fontSize: 13, color: '#1E91CC' }}
          >
            {aiUsage.plan} Plan
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <Calendar size={11} style={{ color: '#718096' }} />
            <span className="text-text-muted" style={{ fontSize: 11 }}>
              Renews {aiUsage.renewalDate}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="font-poppins font-semibold cursor-pointer"
          style={{
            fontSize: 12,
            color: '#3AAFE8',
            background: 'none',
            border: 'none',
            padding: '4px 8px',
          }}
        >
          Upgrade →
        </button>
      </div>
    </div>
  )
}
