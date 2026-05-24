import { Mail, MapPin, Phone, MessageCircle, Camera, UsersRound, Share2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { company, contactCopy } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function ContactPage({ openBooking }) {
  usePageMeta('Contact & Booking | ZOST Zanzibar Ovation Safaris & Tours')

  return (
    <>
      <PageHero
        title="Contact & Booking"
        subtitle={contactCopy.headline}
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779286803/resort10_ggigep.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle title="Start Your Journey" description={contactCopy.welcome} />
            <p className="mt-4 text-sm text-navy/75 dark:text-sand/75">{contactCopy.invite}</p>

            <form className="mt-7 grid gap-4">
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Full Name" />
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Email Address" />
              <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Travel Dates" />
              <textarea className="min-h-30 rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Tell us your preferred experiences" />
              <button type="button" onClick={openBooking} className="rounded-full bg-navy px-6 py-3 text-sm uppercase tracking-[0.2em] text-sand hover:bg-ocean">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-heading text-2xl text-navy dark:text-sand">Contact Information</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy/80 dark:text-sand/80">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href={`https://${company.website}`} target="_blank" rel="noreferrer" className="transition hover:text-gold">
                    {company.website}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="transition hover:text-gold">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2"><MapPin size={16} /> {company.address}</li>
              </ul>
              <a
                href={`https://wa.me/${company.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactCopy.whatsapp)}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1faa59] px-5 py-2 text-sm text-white"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="glass rounded-3xl p-6">
              <h4 className="text-sm uppercase tracking-[0.2em] text-gold">Social</h4>
              <div className="mt-4 flex gap-3 text-navy dark:text-sand">
                <Camera /> <UsersRound /> <Share2 />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-navy/10">
              <iframe
                title="Zanzibar map"
                src="https://maps.google.com/maps?q=Stone%20Town%20Zanzibar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
