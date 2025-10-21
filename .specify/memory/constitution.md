<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.0.0 (no functional change, just populating template)
- List of modified principles: None (populating template values)
- Added sections: All sections (populating template)
- Removed sections: None
- Templates requiring updates: N/A (✅ updated / ⚠ pending)
- Follow-up TODOs: None
-->

# Website Profil Dusun Bedalo Constitution

## Core Principles

### Component-Based Architecture
Every feature starts as a reusable Astro component; Components must be self-contained, independently testable, and properly documented; Clear purpose required - no organizational-only components.

### Static Site Generation (SSG)
Every page utilizes Astro's static site generation for maximum performance and security; All content follows the text in/out protocol: data → HTML/CSS/JS output; Support both static JSON content and CMS-driven content.

### Content Management First (NON-NEGOTIABLE)
TDD mandatory: Content structure defined → Admin validated → Components adapt to content changes; All content modifications must be testable through CMS and JSON files.

### Performance Optimization
Focus areas requiring optimization: Image assets, JavaScript bundles, page load times, Core Web Vitals; All assets must be optimized before deployment; Component lazy loading where appropriate.

### Accessibility & Modern Standards
All features must be accessible to users with disabilities; Structured semantic HTML required; Adherence to PWA standards, responsive design, and modern browser compatibility.

## Additional Constraints

### Technology Stack Requirements
- Framework: Astro v5+
- Styling: Tailwind CSS v4+ 
- CMS: Decap CMS integration
- Icons: Font Awesome
- Animations: AOS (Animate On Scroll)
- Lightbox: GLightbox
- Fonts: Poppins (via Fontsource)

### Deployment & Hosting Standards
- Deployed on Cloudflare Pages
- HTTPS required for all connections
- CDN usage for all static assets
- Automated build and deployment pipeline

## Development Workflow

### Code Review Requirements
- All changes must pass Astro build process
- CSS changes must be visually inspected across browsers
- Content schema changes must be validated in CMS
- Performance metrics must not degrade

### Testing Gates
- Component functionality verified in browser
- Cross-browser compatibility tested
- Mobile responsiveness validated
- Page speed and accessibility metrics checked

### Quality Standards
- TypeScript strict mode required
- ESLint with recommended configuration
- All links and navigation must function properly
- SEO and accessibility best practices followed

## Governance

All PRs/reviews must verify compliance with this constitution; All architectural decisions must be justified against principles; Use README.md and project documentation for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Date of original constitution adoption | **Last Amended**: 2025-10-21