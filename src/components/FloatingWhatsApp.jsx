import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company, contactCopy } from '../data/content'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactCopy.whatsapp)}`}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 6 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="fixed bottom-6 right-6 z-50 flex items-center"
      aria-label="Chat with ZOST Tours"
    >
      <div className="relative">
        <motion.span
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FFD57E]/30 via-[#D4A63D]/20 to-[#FF9A8B]/18 blur-xl"
          initial={{ opacity: 0.6, scale: 0.9 }}
          animate={{ opacity: [0.6, 0.95, 0.6], scale: [0.95, 1.06, 0.95] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          className="relative flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,211,102,0.18)] ring-0"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Chat with ZOST Tours ✨</span>
        </motion.button>
      </div>
    </motion.a>
  )
}
