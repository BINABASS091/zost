import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-navy dark:text-sand sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-navy/70 dark:text-sand/70">{description}</p> : null}
    </motion.div>
  )
}
