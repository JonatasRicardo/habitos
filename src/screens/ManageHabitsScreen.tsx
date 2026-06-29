import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { ArrowLeft, Plus } from 'lucide-react'
import { useState } from 'react'
import { BottomActionButton } from '../components/BottomActionButton'
import { Header } from '../components/Header'
import { IconButton } from '../components/IconButton'
import { SortableHabitListItem } from '../components/SortableHabitListItem'
import type { HabitosStore } from '../data/storage'

type ManageHabitsScreenProps = {
  store: HabitosStore
  onBack: () => void
}

export function ManageHabitsScreen({ store, onBack }: ManageHabitsScreenProps) {
  const [habits, setHabits] = useState(store.habits)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) {
      return
    }

    setHabits((currentHabits) => {
      const oldIndex = currentHabits.findIndex((habit) => habit.id === active.id)
      const newIndex = currentHabits.findIndex((habit) => habit.id === over.id)

      return arrayMove(currentHabits, oldIndex, newIndex)
    })
  }

  return (
    <div className="app-gradient min-h-svh">
      <Header
        title="Gerenciar Hábitos"
        subtitle={`${habits.length}/10 hábitos`}
        leading={
          <IconButton
            label="Voltar"
            icon={<ArrowLeft className="h-6 w-6" strokeWidth={2.3} />}
            variant="plain"
            size="sm"
            onClick={onBack}
          />
        }
        trailing={<IconButton label="Adicionar hábito" icon={<Plus className="h-8 w-8" strokeWidth={2.2} />} variant="dark" />}
      />

      <div className="space-y-3 px-5 pb-12 pt-5">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={habits.map((habit) => habit.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {habits.map((habit, index) => (
                <SortableHabitListItem key={habit.id} habit={habit} index={index} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
        <div className="relative ml-2.5 pt-2">
          <BottomActionButton label="Adicionar Hábito" compact />
        </div>
      </div>
    </div>
  )
}
