import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 3800)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="relative overflow-hidden rounded-3xl glass p-6 luxury-shadow sm:p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex gap-1 text-gold">
            {[...Array(items[index].rating)].map((_, i) => (
              <Star key={`${items[index].name}-${i}`} fill="currentColor" size={18} />
            ))}
          </div>
          <p className="font-heading text-2xl leading-relaxed text-navy dark:text-sand">“{items[index].text}”</p>
          <p className="text-sm uppercase tracking-[0.2em] text-ocean dark:text-gold">{items[index].name}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex gap-2">
        {items.map((_, dotIndex) => (
          <button
            key={`dot-${dotIndex}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 rounded-full transition-all ${dotIndex === index ? 'w-10 bg-gold' : 'w-5 bg-ocean/30 dark:bg-sand/30'}`}
            aria-label={`Go to testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
