import type { ReactNode } from 'react'

type HeaderProps = {
  title: string
  subtitle: string
  leading: ReactNode
  trailing: ReactNode
}

export function Header({ title, subtitle, leading, trailing }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-sunshine px-4 pb-5 pt-5">
      <div className="flex min-w-0 items-center gap-3">
        {leading}
        <div className="min-w-0">
          <h1 className="truncate text-[17px] font-extrabold leading-tight">{title}</h1>
          <p className="truncate text-[12px] font-medium leading-tight">{subtitle}</p>
        </div>
      </div>
      {trailing}
    </header>
  )
}
