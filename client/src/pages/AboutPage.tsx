import PageHero from '@/components/ui/PageHero'

// ── Data ─────────────────────────────────────────────────────────────────────

const IMPACT_CARDS = [
  {
    icon: '⏰',
    title: 'Save 10+ Hours Weekly',
    description: 'Automate lesson planning, worksheet creation, and report writing — so you can spend more time with students.',
    color: '#3AAFE8',
    bg: '#EEF9FF',
  },
  {
    icon: '📈',
    title: 'Better Learning Outcomes',
    description: 'AI-generated materials are aligned with NCTB curriculum and Bloom\'s taxonomy, ensuring structured and effective teaching.',
    color: '#48C07A',
    bg: '#E8F8EF',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Engaged Parents',
    description: 'Clear, bilingual progress reports help parents understand their child\'s development — building trust and collaboration.',
    color: '#FF8B5A',
    bg: '#FFF0E6',
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Sajib Hossain',
    role: 'Founder & Developer',
    bio: 'Full-stack developer passionate about using technology to improve primary education in Bangladesh.',
    avatar: '👨‍💻',
    color: '#3AAFE8',
  },
  {
    name: 'Fatima Rahman',
    role: 'Curriculum Advisor',
    bio: 'Former primary school teacher with 12 years of experience. Ensures all AI content meets NCTB standards.',
    avatar: '👩‍🏫',
    color: '#48C07A',
  },
  {
    name: 'Arif Khan',
    role: 'AI Research Lead',
    bio: 'NLP specialist focused on Bangla language processing and educational content generation.',
    avatar: '🧑‍🔬',
    color: '#C09010',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Community Manager',
    bio: 'Connects with teachers across Bangladesh to gather feedback and build a supportive community.',
    avatar: '👩‍💼',
    color: '#FF8B5A',
  },
]

const STATS = [
  { value: '1,200+', label: 'Teachers using ShikkhaSathi' },
  { value: '50+', label: 'Schools across Bangladesh' },
  { value: '15,000+', label: 'Lesson plans generated' },
  { value: '98%', label: 'Teacher satisfaction rate' },
]

// ── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({ member }: { member: (typeof TEAM_MEMBERS)[number] }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: 16,
        border: '1.5px solid #E2E8EF',
        padding: 28,
        textAlign: 'center',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,43,60,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Avatar */}
      <div
        className="flex items-center justify-center mx-auto"
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: `${member.color}15`,
          fontSize: 28,
          marginBottom: 16,
        }}
      >
        {member.avatar}
      </div>
      <h3
        className="font-poppins font-bold text-text mb-1"
        style={{ fontSize: 16 }}
      >
        {member.name}
      </h3>
      <p
        className="font-poppins font-semibold mb-3"
        style={{ fontSize: 13, color: member.color }}
      >
        {member.role}
      </p>
      <p className="text-text-mid" style={{ fontSize: 13, lineHeight: 1.65 }}>
        {member.bio}
      </p>
    </div>
  )
}

// ── About Page ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        badge="About Us"
        heading={
          <>
            Empowering Teachers
            <br />
            Across Bangladesh 🇧🇩
          </>
        }
        description="We believe every teacher deserves access to smart tools that save time and improve learning outcomes — regardless of their school's resources."
      />

      {/* Mission */}
      <section style={{ background: '#F8F5F0', padding: '80px 24px' }}>
        <div
          className="mx-auto flex flex-col md:flex-row items-center gap-12"
          style={{ maxWidth: 1100 }}
        >
          {/* Left — illustration placeholder */}
          <div className="flex-1 flex justify-center">
            <div
              style={{
                width: 320,
                height: 240,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #EEF9FF 0%, #E8F8EF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 64,
              }}
            >
              🏫
            </div>
          </div>

          {/* Right — text */}
          <div className="flex-1">
            <h2
              className="font-poppins font-bold text-text mb-4"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
            >
              Why we built ShikkhaSathi AI
            </h2>
            <p className="text-text-mid mb-4" style={{ fontSize: 15, lineHeight: 1.72 }}>
              In Bangladesh, primary school teachers manage everything — lesson
              planning, worksheets, exams, parent communication — often with
              limited resources and support.
            </p>
            <p className="text-text-mid mb-4" style={{ fontSize: 15, lineHeight: 1.72 }}>
              We built ShikkhaSathi AI to change that. Our AI assistant handles
              the administrative burden so teachers can focus on what they do
              best: <strong className="text-text">inspiring young minds</strong>.
            </p>
            <p className="text-text-mid" style={{ fontSize: 15, lineHeight: 1.72 }}>
              From Play Group to Class 5, in both Bangla and English —
              ShikkhaSathi AI is the teaching companion every educator deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Cards */}
      <section style={{ background: '#EDF5FF', padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <h2
            className="font-poppins font-bold text-text text-center mb-12"
            style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
          >
            How ShikkhaSathi AI Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMPACT_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1.5px solid #E2E8EF',
                  padding: 28,
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: card.bg,
                    fontSize: 22,
                    marginBottom: 16,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-poppins font-bold text-text mb-2"
                  style={{ fontSize: 17 }}
                >
                  {card.title}
                </h3>
                <p className="text-text-mid" style={{ fontSize: 14, lineHeight: 1.7 }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          background: 'linear-gradient(135deg, #3AAFE8 0%, #1E91CC 50%, #48C07A 100%)',
          padding: '64px 24px',
        }}
      >
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ maxWidth: 900 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-poppins font-extrabold text-white mb-2"
                style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
              >
                {stat.value}
              </div>
              <div className="text-white/80" style={{ fontSize: 14 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#F8F5F0', padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div className="text-center mb-12">
            <div
              className="inline-block"
              style={{
                background: 'rgba(58,175,232,0.10)',
                borderRadius: 100,
                padding: '5px 18px',
                marginBottom: 12,
              }}
            >
              <span
                className="font-poppins font-semibold text-sky uppercase"
                style={{ fontSize: 12, letterSpacing: '0.06em' }}
              >
                Our Team
              </span>
            </div>
            <h2
              className="font-poppins font-bold text-text"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
            >
              The People Behind ShikkhaSathi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #E8F8EF 0%, #EEF9FF 50%, #FFF8E0 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>🌟</div>
          <h2
            className="font-poppins font-extrabold text-text"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.2, marginBottom: 14 }}
          >
            Join the Movement
          </h2>
          <p className="text-text-mid mb-8" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Be part of a growing community of teachers transforming education in Bangladesh.
          </p>
          <a
            href="/"
            className="inline-block font-poppins font-bold text-white"
            style={{
              background: '#3AAFE8',
              borderRadius: 14,
              padding: '14px 36px',
              fontSize: 16,
              boxShadow: '0 8px 26px #3AAFE848',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, filter 0.2s ease',
            }}
          >
            Get Started Free 🚀
          </a>
        </div>
      </section>
    </main>
  )
}
