import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const collectionImages = [
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.35.26.jpeg',
    caption: 'Summer Dress',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.34.41.jpeg',
    caption: 'Evening Collection',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.35.27 (2).jpeg',
    caption: 'Silk & Linen',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.35.27 (1).jpeg',
    caption: 'The Evening Edit',
    span: 'col-span-3 row-span-1 md:col-span-3',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.35.37.jpeg',
    caption: 'Sequin Gown',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.35.38.jpeg',
    caption: 'Day to Night',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/WhatsApp Image 2026-07-13 at 14.52.35.jpeg',
    caption: 'Resort Wear',
    span: 'col-span-1 row-span-1',
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-cream py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-xs font-sans tracking-editorial uppercase text-ink/60 mb-4">
            The Edit
          </p>
          <h2 className="text-center font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink mb-16 md:mb-24">
            This Season's Essentials
          </h2>
        </ScrollReveal>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {collectionImages.map((item, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full h-full"
              >
                <div className={`relative w-full overflow-hidden ${
                  item.span.includes('row-span-2') ? 'aspect-[3/4]' : 'aspect-[4/5]'
                }`}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500 flex items-end justify-center pb-6">
                    <span className="text-cream text-xs font-sans tracking-editorial uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
