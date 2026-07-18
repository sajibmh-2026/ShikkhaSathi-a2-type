// ── Final CTA Section ────────────────────────────────────────────────────────
// "Ready to make teaching more enjoyable?" — gradient CTA block

export default function CtaSection() {
  return (
    <section
      aria-label="Start using ShikkhaSathi AI"
      style={{
        background: 'linear-gradient(135deg, #E8F8EF 0%, #EEF9FF 50%, #FFF8E0 100%)',
        padding: '96px 24px',
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: 680 }}>
        {/* ── Star Emoji ── */}
        <div style={{ fontSize: 52, marginBottom: 18 }}>🌟</div>

        {/* ── Heading ── */}
        <h2
          className="font-poppins font-extrabold text-text"
          style={{ fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: 1.2, marginBottom: 18 }}
        >
          Ready to make teaching
          <br />
          <span className="text-sky">more enjoyable?</span>
        </h2>

        {/* ── Description ── */}
        <p
          className="text-text-mid mx-auto"
          style={{ fontSize: 17, lineHeight: 1.72, maxWidth: 470, marginBottom: 36 }}
        >
          Join 1,200+ teachers across Bangladesh who start every school day with
          confidence, creativity, and ShikkhaSathi AI.
        </p>

        {/* ── CTA Buttons ── */}
        <div
          className="flex flex-wrap justify-center gap-4"
          style={{ marginBottom: 20 }}
        >
          {/* Primary */}
          <button
            type="button"
            className="font-poppins font-bold text-white"
            style={{
              background: '#3AAFE8',
              border: 'none',
              borderRadius: 14,
              padding: '16px 38px',
              fontSize: 17,
              boxShadow: '0 8px 26px #3AAFE848',
              cursor: 'pointer',
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
            Start for Free Today 🚀
          </button>

          {/* Secondary */}
          <button
            type="button"
            className="font-poppins font-semibold text-text"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #E2E8EF',
              borderRadius: 14,
              padding: '16px 28px',
              fontSize: 17,
              boxShadow: '0 2px 10px rgba(26,43,60,0.06)',
              cursor: 'pointer',
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
            Watch Demo
          </button>
        </div>

        {/* ── Bottom Note ── */}
        <p className="text-text-muted" style={{ fontSize: 13 }}>
          No credit card required · Free plan always available · Set up in 2 minutes
        </p>
      </div>
    </section>
  )
}
