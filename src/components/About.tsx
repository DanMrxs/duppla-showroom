import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 lg:py-40 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs font-sans tracking-editorial uppercase text-ink/60 mb-4">
            Our Philosophy
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-[1.1] mb-8">
            Less, but better
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-ink/70 font-sans font-light leading-relaxed text-base md:text-lg mb-8">
            duppla showroom is built on the belief that thoughtful curation outpaces
            endless choice. We bring together emerging designers and timeless pieces
            for the modern woman who values quality over quantity. Every garment in
            our collection is chosen with intention — designed to be worn, loved, and
            treasured for years to come.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-serif italic text-ink/50 text-lg">
            — The duppla Team
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
