import { motion, useReducedMotion } from 'framer-motion'
import { company } from '../data/content'

export default function WelcomeSplash() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden text-sand"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#04111F_0%,#071C34_38%,#0E5E6F_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,166,61,0.22),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(246,241,232,0.1),transparent_20%),radial-gradient(circle_at_50%_78%,rgba(14,94,111,0.2),transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%,rgba(255,255,255,0.06))] opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 texture-overlay opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(4,17,31,0.42)_100%)]" />

      {!reduceMotion ? (
        <>
          <motion.div
            className="absolute left-[-8%] top-[10%] h-56 w-56 rounded-full bg-gold/16 blur-3xl"
            animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[-10%] top-[16%] h-72 w-72 rounded-full bg-ocean/20 blur-3xl"
            animate={{ x: [0, -26, 0], y: [0, 14, 0], opacity: [0.28, 0.7, 0.28] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-12%] left-[18%] h-64 w-64 rounded-full bg-sand/10 blur-3xl"
            animate={{ x: [0, 18, 0], y: [0, -14, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      ) : null}

      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white/70"
            style={{
              width: index % 3 === 0 ? 5 : index % 2 === 0 ? 3 : 4,
              height: index % 3 === 0 ? 5 : index % 2 === 0 ? 3 : 4,
              left: `${8 + ((index * 7) % 84)}%`,
              top: `${10 + ((index * 9) % 68)}%`,
            }}
            animate={reduceMotion ? { opacity: 0.5 } : { y: [0, -12, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.25, 1] }}
            transition={{ duration: 4.5 + (index % 4), repeat: Infinity, ease: 'easeInOut', delay: index * 0.16 }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-8 sm:py-8"
        initial={{ scale: 0.98, opacity: 0, y: 18 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/7 px-5 py-6 text-center shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.03)_60%,transparent_85%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,166,61,0.18),transparent_30%)]" />
          <div className="absolute inset-0 texture-overlay opacity-40" />

          <motion.div
            className="absolute -left-16 top-6 h-44 w-44 rounded-full bg-gold/14 blur-3xl"
            animate={reduceMotion ? { opacity: 0.3 } : { y: [0, 16, 0], opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[-3rem] top-8 h-56 w-56 rounded-full bg-ocean/18 blur-3xl"
            animate={reduceMotion ? { opacity: 0.25 } : { y: [0, -16, 0], x: [0, -12, 0], opacity: [0.2, 0.58, 0.2] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-4rem] left-[25%] h-52 w-52 rounded-full bg-sand/12 blur-3xl"
            animate={reduceMotion ? { opacity: 0.18 } : { y: [0, -10, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
              <motion.div
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/6 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold sm:px-4 sm:py-2 sm:text-[10px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.45 }}
              >
                Zanzibar luxury opening
              </motion.div>

              <motion.img
                src={company.logoUrl}
                alt="ZOST logo"
                className="mx-auto mt-4 h-64 w-64 object-contain sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                initial={{ scale: 0.88, opacity: 0, y: 10 }}
                animate={reduceMotion ? { scale: 1, opacity: 1, y: 0 } : { scale: [0.96, 1, 1.02, 1], opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />

              {!reduceMotion ? (
                <motion.div
                  className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
                  animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.85, 1.1, 0.85] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : null}

              <motion.p
                className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-sand/70 sm:text-xs"
                initial={{ opacity: 0, y: 8, letterSpacing: '0.32em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.36em' }}
                transition={{ delay: 0.12, duration: 0.55 }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="mt-2 font-heading text-4xl leading-[0.96] text-sand sm:text-5xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                ZOST
              </motion.h1>

              <motion.p
                className="mt-2 text-[11px] uppercase tracking-[0.22em] text-gold sm:text-sm sm:tracking-[0.24em]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
              >
                Zanzibar Ovation Safaris & Tours
              </motion.p>

              <motion.p
                className="mt-4 max-w-xl text-sm leading-7 text-sand/84 sm:text-base sm:leading-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                {company.tagline}
              </motion.p>
          </div>

          <div className="relative z-10 mt-9 flex items-center gap-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,#D4A63D_22%,#F6F1E8_48%,#0E5E6F_72%,rgba(255,255,255,0.08)_100%)] shadow-[0_0_20px_rgba(212,166,61,0.35)]"
                initial={{ x: '-35%' }}
                animate={reduceMotion ? { x: '0%' } : { x: ['-40%', '100%'] }}
                transition={reduceMotion ? { duration: 0.5 } : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="hidden min-w-fit text-[10px] uppercase tracking-[0.28em] text-sand/60 sm:inline">
              Loading your Zanzibar journey
            </span>
          </div>

          <p className="relative z-10 mt-5 text-[10px] uppercase tracking-[0.3em] text-sand/45">
            Preparing a luxury island experience
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
