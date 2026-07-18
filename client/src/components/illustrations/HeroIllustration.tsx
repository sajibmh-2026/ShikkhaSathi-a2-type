/**
 * HeroIllustration — Hand-drawn classroom scene SVG
 * Pixel-perfect match from Figma design.
 * Teacher at whiteboard, student at desk, floating objects.
 */

// ── Color Constants (matching design tokens) ────────────────────────────────

const SKY = '#3AAFE8'
const GREEN = '#48C07A'
const YELLOW = '#FFD044'
const ORANGE = '#FF8B5A'
const TEXT_MUTED = '#718096'

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 540 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Classroom illustration showing a teacher using AI technology with a student"
    >
      {/* ── Background ── */}
      <rect width="540" height="420" rx="24" fill="#FFF9F2" />
      {/* Warm floor */}
      <rect x="0" y="360" width="540" height="60" fill="#F0E8DC" opacity="0.8" />

      {/* ── Sunlight glow top-right ── */}
      <circle cx="462" cy="52" r="72" fill={YELLOW} opacity="0.10" />
      <circle cx="462" cy="52" r="46" fill={YELLOW} opacity="0.14" />
      <circle cx="462" cy="52" r="26" fill={YELLOW} opacity="0.22" />

      {/* ── Window ── */}
      <rect x="392" y="22" width="118" height="100" rx="10" fill="#C6E8FF" stroke="#A0CDE8" strokeWidth="2" />
      <line x1="451" y1="22" x2="451" y2="122" stroke="#A0CDE8" strokeWidth="1.5" />
      <line x1="392" y1="72" x2="510" y2="72" stroke="#A0CDE8" strokeWidth="1.5" />

      {/* ── Curtains ── */}
      <path d="M390 20 C381 45 383 78 390 122" stroke={ORANGE} strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M512 20 C521 45 519 78 512 122" stroke={ORANGE} strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.65" />

      {/* ── Whiteboard ── */}
      <rect x="30" y="52" width="200" height="148" rx="12" fill="white" stroke="#C0DDF0" strokeWidth="2" />
      <rect x="30" y="196" width="200" height="7" rx="3" fill="#C0D8E8" />
      <rect x="40" y="62" width="180" height="128" rx="7" fill="#F0F9FF" />
      {/* Board content */}
      <text x="60" y="94" fontFamily="'Poppins',sans-serif" fontSize="13" fill={SKY} fontWeight="700">
        Hello Class! 👋
      </text>
      <text x="48" y="114" fontFamily="'Inter',sans-serif" fontSize="10" fill={TEXT_MUTED}>
        Today: AI-Powered Learning
      </text>
      <text x="48" y="136" fontFamily="'Poppins',sans-serif" fontSize="14" fill={GREEN} fontWeight="600">
        A  B  C  →  1 + 2 = 3
      </text>
      {[SKY, GREEN, YELLOW, ORANGE, '#A78BFA'].map((c, i) => (
        <circle key={i} cx={58 + i * 18} cy={160} r="5.5" fill={c} opacity="0.85" />
      ))}
      {/* Board stand */}
      <rect x="124" y="203" width="6" height="24" fill="#B0C4D0" />
      <rect x="100" y="225" width="54" height="5" rx="2.5" fill="#B0C4D0" />

      {/* ── Plants ── */}
      {/* Left plant */}
      <ellipse cx="20" cy="354" rx="11" ry="22" fill={GREEN} opacity="0.6" transform="rotate(-16 20 354)" />
      <ellipse cx="40" cy="346" rx="9" ry="18" fill={GREEN} opacity="0.82" transform="rotate(14 40 346)" />
      <ellipse cx="30" cy="340" rx="7" ry="14" fill="#68D490" transform="rotate(-4 30 340)" />
      <rect x="27" y="366" width="9" height="16" rx="4" fill="#A0845C" />
      {/* Right plant */}
      <ellipse cx="512" cy="348" rx="10" ry="20" fill={GREEN} opacity="0.6" transform="rotate(16 512 348)" />
      <ellipse cx="530" cy="342" rx="8" ry="16" fill={GREEN} opacity="0.82" transform="rotate(-13 530 342)" />
      <rect x="516" y="362" width="9" height="16" rx="4" fill="#A0845C" />

      {/* ── Teacher ── */}
      {/* Dress */}
      <path d="M224 208 C216 250 212 298 210 355 H290 C288 300 284 252 276 212 Z" fill={SKY} />
      {/* Collar */}
      <path d="M238 207 L249 217 L260 207" stroke="white" strokeWidth="1.5" fill="none" opacity="0.55" />
      {/* Left arm → pointing at board */}
      <path d="M230 224 Q200 230 192 255" stroke="#FDBCB4" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="190" cy="257" r="10" fill="#FDBCB4" />
      {/* Right arm → tablet */}
      <path d="M270 228 Q297 235 304 254" stroke="#FDBCB4" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="305" cy="256" r="10" fill="#FDBCB4" />
      {/* Pointer stick */}
      <line x1="190" y1="257" x2="170" y2="162" stroke="#C4D8E4" strokeWidth="3" strokeLinecap="round" />
      {/* Neck */}
      <rect x="241" y="195" width="18" height="18" rx="6" fill="#FDBCB4" />
      {/* Head */}
      <circle cx="250" cy="170" r="30" fill="#FDBCB4" />
      {/* Ears */}
      <ellipse cx="220" cy="170" rx="5.5" ry="7" fill="#FDBCB4" />
      <ellipse cx="280" cy="170" rx="5.5" ry="7" fill="#FDBCB4" />
      {/* Hair */}
      <path d="M220 160 Q223 128 250 124 Q277 128 280 160 L276 167 Q250 154 224 167 Z" fill="#5C3D2E" />
      {/* Hair bun */}
      <circle cx="272" cy="140" r="13" fill="#5C3D2E" />
      <circle cx="272" cy="140" r="8" fill="#7A5240" />
      {/* Eyebrows */}
      <path d="M235 162 Q241 158 247 162" stroke="#5C3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M253 162 Q259 158 265 162" stroke="#5C3D2E" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Eyes */}
      <ellipse cx="240" cy="170" rx="4.2" ry="4.8" fill="#3D2B1F" />
      <ellipse cx="260" cy="170" rx="4.2" ry="4.8" fill="#3D2B1F" />
      <circle cx="241.5" cy="169" r="1.6" fill="white" />
      <circle cx="261.5" cy="169" r="1.6" fill="white" />
      {/* Smile */}
      <path d="M241 182 Q250 191 259 182" stroke="#C8816A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="234" cy="178" rx="7.5" ry="5" fill="#FFB8A0" opacity="0.44" />
      <ellipse cx="266" cy="178" rx="7.5" ry="5" fill="#FFB8A0" opacity="0.44" />

      {/* ── AI Tablet ── */}
      <rect x="300" y="240" width="76" height="56" rx="10" fill="white" stroke={SKY} strokeWidth="2" />
      <rect x="306" y="246" width="64" height="44" rx="6" fill="#EEF9FF" />
      <rect x="311" y="251" width="26" height="14" rx="5" fill={SKY} />
      <text x="314" y="262" fontFamily="'Poppins',sans-serif" fontSize="9" fill="white" fontWeight="700">
        AI ✨
      </text>
      <line x1="311" y1="274" x2="361" y2="274" stroke="#C8E0F0" strokeWidth="1.5" />
      <line x1="311" y1="280" x2="352" y2="280" stroke="#C8E0F0" strokeWidth="1.5" />
      <line x1="311" y1="286" x2="356" y2="286" stroke="#C8E0F0" strokeWidth="1.5" />

      {/* ── Student ── */}
      {/* Desk */}
      <rect x="356" y="326" width="104" height="11" rx="5" fill="#D4A574" />
      <rect x="364" y="337" width="9" height="30" rx="4" fill="#C4956A" />
      <rect x="443" y="337" width="9" height="30" rx="4" fill="#C4956A" />
      {/* Body */}
      <rect x="372" y="286" width="62" height="44" rx="12" fill={ORANGE} />
      <path d="M394 286 L403 295 L412 286" stroke="white" strokeWidth="1.4" fill="none" opacity="0.55" />
      {/* Raised arm */}
      <path d="M375 300 Q352 282 345 258" stroke="#FDBCB4" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="344" cy="256" r="9" fill="#FDBCB4" />
      {/* Right arm on desk */}
      <path d="M430 304 Q448 312 456 322" stroke="#FDBCB4" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="457" cy="324" r="9" fill="#FDBCB4" />
      {/* Neck */}
      <rect x="394" y="274" width="16" height="14" rx="4" fill="#FDBCB4" />
      {/* Head */}
      <circle cx="402" cy="258" r="26" fill="#FDBCB4" />
      {/* Ears */}
      <ellipse cx="376" cy="258" rx="4.5" ry="6" fill="#FDBCB4" />
      <ellipse cx="428" cy="258" rx="4.5" ry="6" fill="#FDBCB4" />
      {/* Hair */}
      <path d="M376 248 Q378 228 402 225 Q426 228 428 248 L424 254 Q402 241 380 254 Z" fill="#3D2B1F" />
      {/* Happy eyes */}
      <path d="M392 256 Q395 251 398 256" stroke="#3D2B1F" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M406 256 Q409 251 412 256" stroke="#3D2B1F" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <path d="M393 267 Q402 276 411 267" stroke="#C8816A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="388" cy="264" rx="5.5" ry="3.8" fill="#FFB8A0" opacity="0.5" />
      <ellipse cx="416" cy="264" rx="5.5" ry="3.8" fill="#FFB8A0" opacity="0.5" />
      {/* Notebook */}
      <rect x="364" y="312" width="56" height="14" rx="3" fill="white" stroke="#D1E9F7" strokeWidth="1" />
      <line x1="373" y1="317" x2="413" y2="317" stroke="#D1E9F7" strokeWidth="1.2" />
      <line x1="373" y1="322" x2="407" y2="322" stroke="#D1E9F7" strokeWidth="1.2" />

      {/* ── Floating Objects ── */}
      {/* Book top-left */}
      <g transform="translate(55,18) rotate(-13)">
        <rect width="44" height="32" rx="4" fill={ORANGE} />
        <rect width="3.5" height="32" fill="#D46A3A" />
        <line x1="22" y1="0" x2="22" y2="32" stroke="#D46A3A" strokeWidth="1.5" />
        <line x1="7" y1="9" x2="19" y2="9" stroke="white" strokeWidth="1.3" opacity="0.65" />
        <line x1="7" y1="15" x2="19" y2="15" stroke="white" strokeWidth="1.3" opacity="0.65" />
        <line x1="25" y1="9" x2="37" y2="9" stroke="white" strokeWidth="1.3" opacity="0.65" />
        <line x1="25" y1="15" x2="37" y2="15" stroke="white" strokeWidth="1.3" opacity="0.65" />
      </g>
      {/* Pencil top-center */}
      <g transform="translate(320,18) rotate(26)">
        <rect width="8" height="36" rx="2" fill={YELLOW} />
        <rect width="8" height="5" fill="#E8A0A0" />
        <rect y="5" width="8" height="3" fill="#C88080" />
        <polygon points="0,36 8,36 4,47" fill="#FDBCB4" />
        <polygon points="1,43 7,43 4,48" fill="#3D2B1F" />
      </g>
      {/* ABC block */}
      <rect x="474" y="204" width="38" height="38" rx="9" fill={GREEN} />
      <rect x="477" y="207" width="32" height="32" rx="6" fill="#5ED490" />
      <text x="482" y="231" fontFamily="'Poppins',sans-serif" fontSize="18" fill="white" fontWeight="800">
        A
      </text>
      {/* 123 block */}
      <rect x="474" y="250" width="38" height="38" rx="9" fill={YELLOW} />
      <rect x="477" y="253" width="32" height="32" rx="6" fill="#FFE566" />
      <text x="479" y="277" fontFamily="'Poppins',sans-serif" fontSize="15" fill="#9A6800" fontWeight="800">
        123
      </text>
      {/* Stars */}
      <text x="316" y="50" fontSize="20" fill={YELLOW}>★</text>
      <text x="148" y="44" fontSize="13" fill={YELLOW} opacity="0.7">★</text>
      <text x="478" y="188" fontSize="15" fill={YELLOW} opacity="0.8">★</text>
      <text x="86" y="250" fontSize="12" fill={YELLOW} opacity="0.55">★</text>
      {/* Math symbols */}
      <text x="72" y="248" fontSize="26" fill={SKY} fontWeight="bold" opacity="0.28">+</text>
      <text x="464" y="258" fontSize="22" fill={ORANGE} fontWeight="bold" opacity="0.4">÷</text>
      <text x="122" y="372" fontSize="24" fill={GREEN} fontWeight="bold" opacity="0.32">×</text>
      <text x="498" y="156" fontSize="20" fill={SKY} fontWeight="bold" opacity="0.38">=</text>
      {/* Sparkles */}
      <text x="350" y="232" fontSize="11" fill={YELLOW}>✦</text>
      <text x="96" y="222" fontSize="9" fill={ORANGE}>✦</text>
      <text x="488" y="328" fontSize="9" fill={GREEN}>✦</text>
      <text x="162" y="244" fontSize="8" fill={SKY}>✦</text>
      <text x="354" y="44" fontSize="11" fill={SKY} opacity="0.5">✦</text>
      {/* Ruler */}
      <g transform="translate(36,285) rotate(-22)">
        <rect width="54" height="11" rx="2" fill="#A78BFA" opacity="0.65" />
        {[0, 8, 16, 24, 32, 40, 48].map((x, i) => (
          <line
            key={i}
            x1={x + 2}
            y1="0"
            x2={x + 2}
            y2={i % 2 === 0 ? 7 : 5}
            stroke="white"
            strokeWidth="0.9"
            opacity="0.7"
          />
        ))}
      </g>
      {/* Heart accents */}
      <text x="158" y="360" fontSize="16" fill={ORANGE} opacity="0.42">♥</text>
      <text x="372" y="42" fontSize="12" fill={SKY} opacity="0.45">♥</text>
    </svg>
  )
}
