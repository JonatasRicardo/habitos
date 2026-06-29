import type { DashboardStats, Habit, HabitCompletion, HabitId, StatsPeriod } from '../types'

const periodDates: Record<StatsPeriod, string[]> = {
  day: ['2026-06-28'],
  week: ['2026-06-21', '2026-06-22', '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26', '2026-06-27'],
  month: Array.from({ length: 31 }, (_, index) => `2026-07-${String(index + 1).padStart(2, '0')}`),
}

export function getPeriodDates(period: StatsPeriod) {
  return periodDates[period]
}

export function getCompletionValue(completions: HabitCompletion[], habitId: HabitId, date: string) {
  return completions.find((completion) => completion.habitId === habitId && completion.date === date)?.value ?? 0
}

function percentage(completed: number, total: number) {
  if (total === 0) {
    return 0
  }

  return Math.round((completed / total) * 100)
}

export function calculateStats(
  habits: Habit[],
  completions: HabitCompletion[],
  period: StatsPeriod,
): DashboardStats {
  const dates = getPeriodDates(period)
  const total = habits.length * dates.length
  const completed = habits.reduce(
    (sum, habit) =>
      sum + dates.reduce((dateSum, date) => dateSum + (getCompletionValue(completions, habit.id, date) > 0 ? 1 : 0), 0),
    0,
  )
  const habitScores = habits.map((habit) => {
    const habitCompleted = dates.reduce(
      (sum, date) => sum + (getCompletionValue(completions, habit.id, date) > 0 ? 1 : 0),
      0,
    )

    return {
      habitId: habit.id,
      completed: habitCompleted,
      total: dates.length,
      percent: percentage(habitCompleted, dates.length),
    }
  })
  const bestHabit = [...habitScores].sort((left, right) => right.percent - left.percent)[0]

  return {
    period,
    completionPercent: percentage(completed, total),
    completed,
    total,
    bestHabitId: bestHabit.habitId,
    habitScores,
  }
}
