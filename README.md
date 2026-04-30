# Mountain Gipsy

Marketing website for **Mountain Gipsy** — a brand built around mindset coaching, workshops, keynotes, and adventure experiences led by Tima Deryan.

The site presents the brand story, services, blog highlights, testimonials, and contact entry points, with a multi-page React/Vite frontend styled in Tailwind CSS and animated with Framer Motion.

## Tech stack

- **React 18** + **React Router** for the multi-page UI
- **Vite 5** as the dev server and build tool
- **Tailwind CSS** for styling
- **Framer Motion** for transitions and scroll animations
- **Swiper** for the testimonials slider
- **react-intersection-observer** for reveal-on-scroll effects

## Project structure

```
.
├── index.html              # App shell, fonts, social meta
├── public/
│   └── images/             # Logos, photography, partner/client logos
├── src/
│   ├── App.jsx             # Routes
│   ├── main.jsx            # Entry point
│   ├── index.css           # Tailwind layers + globals
│   ├── components/         # Navbar, Footer, Hero, CTAs, sliders, etc.
│   └── pages/              # Home, About, Services, Tima, Contact
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server runs on Vite's default port (http://localhost:5173).

## Available scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR               |
| `npm run build`   | Production build (minified with esbuild)         |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint across `.js` and `.jsx` files         |

## Pages

- **Home** — hero, stats, services preview, testimonials, blog preview, CTA
- **About** — brand story and mission
- **Services** — coaching, workshops, keynotes, adventure experiences
- **Tima** — founder profile (Tima Deryan)
- **Contact** — inquiry entry point

## Assets

All imagery (brand logo, founder photography, client logos, social icons) lives under `public/images/` and is referenced directly from components. Assets are unchanged from the original design.

## Deployment

The build output is a static bundle in `dist/` and can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.):

```bash
npm run build
npm run preview   # optional local smoke test
```
