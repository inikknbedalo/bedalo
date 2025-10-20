# Qwen Memory Storage

This file stores project-specific memories and context for the Qwen Code assistant.

## Project Information

- **Name**: Website Profil Dusun Bedalo
- **Description**: Website profile for Bedalo Village, built with Astro and Tailwind CSS as part of the KKN program at UIN Sunan Kalijaga.
- **Authors**: KKN 117 UIN SUKA Group 129
- **Purpose**: To digitize village information and present it in a modern, fast, and accessible format.

## Technology Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Additional Libraries**: 
  - AOS (Animate On Scroll)
  - GLightbox (Lightbox)
  - Font Awesome (Icons)
  - Chart.js
  - GSAP (Animation)
  - CountUp.js

## Key Features

1. Static Site Generation (SSG) with Astro for maximum performance and high security
2. Modern styling with Tailwind CSS
3. Easy content management through Decap CMS
4. Automatic image optimization using `astro:assets`
5. Interactive photo and video gallery with GLightbox
6. YouTube video optimization with Lite YouTube Embed technique
7. Smooth scroll animations with AOS
8. Modular component-based architecture

## Project Structure

- **Root Files**:
  - `astro.config.mjs`: Astro configuration with Tailwind CSS and sitemap integration
  - `tailwind.config.mjs`: Tailwind CSS configuration with typography plugin
  - `package.json`: Project dependencies and scripts

- **Source Directory (`src/`)**:
  - `assets/`: Images and other static assets
  - `components/`: Reusable UI components organized by page/section
  - `content/`: Markdown content collections (Astro content collections)
  - `data/`: JSON files containing page content
  - `layouts/`: Page layout templates
  - `pages/`: Page components that generate routes
  - `styles/`: Global CSS styles

- **Content Management**:
  - JSON files in `src/data/` for content management
  - Astro content collections in `src/content/` for structured content
  - Decap CMS integration for visual content editing

## Development Commands

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Content Editing Options

1. **Via Decap CMS**: Access the admin interface after deployment for visual editing
2. **Manual Editing**: Edit JSON files in `src/data/` directly for text and image references

## Key Pages

- Home (`/`)
- Profile (`/profil`)
- Tourism (`/pariwisata`)
- Potentials (`/potensi`)
- Gallery (`/galeri`)
- Contact (`/kontak`)
- About KKN (`/tentang-kkn`)
- Privacy Policy (`/kebijakan-privasi`)
- Site Map (`/peta-situs`)
- Dashboard (`/dashboard`)
- Survey (`/survei`)
- 404 page

## Data Files

- `footer.json`: Footer content
- `galeri.json`: Gallery images
- `index.json`: Homepage content
- `kebijakan-privasi.json`: Privacy policy content
- `kontak.json`: Contact page content
- `pariwisata.json`: Tourism page content
- `peta-situs.json`: Site map content
- `tentang-kkn.json`: About KKN content