import { motion } from 'framer-motion'
import { Clock3, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '../animations/variants'

export default function TourCard({ tour, openBooking }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 170, damping: 20 }}
      className="glass luxury-shadow overflow-hidden rounded-3xl"
    >
      <img src={tour.image} alt={tour.title} className="h-56 w-full object-cover" loading="lazy" />
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-2xl text-navy dark:text-sand">{tour.title}</h3>
          <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-navy dark:text-sand">
            {tour.price}
          </span>
        </div>
        <p className="text-sm text-navy/75 dark:text-sand/75">{tour.description}</p>
        <div className="flex items-center justify-between text-sm text-ocean dark:text-gold">
          <span className="inline-flex items-center gap-1"><Clock3 size={16} /> {tour.duration}</span>
          <span>{tour.category}</span>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to={`/tours/${tour.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ocean dark:text-gold"
          >
            Explore <ArrowUpRight size={16} />
          </Link>
          <button
            onClick={openBooking}
            className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-sand transition hover:bg-ocean"
          >
            Book
          </button>
        </div>
      </div>
    </motion.article>
  )
}
