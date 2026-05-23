import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import MainLayout from './layouts/MainLayout'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <MainLayout
      isBookingOpen={isBookingOpen}
      openBooking={() => setIsBookingOpen(true)}
      closeBooking={() => setIsBookingOpen(false)}
    >
      <AppRoutes openBooking={() => setIsBookingOpen(true)} />
    </MainLayout>
  )
}

export default App
