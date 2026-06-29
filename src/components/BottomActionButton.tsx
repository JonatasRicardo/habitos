import { Plus } from 'lucide-react'
import { motion } from 'motion/react'

type BottomActionButtonProps = {
  label: string
  onClick?: () => void
  compact?: boolean
}

export function BottomActionButton({ label, onClick, compact = false }: BottomActionButtonProps) {
  return (
    <motion.button
      type="button"
      className={
        compact
          ? 'flex h-[72px] w-full items-center justify-center gap-3 rounded-[8px] border border-ink bg-transparent text-[13px] font-medium'
          : 'mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sunshine transition active:scale-95'
      }
      initial={compact ? { opacity: 0, y: 8 } : false}
      animate={compact ? { opacity: 1, y: 0 } : undefined}
      whileTap={{ scale: compact ? 0.985 : 0.94 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      onClick={onClick}
    >
      <span
        className={
          compact
            ? 'flex h-9 w-9 items-center justify-center rounded-full border border-ink'
            : 'flex h-full w-full items-center justify-center'
        }
      >
        <Plus className="h-7 w-7" strokeWidth={2.3} aria-hidden />
      </span>
      {compact && <span>{label}</span>}
      {!compact && <span className="sr-only">{label}</span>}
    </motion.button>
  )
}
