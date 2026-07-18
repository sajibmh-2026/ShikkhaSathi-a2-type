// ── Types ────────────────────────────────────────────────────────────────────

interface TeacherAvatarProps {
  /** Circle + shirt accent color (e.g. '#3AAFE8') */
  accent: string
  /** Hair fill color (e.g. '#5C3D2E') */
  hair: string
  /** Shirt fill color */
  shirt: string
}

// ── Teacher Avatar SVG ───────────────────────────────────────────────────────

export default function TeacherAvatar({ accent, hair, shirt }: TeacherAvatarProps) {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="34" cy="34" r="34" fill={accent} opacity="0.12" />

      {/* Body / shirt */}
      <path d="M14 66c0-11.1 9-20 20-20s20 8.9 20 20" fill={shirt} />

      {/* Neck */}
      <rect x="29" y="38" width="10" height="12" rx="3" fill="#FDBCB4" />

      {/* Head */}
      <circle cx="34" cy="30" r="17" fill="#FDBCB4" />

      {/* Hair base */}
      <path
        d="M17 23 Q19 10 34 8 Q49 10 51 23 L47 28 Q34 18 21 28 Z"
        fill={hair}
      />

      {/* Hair bun */}
      <circle cx="48" cy="16" r="7" fill={hair} />
      <circle cx="48" cy="16" r="4.5" fill={hair} opacity="0.7" />

      {/* Eyes */}
      <ellipse cx="27" cy="29" rx="2.8" ry="3.2" fill="#3D2B1F" />
      <ellipse cx="41" cy="29" rx="2.8" ry="3.2" fill="#3D2B1F" />

      {/* Eye highlights */}
      <circle cx="28" cy="28" r="1.1" fill="white" />
      <circle cx="42" cy="28" r="1.1" fill="white" />

      {/* Smile */}
      <path
        d="M27 37 Q34 44 41 37"
        stroke="#C8816A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Blush */}
      <ellipse cx="22" cy="35" rx="4" ry="3" fill="#FFB8A0" opacity="0.48" />
      <ellipse cx="46" cy="35" rx="4" ry="3" fill="#FFB8A0" opacity="0.48" />
    </svg>
  )
}
