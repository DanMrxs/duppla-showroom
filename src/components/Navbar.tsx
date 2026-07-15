import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'COLLECTION', href: '#collection' },
  { label: 'SHOWROOM', href: '#showroom' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px] md:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/assets/LOGODUPLLABlack.jpg"
              alt="duppla showroom"
              className={`h-10 md:h-12 w-auto transition-all duration-500 rounded ${
                scrolled ? 'invert' : ''
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs font-sans tracking-editorial font-medium transition-colors duration-300 group ${
                  scrolled ? 'text-ink' : 'text-cream'
                }`}
              >
                {link.label}
                <span className="absolute left-1/2 -bottom-1 h-px w-0 group-hover:w-full group-hover:left-0 transition-all duration-300 bg-current" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/dupplashowroom"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <button
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? 'text-ink' : 'text-cream'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-ink"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-serif text-ink tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
