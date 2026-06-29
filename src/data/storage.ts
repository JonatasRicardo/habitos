import { completionsSeed, habitsSeed, STORAGE_KEY } from './habits'
import type { Habit, HabitCompletion } from '../types'

export type HabitosStore = {
  habits: Habit[]
  completions: HabitCompletion[]
}

const seedStore: HabitosStore = {
  habits: habitsSeed,
  completions: completionsSeed,
}

export function loadHabitosStore(storage: Storage | undefined = globalThis.localStorage): HabitosStore {
  if (!storage) {
    return seedStore
  }

  const storedValue = storage.getItem(STORAGE_KEY)

  if (!storedValue) {
    storage.setItem(STORAGE_KEY, JSON.stringify(seedStore))
    return seedStore
  }

  try {
    const parsed = JSON.parse(storedValue) as Partial<HabitosStore>
    if (!Array.isArray(parsed.habits) || !Array.isArray(parsed.completions)) {
      throw new Error('Invalid habitos storage shape')
    }
    return {
      habits: parsed.habits,
      completions: parsed.completions,
    }
  } catch {
    storage.setItem(STORAGE_KEY, JSON.stringify(seedStore))
    return seedStore
  }
}
