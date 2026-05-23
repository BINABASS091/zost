import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

export default function MotionSection({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  )
}
