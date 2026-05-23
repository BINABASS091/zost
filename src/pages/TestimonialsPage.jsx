import { Star } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { testimonials } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function TestimonialsPage() {
  usePageMeta('Testimonials | Trusted Luxury Zanzibar Travel Reviews')

  return (
    <>
      <PageHero
        title="Guest Testimonials"
        subtitle="Real stories from travelers who chose ZOST for Zanzibar Tours, safari adventures, and luxury island experiences."
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779540081/aaaa_testimonials_yx9gcr.jpg"
      />

      <section className="section-pad">
        <SectionTitle
          eyebrow="What Guests Say"
          title="Eight Luxury Travel Stories"
          description="Authentic feedback from honeymoon couples, families, and solo travelers."
          center
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass rounded-3xl p-6 luxury-shadow">
              <div className="mb-3 flex gap-1 text-gold">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={`${item.name}-${idx}`} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-navy/80 dark:text-sand/80">“{item.text}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ocean dark:text-gold">{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
