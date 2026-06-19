# Rishitha Keshavareddy — Portfolio · "The Arcane Codex"

A cinematic, fantasy/magic-themed personal portfolio for an **AI / ML Engineer** specializing in
Generative AI, LLMs, and agentic systems. Built with React, **Three.js (React Three Fiber)**,
Tailwind CSS, and Framer Motion.

> **Concept:** the engineer reframed as a modern *spellwright* who binds frontier models into
> trustworthy systems. Fantasy lives in the **atmosphere and section rubrics**; the actual skills,
> metrics, and achievements stay factual and recruiter-legible. Every word is derived from the resume.

---

## ✨ Highlights

- **"Arcane Codex" design system** — obsidian nightfall, antique gold, arcane amethyst, and emerald
  on warm parchment ink. Engraved **Cinzel** titles over literary **EB Garamond**.
- **Real 3D centerpiece** — a faceted crystal relic (React Three Fiber) with a glowing soul, an
  orbiting wireframe ward, floating gold dust, local studio lighting (no network HDRI), and Bloom
  post-processing. Code-split into a lazy chunk and wrapped in an error boundary.
- **Bespoke magic cursor** — an arcane orb trailing a comet of embers that blooms to a gold ring
  over interactive elements (pointer-fine devices only).
- **Hand-crafted ornament** — illuminated drop-caps, ornamental gold corner brackets, diamond rules,
  a rotating astrolabe sigil, a summoning circle, drifting ember particles, film grain.
- **Progressive enhancement** — the 3D scene degrades to a styled CSS relic on mobile, under
  reduced-motion, or if WebGL is unavailable. All motion respects `prefers-reduced-motion`.
- **Recruiter-friendly** — clear sections, measurable impact up front, downloadable résumé,
  real contact links, no horizontal scroll from 375px → 1440px+.

---

## 🚀 Getting started

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:8123
npm run build        # production build → dist/
npm run preview      # preview the production build
```

> The dev port is **8123** in `vite.config.js` (5173 is reserved on some Windows machines).

---

## 🧱 Tech stack

| Tool | Purpose |
|------|---------|
| **React 18** + **Vite 5** | App framework & fast dev/build |
| **Three.js** · **@react-three/fiber** · **drei** · **postprocessing** | The 3D crystal relic + Bloom |
| **Tailwind CSS 3** | Utility-first styling + custom design tokens |
| **Framer Motion 11** | Scroll, entrance & micro-interactions |
| **Lucide React** | Icon set |
| Fonts | Cinzel (display), Cormorant Garamond (accent), EB Garamond (body) |

---

## 📁 Structure

```
src/
├─ App.jsx                  # Page composition + grain overlay
├─ index.css                # Tailwind layers: rune-card, gilded text, drop-cap, ornaments, grain
├─ data/resume.js           # ← Single source of truth (edit your content here)
├─ hooks/usePrefersReducedMotion.js
└─ components/
   ├─ Navbar / Hero / About / Skills / Experience / Projects / Education / Impact / Contact / Footer
   ├─ effects/
   │  ├─ ArcaneBackground.jsx   # obsidian glows + astrolabe + starfield + vignette
   │  ├─ Embers.jsx             # drifting ember/constellation canvas
   │  ├─ MagicCursor.jsx        # custom comet cursor
   │  ├─ Relic3D.jsx            # lazy + gated wrapper with CSS fallback
   │  ├─ CrystalScene.jsx       # the React Three Fiber scene
   │  └─ CanvasErrorBoundary.jsx
   └─ ui/                  # Reveal, SectionHeading, MagneticButton, TiltCard, CountUp
```

---

## ✏️ Customizing

- **Content:** edit `src/data/resume.js` — stats, skills, experience, projects, metrics, contact.
- **Palette:** tweak `tailwind.config.js` (`obsidian`, `parchment`, `gold`, `arcane`, `emerald`,
  `ember`) and the `accentHex` map in `resume.js`.
- **3D relic:** tune `src/components/effects/CrystalScene.jsx` (geometry, material, lights, Bloom).
- **Résumé download:** replace `public/Rishitha_Keshavareddy_Resume.docx` (or update `profile.resumeFile`).
- **LinkedIn / GitHub:** placeholders (`#`) in `profile.links` — drop in real URLs.

---

## 🌐 Deploy

Static output in `dist/` — deploy to **Vercel**, **Netlify**, **GitHub Pages**, or any static host.
Build command `npm run build`, output dir `dist`. No environment variables required.
