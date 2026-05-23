import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'
import WhatsAppFloat from '../components/WhatsAppFloat'
import useTheme from '../hooks/useTheme'

export default function MainLayout({ children, isBookingOpen, openBooking, closeBooking }) {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="overflow-hidden">
      <Navbar openBooking={openBooking} theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-20">{children}</main>
      <Footer />
      <BookingModal open={isBookingOpen} onClose={closeBooking} />
      <WhatsAppFloat />
    </div>
  )
}
