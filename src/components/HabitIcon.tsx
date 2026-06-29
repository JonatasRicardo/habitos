import { Apple, BookOpen, HeartPulse, Moon, NotebookText } from 'lucide-react'
import type { HabitId } from '../types'

type HabitIconProps = {
  id: HabitId
  className?: string
  strokeWidth?: number
}

export function HabitIcon({ id, className = 'h-9 w-9', strokeWidth = 1.8 }: HabitIconProps) {
  const props = {
    className,
    strokeWidth,
    'aria-hidden': true,
  }

  if (id === 'exercise') return <HeartPulse {...props} />
  if (id === 'food') return <Apple {...props} />
  if (id === 'editing') return <NotebookText {...props} />
  if (id === 'sleep') return <Moon {...props} />
  return <BookOpen {...props} />
}
