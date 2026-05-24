import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

export default function NewsletterSection() {
  return (
    <section className="section-pad">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="mx-auto max-w-5xl rounded-3xl bg-navy px-6 py-10 text-sand sm:px-10"
      >
        <p className="text-xs uppercase tracking-[0.24em] text-gold">Newsletter</p>
        <h3 className="mt-3 font-heading text-3xl">Luxury Travel Inspiration, Delivered</h3>
        <p className="mt-3 text-sand/80">
          Receive seasonal Zanzibar offers, curated travel ideas, and private launch access for signature itineraries.
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-full border border-gold/35 bg-white/10 px-5 py-3 text-sand placeholder:text-sand/65 focus:outline-none"
          />
          <button className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-navy transition hover:bg-sand">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  )
}
