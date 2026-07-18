// ── Design Tokens ────────────────────────────────────────────────────────────

const SKY = '#3AAFE8'
const BORDER = '#E2E8EF'

// ── Types ────────────────────────────────────────────────────────────────────

export interface FaqItemProps {
  /** Question text */
  question: string
  /** Answer text */
  answer: string
  /** Whether this item is currently expanded */
  isOpen: boolean
  /** Callback when the toggle button is clicked */
  onToggle: () => void
}

// ── FAQ Item Component ───────────────────────────────────────────────────────

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <article
      className="transition-all duration-250 ease-out"
      style={{
        background: '#FFFFFF',
        borderRadius: 16,
        border: `1.5px solid ${isOpen ? `${SKY}55` : BORDER}`,
        overflow: 'hidden',
        boxShadow: isOpen
          ? `0 4px 22px ${SKY}18`
          : '0 2px 8px rgba(26,43,60,0.05)',
      }}
    >
      {/* Question button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full cursor-pointer"
        style={{
          padding: '18px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left' as const,
          background: 'none',
          border: 'none',
        }}
      >
        <span
          className="font-poppins font-semibold text-text"
          style={{ fontSize: 15, paddingRight: 12 }}
        >
          {question}
        </span>

        {/* Toggle icon */}
        <span
          className="flex items-center justify-center shrink-0"
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: isOpen ? SKY : `${SKY}18`,
            color: isOpen ? '#FFFFFF' : SKY,
            fontSize: 18,
            fontWeight: 700,
            transition: 'all 0.25s ease',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Answer (collapsible) */}
      {isOpen && (
        <div
          className="text-text-mid"
          style={{ padding: '0 22px 20px', fontSize: 14, lineHeight: 1.72 }}
        >
          {answer}
        </div>
      )}
    </article>
  )
}
