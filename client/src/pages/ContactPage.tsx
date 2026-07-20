import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import FaqItem from '@/components/cards/FaqItem'

// ── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'hello@shikkhasathi.ai', color: '#3AAFE8', bg: '#EEF9FF' },
  { icon: '📞', label: 'Phone', value: '+880 1700-000000', color: '#48C07A', bg: '#E8F8EF' },
  { icon: '📍', label: 'Location', value: 'Dhaka, Bangladesh', color: '#FF8B5A', bg: '#FFF0E6' },
  { icon: '🕘', label: 'Hours', value: 'Mon–Fri, 9am–6pm', color: '#C09010', bg: '#FFF8E0' },
]

const SOCIAL_LINKS = [
  { icon: '📘', label: 'Facebook', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
]

const CONTACT_FAQS = [
  {
    q: 'How quickly do you respond to emails?',
    a: 'We typically respond within 24 hours during business days (Mon–Fri). For urgent matters, please call us directly.',
  },
  {
    q: 'Can I schedule a demo for my school?',
    a: 'Absolutely! Send us an email with your school name, number of teachers, and preferred date. We\'ll arrange a personalized demo.',
  },
  {
    q: 'Do you offer training for teachers?',
    a: 'Yes, we provide free onboarding sessions for all new users. Schools on our Pro plan get dedicated training workshops.',
  },
  {
    q: 'I found a bug. How do I report it?',
    a: 'Email us at hello@shikkhasathi.ai with a description and screenshots. We appreciate bug reports and usually fix them within 48 hours.',
  },
]

// ── Contact Info Card ────────────────────────────────────────────────────────

function ContactInfoCard({ info }: { info: (typeof CONTACT_INFO)[number] }) {
  return (
    <div
      className="flex items-center gap-4"
      style={{
        background: '#FFFFFF',
        borderRadius: 14,
        border: '1.5px solid #E2E8EF',
        padding: '16px 20px',
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: info.bg,
          fontSize: 20,
          flexShrink: 0,
        }}
      >
        {info.icon}
      </div>
      <div>
        <div className="text-text-muted" style={{ fontSize: 12, marginBottom: 2 }}>
          {info.label}
        </div>
        <div className="font-poppins font-semibold text-text" style={{ fontSize: 14 }}>
          {info.value}
        </div>
      </div>
    </div>
  )
}

// ── Contact Page ─────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      {/* Hero */}
      <PageHero
        badge="Contact"
        heading={
          <>
            We&apos;d Love to
            <br />
            Hear From You 💬
          </>
        }
        description="Have a question, suggestion, or want to partner with us? We're here to help."
      />

      {/* Contact Grid */}
      <section style={{ background: '#F8F5F0', padding: '80px 24px' }}>
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10"
          style={{ maxWidth: 1100 }}
        >
          {/* Left — Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 20,
              border: '1.5px solid #E2E8EF',
              padding: 32,
            }}
          >
            <h3
              className="font-poppins font-bold text-text mb-6"
              style={{ fontSize: 20 }}
            >
              Send us a message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! We\'ll get back to you soon.')
              }}
              className="flex flex-col gap-4"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-poppins font-medium text-text mb-2"
                    style={{ fontSize: 13 }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
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
                <div>
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-text mb-2"
                    style={{ fontSize: 13 }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
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
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-poppins font-medium text-text mb-2"
                  style={{ fontSize: 13 }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
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

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-poppins font-medium text-text mb-2"
                  style={{ fontSize: 13 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 10,
                    border: '1.5px solid #E2E8EF',
                    fontSize: 14,
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3AAFE8')}
                  onBlur={(e) => (e.target.style.borderColor = '#E2E8EF')}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="font-poppins font-bold text-white cursor-pointer"
                style={{
                  background: '#3AAFE8',
                  border: 'none',
                  borderRadius: 12,
                  padding: '14px 32px',
                  fontSize: 15,
                  boxShadow: '0 6px 20px #3AAFE840',
                  transition: 'transform 0.2s ease, filter 0.2s ease',
                  alignSelf: 'flex-start',
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
                Send Message ✉️
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="flex flex-col gap-5">
            <h3
              className="font-poppins font-bold text-text"
              style={{ fontSize: 20 }}
            >
              Get in touch
            </h3>
            <p className="text-text-mid" style={{ fontSize: 14, lineHeight: 1.7 }}>
              Whether you're a teacher, school administrator, or parent — we'd
              love to hear from you.
            </p>

            {/* Contact info cards */}
            {CONTACT_INFO.map((info) => (
              <ContactInfoCard key={info.label} info={info} />
            ))}

            {/* Social */}
            <div style={{ marginTop: 8 }}>
              <div
                className="font-poppins font-medium text-text-mid mb-3"
                style={{ fontSize: 13 }}
              >
                Follow us
              </div>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: 'rgba(58,175,232,0.08)',
                      fontSize: 16,
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = 'rgba(58,175,232,0.15)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'rgba(58,175,232,0.08)')
                    }
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#EDF5FF', padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 680 }}>
          <h2
            className="font-poppins font-bold text-text text-center mb-8"
            style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
          >
            Quick answers
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CONTACT_FAQS.map(({ q, a }, i) => (
              <FaqItem
                key={i}
                question={q}
                answer={a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
