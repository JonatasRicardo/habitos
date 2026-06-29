import { Pencil } from 'lucide-react'
import { motion } from 'motion/react'
import type { ButtonHTMLAttributes, CSSProperties } from 'react'
import { HabitIcon } from './HabitIcon'
import { IconButton } from './IconButton'
import type { Habit } from '../types'

type HabitListItemProps = {
  habit: Habit
  index?: number
  isDragging?: boolean
  setNodeRef?: (node: HTMLElement | null) => void
  setActivatorNodeRef?: (node: HTMLButtonElement | null) => void
  style?: CSSProperties
  dragHandleProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '')
  const value = Number.parseInt(normalized, 16)

  return {
    red: (value >> 16) & 255,
    green: (value >> 8) & 255,
    blue: value & 255,
  }
}

export function HabitListItem({
  habit,
  index = 0,
  isDragging = false,
  setNodeRef,
  setActivatorNodeRef,
  style,
  dragHandleProps,
}: HabitListItemProps) {
  const { red, green, blue } = hexToRgb(habit.color)
  const accent = `${red}, ${green}, ${blue}`

  return (
    <motion.article
      ref={setNodeRef}
      className="relative ml-2.5 flex h-[72px] items-center rounded-[8px] border border-white/90 pr-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 229, 176, 0.86) 0%, rgba(255, 214, 143, 0.76) 100%), rgba(255, 255, 255, 0.16)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: isDragging ? 30 : undefined,
        ...style,
      }}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: isDragging ? 0.97 : 1, x: 0, scale: isDragging ? 1.015 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28, delay: Math.min(index * 0.035, 0.16) }}
    >
      <button
        type="button"
        ref={setActivatorNodeRef}
        aria-label={`Reordenar ${habit.name}`}
        className="relative z-10 flex h-full w-[34px] touch-none cursor-grab items-center justify-center rounded-l-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink active:cursor-grabbing"
        {...dragHandleProps}
      >
        <span className="grid grid-cols-2 gap-x-1 gap-y-1">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-ink" />
          ))}
        </span>
      </button>
      <div className="relative z-10 flex h-full w-[62px] items-center justify-center">
        <HabitIcon id={habit.id} className="h-[47px] w-[47px]" strokeWidth={1.65} />
      </div>
      <div className="relative z-10 min-w-0 flex-1 pl-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{ background: `rgb(${accent})` }}
            aria-hidden
          />
          <h2 className="truncate text-[15px] font-extrabold leading-tight">{habit.name}</h2>
        </div>
        <div className="mt-0.5 flex min-w-0 items-center gap-2">
          <p className="truncate text-[11px] font-medium leading-tight">{habit.description}</p>
          {habit.auto && <span className="rounded-full bg-sunshine px-2 py-0.5 text-[9px] font-extrabold">Auto</span>}
        </div>
      </div>
      <IconButton
        label={`Editar ${habit.name}`}
        icon={<Pencil className="h-5 w-5" strokeWidth={2.2} />}
        variant="plain"
        size="sm"
        className="text-muted"
      />
    </motion.article>
  )
}
