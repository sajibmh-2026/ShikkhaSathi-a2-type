// ── Footer ───────────────────────────────────────────────────────────────────
// 4-column footer: Brand, Quick Links, For Teachers, Contact Us
// Responsive: 4col (≥1000px) → 2col (≥641px) → 1col (mobile)

import { Link } from 'react-router-dom'

// ── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const TEACHER_LINKS = [
  { label: 'Lesson Planner', path: '#' },
  { label: 'Worksheet Generator', path: '#' },
  { label: 'Exam Builder', path: '#' },
  { label: 'Progress Reports', path: '#' },
  { label: 'Resource Library', path: '#' },
]

const CONTACT_ITEMS = [
  { icon: '📧', text: 'hello@shikkhasathi.ai' },
  { icon: '📞', text: '+880 1700-000000' },
  { icon: '📍', text: 'Dhaka, Bangladesh' },
  { icon: '🕘', text: 'Mon–Fri, 9am–6pm' },
]

const SOCIAL_ICONS = ['📘', '🐦', '📷', '▶️']

const POLICY_LINKS = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']

// ── Sub-components ───────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <div>
      {/* Logo row */}
      <div className="flex items-center gap-2.5" style={{ marginBottom: 16 }}>
        <div
          className="flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            background: 'linear-gradient(135deg, #3AAFE8, #1E91CC)',
            fontSize: 20,
          }}
        >
          🦉
        </div>
        <div>
          <div
            className="font-poppins font-bold text-white"
            style={{ fontSize: 16 }}
          >
            ShikkhaSathi AI
          </div>
          <div className="font-poppins text-sky" style={{ fontSize: 11 }}>
            Teach Smarter
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 13, lineHeight: 1.72, maxWidth: 280, marginBottom: 22 }}>
        AI-powered teaching tools designed for primary school educators in
        Bangladesh — from Play Group to Class 5.
      </p>

      {/* Social icons */}
      <div className="flex gap-2.5">
        {SOCIAL_ICONS.map((icon, i) => (
          <a
            key={i}
            href="#"
            aria-label={`Social link ${i + 1}`}
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: 'rgba(255,255,255,0.08)',
              fontSize: 16,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; path: string }[]
}) {
  return (
    <div>
      <h4
        className="font-poppins font-semibold text-white"
        style={{ fontSize: 14, marginBottom: 18 }}
      >
        {title}
      </h4>
      {links.map(({ label, path }) => (
        <Link
          key={label}
          to={path}
          className="block hover:text-sky transition-colors"
          style={{
            fontSize: 13,
            marginBottom: 11,
            color: '#8BA0B8',
            textDecoration: 'none',
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

function FooterContactColumn() {
  return (
    <div>
      <h4
        className="font-poppins font-semibold text-white"
        style={{ fontSize: 14, marginBottom: 18 }}
      >
        Contact Us
      </h4>
      {CONTACT_ITEMS.map(({ icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-[9px]"
          style={{ marginBottom: 11 }}
        >
          <span style={{ fontSize: 13 }}>{icon}</span>
          <span style={{ fontSize: 13 }}>{text}</span>
        </div>
      ))}
    </div>
  )
}

// ── Footer Component ─────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ background: '#1A2B3C', padding: '64px 24px 32px', color: '#8BA0B8' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* ── 4-Column Grid ── */}
        <div
          className="grid grid-cols-1 gap-12 min-[641px]:grid-cols-[1fr_1fr] min-[1000px]:grid-cols-[2fr_1fr_1fr_1fr]"
          style={{ marginBottom: 52 }}
        >
          <FooterLogo />
          <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />
          <FooterLinkColumn title="For Teachers" links={TEACHER_LINKS} />
          <FooterContactColumn />
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24 }}
        >
          <p style={{ fontSize: 13 }}>© 2026 ShikkhaSathi AI. All rights reserved.</p>
          <div className="flex gap-[22px]">
            {POLICY_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-sky transition-colors"
                style={{
                  fontSize: 13,
                  color: '#8BA0B8',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
