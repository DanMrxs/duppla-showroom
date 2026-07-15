import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const instaImages = [
  '/assets/WhatsApp Image 2026-07-13 at 14.35.26 (1).jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 14.35.27.jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 14.35.37 (1).jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 14.39.41.jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 15.14.48 (1).jpeg',
  '/assets/WhatsApp Image 2026-07-13 at 15.15.18 (1).jpeg',
];

export default function InstagramFeed() {
  return (
    <section className="bg-cream py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-xs font-sans tracking-editorial uppercase text-ink/60 mb-4">
            Follow @dupplashowroom
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mt-12">
          {instaImages.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <motion.a
                href="https://instagram.com/dupplashowroom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden block"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-500 flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/dupplashowroom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans tracking-editorial uppercase text-ink/60 hover:text-camel transition-colors duration-300 border-b border-transparent hover:border-camel pb-0.5"
            >
              See more on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
