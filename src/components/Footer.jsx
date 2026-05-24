import { Camera, UsersRound, Share2, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, footer } from '../data/content'

const toPath = {
  Home: '/',
  About: '/about',
  'Tours & Safaris': '/tours',
  Gallery: '/gallery',
  Testimonials: '/testimonials',
  FAQ: '/faq',
  Contact: '/contact',
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[linear-gradient(180deg,#071C34_0%,#04111F_100%)] text-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={company.logoUrl}
                  alt="ZOST logo"
                  className="h-18 w-18 rounded-full bg-transparent object-contain shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                />
                <div>
                  <h3 className="font-heading text-3xl leading-none text-sand">ZOST</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gold">Travelling Agency</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-sand/78">{footer.description}</p>
              <div className="mt-6 flex items-center gap-3 text-sand/75">
                <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold/40 hover:text-gold">
                  <Camera size={18} />
                </a>
                <a href="#" aria-label="Community" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold/40 hover:text-gold">
                  <UsersRound size={18} />
                </a>
                <a href="#" aria-label="Share" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold/40 hover:text-gold">
                  <Share2 size={18} />
                </a>
                <a href="#" aria-label="Send" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-gold/40 hover:text-gold">
                  <Send size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Quick Links</h4>
              <ul className="mt-5 space-y-3 text-sm text-sand/80">
                {footer.quickLinks.map((item) => (
                  <li key={item}>
                    <Link to={toPath[item]} className="transition hover:text-gold">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-sand/80">
                <li>{company.address}</li>
                <li>
                  <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="transition hover:text-gold">
                    {company.website}
                  </a>
                </li>
                <li>
                  <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="transition hover:text-gold">
                    {company.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Stay Inspired</h4>
              <p className="mt-5 text-sm leading-7 text-sand/80">{footer.newsletter}</p>
              <button className="mt-6 rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy transition hover:bg-sand">
                Join the Circle
              </button>
              <p className="mt-4 text-xs leading-6 text-sand/60">{footer.socialCta}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-sand/60 sm:flex sm:items-center sm:justify-between sm:text-left">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Luxury Zanzibar tourism, curated with care.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
