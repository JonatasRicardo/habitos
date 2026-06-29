import { clsx } from 'clsx'

type ProgressBarsProps = {
  values: number[]
  labels: string[]
  highlightIndex?: number
  compact?: boolean
}

export function ProgressBars({ values, labels, highlightIndex, compact = false }: ProgressBarsProps) {
  return (
    <div className="w-full">
      <div className={clsx('flex items-end justify-between', compact ? 'h-[78px] gap-[3px]' : 'h-[84px] gap-2')}>
        {values.map((value, index) => {
          const isGood = highlightIndex === index || value >= 58
          const barColor = isGood ? '#22b64c' : '#ff3040'
          return (
            <div key={`${labels[index]}-${index}`} className="flex min-w-0 flex-1 flex-col items-center gap-1">
              <span
                className={clsx('w-full rounded-full', compact ? 'max-w-[7px]' : 'max-w-[22px]')}
                style={{
                  height: `${Math.max(compact ? 8 : 14, value)}px`,
                  background: `linear-gradient(180deg, ${barColor} 0%, ${barColor} 62%, ${isGood ? '#18a83f' : '#f02636'} 100%)`,
                  boxShadow: `0 7px 10px ${isGood ? 'rgba(35, 175, 71, 0.28)' : 'rgba(255, 44, 58, 0.22)'}`,
                }}
              />
            </div>
          )
        })}
      </div>
      <div className="mt-1 grid" style={{ gridTemplateColumns: `repeat(${labels.length}, minmax(0, 1fr))` }}>
        {labels.map((label) => (
          <span key={label} className={clsx('text-center leading-tight text-muted', compact ? 'text-[7px]' : 'text-[10px]')}>
            {label.split('\n').map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
