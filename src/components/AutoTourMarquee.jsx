import { motion } from 'framer-motion'
import TourCard from './TourCard'
import { featuredTours } from '../data/content'

export default function AutoTourMarquee({ className = '' }) {
  // Duplicate items for seamless loop
  const items = [...featuredTours, ...featuredTours]

  return (
    <div className={`relative overflow-hidden py-6 ${className}`}>
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {items.map((tour, i) => (
          <div key={`${tour.id}-${i}`} className="w-[320px] flex-shrink-0">
            <div className="transform-gpu transition hover:scale-105">
              <div className="glass rounded-3xl overflow-hidden">
                <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-heading text-lg text-navy dark:text-sand">{tour.title}</h4>
                  <p className="mt-2 text-sm text-navy/70 dark:text-sand/70">{tour.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
