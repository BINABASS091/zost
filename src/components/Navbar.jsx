import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
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

  const shellClass = solid
    ? 'bg-transparent shadow-[0_18px_50px_rgba(7,28,52,0.14)] ring-1 ring-white/35 backdrop-blur-2xl dark:ring-gold/15'
    : 'bg-transparent ring-1 ring-white/20 backdrop-blur-xl dark:ring-gold/10'

  return (
    <header className="pointer-events-none fixed left-1/2 top-3 z-40 w-[min(calc(100vw-1rem),72rem)] -translate-x-1/2 sm:top-4">
      <div className={`pointer-events-auto mx-auto flex h-20 w-full items-center justify-between rounded-[1.5rem] border border-white/25 px-4 shadow-sm transition-all duration-300 sm:px-6 lg:px-8 ${shellClass}`}>
        <Link to="/" aria-label="Go to homepage"><LogoMark /></Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-gold' : 'text-navy dark:text-sand hover:text-ocean dark:hover:text-gold'}`
              }
            >
              {link.label}
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

        <button className="lg:hidden text-navy dark:text-sand" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-3 rounded-[1.5rem] border border-white/25 bg-transparent px-4 py-4 shadow-[0_18px_50px_rgba(7,28,52,0.12)] backdrop-blur-2xl dark:border-gold/10 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy dark:text-sand"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={toggleTheme} className="rounded-full border border-navy/20 px-4 py-2 text-sm text-navy dark:text-sand">
                {theme === 'light' ? 'Dark' : 'Light'} Mode
              </button>
              <button onClick={openBooking} className="rounded-full bg-navy px-4 py-2 text-sm text-sand">Book Now</button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
