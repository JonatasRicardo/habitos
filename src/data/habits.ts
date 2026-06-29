import type { Habit, HabitCompletion } from '../types'

export const STORAGE_KEY = 'habitos:v1'

export const habitsSeed: Habit[] = [
  {
    id: 'exercise',
    name: 'Exercício',
    description: 'sim/não',
    type: 'boolean',
    frequency: 'daily',
    color: '#ff2c3a',
    accentClass: 'bg-danger',
  },
  {
    id: 'food',
    name: 'Alimentação',
    description: 'sim/não',
    type: 'boolean',
    frequency: 'daily',
    color: '#23af47',
    accentClass: 'bg-success',
  },
  {
    id: 'editing',
    name: 'Edição',
    description: 'Contador . Meta: 1 edição',
    type: 'counter',
    frequency: 'daily',
    color: '#7b52ff',
    accentClass: 'bg-violet',
    unit: 'edição',
    goal: 1,
    auto: true,
  },
  {
    id: 'sleep',
    name: 'Sono',
    description: 'Tempo . Meta: 7h',
    type: 'duration',
    frequency: 'daily',
    color: '#00bfc0',
    accentClass: 'bg-cyan',
    unit: 'h',
    goal: 7,
  },
  {
    id: 'book',
    name: 'Livro',
    description: 'Tempo . Meta: 15min',
    type: 'duration',
    frequency: 'daily',
    color: '#129cff',
    accentClass: 'bg-blue',
    unit: 'min',
    goal: 15,
    auto: true,
  },
]

const dates = Array.from({ length: 31 }, (_, index) => `2026-07-${String(index + 1).padStart(2, '0')}`)

const weeklyValues: Record<string, Record<string, number>> = {
  '2026-06-21': { exercise: 0, food: 1, editing: 0, sleep: 1, book: 0 },
  '2026-06-22': { exercise: 0, food: 1, editing: 1, sleep: 1, book: 1 },
  '2026-06-23': { exercise: 1, food: 1, editing: 1, sleep: 0, book: 1 },
  '2026-06-24': { exercise: 1, food: 1, editing: 0, sleep: 1, book: 1 },
  '2026-06-25': { exercise: 1, food: 1, editing: 1, sleep: 0, book: 1 },
  '2026-06-26': { exercise: 1, food: 1, editing: 1, sleep: 1, book: 1 },
  '2026-06-27': { exercise: 0, food: 1, editing: 0, sleep: 1, book: 0 },
  '2026-06-28': { exercise: 1, food: 1, editing: 0, sleep: 0, book: 1 },
}

const monthPattern = [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1]

export const completionsSeed: HabitCompletion[] = [
  ...Object.entries(weeklyValues).flatMap(([date, values]) =>
    habitsSeed.map((habit) => ({
      habitId: habit.id,
      date,
      value: values[habit.id] ?? 0,
    })),
  ),
  ...dates.flatMap((date, index) =>
    habitsSeed.map((habit, habitIndex) => ({
      habitId: habit.id,
      date,
      value: habit.id === 'food' ? monthPattern[index] : monthPattern[(index + habitIndex * 3) % monthPattern.length],
    })),
  ),
]
