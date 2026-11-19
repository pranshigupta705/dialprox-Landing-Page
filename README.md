<div align="center">

# DialProX Landing Page

**Teams that stopped missing calls.**
A modern, responsive, animated marketing site for DialProX, built with React, TypeScript and Vite.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

[Live Demo](#) · [Report a Bug](https://github.com/pranshigupta705/dialprox-Landing-Page/issues) · [Request a Feature](https://github.com/pranshigupta705/dialprox-Landing-Page/issues)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Page Sections](#page-sections)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Animations](#animations)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About

DialProX is an AI call-handling product that makes sure customers get an answer instead of voicemail. This repository contains its landing page: a fast, single-page site that explains the product, shows social proof, answers common questions and drives visitors to **Book a demo**.

<!-- Add a screenshot: save it as docs/screenshot.png and uncomment the line below -->
<!-- ![DialProX landing page](docs/screenshot.png) -->

## Features

- **Fully responsive** layout for mobile, tablet and desktop
- **Scroll-reveal animations** powered by `IntersectionObserver`, with no animation library needed
- **Staggered entrances** for cards and headings
- **Smooth hover effects** on cards, avatars and buttons
- **Light and dark mode** toggle in the navbar
- **Sticky navigation** with in-page anchor links
- **Demo booking form** for lead capture
- **Accessible motion:** respects `prefers-reduced-motion`
- **Typed codebase** with TypeScript throughout

## Page Sections

| Section | Purpose |
| --- | --- |
| **Hero** | Headline, call to action and dashboard preview |
| **Features** | What DialProX does |
| **How it works** | Step-by-step explanation |
| **Analytics** | Reporting and insights |
| **Customization** | Routing by language, plan and more |
| **Customers** | Testimonials from teams using DialProX |
| **FAQ** | Answers to common questions |
| **Contact / Demo** | Book-a-demo form and footer |

## Tech Stack

- [React](https://react.dev/): UI library
- [TypeScript](https://www.typescriptlang.org/): type safety
- [Vite](https://vitejs.dev/): dev server and build tool
- **CSS:** global stylesheet with custom animations and transitions

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pranshigupta705/dialprox-Landing-Page.git

# 2. Go into the project folder
cd dialprox-Landing-Page

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
dialprox-Landing-Page/
├── public/                  # Static assets
├── src/
│   ├── features/
│   │   ├── hero/            # Hero, DashboardPreview
│   │   ├── product/         # Benefits and product sections
│   │   └── conversion/      # Testimonials, DemoForm, Footer, data
│   ├── hooks/
│   │   └── useSiteAnimations.ts
│   ├── styles/
│   │   └── globals.css      # Global styles and animations
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Animations

Scroll animations are handled by a small `Reveal` component that wraps any content and fades it in when it enters the viewport.

```tsx
import Reveal from './components/Reveal';

<Reveal delay={150} direction="up">
  <h2>Teams that stopped missing calls</h2>
</Reveal>
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `delay` | `number` | `0` | Delay in milliseconds, used for staggering |
| `direction` | `'up' \| 'left' \| 'right' \| 'none'` | `'up'` | Direction the element enters from |
| `className` | `string` | `''` | Extra classes for the wrapper |

Animations only run once per element and are disabled automatically for users who prefer reduced motion.

## Customization

- **Testimonials and copy:** edit `src/features/conversion/data.ts`
- **Colors, spacing and animations:** edit `src/styles/globals.css`
- **Section content:** edit the matching component under `src/features/`
- **Placeholder names:** the testimonials currently use placeholder names; replace them with real customer details before launch

## Deployment

The site is a static Vite build, so it deploys easily to any static host.

**Vercel or Netlify (recommended)**

1. Import this repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy. Every `git push` to `main` redeploys automatically.

**GitHub Pages**

1. Set `base: '/dialprox-Landing-Page/'` in `vite.config.ts`.
2. Run `npm run build` and publish the `dist` folder (for example with the `gh-pages` package or a GitHub Actions workflow).

## Contributing

Contributions are welcome.

1. Fork the project
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for details.

---

<div align="center">

Built with care by [Pranshi Gupta](https://github.com/pranshigupta705)

</div>
