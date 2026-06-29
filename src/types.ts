export type HabitType = 'boolean' | 'counter' | 'duration'

export type HabitFrequency = 'daily'

export type HabitId = 'exercise' | 'food' | 'editing' | 'sleep' | 'book'

export type Habit = {
  id: HabitId
  name: string
  description: string
  type: HabitType
  frequency: HabitFrequency
  color: string
  accentClass: string
  unit?: string
  goal?: number
  auto?: boolean
}

export type HabitCompletion = {
  habitId: HabitId
  date: string
  value: number
}

export type StatsPeriod = 'day' | 'week' | 'month'

export type HabitScore = {
  habitId: HabitId
  completed: number
  total: number
  percent: number
}

export type DashboardStats = {
  period: StatsPeriod
  completionPercent: number
  completed: number
  total: number
  bestHabitId: HabitId
  habitScores: HabitScore[]
}
