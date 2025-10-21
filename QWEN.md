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
- ESLint with @typescript-eslint

## Directory Structure

- `src/pages/` - Contains Astro page components (.astro files)
- `src/components/` - Reusable Astro components
- `src/layouts/` - Layout components
- `src/content/` - Content collection for CMS (pariwisata, potensi, profil, struktur, kkn, galeri)
- `src/data/` - JSON files for content (index, footer, galeri, etc.)
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
- JSON files in `src/data/` for structured content

## Server-side Functions

The project includes Cloudflare worker functions for GitHub OAuth authentication:
- `functions/api/auth.js` - Handles GitHub OAuth flow
- `functions/api/callback.js` - Handles GitHub OAuth callback

## Content Management

Content can be edited in two ways:
1. Through Decap CMS admin interface (recommended)
2. Manually by editing JSON files in `src/data/` or Markdown files in `src/content/`

## Current Status

- Date: Tuesday, October 21, 2025
- OS: Linux
- The project is a complete village profile website with CMS integration
- Includes pages for home, profile, tourism, UMKM/potentials, contact, surveys, etc.
