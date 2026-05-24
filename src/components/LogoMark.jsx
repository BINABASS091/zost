import { company } from '../data/content'
import { motion } from 'framer-motion'

export default function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <motion.img
        src={company.logoUrl}
        alt="ZOST logo"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="h-24 w-24 shrink-0 bg-transparent object-contain shadow-none sm:h-24 sm:w-24"
      />
      <div className="flex flex-col justify-center leading-none">
        <p className="text-[10px] uppercase tracking-[0.28em] text-ocean dark:text-gold">Travelling Agency</p>
      </div>
    </div>
  )
}
