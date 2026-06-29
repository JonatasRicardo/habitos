import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppShell } from '../components/AppShell'
import { completionsSeed, habitsSeed } from '../data/habits'
import { DashboardScreen } from './DashboardScreen'
import { HomeScreen } from './HomeScreen'
import { ManageHabitsScreen } from './ManageHabitsScreen'

const store = {
  habits: habitsSeed,
  completions: completionsSeed,
}

const meta = {
  title: 'Screens/Habitos',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = {
  render: () => (
    <AppShell>
      <DashboardScreen store={store} onOpenManage={() => undefined} />
    </AppShell>
  ),
}

export const ManageHabits: Story = {
  render: () => (
    <AppShell>
      <ManageHabitsScreen store={store} onBack={() => undefined} />
    </AppShell>
  ),
}

export const PresentationHome: Story = {
  render: () => <HomeScreen />,
}
