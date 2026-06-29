import { describe, expect, it, beforeEach } from 'vitest'
import { habitsSeed, STORAGE_KEY } from './habits'
import { loadHabitosStore } from './storage'

describe('loadHabitosStore', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('seeds localStorage on first load', () => {
    const store = loadHabitosStore(localStorage)

    expect(store.habits).toHaveLength(5)
    expect(store.habits[0].name).toBe('Exercício')
    expect(localStorage.getItem(STORAGE_KEY)).toContain('Exercício')
  })

  it('returns stored habits when the shape is valid', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ habits: [habitsSeed[0]], completions: [] }))

    const store = loadHabitosStore(localStorage)

    expect(store.habits).toEqual([habitsSeed[0]])
    expect(store.completions).toEqual([])
  })

  it('repairs invalid storage with the seed data', () => {
    localStorage.setItem(STORAGE_KEY, '{bad')

    const store = loadHabitosStore(localStorage)

    expect(store.habits).toHaveLength(5)
    expect(localStorage.getItem(STORAGE_KEY)).toContain('Alimentação')
  })
})
