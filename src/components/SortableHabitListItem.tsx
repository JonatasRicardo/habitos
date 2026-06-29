import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { HabitListItem } from './HabitListItem'
import type { Habit } from '../types'

type SortableHabitListItemProps = {
  habit: Habit
  index: number
}

export function SortableHabitListItem({ habit, index }: SortableHabitListItemProps) {
  const { attributes, listeners, setActivatorNodeRef, setNodeRef, transform, transition, isDragging } = useSortable({
    id: habit.id,
  })

  return (
    <HabitListItem
      habit={habit}
      index={index}
      isDragging={isDragging}
      setNodeRef={setNodeRef}
      setActivatorNodeRef={setActivatorNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        boxShadow: isDragging ? '0 14px 24px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255,255,255,0.42)' : undefined,
      }}
      dragHandleProps={{
        ...attributes,
        ...listeners,
      }}
    />
  )
}
