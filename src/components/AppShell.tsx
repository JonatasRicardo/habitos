import type { ReactNode } from 'react'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-svh bg-[#e7e7e7]">
      <main className="app-gradient mx-auto min-h-svh w-full max-w-[430px] overflow-hidden font-sans text-ink shadow-2xl">
        {children}
      </main>
    </div>
  )
}
