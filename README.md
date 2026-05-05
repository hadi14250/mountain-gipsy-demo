<div align="center">

# Mountain Gipsy

**Marketing website for Mountain Gipsy — mindset coaching, workshops, keynotes, and adventure experiences led by Tima Deryan.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## Overview

A multi-page React site presenting the Mountain Gipsy brand story, services, blog highlights, testimonials, and contact entry points. Styled with Tailwind CSS and brought to life with Framer Motion animations.

## Tech Stack

| Layer        | Tools                                                             |
| ------------ | ----------------------------------------------------------------- |
| Framework    | React 18 + React Router                                           |
| Build        | Vite 5 (esbuild minification)                                     |
| Styling      | Tailwind CSS                                                      |
| Animation    | Framer Motion, react-intersection-observer                        |
| UI Widgets   | Swiper (testimonials slider)                                      |

## Quick Start

> **Prerequisites:** Node.js 18+ and npm

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR               |
| `npm run build`   | Production build (minified with esbuild)         |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint across `.js` and `.jsx` files         |

## Project Structure

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

## Pages

- **Home** — hero, stats, services preview, testimonials, blog preview, CTA
- **About** — brand story and mission
- **Services** — coaching, workshops, keynotes, adventure experiences
- **Tima** — founder profile (Tima Deryan)
- **Contact** — inquiry entry point

## Assets

All imagery (brand logo, founder photography, client logos, social icons) lives under `public/images/` and is referenced directly from components. Assets are unchanged from the original design.

## Deployment

The build output is a static bundle in `dist/` and can be hosted on any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.

```bash
npm run build
npm run preview   # optional local smoke test
```

---

<div align="center">

Built with care for **Mountain Gipsy** ⛰️

</div>
