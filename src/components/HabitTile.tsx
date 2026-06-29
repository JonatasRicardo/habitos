import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import { clsx } from 'clsx'
import { HabitIcon } from './HabitIcon'
import type { Habit, HabitScore } from '../types'

type HabitBadge = {
  tone: 'success' | 'danger'
  label?: string
}

type HabitTileProps = {
  habit: Habit
  score?: HabitScore
  checked?: boolean
  best?: boolean
  badge?: HabitBadge
}

export function HabitTile({ habit, score, checked = false, best = false, badge }: HabitTileProps) {
  const visibleBadge = badge ?? (checked ? { tone: 'success' as const } : undefined)

  return (
    <motion.div
      layout
      className={clsx(
        'glass-card relative flex h-[82px] w-[86px] flex-col items-center justify-center gap-1 rounded-tile text-center',
        best && 'bg-success text-ink shadow-lift',
      )}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      {(visibleBadge || best) && (
        <span
          className={clsx(
            'absolute -top-3 flex h-7 min-w-7 items-center justify-center rounded-full px-1 text-white shadow-[0_3px_7px_rgba(0,0,0,0.16)]',
            visibleBadge?.label ? 'left-1/2 -translate-x-1/2 text-[10px] font-extrabold' : 'right-5',
            visibleBadge?.tone === 'danger' ? 'bg-danger' : 'bg-success',
          )}
        >
          {best ? (
            <span className="text-[11px] font-extrabold">{score ? `${score.completed}/${score.total}` : '✓'}</span>
          ) : visibleBadge?.label ? (
            visibleBadge.label
          ) : (
            <Check className="h-5 w-5" strokeWidth={4} />
          )}
        </span>
      )}
      <HabitIcon id={habit.id} className="h-9 w-9" />
      <span className="max-w-[76px] truncate text-[12px] font-medium">{habit.name}</span>
    </motion.div>
  )
}
