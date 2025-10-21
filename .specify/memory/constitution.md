<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.0.1 (content updates reflecting removal of CMS)
- List of modified principles: Content Management First → JSON Data First, Technology Stack Requirements to remove CMS
- Added sections: None
- Removed sections: Decap CMS references
- Templates requiring updates: .specify/templates/plan-template.md (✅ updated), specs/001-refactor-dummy-data-source/plan.md (✅ updated)
- Follow-up TODOs: RATIFICATION_DATE still pending
-->

# Website Profil Dusun Bedalo Constitution

## Core Principles

### Component-Based Architecture
Every feature starts as a reusable Astro component; Components must be self-contained, independently testable, and properly documented; Clear purpose required - no organizational-only components.

### Static Site Generation (SSG)
Every page utilizes Astro's static site generation for maximum performance and security; All content follows the text in/out protocol: data → HTML/CSS/JS output; Support both static JSON content and dynamic content.

### JSON Data First (NON-NEGOTIABLE)
Content structure defined → JSON data validated → Components adapt to data changes; All content modifications must be testable through JSON data files; No CMS dependencies in the build process.

### Performance Optimization
Focus areas requiring optimization: Image assets, JavaScript bundles, page load times, Core Web Vitals; All assets must be optimized before deployment; Component lazy loading where appropriate.

### Accessibility & Modern Standards
All features must be accessible to users with disabilities; Structured semantic HTML required; Adherence to PWA standards, responsive design, and modern browser compatibility.

## Additional Constraints

### Technology Stack Requirements
- Framework: Astro v5+
- Styling: Tailwind CSS v4+ 
- Icons: Font Awesome
- Animations: AOS (Animate On Scroll)
- Lightbox: GLightbox
- Fonts: Poppins (via Fontsource)
- Build tools: Vite, npm

### Deployment & Hosting Standards
- Deployed on Cloudflare Pages
- HTTPS required for all connections
- CDN usage for all static assets
- Automated build and deployment pipeline
- Static content only, no server-side dependencies

## Development Workflow

### Code Review Requirements
- All changes must pass Astro build process
- CSS changes must be visually inspected across browsers
- Content schema changes must be validated in JSON
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

**Version**: 1.0.1 | **Ratified**: TODO(RATIFICATION_DATE): Date of original constitution adoption | **Last Amended**: 2025-10-21