import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  '/assets/WhatsApp Image 2026-07-13 at 14.40.19.jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 15.14.48.jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 14.35.27 (1).jpeg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[current]}
            alt="duppla showroom"
            className="w-full h-full object-cover"
            fetchPriority={current === 0 ? 'high' : 'auto'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-cream/80 text-xs md:text-sm font-sans tracking-editorial uppercase mb-4"
        >
          Est. 2024 · Curated Fashion
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-cream text-4xl md:text-6xl lg:text-7xl font-light text-center leading-[1.05] max-w-4xl"
        >
          Where elegance meets intention
        </motion.h1>
        <motion.a
          href="#collection"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 px-8 py-3 bg-cream text-ink text-xs font-sans tracking-editorial uppercase font-medium rounded-full hover:bg-camel hover:text-white transition-all duration-500"
        >
          Explore the Collection
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current ? 'bg-cream w-6' : 'bg-cream/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
