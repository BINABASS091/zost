import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden rounded-b-[3rem] bg-navy">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-12"
      >
        <h1 className="font-heading text-5xl text-[#FFF7EA] sm:text-7xl lg:text-[5.25rem]">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#F9F1E3]/86 sm:text-xl lg:text-2xl">{subtitle}</p>
      </motion.div>
    </section>
  )
}
