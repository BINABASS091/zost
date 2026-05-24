import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './routes/AppRoutes'
import MainLayout from './layouts/MainLayout'
import WelcomeSplash from './components/WelcomeSplash'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 2800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <WelcomeSplash key="welcome-splash" />
      ) : (
        <MainLayout
          key="app-shell"
          isBookingOpen={isBookingOpen}
          openBooking={() => setIsBookingOpen(true)}
          closeBooking={() => setIsBookingOpen(false)}
        >
          <AppRoutes openBooking={() => setIsBookingOpen(true)} />
        </MainLayout>
      )}
    </AnimatePresence>
  )
}

export default App
