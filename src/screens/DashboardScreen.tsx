import { ChevronLeft, ChevronRight, Settings } from 'lucide-react'
import { motion } from 'motion/react'
import { BottomActionButton } from '../components/BottomActionButton'
import { CafeMug } from '../components/CafeMug'
import { HabitIcon } from '../components/HabitIcon'
import { HabitTile } from '../components/HabitTile'
import { Header } from '../components/Header'
import { IconButton } from '../components/IconButton'
import { ProgressBars } from '../components/ProgressBars'
import { SegmentedTabs } from '../components/SegmentedTabs'
import { calculateStats } from '../data/stats'
import type { HabitosStore } from '../data/storage'
import type { Habit, StatsPeriod } from '../types'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode, RefObject } from 'react'

type DashboardScreenProps = {
  store: HabitosStore
  onOpenManage: () => void
}

const weekBars = [18, 64, 40, 57, 64, 58, 31]
const weekLabels = ['dom,\n21', 'seg,\n22', 'ter,\n23', 'qua,\n24', 'qui,\n25', 'sex,\n26', 'sab,\n27']
const monthBars = [18, 55, 36, 44, 48, 26, 52, 28, 46, 22, 16, 58, 34, 42, 52, 24, 44, 28, 42, 34, 42, 20, 62, 36, 45, 50, 40, 26, 46, 38, 28]
const monthLabels = Array.from({ length: 31 }, (_, index) => String(index + 1))

function SectionShell({
  title,
  period,
  children,
  sectionRef,
  onNavigate,
}: {
  title: string
  period: StatsPeriod
  children: ReactNode
  sectionRef: RefObject<HTMLElement | null>
  onNavigate: (period: StatsPeriod) => void
}) {
  return (
    <section ref={sectionRef} className="scroll-mt-5 space-y-5">
      <SegmentedTabs value={period} onChange={onNavigate} />
      <motion.div
        className="glass-panel rounded-panel px-4 py-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 170, damping: 23 }}
      >
        <div className="mb-4 grid grid-cols-[44px_1fr_44px] items-center">
          <IconButton label="Anterior" icon={<ChevronLeft className="h-6 w-6" strokeWidth={2.2} />} />
          <h2 className="text-center text-[20px] font-extrabold leading-tight">{title}</h2>
          <IconButton label="Próximo" icon={<ChevronRight className="h-6 w-6" strokeWidth={2.2} />} />
        </div>
        {children}
      </motion.div>
    </section>
  )
}

function HabitScoreStrip({ habits, bestHabitId }: { habits: Habit[]; bestHabitId: string }) {
  return (
    <div className="glass-card rounded-[16px] px-4 py-2">
      <div className="flex items-center justify-between">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={habit.id === bestHabitId ? 'rounded-[22px] bg-success px-3 py-2 shadow-lift' : 'px-1 py-2'}
          >
            <HabitIcon id={habit.id} className="h-8 w-8" />
            <p className="mt-1 text-center text-[12px] font-medium">{habit.id === 'food' ? '7/7' : habit.id === 'editing' ? '4/7' : habit.id === 'book' ? '5/7' : habit.id === 'sleep' ? '5/7' : '1/7'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DashboardScreen({ store, onOpenManage }: DashboardScreenProps) {
  const dayRef = useRef<HTMLElement | null>(null)
  const weekRef = useRef<HTMLElement | null>(null)
  const monthRef = useRef<HTMLElement | null>(null)
  const dayStats = calculateStats(store.habits, store.completions, 'day')
  const weekStats = calculateStats(store.habits, store.completions, 'week')
  const monthStats = calculateStats(store.habits, store.completions, 'month')
  const [dayMugFill, setDayMugFill] = useState(0)
  const dayHabits = ['exercise', 'editing', 'book', 'food', 'sleep'].map((id) => store.habits.find((habit) => habit.id === id)!)
  const featuredMonthHabits = ['exercise', 'editing', 'book'].map((id) => store.habits.find((habit) => habit.id === id)!)
  const sectionRefs = {
    day: dayRef,
    week: weekRef,
    month: monthRef,
  }
  const handleNavigate = (period: StatsPeriod) => {
    sectionRefs[period].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    setDayMugFill(0)
    const animationFrame = requestAnimationFrame(() => {
      setDayMugFill(dayStats.completionPercent)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [dayStats.completionPercent])

  return (
    <div className="app-gradient min-h-svh">
      <Header
        title="Seus Hábitos"
        subtitle="segunda, 28 de junho"
        leading={
          <IconButton
            label="Gerenciar hábitos"
            icon={<Settings className="h-6 w-6" strokeWidth={2.2} />}
            variant="dark"
            size="sm"
            onClick={onOpenManage}
          />
        }
        trailing={<div aria-label="Perfil" className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#7cc6ff,#ffb171)] ring-2 ring-orange" />}
      />

      <div className="habitos-scrollbar space-y-14 px-4 pb-12 pt-6">
        <SectionShell title="Hoje" period="day" sectionRef={dayRef} onNavigate={handleNavigate}>
          <div className="flex flex-col items-center">
            <CafeMug fill={dayMugFill} size={92} />
            <p className="-mt-1 text-[13px] font-medium">
              {dayStats.completed}/{dayStats.total} completados
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 justify-items-center gap-x-4 gap-y-7">
            {dayHabits.map((habit) => (
              <HabitTile
                key={habit.id}
                habit={habit}
                badge={
                  habit.id === 'exercise' || habit.id === 'book'
                    ? { tone: 'success' }
                    : habit.id === 'food'
                      ? { tone: 'success', label: '1' }
                      : habit.id === 'sleep'
                        ? { tone: 'danger', label: '50%' }
                        : undefined
                }
              />
            ))}
          </div>
          <div className="mt-7">
            <BottomActionButton label="Adicionar hábito" />
          </div>
        </SectionShell>

        <SectionShell title="21-27 de junho" period="week" sectionRef={weekRef} onNavigate={handleNavigate}>
          <div className="grid grid-cols-[92px_1fr] items-end gap-4">
            <div className="flex flex-col items-center">
              <CafeMug fill={weekStats.completionPercent} size={76} />
              <p className="-mt-1 text-[12px] font-medium">média</p>
            </div>
            <ProgressBars values={weekBars} labels={weekLabels} highlightIndex={1} />
          </div>
          <div className="mt-4">
            <HabitScoreStrip habits={store.habits} bestHabitId={weekStats.bestHabitId} />
            <div className="mt-3 flex items-center gap-2 pl-2 text-[12px] text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-success shadow-lift" />
              <span>melhor hábito</span>
            </div>
          </div>
        </SectionShell>

        <SectionShell title="Julho de 2026" period="month" sectionRef={monthRef} onNavigate={handleNavigate}>
          <div className="grid grid-cols-[96px_1fr] items-center gap-4">
            <div className="flex flex-col items-center">
              <CafeMug fill={monthStats.completionPercent} size={78} />
              <p className="-mt-1 text-[12px] font-medium">média</p>
            </div>
            <div className="glass-card rounded-[16px] px-4 py-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                {featuredMonthHabits.map((habit) => (
                  <div key={habit.id} className="flex flex-col items-center">
                    <HabitIcon id={habit.id} className="h-8 w-8" />
                    <span className="mt-1 text-[12px] font-medium">
                      {habit.id === 'exercise' ? '20/31' : habit.id === 'editing' ? '10/31' : '13/31'}
                    </span>
                  </div>
                ))}
                <div className="col-start-2 flex min-h-[62px] min-w-[58px] flex-col items-center justify-center rounded-[20px] bg-success px-3 py-2 shadow-lift">
                  <HabitIcon id="food" className="h-8 w-8" />
                  <span className="mt-1 text-[12px] font-medium">29/31</span>
                </div>
                <div className="flex flex-col items-center">
                  <HabitIcon id="sleep" className="h-8 w-8" />
                  <span className="mt-1 text-[12px] font-medium">19/31</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-[12px] text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-success shadow-lift" />
            <span>melhor hábito</span>
          </div>
          <div className="mt-6">
            <ProgressBars values={monthBars} labels={monthLabels} highlightIndex={22} compact />
          </div>
        </SectionShell>
      </div>
    </div>
  )
}
