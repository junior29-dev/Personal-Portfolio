<<<<<<< HEAD
# Boipelo Junior — Portfolio

A dark-theme, glassmorphism personal portfolio built with React, TypeScript,
Tailwind CSS, and Framer Motion. Includes a dedicated BPM Holdings section
showcasing five sub-brands as a connected architecture diagram.

## Getting started

```powershell
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for production

```powershell
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Project structure

```
src/
  components/       Each landing-page section (Hero, About, Skills, ...)
  components/icons/ Custom brand icon SVGs (GitHub, LinkedIn, X, Instagram, WhatsApp)
  data/content.ts    All site copy and data in one place — edit this file
                      to update skills, projects, businesses, timeline,
                      certifications, and contact links without touching
                      component code
public/
  projects/          Placeholder project preview images (SVG) — swap for
                      real screenshots
  resume/            Placeholder resume PDF — replace with your real CV
  favicon.svg
```

## Things to personalize before deploying

- `src/data/content.ts` — replace placeholder GitHub/LinkedIn/X/Instagram
  URLs, email, phone number, and WhatsApp link with your real details
- `public/resume/boipelo-junior-cv.pdf` — replace with your actual CV
- `public/projects/*.svg` — replace with real project screenshots
  (`.png`/`.jpg` work too — just update the `image` path in `content.ts`)
- Business "visit brand" links in `src/components/Businesses.tsx` — wire up
  real URLs for each BPM Holdings brand
- Contact form in `src/components/Contact.tsx` — currently a front-end-only
  demo; connect it to an email service (e.g. Formspree, Resend, or your own
  API route) to actually receive messages

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- lucide-react (icons) + a few custom inline brand icons
=======
# Personal-Portfolio
A personal developer portfolio showcasing my software engineering projects, technical skills, experience and professional journey.
>>>>>>> 422d538819c3b18539e6af1d7a0c8296b53e1676
