import { useId } from 'react'
import { motion } from 'motion/react'

type CafeMugProps = {
  fill?: number
  size?: number
  color?: string
  coffee?: string
  steam?: boolean
  showLabel?: boolean
  className?: string
}

function lighten(hex: string, amount = 28) {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((char) => char + char).join('') : clean
  const numeric = Number.parseInt(full, 16)
  const red = Math.min(255, (numeric >> 16) + amount)
  const green = Math.min(255, ((numeric >> 8) & 0xff) + amount)
  const blue = Math.min(255, (numeric & 0xff) + amount)

  return `#${((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0')}`
}

export function CafeMug({
  fill = 50,
  size = 92,
  color = '#050505',
  coffee = '#050505',
  steam,
  showLabel = true,
  className,
}: CafeMugProps) {
  const rawId = useId().replaceAll(':', '')
  const clipId = `cafe-mug-clip-${rawId}`
  const level = Math.max(0, Math.min(100, fill))
  const bottomY = 272
  const topY = 118
  const surfaceY = bottomY - (level / 100) * (bottomY - topY)
  const showSteam = steam ?? level > 0
  const mugBody =
    'M 40 110 L 160 110 Q 170 110 170 120 L 170 242 Q 170 270 142 270 L 58 270 Q 30 270 30 242 L 30 120 Q 30 110 40 110 Z'

  return (
    <svg
      width={size}
      height={Math.round(size * (300 / 230))}
      viewBox="-33 0 230 300"
      fill="none"
      role="img"
      aria-label={`Caneca de café ${level}% cheia`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={mugBody} />
        </clipPath>
        <style>{`
          @keyframes cafe-steam {
            0% { opacity: 0; transform: translateY(6px) scaleY(.9); }
            30% { opacity: .48; }
            70% { opacity: .48; }
            100% { opacity: 0; transform: translateY(-12px) scaleY(1.1); }
          }
          .cafe-steam-${rawId} path {
            transform-box: fill-box;
            transform-origin: center bottom;
            animation: cafe-steam 3s ease-in-out infinite;
          }
          .cafe-steam-${rawId} path:nth-child(2) { animation-delay: 1s; }
          .cafe-steam-${rawId} path:nth-child(3) { animation-delay: 2s; }
          @media (prefers-reduced-motion: reduce) {
            .cafe-steam-${rawId} path { animation: none; opacity: .42; }
          }
        `}</style>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <motion.rect
          x="20"
          width="160"
          fill={coffee}
          initial={false}
          animate={{ y: surfaceY, height: bottomY - surfaceY }}
          transition={{ type: 'spring', stiffness: 160, damping: 24 }}
        />
        {level > 0 && (
          <motion.ellipse
            cx="100"
            rx="66"
            ry="6"
            fill={lighten(coffee)}
            initial={false}
            animate={{ cy: surfaceY }}
            transition={{ type: 'spring', stiffness: 160, damping: 24 }}
          />
        )}
      </g>
      <path d={mugBody} stroke={color} strokeWidth="8" strokeLinejoin="round" />
      <path
        d="M 30 150 L 14 150 Q -6 150 -6 172 L -6 196 Q -6 218 14 218 L 30 218"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showSteam && (
        <g className={`cafe-steam-${rawId}`} stroke={color} strokeWidth="7" strokeLinecap="round" opacity="0.48">
          <path d="M 70 95 C 60 82 80 74 70 60 C 62 48 78 42 72 30" />
          <path d="M 100 95 C 90 82 110 74 100 60 C 92 48 108 42 102 30" />
          <path d="M 130 95 C 120 82 140 74 130 60 C 122 48 138 42 132 30" />
        </g>
      )}
      {showLabel && (
        <text
          x="100"
          y="206"
          textAnchor="middle"
          fill="#fff"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="42"
          fontWeight="900"
        >
          {level}%
        </text>
      )}
    </svg>
  )
}
