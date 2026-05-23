import { CheckCircle2, CircleX, MessageCircle } from 'lucide-react'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import {
  exclusions,
  featuredTours,
  inclusions,
  itinerary,
  contactCopy,
  company,
  galleryImages,
} from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function TourDetailsPage({ openBooking }) {
  const { id } = useParams()
  const tour = useMemo(() => featuredTours.find((item) => item.id === id) || featuredTours[0], [id])

  usePageMeta(`${tour.title} | Zanzibar Tour Details`)

  return (
    <>
      <PageHero title={tour.title} subtitle={tour.description} image={tour.image} />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Tour Itinerary"
            title="Sample Luxury Journey"
            description="A polished journey design you can fully customize with our concierge team."
          />
          <div className="mt-8 space-y-4">
            {itinerary.map((item) => (
              <div key={item.day} className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.day}</p>
                <h3 className="mt-2 font-heading text-2xl text-navy dark:text-sand">{item.title}</h3>
                <p className="mt-2 text-sm text-navy/75 dark:text-sand/75">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h3 className="font-heading text-3xl text-navy dark:text-sand">Inclusions</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/80 dark:text-sand/80">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-gold" size={16} />{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-heading text-3xl text-navy dark:text-sand">Exclusions</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy/80 dark:text-sand/80">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-2"><CircleX className="mt-0.5 text-ocean" size={16} />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto max-w-7xl rounded-3xl bg-navy p-8 text-sand sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Pricing</p>
          <h3 className="mt-2 font-heading text-4xl">{tour.price}</h3>
          <p className="mt-3 max-w-3xl text-sand/80">
            Experience curated luxury logistics, premium stays, and effortless service. We personalize every detail to match your lifestyle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={openBooking} className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Book This Tour</button>
            <a
              href={`https://wa.me/${company.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactCopy.whatsapp)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sand/55 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <SectionTitle eyebrow="Tour Gallery" title="Visual Highlights" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, 6).map((image, index) => (
            <img key={image} src={image} alt={`Tour highlight ${index + 1}`} className="h-56 w-full rounded-2xl object-cover" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto max-w-6xl rounded-3xl glass p-7">
          <h3 className="font-heading text-3xl text-navy dark:text-sand">Booking Form</h3>
          <p className="mt-2 text-sm text-navy/70 dark:text-sand/70">Share your preferred dates and we will return a personalized quote.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Full Name" />
            <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Email" />
            <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Travel Dates" />
            <input className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Guests" />
            <textarea className="sm:col-span-2 min-h-28 rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight" placeholder="Trip notes" />
            <button type="button" onClick={openBooking} className="sm:col-span-2 rounded-full bg-navy py-3 text-sm uppercase tracking-[0.2em] text-sand">
              Send Booking Request
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
