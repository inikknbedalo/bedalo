# Implementation Plan: Migrate Data Content to Astro Collections

**Branch**: `002-migrate-data-content` | **Date**: Tuesday, October 21, 2025 | **Spec**: [link to spec.md](/home/rd/project/bedalo3/specs/002-migrate-data-content/spec.md)
**Input**: Feature specification from `/specs/002-migrate-data-content/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Migrate all existing JSON and MD data files to Astro content collections, organizing them by type and ensuring backward compatibility. This includes setting up proper content schemas, updating all .astro files to use the new collection APIs, and maintaining identical website functionality while implementing framework best practices.

## Technical Context

**Language/Version**: TypeScript/JavaScript, Astro v5+  
**Primary Dependencies**: Astro, ESLint, Tailwind CSS
**Storage**: Content collections with file-based storage in src/content/  
**Testing**: Integration testing via Astro build process  
**Target Platform**: Web application with static site generation
**Project Type**: Web application - Astro-based static site  
**Performance Goals**: Maintain current build times and page load speeds, optimize asset loading
**Constraints**: Must maintain 100% content integrity, 0% user-facing changes, support existing content schemas
**Scale/Scope**: Personal/organisation website with content management needs

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on constitution file, checking for compliance with core principles:
- Component-Based Architecture: All content collections follow reusable component patterns with proper schemas
- Static Site Generation: Content collections integrate seamlessly with Astro SSG workflow and generate static content
- JSON Data First: Content collections provide structured, validated data access replacing mixed JSON/MD files
- Performance Optimization: Schema validation occurs at build time with no runtime performance impact
- Accessibility & Modern Standards: Type-safe content ensures consistent, accessible content structure

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
│   └── [collections]/
├── layouts/
├── pages/
└── styles/

public/
├── admin/               # Removed CMS files
└── images/

functions/              # Serverless functions if needed

package.json
eslint.config.js       # ESLint configuration
astro.config.mjs       # Astro configuration
tailwind.config.mjs    # Tailwind CSS configuration
```

**Structure Decision**: Using Astro's recommended project structure with content collections for content management, proper component organization, and static site generation capabilities. Content is organized by type in the src/content/ directory with proper schemas defined in src/content/config.ts.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|

