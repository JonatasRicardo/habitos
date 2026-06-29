import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomActionButton } from './BottomActionButton'
import { CafeMug } from './CafeMug'
import { HabitListItem } from './HabitListItem'
import { HabitTile } from './HabitTile'
import { IconButton } from './IconButton'
import { ProgressBars } from './ProgressBars'
import { SegmentedTabs } from './SegmentedTabs'
import { habitsSeed } from '../data/habits'
import { Pencil } from 'lucide-react'

const meta = {
  title: 'Design System/Components',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CoreComponents: Story = {
  render: () => (
    <div className="w-[361px] space-y-5 bg-orange p-4 font-sans text-ink">
      <div className="flex items-center justify-between">
        <SegmentedTabs value="week" onChange={() => undefined} />
        <IconButton label="Editar" icon={<Pencil className="h-5 w-5" />} variant="dark" />
      </div>
      <div className="glass-panel rounded-panel p-5">
        <div className="flex items-center justify-around">
          <CafeMug fill={50} size={90} />
          <CafeMug fill={82} size={90} />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <HabitTile habit={habitsSeed[0]} checked />
          <HabitTile habit={habitsSeed[1]} best score={{ habitId: 'food', completed: 7, total: 7, percent: 100 }} />
          <HabitTile habit={habitsSeed[3]} />
        </div>
      </div>
      <ProgressBars
        values={[18, 64, 40, 57, 64, 58, 31]}
        labels={['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
        highlightIndex={1}
      />
      <HabitListItem habit={habitsSeed[2]} />
      <BottomActionButton label="Adicionar Hábito" compact />
    </div>
  ),
}
