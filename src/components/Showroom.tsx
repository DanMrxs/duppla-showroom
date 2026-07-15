import ScrollReveal from './ScrollReveal';

export default function Showroom() {
  return (
    <section id="showroom" className="bg-ink py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
            <img
              src="/assets/WhatsApp Image 2026-07-13 at 14.40.19.jpeg"
              alt="duppla showroom interior"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <p className="text-camel text-xs font-sans tracking-editorial uppercase mb-4">
              The Showroom
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-[1.1] mb-6">
              A space designed for discovery
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-cream/70 font-sans font-light leading-relaxed text-base md:text-lg mb-8 max-w-md">
              Step into our curated world where every piece is hand-selected.
              Experience personal styling in an intimate, inspiring environment
              designed to help you find pieces that feel unmistakably you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-cream/60 text-cream text-xs font-sans tracking-editorial uppercase font-medium rounded-full hover:bg-camel hover:border-camel hover:text-white transition-all duration-500 w-fit"
            >
              Book a Visit
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
