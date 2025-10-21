# Implementation Plan: Migrate Data Content to Decap CMS Accessible Format

**Branch**: `002-migrate-data-content` | **Date**: Tuesday, October 21, 2025 | **Spec**: [link to spec.md](/home/rd/project/bedalo3/specs/002-migrate-data-content/spec.md)
**Input**: Feature specification from `/specs/002-migrate-data-content/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Migrate remaining JSON data files to be accessible through Decap CMS, ensuring all content on the site can be managed via the CMS. This involves updating the Decap CMS configuration to include collections for all content types, including those previously stored in JSON files, and updating .astro files to properly utilize the CMS-managed content.

## Technical Context

**Language/Version**: TypeScript/JavaScript, Astro v5+  
**Primary Dependencies**: Astro, ESLint, Tailwind CSS, Decap CMS
**Storage**: Decap CMS collections with file-based storage in src/content/ and JSON files in src/data/ accessible via CMS  
**Testing**: Integration testing via Astro build process  
**Target Platform**: Web application with static site generation
**Project Type**: Web application - Astro-based static site  
**Performance Goals**: Maintain current build times and page load speeds, optimize asset loading
**Constraints**: Must maintain 100% content integrity, 0% user-facing changes, all content must be accessible via Decap CMS
**Scale/Scope**: Personal/organisation website with content management needs

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on constitution file, checking for compliance with core principles:
- Component-Based Architecture: All content collections follow reusable component patterns with proper schemas
- Static Site Generation: Content collections integrate seamlessly with Astro SSG workflow and generate static content
- JSON Data First: Content collections and CMS-managed content files provide structured, validated data access
- Performance Optimization: Schema validation occurs at build time with no runtime performance impact
- Accessibility & Modern Standards: Type-safe content ensures consistent, accessible content structure with CMS accessibility

## Project Structure

### Documentation (this feature)

```
specs/002-migrate-data-content/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```
src/
├── components/
├── content/
│   ├── config.ts
│   └── [cms-collections]/
├── data/
│   ├── [json-content-files]
├── layouts/
├── pages/
└── styles/

public/
├── admin/               # Decap CMS files
└── images/

functions/              # Serverless functions if needed

package.json
eslint.config.js       # ESLint configuration
astro.config.mjs       # Astro configuration
tailwind.config.mjs    # Tailwind CSS configuration
```

**Structure Decision**: Using Astro's recommended project structure with content collections for CMS-managed content and JSON files for data that can be edited via CMS. Updated Decap CMS configuration to manage all content types.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |

