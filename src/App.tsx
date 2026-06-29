import { useEffect, useMemo, useState } from 'react'
import { AppShell } from './components/AppShell'
import { loadHabitosStore } from './data/storage'
import { DashboardScreen } from './screens/DashboardScreen'
import { HomeScreen } from './screens/HomeScreen'
import { ManageHabitsScreen } from './screens/ManageHabitsScreen'

type Screen = 'home' | 'dashboard' | 'manage'

function getScreenFromHash(): Screen {
  if (typeof window === 'undefined') {
    return 'home'
  }

  if (window.location.hash === '#/prototipo-react') {
    return 'dashboard'
  }

  if (window.location.hash === '#/gerenciar-habitos') {
    return 'manage'
  }

  return 'home'
}

function App() {
  const [screen, setScreen] = useState<Screen>(() => getScreenFromHash())
  const store = useMemo(() => loadHabitosStore(), [])

  useEffect(() => {
    const handleHashChange = () => setScreen(getScreenFromHash())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openPrototype = () => {
    window.location.hash = '/prototipo-react'
    setScreen('dashboard')
  }

  const openManage = () => {
    window.location.hash = '/gerenciar-habitos'
    setScreen('manage')
  }

  if (screen === 'home') {
    return <HomeScreen />
  }

  return (
    <AppShell>
      {screen === 'dashboard' ? (
        <DashboardScreen store={store} onOpenManage={openManage} />
      ) : (
        <ManageHabitsScreen store={store} onBack={openPrototype} />
      )}
    </AppShell>
  )
}

export default App
