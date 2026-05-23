import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { aboutContent, company } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function AboutPage({ openBooking }) {
  usePageMeta('About ZOST | Premium Zanzibar Travel & Tours')

  return (
    <>
      <PageHero
        title="About ZOST"
        subtitle="A Zanzibar-born travel house designing refined island escapes, signature safaris, and seamless bespoke journeys."
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779459605/Honeymoon_Escape4_gultna.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-white/70 p-8 shadow-[0_20px_60px_rgba(7,28,52,0.08)] backdrop-blur-md dark:bg-midnight/40 sm:p-10">
            <SectionTitle
              eyebrow="Our Story"
              title="Refined Travel, Rooted in Zanzibar"
              description={aboutContent.intro}
            />
            <p className="mt-6 text-base leading-relaxed text-navy/80 dark:text-sand/75">{aboutContent.story}</p>
            <button onClick={openBooking} className="mt-7 rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-ocean">
              Plan Your Journey with {company.shortName}
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779286805/royal_resort_vqauxw.jpg"
            alt="Zanzibar luxury hospitality"
            className="h-full min-h-96 w-full rounded-3xl object-cover luxury-shadow"
          />
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 text-center luxury-shadow">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Our Mission</p>
            <h3 className="mt-3 font-heading text-3xl text-navy dark:text-sand">Elevated Island Journeys</h3>
            <p className="mt-4 text-navy/75 dark:text-sand/75">{aboutContent.mission}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 text-center luxury-shadow">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Our Vision</p>
            <h3 className="mt-3 font-heading text-3xl text-navy dark:text-sand">The Future of Zanzibar Luxury</h3>
            <p className="mt-4 text-navy/75 dark:text-sand/75">{aboutContent.vision}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto max-w-7xl rounded-3xl bg-navy p-8 text-center text-sand sm:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Brand Values</p>
          <h3 className="mt-3 font-heading text-4xl">Why Discerning Travelers Choose ZOST</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {aboutContent.values.map((value) => (
              <li key={value} className="rounded-2xl border border-gold/25 bg-white/5 px-4 py-4 text-sm">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
