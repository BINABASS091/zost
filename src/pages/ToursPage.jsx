import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import TourCard from '../components/TourCard'
import { featuredTours, tourCategories } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function ToursPage({ openBooking }) {
  const [filter, setFilter] = useState('All')
  usePageMeta('Tours & Safaris | Zanzibar Tours and Tanzania Safari Packages')

  const tours = useMemo(
    () => (filter === 'All' ? featuredTours : featuredTours.filter((tour) => tour.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        title="Tours & Safaris"
        subtitle="Luxury Zanzibar travel experiences curated across beaches, culture, marine adventure, and nature excursions."
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779286809/villa6_g7xtpl.jpg"
      />

      <section className="section-pad">
        <SectionTitle
          eyebrow="Tour Categories"
          title="Find Your Perfect Zanzibar Experience"
          description="Use filters to browse Beach Tours, Safari Adventures, Cultural Tours, Luxury Escapes, Water Activities, and Nature Tours."
          center
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tourCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === category ? 'bg-navy text-sand shadow-[0_10px_24px_rgba(7,28,52,0.18)]' : 'bg-white/70 text-navy dark:bg-midnight/60 dark:text-sand'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} openBooking={openBooking} />
          ))}
        </div>
      </section>
    </>
  )
}
