# Qwen Code Assistant Memory

This file contains persistent information about the Bedalo3 project to maintain context across Qwen Code sessions.

## Project Overview

- **Directory**: `/home/rd/project/bedalo3`
- **Project Name**: website-dusun-bedalo
- **Type**: Astro-based static site for Dusun Bedalo profile website
- **Description**: Website profil untuk Dusun Bedalo, dibangun dengan Astro dan Tailwind CSS sebagai bagian dari program KKN UIN Sunan Kalijaga
- **Key Technologies**: TypeScript, Tailwind CSS, Astro, CMS (Decap CMS), Cloudflare Pages

## Project Purpose

This is a static website for Dusun Bedalo village profile, created as part of the Community Service Learning (KKN) program by UIN Sunan Kalijaga Yogyakarta students. The website aims to digitize village information in a modern, fast, and accessible format, fully integrated with Decap CMS for easy content management.

## Key Features

- Static Site Generation (SSG) with Astro for maximum performance and high security
- Modern styling with Tailwind CSS
- Easy content management via Decap CMS
- Automatic image optimization using `astro:assets` 
- Interactive photo & video gallery with GLightbox
- Optimized YouTube videos with Lite YouTube Embed technique
- Smooth scroll animations with AOS (Animate On Scroll)
- Component-based architecture that is modular and easy to maintain

## Deployment

- Site URL: https://bedalo.pages.dev
- Deployed on Cloudflare Pages
- Admin access available at https://bedalo.pages.dev/admin

## Tech Stack

### Dependencies
- astro: ^5.13.3
- @astrojs/sitemap: ^3.5.1
- @tailwindcss/vite: ^4.1.12
- tailwindcss: ^4.1.12
- aos: ^2.3.4
- glightbox: ^3.3.1
- gsap: ^3.13.0
- chart.js: ^4.5.0
- countup.js: ^2.9.0
- @fontsource/poppins: ^5.2.6
- @fortawesome/fontawesome-free: ^7.0.0

### Dev Dependencies
- Typescript with strict configuration
- ESLint with typescript-eslint

## Directory Structure

- `src/pages/` - Contains Astro page components (.astro files)
- `src/components/` - Reusable Astro components
- `src/layouts/` - Layout components
- `src/content/` - Content collection for CMS (pariwisata, potensi, profil, struktur, kkn, galeri)
- `src/styles/` - Global styles, fonts, and CSS configuration
- `src/assets/` - Images and other static assets
- `src/utils/` - Utility functions
- `functions/` - Cloudflare worker functions for GitHub OAuth

## CMS Configuration

The project was previously configured with Decap CMS using a .pages.yml file that defined collections for:
- Site settings and pages (profil, galeri, footer)
- Tourism destinations (pariwisata) 
- Potentials & UMKM products (potensi)
- Government structure (struktur)
- KKN team members (kkn)

Note: The .pages.yml configuration file has been removed from the project.

Content is stored in:
- Markdown files in `src/content/` for complex pages
- JSON files in `src/content/profil/data.json` for profile content
- JSON files in backup directory for reference content

## Server-side Functions

The project includes Cloudflare worker functions for GitHub OAuth authentication:
- `functions/api/auth.js` - Handles GitHub OAuth flow
- `functions/api/callback.js` - Handles GitHub OAuth callback

## Content Management

Content can be edited in two ways:
1. Through Decap CMS admin interface (recommended) - available at https://bedalo.pages.dev/admin
2. Manually by editing Markdown files in `src/content/` or JSON files in backup directory

## Content Collections Structure

The project uses Astro content collections defined in `src/content/config.ts`:
- `potensi`: UMKM/potential products with schema for title, description, price, contact and map links
- `pariwisata`: Tourism destinations with cover image, description, map link, and gallery
- `galeri`: Photo and video gallery items
- `config`: Site configuration including footer and homepage data
- `profil`: Profile page content including vision, mission, demographics, and other information
- `kkn`: KKN team member data
- `struktur`: Village government structure
- `pages`: Special pages like privacy policy, contact, sitemap
- `info`: Tourism information

## Current Status

- Date: Tuesday, October 21, 2025
- OS: Linux
- The project is a complete village profile website with CMS integration
- Includes pages for home, profile, tourism, UMKM/potentials, contact, surveys, etc.

## Project Tree

```
├── astro.config.mjs
├── eslint.config.js
├── package.json
├── package-lock.json
├── QWEN.md
├── README.md
├── tailwind.config.mjs
├── tsconfig.json
├── .astro/
│   ├── collections/
│   │   ├── config.schema.json
│   │   ├── galeri.schema.json
│   │   ├── info.schema.json
│   │   ├── kebijakan-privasi.schema.json
│   │   ├── kkn.schema.json
│   │   ├── kontak.schema.json
│   │   ├── pages.schema.json
│   │   ├── pariwisata-info.schema.json
│   │   ├── pariwisata.schema.json
│   │   ├── peta-situs.schema.json
│   │   ├── potensi.schema.json
│   │   ├── profiles.schema.json
│   │   ├── profil.schema.json
│   │   ├── struktur.schema.json
│   │   ├── tentang-kkn.schema.json
│   │   ├── tourism.schema.json
│   │   └── ...
│   ├── content-assets.mjs
│   ├── content.d.ts
│   ├── content-modules.mjs
│   ├── data-store.json
│   ├── settings.json
│   └── types.d.ts
├── .gitignore
├── backup/
│   └── json_files/
│       ├── footer.json
│       ├── galeri.json
│       ├── index.json
│       ├── kebijakan-privasi.json
│       ├── kontak.json
│       ├── pariwisata.json
│       ├── peta-situs.json
│       └── tentang-kkn.json
├── dist/ (build output)
├── functions/
│   └── api/
│       ├── auth.js
│       └── callback.js
├── node_modules/ (dependencies)
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   ├── assets/
│   │   └── images/
│   │       ├── foto.svg
│   │       └── placeholder.svg
│   ├── fonts/
│   │   ├── fa-brands-400.woff2
│   │   └── fa-solid-900.woff2
│   ├── google966f6e79bc232f79.html
│   ├── icon.svg
│   └── robots.txt
├── .qwen/
├── .specify/
├── specs/
│   ├── 001-refactor-dummy-data-source/
│   └── 002-migrate-data-content/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── cat.jpg
│   │       ├── foto-600x400.svg
│   │       ├── foto.svg
│   │       ├── kkn-team.webp
│   │       ├── ngedan.webp
│   │       └── profil.jpg
│   ├── components/
│   │   ├── Card.astro
│   │   ├── ContactForm.astro
│   │   ├── ContactPersonCard.astro
│   │   ├── ContentImageSection.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LiteYouTube.astro
│   │   ├── MemberCard.astro
│   │   ├── PageBanner.astro
│   │   ├── PersonCard.astro
│   │   ├── PhotoGallery.astro
│   │   ├── SectionTitle.astro
│   │   ├── StatCard.astro
│   │   └── home/
│   │       ├── FeaturedGallery.astro
│   │       ├── FeaturedPotentials.astro
│   │       ├── FeaturedTourism.astro
│   │       ├── HeroSection.astro
│   │       └── WelcomeSection.astro
│   ├── content/
│   │   ├── config/
│   │   │   └── site.md
│   │   ├── config.ts
│   │   ├── galeri/
│   │   │   └── index.md
│   │   ├── info/
│   │   │   └── pariwisata.md
│   │   ├── kkn/
│   │   │   ├── alisya-putri-rahmadhiani.md
│   │   │   ├── ardiandi-deya-shidiq.md
│   │   │   ├── asyadu-rahman.md
│   │   │   ├── atha-aulia-nur-syafitri.md
│   │   │   ├── dika-izki-fadillah.md
│   │   │   ├── embun-lahfah-el-khalieqy.md
│   │   │   ├── hartini-berma-ningsi.md
│   │   │   ├── meta-indiyasari.md
│   │   │   ├── muhammad-aditya.md
│   │   │   └── titi-prihartati.md
│   │   ├── pages/
│   │   │   ├── kebijakan-privasi.md
│   │   │   ├── kontak.md
│   │   │   ├── peta-situs.md
│   │   │   └── tentang-kkn.md
│   │   ├── pariwisata/
│   │   │   ├── pantai-ngedan copy 2.md
│   │   │   ├── pantai-ngedan copy 3.md
│   │   │   ├── pantai-ngedan copy.md
│   │   │   ├── pantai-ngedan.md
│   │   │   └── pantai-ngluwen.md
│   │   ├── potensi/
│   │   │   ├── gaplek copy.md
│   │   │   ├── gaplek.md
│   │   │   ├── gula-aren-asli.md
│   │   │   └── keripik-singkong.md
│   │   ├── profil/
│   │   │   ├── data.json
│   │   │   └── index.md
│   │   └── struktur/
│   │       ├── kepala-dusun.md
│   │       ├── pak-rt-01.md
│   │       ├── pak-rt-02.md
│   │       ├── pak-rt-03.md
│   │       └── pak-rw.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── dashboard.astro
│   │   ├── galeri.astro
│   │   ├── index.astro
│   │   ├── kebijakan-privasi.astro
│   │   ├── kontak.astro
│   │   ├── pariwisata.astro
│   │   ├── pariwisata/[slug].astro
│   │   ├── peta-situs.astro
│   │   ├── potensi.astro
│   │   ├── potensi/[slug].astro
│   │   ├── profil.astro
│   │   ├── survei.astro
│   │   └── tentang-kkn.astro
│   ├── styles/
│   │   ├── fonts.css
│   │   └── global.css
│   └── utils/
│       └── config.ts
├── .vscode/
│   ├── extensions.json
│   └── launch.json
└── ...
```