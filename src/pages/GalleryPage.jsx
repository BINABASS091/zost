import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { galleryImages } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

export default function GalleryPage() {
  usePageMeta('Gallery | Zanzibar Beach Holidays and Safari Moments')

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore cinematic moments from our Zanzibar beach holidays, marine excursions, and luxury safari adventures."
        image="https://res.cloudinary.com/djczmay2i/image/upload/q_auto/f_auto/v1779537152/Prison_Island2_nbupim.avif"
      />

      <section className="section-pad">
        <SectionTitle
          eyebrow="Instagram-Style Moments"
          title="Island Light, Wildlife Energy, Lasting Memories"
          description="A premium visual collection of beaches, wildlife, resorts, culture, and unforgettable guest experiences."
          center
        />
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-white/60 p-4 shadow-[0_20px_60px_rgba(7,28,52,0.08)] backdrop-blur-md dark:bg-midnight/35 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {galleryImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={[
                'Royal beach in Zanzibar',
                'Nungwi coastal road scene',
                'Island escape over turquoise water',
                'Family beach moment in Zanzibar',
                'Luxury Zanzibar beach scenery',
                'Romantic Zanzibar sunset stay',
                'Classic safari-style island view',
                'Golden hour Zanzibar seascape',
                'Snorkeling and ocean adventure scene',
              ][index]}
              className={`h-full w-full rounded-3xl object-cover shadow-[0_14px_36px_rgba(7,28,52,0.12)] transition ${index === 0 ? 'xl:col-span-7 xl:row-span-2 min-h-[28rem]' : index === 1 ? 'xl:col-span-5 min-h-72' : index === 2 ? 'xl:col-span-4 min-h-72' : index === 3 ? 'xl:col-span-4 min-h-72' : index === 4 ? 'xl:col-span-4 min-h-72' : index === 5 ? 'xl:col-span-8 min-h-72' : index === 6 ? 'xl:col-span-4 min-h-72' : index === 7 ? 'xl:col-span-6 min-h-72' : 'xl:col-span-6 min-h-72'}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
