import type { Meta, StoryObj } from '@storybook/react-vite'

const colors = [
  ['Ink', 'var(--color-ink)'],
  ['Sunshine', 'var(--color-sunshine)'],
  ['Amber', 'var(--color-amber)'],
  ['Orange', 'var(--color-orange)'],
  ['Panel', 'var(--color-panel-soft)'],
  ['Success', 'var(--color-success)'],
  ['Danger', 'var(--color-danger)'],
  ['Cyan', 'var(--color-cyan)'],
  ['Blue', 'var(--color-blue)'],
  ['Violet', 'var(--color-violet)'],
]

const meta = {
  title: 'Design System/Tokens',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Tokens: Story = {
  render: () => (
    <div className="w-[361px] space-y-6 bg-orange p-5 font-sans text-ink">
      <section>
        <h1 className="text-[22px] font-extrabold">Tokens</h1>
        <p className="text-[13px] text-muted">Cores, raio, sombra e tipografia do app Habitos.</p>
      </section>
      <section className="grid grid-cols-2 gap-3">
        {colors.map(([name, value]) => (
          <div key={name} className="glass-card rounded-[8px] p-3">
            <div className="h-12 rounded-[6px] border border-black/10" style={{ background: value }} />
            <p className="mt-2 text-[13px] font-extrabold">{name}</p>
            <p className="text-[11px] text-muted">{value}</p>
          </div>
        ))}
      </section>
      <section className="glass-panel rounded-panel p-4">
        <p className="text-[20px] font-extrabold">Raio panel + shadow habit</p>
        <p className="text-[13px]">Usado nos cards principais e componentes de hábito.</p>
      </section>
    </div>
  ),
}
