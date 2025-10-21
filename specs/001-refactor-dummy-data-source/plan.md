# Implementation Plan: Setup ESLint, Fix Build Errors, and Refactor Astro Content Collection

**Branch**: `001-refactor-dummy-data-source` | **Date**: Tuesday, October 21, 2025 | **Spec**: [link to spec.md](/home/rd/project/bedalo3/specs/001-refactor-dummy-data-source/spec.md)
**Input**: Feature specification from `/specs/001-refactor-dummy-data-source/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Setup ESLint and fix errors, test and fix build issues, recreate Astro content collection following best practices, update all .astro files to recognize the new Astro content collection, and update Decap CMS config. This involves establishing proper linting standards, ensuring build stability, implementing a clean content management system using Astro's content collections, and configuring the CMS for content editing.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript/JavaScript, Astro v4+  
**Primary Dependencies**: Astro, ESLint, Tailwind CSS, Decap CMS  
**Storage**: [if applicable, e.g., PostgreSQL, CoreData, files or N/A]  
**Testing**: [e.g., pytest, XCTest, cargo test or NEEDS CLARIFICATION]  
**Target Platform**: Web application with static site generation
**Project Type**: Web application - Astro-based static site  
**Performance Goals**: [domain-specific, e.g., 1000 req/s, 10k lines/sec, 60 fps or NEEDS CLARIFICATION]  
**Constraints**: [domain-specific, e.g., <200ms p95, <100MB memory, offline-capable or NEEDS CLARIFICATION]  
**Scale/Scope**: Personal/organisation website with content management needs

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on constitution file, checking for compliance with core principles:
- Component-Based Architecture: Verify new feature follows reusable component pattern
- Static Site Generation: Ensure feature integrates with Astro SSG workflow
- JSON Data First: Validate content structure and JSON data compatibility
- Performance Optimization: Confirm feature doesn't degrade performance metrics
- Accessibility & Modern Standards: Verify accessibility compliance and responsive design

## Project Structure

### Documentation (this feature)

```
specs/001-refactor-dummy-data-source/
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
├── admin/               # Decap CMS files
└── images/

functions/              # Serverless functions if needed

package.json
eslint.config.js       # ESLint configuration
astro.config.mjs       # Astro configuration
tailwind.config.mjs    # Tailwind CSS configuration
```

**Structure Decision**: Using Astro's recommended project structure with content collections for content management, proper component organization, and static site generation capabilities.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|

