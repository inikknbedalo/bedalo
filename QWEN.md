# Project Analysis: Website Dusun Bedalo

## Overview
This is a website profile for Dusun Bedalo, built with Astro and Tailwind CSS as part of the KKN UIN Sunan Kalijaga program. The project is a static site that includes information about the village, its tourism potential, and other relevant content.

## Project Structure
```
/home/rd/project/bedalo3/
├── .astro/                 # Astro framework cache and internal files
├── .git/                   # Git repository metadata
├── .vscode/                # VS Code settings
│   ├── extensions.json     # Recommended VS Code extensions
│   └── launch.json         # Debug configuration
├── dist/                   # Build output directory
├── functions/              # Serverless functions (API routes)
│   └── api/                # API endpoint functions
├── node_modules/           # NPM dependencies
├── public/                 # Static assets
│   ├── admin/              # Admin-related assets
│   ├── assets/             # General public assets (images, etc.)
│   ├── fonts/              # Font files
│   ├── google966f6e79bc232f79.html # Google Search Console verification
│   ├── icon.svg            # Site icon
│   └── robots.txt          # Search engine crawling rules
└── src/                    # Source code
    ├── assets/             # Asset files (images, icons, etc.)
    ├── components/         # Reusable Astro components
    │   ├── home/           # Homepage-specific components
    │   ├── Card.astro      # General card component
    │   ├── ContactForm.astro # Contact form component
    │   ├── ContactPersonCard.astro # Contact person component
    │   ├── ContentImageSection.astro # Content with image section
    │   ├── Footer.astro    # Site footer component
    │   ├── Header.astro    # Site header component
    │   ├── LiteYouTube.astro # YouTube video embedding
    │   ├── MemberCard.astro # Member display component
    │   ├── PageBanner.astro # Page banner component
    │   ├── PersonCard.astro # Person profile component
    │   ├── PhotoGallery.astro # Photo gallery component
    │   ├── SectionTitle.astro # Section title component
    │   └── StatCard.astro  # Statistics card component
    ├── content/            # Content collections (Markdown/MDX files)
    │   ├── config/         # Content collection configurations
    │   ├── galeri/         # Gallery content
    │   ├── info/           # Information content
    │   ├── kkn/            # KKN (Community Service Program) related content
    │   ├── pages/          # Page content
    │   ├── pariwisata/     # Tourism content
    │   ├── potensi/        # Potential/resources content
    │   ├── profil/         # Profile content
    │   ├── struktur/       # Organizational structure content
    │   └── config.ts       # Content collection configuration
    ├── layouts/            # Layout components
    │   └── Layout.astro    # Main layout component
    ├── pages/              # Route pages
    │   ├── pariwisata/     # Tourism sub-pages
    │   ├── potensi/        # Potential sub-pages
    │   ├── 404.astro       # 404 error page
    │   ├── dashboard.astro # Dashboard page
    │   ├── galeri.astro    # Gallery page
    │   ├── index.astro     # Homepage
    │   ├── kebijakan-privasi.astro # Privacy policy page
    │   ├── kontak.astro    # Contact page
    │   ├── pariwisata.astro # Tourism page
    │   ├── peta-situs.astro # Sitemap page
    │   ├── potensi.astro   # Potential page
    │   ├── profil.astro    # Profile page
    │   ├── survei.astro    # Survey page
    │   └── tentang-kkn.astro # About KKN page
    ├── styles/             # CSS styles
    └── utils/              # Utility functions
├── .gitignore              # Git ignore patterns
├── astro.config.mjs        # Astro framework configuration
├── eslint.config.js        # ESLint configuration
├── package-lock.json       # NPM dependency lock file
├── package.json            # NPM package manifest
├── tailwind.config.mjs     # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Tech Stack

### Framework & Build Tools
- **Astro**: v5.13.3 - Static site builder for content-focused websites with excellent performance
- **@tailwindcss/vite**: v4.1.12 - Vite plugin for Tailwind CSS
- **Vite**: Next-generation frontend build tool (used internally by Astro)
- **TypeScript**: Type-safe JavaScript for improved development experience
- **ESLint**: v9.38.0 - Code linting and quality assurance
- **@eslint/js**: v9.38.0 - ESLint JavaScript configuration
- **@typescript-eslint/eslint-plugin**: v8.46.2 - TypeScript ESLint plugin
- **@typescript-eslint/parser**: v8.46.2 - TypeScript parser for ESLint
- **typescript-eslint**: v8.46.2 - Monorepo for all TypeScript-ESLint packages

### Styling & Design
- **Tailwind CSS**: v4.1.12 - Utility-first CSS framework for rapid UI development
- **@tailwindcss/typography**: v0.5.16 - Typography plugin for beautiful content styling
- **CSS**: Custom styles alongside Tailwind

### Content Management
- **Markdown/MDX**: Content authoring format for documentation and pages
- **Content Collections**: Astro's content collection API for structured data

### Frontend Libraries & Components
- **Font Awesome**: v7.0.0 - Icon library via `@fortawesome/fontawesome-free`
- **Google Fonts**: v5.2.6 - Poppins font via `@fontsource/poppins`
- **AOS (Animate On Scroll)**: v2.3.4 - Scroll animation library
- **Chart.js**: v4.5.0 - Interactive chart and data visualization library
- **CountUp.js**: v2.9.0 - Animated number counters
- **GLightbox**: v3.3.1 - Lightbox gallery functionality
- **GSAP**: v3.13.0 - Professional-grade animation library

### SEO & Performance
- **@astrojs/sitemap**: v3.5.1 - Automatic sitemap generation for SEO
- **Meta Tags**: Built-in SEO functionality

### API & Serverless
- **Astro Functions**: Server-side API routes in the `functions/api` directory

### Development Tools
- **npm**: Package management
- **tsconfig/strict**: Strict TypeScript configuration

## Project Features
- Sitemap generation via `@astrojs/sitemap`
- Responsive design with Tailwind CSS
- SEO-friendly with proper meta tags
- Content collections for structured content
- Component-based architecture
- Google Analytics ready (implied from verification file)
- Gallery functionality
- Contact forms
- Statistics display
- YouTube video embedding
- Lightbox gallery functionality (Glightbox)
- Animation capabilities (GSAP)
- Chart visualization (Chart.js)

## Configuration Files
- `astro.config.mjs`: Astro configuration with Tailwind CSS integration and sitemap generation
- `tailwind.config.mjs`: Tailwind CSS configuration with typography plugin
- `tsconfig.json`: TypeScript strict configuration
- `eslint.config.js`: ESLint configuration for code linting
- `package.json`: NPM package manifest with dependencies and scripts

## Build Scripts
- `npm run dev`: Start development server
- `npm run build`: Build the site for production
- `npm run preview`: Preview the built site locally
- `npm run lint`: Lint source files
- `npm run lint:fix`: Fix linting issues automatically
- `npm run type-check`: Run TypeScript type checking

## Deployment
The site is configured for deployment to Cloudflare Pages with the site URL set to 'https://bedalo.pages.dev'.