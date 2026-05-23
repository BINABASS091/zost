import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { pageTransition } from '../animations/variants'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import FaqPage from '../pages/FaqPage'
import GalleryPage from '../pages/GalleryPage'
import HomePage from '../pages/HomePage'
import TestimonialsPage from '../pages/TestimonialsPage'
import TourDetailsPage from '../pages/TourDetailsPage'
import ToursPage from '../pages/ToursPage'

function Wrapped({ children }) {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default function AppRoutes({ openBooking }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapped><HomePage openBooking={openBooking} /></Wrapped>} />
        <Route path="/about" element={<Wrapped><AboutPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/tours" element={<Wrapped><ToursPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/tours/:id" element={<Wrapped><TourDetailsPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/gallery" element={<Wrapped><GalleryPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/testimonials" element={<Wrapped><TestimonialsPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/contact" element={<Wrapped><ContactPage openBooking={openBooking} /></Wrapped>} />
        <Route path="/faq" element={<Wrapped><FaqPage openBooking={openBooking} /></Wrapped>} />
      </Routes>
    </AnimatePresence>
  )
}
