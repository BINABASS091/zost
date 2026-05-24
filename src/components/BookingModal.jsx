import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function BookingModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-midnight/70 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="glass w-full max-w-2xl rounded-3xl p-6"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="font-heading text-3xl text-navy dark:text-sand">Booking Inquiry</h3>
                <p className="text-sm text-navy/65 dark:text-sand/70">Tell us your dates and desired experience.</p>
              </div>
              <button onClick={onClose} aria-label="Close booking modal" className="rounded-full bg-sand p-2 text-navy dark:bg-midnight dark:text-sand">
                <X size={18} />
              </button>
            </div>
            <form className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand" placeholder="Full Name" />
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand" placeholder="Email Address" />
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand" placeholder="Travel Dates" />
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand" placeholder="Guests" />
              <textarea className="sm:col-span-2 min-h-30 rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand" placeholder="Tell us your dream Zanzibar experience" />
              <button type="button" className="sm:col-span-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-ocean">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
