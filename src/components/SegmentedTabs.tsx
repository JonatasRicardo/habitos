import { clsx } from 'clsx'
import type { StatsPeriod } from '../types'

const labels: Record<StatsPeriod, string> = {
  day: 'Dia',
  week: 'Semana',
  month: 'Mês',
}

type SegmentedTabsProps = {
  value: StatsPeriod
  onChange: (period: StatsPeriod) => void
  className?: string
}

export function SegmentedTabs({ value, onChange, className }: SegmentedTabsProps) {
  return (
    <div className={clsx('flex items-end justify-center gap-9 text-[16px]', className)} role="tablist" aria-label="Período">
      {(Object.keys(labels) as StatsPeriod[]).map((period) => (
        <button
          key={period}
          type="button"
          role="tab"
          aria-selected={value === period}
          className={clsx(
            'relative px-1 pb-2 leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink',
            value === period ? 'font-extrabold' : 'font-medium',
          )}
          onClick={() => onChange(period)}
        >
          {labels[period]}
          <span
            className={clsx(
              'absolute inset-x-0 bottom-0 mx-auto h-1 w-10 bg-ink transition',
              value === period ? 'opacity-100' : 'opacity-0',
            )}
          />
        </button>
      ))}
    </div>
  )
}
