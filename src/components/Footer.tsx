import { Instagram, Mail, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const footerLinks = [
  { label: 'COLLECTION', href: '#collection' },
  { label: 'SHOWROOM', href: '#showroom' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream px-6 md:px-10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <ScrollReveal>
            <div>
              <img
                src="/assets/LOGODUPLLABlack.jpg"
                alt="duppla showroom"
                className="h-12 w-auto mb-4 invert"
              />
              <p className="text-cream/50 font-sans font-light text-sm leading-relaxed max-w-xs">
                Curated fashion, intentional living. A showroom experience for the modern woman.
              </p>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.1}>
            <div>
              <p className="text-xs font-sans tracking-editorial uppercase text-cream/40 mb-4">
                Navigation
              </p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/70 text-sm font-sans font-light hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-xs font-sans tracking-editorial uppercase text-cream/40 mb-4">
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/dupplashowroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 text-sm font-sans font-light hover:text-cream transition-colors duration-300 flex items-center gap-2"
                  >
                    <Instagram size={16} strokeWidth={1.5} />
                    @dupplashowroom
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@dupplashowroom.com"
                    className="text-cream/70 text-sm font-sans font-light hover:text-cream transition-colors duration-300 flex items-center gap-2"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    hello@dupplashowroom.com
                  </a>
                </li>
                <li className="text-cream/70 text-sm font-sans font-light flex items-start gap-2">
                  <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>Book your private showroom appointment</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-sans">
            © 2024 duppla showroom. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 text-xs font-sans hover:text-cream/60 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-cream/30 text-xs font-sans hover:text-cream/60 transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
