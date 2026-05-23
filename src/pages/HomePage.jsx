import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Compass, Headset, ShieldCheck, Sparkles, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import MotionSection from '../components/MotionSection'
import NewsletterSection from '../components/NewsletterSection'
import SectionTitle from '../components/SectionTitle'
import TestimonialCarousel from '../components/TestimonialCarousel'
import TourCard from '../components/TourCard'
import {
  ctaButtons,
  featuredTours,
  galleryImages,
  heroSlides,
  promoHeadlines,
  testimonials,
  tourismSlogans,
  whyChooseItems,
} from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

const icons = [Compass, Sparkles, Award, ShieldCheck, Headset, Waves]

export default function HomePage({ openBooking }) {
  const [activeSlide, setActiveSlide] = useState(0)

  usePageMeta('Discover the Luxury of Zanzibar | ZOST Zanzibar Ovation Safaris & Tours', 'Exclusive island adventures, ocean escapes, and unforgettable tropical experiences by ZOST.')

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5200)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt="Luxury Zanzibar"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/85 via-navy/55 to-ocean/35" />
        <div className="texture-overlay absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-8 lg:px-12"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#F3D98B] sm:text-base">
            {promoHeadlines[0]}
          </p>
          <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-[#FFF7EA] drop-shadow-[0_8px_24px_rgba(7,28,52,0.35)] sm:text-7xl lg:text-[5.5rem]">
            Discover the Luxury of Zanzibar
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-[#F9F1E3]/96 sm:text-xl lg:text-2xl">
            Exclusive island adventures, ocean escapes, and unforgettable tropical experiences.
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium text-[#F9F1E3]/86 sm:text-lg">{tourismSlogans[18]}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/tours" className="rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-navy transition hover:bg-sand sm:px-8 sm:py-4 sm:text-base">
              Explore Experiences
            </Link>
            <button onClick={openBooking} className="rounded-full border border-sand/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-sand transition hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base">
              Book Your Journey
            </button>
          </div>
        </motion.div>
      </section>

      <section className="section-pad">
        <SectionTitle
          eyebrow="Featured Journeys"
          title="Signature Zanzibar Experiences"
          description="From reef adventures to private cultural moments, every experience is tailored for comfort, wonder, and flawless execution."
          center
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} openBooking={openBooking} />
          ))}
        </div>
      </section>

      <MotionSection className="section-pad pt-2">
        <SectionTitle
          eyebrow="Why Choose ZOST"
          title="Luxury Travel, Delivered with Zanzibar Expertise"
          description="We blend premium hospitality with insider knowledge so your journey feels smooth, exclusive, and genuinely memorable."
          center
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseItems.map((item, index) => {
            const Icon = icons[index] || Sparkles
            return (
              <div key={item.title} className="glass rounded-3xl p-5 text-center luxury-shadow">
                <Icon className="mx-auto mb-4 text-gold" size={28} />
                <h3 className="font-heading text-xl text-navy dark:text-sand">{item.title}</h3>
                <p className="mt-2 text-sm text-navy/70 dark:text-sand/70">{item.text}</p>
              </div>
            )
          })}
        </div>
      </MotionSection>

      <section className="section-pad">
        <SectionTitle
          eyebrow="Gallery Preview"
          title="Island Beauty & Safari Grandeur"
          description="A glimpse into the cinematic moments waiting for you across Zanzibar beaches, reefs, and the Tanzanian wild."
          center
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.slice(0, 4).map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={[
                'Royal beach in Zanzibar',
                'Nungwi coastal road scene',
                'Island escape over turquoise water',
                'Family beach moment in Zanzibar',
              ][index]}
              whileHover={{ scale: 1.03 }}
              className="h-72 w-full rounded-2xl object-cover transition"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="section-pad pt-2">
        <SectionTitle
          eyebrow="Tour Packages"
          title="Elegant Packages for Every Traveler"
          description="Choose a ready-made luxury experience or let us tailor a private itinerary around your dates, style, and pace."
          center
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            { name: 'Solo Traveler Package', duration: '4 Days / 3 Nights', price: 'Starting from $450', note: 'Ideal for independent travelers who want curated island experiences with premium flexibility.' },
            { name: 'Couple / Honeymoon Package', duration: '5 Days / 4 Nights', price: 'Starting from $850', note: 'Romantic island escapes with private moments, sunset dining, and seamless luxury touches.' },
            { name: 'Group / Family Package', duration: 'Custom Pricing', price: 'Tailored Quote', note: 'Perfect for families and groups looking for a polished, fully customized Zanzibar experience.' },
          ].map((pack) => (
            <motion.div key={pack.name} whileHover={{ y: -6 }} className="glass rounded-3xl p-7 luxury-shadow">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">Package</p>
              <h3 className="mt-3 font-heading text-3xl text-navy dark:text-sand">{pack.name}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-ocean dark:text-gold">{pack.duration}</p>
              <p className="mt-3 font-heading text-2xl text-navy dark:text-sand">{pack.price}</p>
              <p className="mt-4 text-sm text-navy/75 dark:text-sand/75">{pack.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad pt-2">
        <SectionTitle
          eyebrow="Guest Stories"
          title="Trusted by Luxury Travelers Worldwide"
          description="Authentic feedback from couples, families, and explorers who experienced Zanzibar with ZOST."
          center
        />
        <div className="mx-auto mt-8 max-w-5xl">
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-5 rounded-3xl bg-navy p-8 text-center text-sand sm:grid-cols-3">
          {[{ label: 'Curated Experiences', value: 320 }, { label: 'Countries Served', value: 46 }, { label: '5-Star Reviews', value: 98 }].map((counter) => (
            <div key={counter.label}>
              <p className="font-heading text-4xl text-gold">{counter.value}+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-sand/75">{counter.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[url('https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779286747/island1_dtmeam.jpg')] bg-cover bg-center p-8 sm:p-14">
          <div className="rounded-3xl bg-midnight/70 p-8 text-[#FFF7EA] backdrop-blur-md sm:max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#F3D98B] sm:text-base">Final Call</p>
            <h3 className="mt-4 font-heading text-5xl leading-tight sm:text-6xl">Your Zanzibar Adventure Starts Here</h3>
            <p className="mt-4 text-lg text-[#F9F1E3]/88 sm:text-xl">
              From Zanzibar Beach Holidays to Tanzania Safari Packages, we design experiences that stay with you for a lifetime.
            </p>
            <button onClick={openBooking} className="mt-7 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy transition hover:bg-sand sm:px-8 sm:py-4 sm:text-base">
              Plan Your Journey
            </button>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="mx-auto max-w-7xl rounded-3xl border border-navy/10 bg-white/65 p-6 dark:bg-midnight/45">
          <h3 className="font-heading text-2xl text-navy dark:text-sand">Premium CTA Collection</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {ctaButtons.map((item) => (
              <span key={item} className="rounded-full bg-sand px-3 py-2 text-xs text-navy dark:bg-navy dark:text-sand">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
