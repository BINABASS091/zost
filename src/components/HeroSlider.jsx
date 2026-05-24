import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSlider({ slides = [], openBooking }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5200)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {slides.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`slide-${i}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={i === index ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1.05, ease: 'easeOut' }}
          className={`absolute inset-0 h-full w-full object-cover`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-midnight/76 via-navy/44 to-ocean/24" />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-20 mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4 px-6 py-12 text-left text-sand sm:px-8 lg:px-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Exclusive</p>
        <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Discover Zanzibar in Luxury</h1>
        <p className="mt-2 max-w-2xl text-lg text-sand/90">Exclusive island adventures and unforgettable tropical experiences.</p>

        <div className="mt-6 flex gap-4">
          <Link to="/tours" className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-sand">Explore Tours</Link>
          <button onClick={openBooking} className="rounded-full border border-sand/40 bg-transparent px-6 py-3 text-sm font-semibold text-sand transition hover:bg-white/10">Book Your Journey</button>
        </div>
      </motion.div>
    </section>
  )
}
