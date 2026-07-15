# duppla showroom — Landing Page Design

## Brand Identity

**Brand name:** duppla showroom  
**Logo:** White wordmark "duppla" with "showroom" subtitle inside a rounded rectangle, on black background. Black logo variant on light backgrounds.  
**Category:** Premium women's fashion showroom / curated clothing collection  
**Mood:** Refined, editorial, warm-minimalist, understated luxury. Think: Toteme meets Aritzia meets COS.

## Visual System

### Colors
- **Background primary:** `#F7F5F0` — warm off-white, editorial paper tone
- **Background dark:** `#1A1A1A` — near-black for dark sections
- **Text primary:** `#1A1A1A` — on light backgrounds
- **Text inverse:** `#F7F5F0` — on dark backgrounds
- **Accent:** `#C4A882` — warm camel/tan for subtle highlights and CTAs
- **Border/divider:** `rgba(26,26,26,0.08)` — barely-there lines

### Typography
- **Headlines:** "Cormorant Garamond", serif, weight 300–400. Large scale, tight line-height (1.05–1.1), elegant letter-spacing (-0.02em).
- **Body:** "Inter", sans-serif, weight 300–400. Readable, airy, generous line-height (1.6).
- **Nav / Labels / Captions:** "Inter", sans-serif, weight 400, uppercase, letter-spacing 0.08em, size 12–13px.

### Spacing
- Section padding: `py-24 md:py-32 lg:py-40` — generous breathing room
- Content max-width: `max-w-7xl` (1280px) centered
- Grid gap: `gap-4` to `gap-8` — tight editorial grids

### Motion Language
- Page load: fade-up + slight translateY (20px → 0), duration 0.8s, ease `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Scroll reveals: IntersectionObserver-triggered fade-up, staggered by 0.1s between siblings
- Image hover: scale 1.03 with 0.6s ease, overlay opacity transition
- Nav links: underline grows from center on hover, 0.3s
- Smooth scroll behavior globally

---

## Page Sections (Single Page)

### 1. Navigation (Sticky)
- Fixed top, transparent initially, becomes `bg-[#F7F5F0]/90 backdrop-blur-md` on scroll
- Left: duppla showroom logo (black variant) — ~140px wide
- Center: links — COLLECTION, SHOWROOM, ABOUT, CONTACT
- Right: Instagram icon + hamburger (mobile)
- Height: 72px desktop, 60px mobile

### 2. Hero (Full Viewport)
- Background: full-bleed image carousel using the showroom interior photos (14.40.19, 15.14.48) and fashion detail shots
- Overlay: subtle dark gradient from bottom `rgba(26,26,26,0.3)` to transparent
- Centered text, lower third of viewport:
  - Small label: "EST. 2024 · CURATED FASHION" (Inter, uppercase, tracking-widest, `#F7F5F0`)
  - Headline: "Where elegance meets intention" (Cormorant Garamond, 5xl→7xl, `#F7F5F0`)
  - CTA: "Explore the Collection" — pill button, `bg-[#F7F5F0] text-[#1A1A1A]`, hover `bg-[#C4A882] text-white`
- Auto-sliding carousel, 5s interval, crossfade transition 1.2s
- 3–4 hero images selected from the best showroom shots

### 3. Collection Gallery (The Edit)
- Background: `#F7F5F0`
- Section label: "THE EDIT" (centered, uppercase, tracking-widest, mb-16)
- Headline: "This Season's Essentials" (Cormorant Garamond, 4xl, centered)
- Asymmetric editorial grid:
  - Row 1: Large left image (2fr) + stacked right images (1fr each, vertical)
  - Row 2: Full-width image (the wide showroom shot with mannequins)
  - Row 3: Three equal columns (fashion detail shots)
- Images: use the provided fashion photography (hanging garments, mannequins, detail shots, B&W hanger shot)
- Each image: hover → slight zoom + caption overlay fades in with garment name
- Captions: garment type in uppercase, minimal

### 4. Showroom Experience
- Background: `#1A1A1A` (dark section)
- Two-column layout on desktop, stacked on mobile:
  - Left: large portrait image (the showroom interior with chairs and racks)
  - Right: text block
    - Label: "THE SHOWROOM" (accent color `#C4A882`, uppercase)
    - Headline: "A space designed for discovery" (Cormorant Garamond, 3xl, inverse text)
    - Body: "Step into our curated world where every piece is hand-selected. Experience personal styling in an intimate, inspiring environment." (Inter, weight 300, inverse text, opacity 0.8)
    - CTA: "Book a Visit" — outline button, border `#F7F5F0`, text `#F7F5F0`, hover filled `#C4A882`

### 5. About / Brand Story
- Background: `#F7F5F0`
- Centered narrow column (max-w-2xl)
- Label: "OUR PHILOSOPHY"
- Headline: "Less, but better" (Cormorant Garamond, 4xl)
- Body: "duppla showroom is built on the belief that thoughtful curation outpaces endless choice. We bring together emerging designers and timeless pieces for the modern woman who values quality over quantity."
- Signature: "— The duppla Team" in italic serif

### 6. Instagram Feed
- Background: `#F7F5F0`
- Section label: "FOLLOW @DUPPLASHOWROOM" (centered, uppercase)
- Grid of 6 square images from the provided media (2 rows × 3, or 1 row × 6 on desktop)
- Each image links to the Instagram post (placeholder links)
- Hover: overlay with Instagram icon, slight darkening
- Below grid: "See more on Instagram" text link
- **Note:** For true auto-sync, a Cloudflare Worker can be added later to fetch the Instagram Basic Display API. For now, static grid with manual update path.

### 7. Footer
- Background: `#1A1A1A`
- Three columns on desktop:
  - Left: duppla showroom logo (white variant), tagline "Curated fashion, intentional living"
  - Center: Navigation links stacked vertically (COLLECTION, SHOWROOM, ABOUT, CONTACT)
  - Right: Instagram link, email, address placeholder
- Bottom bar: © 2024 duppla showroom. All rights reserved. | Privacy | Terms

---

## Assets

### Logo
- `LOGODUPLLABlack.jpg` — black background with white text. Use for dark sections (footer, hero overlay). Also needs an inverted/transparent version for the nav bar on light backgrounds.
- For the nav, we can use the black logo with CSS filter invert on light backgrounds, or generate a transparent PNG version.

### Images to Use
1. `WhatsApp Image 2026-07-13 at 14.40.19.jpeg` — showroom interior wide shot → Hero + Showroom section
2. `WhatsApp Image 2026-07-13 at 15.14.48.jpeg` — mannequins with dried flowers → Collection grid + About
3. `WhatsApp Image 2026-07-13 at 14.35.27 (1).jpeg` — red/white dresses on racks → Collection grid centerpiece
4. `WhatsApp Image 2026-07-13 at 14.35.26.jpeg` — blue striped dress close-up → Collection detail
5. `WhatsApp Image 2026-07-13 at 14.34.41.jpeg` — B&W hangers → Collection grid (artistic)
6. `WhatsApp Image 2026-07-13 at 15.15.18.jpeg` — showroom with plants → Collection / Showroom
7. `WhatsApp Image 2026-07-13 at 14.39.41.jpeg` — clothing rack wide → Collection
8. `WhatsApp Image 2026-07-13 at 14.35.37.jpeg` — red sequin dress → Collection detail

### Videos
- The provided MP4s can be used in the hero background as an alternative to the carousel. For MVP, use image carousel (simpler, lighter). Videos can be added later as enhancement.

---

## Responsive Breakpoints
- Desktop: `lg:` (1024px+) — full layout
- Tablet: `md:` (768px–1023px) — 2-column grids
- Mobile: default (<768px) — single column, stacked sections, hamburger nav

## Performance Notes
- Images: lazy load below the fold, use `loading="lazy"` and `decoding="async"`
- Hero images: preload first image, `fetchpriority="high"`
- Fonts: preload Cormorant Garamond and Inter from Google Fonts
- Animations: respect `prefers-reduced-motion`

## Dependencies
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (for scroll animations and transitions)
- Lucide React (icons)
- Google Fonts: Cormorant Garamond + Inter
