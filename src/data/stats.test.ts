import { describe, expect, it } from 'vitest'
import { completionsSeed, habitsSeed } from './habits'
import { calculateStats, getPeriodDates } from './stats'

describe('stats', () => {
  it('exposes fixed ranges for day, week and month', () => {
    expect(getPeriodDates('day')).toEqual(['2026-06-28'])
    expect(getPeriodDates('week')).toHaveLength(7)
    expect(getPeriodDates('month')).toHaveLength(31)
  })

  it('derives completion percentages from seeded data', () => {
    const day = calculateStats(habitsSeed, completionsSeed, 'day')
    const week = calculateStats(habitsSeed, completionsSeed, 'week')
    const month = calculateStats(habitsSeed, completionsSeed, 'month')

    expect(day.completed).toBe(3)
    expect(day.total).toBe(5)
    expect(day.completionPercent).toBe(60)
    expect(week.total).toBe(35)
    expect(week.bestHabitId).toBe('food')
    expect(week.completionPercent).toBeGreaterThan(50)
    expect(month.total).toBe(155)
    expect(month.habitScores.find((score) => score.habitId === 'food')?.completed).toBe(22)
  })
})
