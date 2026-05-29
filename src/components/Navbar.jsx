import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import LogoMark from './LogoMark'
import { navLinks } from '../data/content'

export default function Navbar({ openBooking, theme, toggleTheme }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const shellClass = solid
    ? 'bg-transparent shadow-[0_18px_50px_rgba(7,28,52,0.14)] ring-1 ring-white/35 backdrop-blur-2xl dark:ring-gold/15'
    : 'bg-transparent ring-1 ring-white/20 backdrop-blur-xl dark:ring-gold/10'

  return (
    <header className="pointer-events-none fixed left-1/2 top-3 z-40 w-[min(calc(100vw-1rem),72rem)] -translate-x-1/2 sm:top-4">
      <motion.div initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className={`pointer-events-auto mx-auto flex h-20 w-full items-center justify-between rounded-[1.5rem] border border-white/25 px-4 shadow-sm transition-all duration-300 sm:px-6 lg:px-8 ${shellClass}`}>
        <Link to="/" aria-label="Go to homepage"><LogoMark /></Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition relative ${isActive ? 'text-gold' : 'text-navy dark:text-sand hover:text-ocean dark:hover:text-gold'}`
              }
            >
              <motion.span whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-flex items-center">
                {link.label}
              </motion.span>
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 bg-gold"
                initial={{ width: 0 }}
                animate={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.22 }}
              />
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-navy/15 p-2 text-navy dark:border-gold/25 dark:text-sand"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={openBooking}
            className="rounded-full bg-navy px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sand transition hover:bg-ocean"
          >
            Book Now
          </button>
        </div>

        <button
          className="lg:hidden relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/12 text-navy shadow-[0_12px_28px_rgba(7,28,52,0.18)] backdrop-blur-xl transition hover:scale-105 hover:border-gold/30 hover:bg-white/18 dark:border-gold/15 dark:text-sand"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{open ? 'Close navigation menu' : 'Open navigation menu'}</span>
          <span className="relative flex h-4 w-4 items-center justify-center">
            <motion.span
              className="absolute h-0.5 w-4 rounded-full bg-current"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            />
            <motion.span
              className="absolute h-0.5 w-4 rounded-full bg-current"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
            />
            <motion.span
              className="absolute h-0.5 w-4 rounded-full bg-current"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            />
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 cursor-default bg-midnight/45 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              id="mobile-nav"
              className="pointer-events-auto fixed left-1/2 top-20 z-50 flex max-h-[calc(100dvh-6.5rem)] w-[min(calc(100vw-1rem),22rem)] -translate-x-1/2 overflow-y-auto rounded-[1.75rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(248,243,234,0.14))] p-3 shadow-[0_30px_90px_rgba(7,28,52,0.3)] backdrop-blur-2xl lg:hidden sm:top-24 sm:max-h-[calc(100dvh-7rem)] sm:w-[min(calc(100vw-1.5rem),24rem)] sm:p-4"
              initial={{ opacity: 0, scale: 0.94, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,166,61,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(14,94,111,0.14),transparent_28%)]" />
              <div className="absolute inset-0 texture-overlay opacity-30" />

              <div className="relative w-full text-center">
                <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-gold/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold shadow-[0_8px_20px_rgba(7,28,52,0.12)] sm:mb-4">
                  Navigation
                </div>

                <div className="rounded-[1.35rem] border border-white/10 bg-white/12 p-2.5 shadow-[0_14px_30px_rgba(7,28,52,0.14)] backdrop-blur-xl sm:p-3">
                  <div className="flex flex-col gap-1.5 text-center sm:gap-2">
                    {navLinks.map((link, index) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition sm:py-3 ${isActive ? 'bg-navy text-sand shadow-[0_12px_24px_rgba(7,28,52,0.16)]' : 'text-navy/90 hover:bg-white/30 dark:text-sand'}`
                        }
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.03 * index, duration: 0.25 }}
                          className="tracking-[0.02em]"
                        >
                          {link.label}
                        </motion.span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/80 opacity-0 transition group-hover:opacity-100" />
                      </NavLink>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
                    <button
                      onClick={toggleTheme}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-navy/10 bg-white/80 px-4 py-2.5 text-sm font-medium text-navy transition hover:bg-white dark:border-gold/15 dark:bg-midnight/30 dark:text-sand sm:py-3"
                    >
                      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                    <button
                      onClick={() => {
                        setOpen(false)
                        openBooking()
                      }}
                      className="inline-flex items-center justify-center rounded-2xl bg-navy px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-sand shadow-[0_12px_24px_rgba(7,28,52,0.18)] transition hover:bg-ocean sm:py-3"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
