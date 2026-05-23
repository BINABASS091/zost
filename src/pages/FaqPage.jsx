import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { faqItems } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function FaqPage() {
  const [open, setOpen] = useState(0)
  usePageMeta('FAQ | Zanzibar Tours Booking and Travel Questions')

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Professional answers about bookings, payments, Zanzibar travel, safari preparation, and guest safety."
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779540443/aaa_faq_ixagv2.webp"
      />

      <section className="section-pad">
        <SectionTitle
          eyebrow="FAQ"
          title="Everything You Need Before You Travel"
          description="If you need personalized support, our concierge team is available 24/7."
          center
        />

        <div className="mx-auto mt-8 max-w-5xl space-y-3">
          {faqItems.map((item, index) => {
            const active = open === index
            return (
              <article key={item.q} className="glass rounded-2xl p-5">
                <button
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span className="font-heading text-xl text-navy dark:text-sand">{item.q}</span>
                  <ChevronDown className={`transition ${active ? 'rotate-180' : ''}`} />
                </button>
                {active ? <p className="mt-4 text-sm text-navy/80 dark:text-sand/80">{item.a}</p> : null}
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
