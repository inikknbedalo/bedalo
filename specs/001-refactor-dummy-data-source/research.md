# Research: Setup ESLint, Fix Build Errors, and Refactor Astro Content Collection

## Decision: Implement ESLint Configuration for Astro Project
**Rationale**: The project currently lacks ESLint configuration, which is essential for code quality, consistency, and identifying potential issues early. Setting up proper linting will improve the maintainability of the codebase.

**Alternatives considered**: 
- Using Prettier alone (only formatting, not linting)
- Using other linters like JSLint (outdated and less configurable)

## Decision: Address Current Content Structure Issues
**Rationale**: The project currently uses both content collections (in src/content) and JSON data files (in src/data), which creates inconsistency. The goal is to migrate everything to use Astro's content collections for better type safety, validation, and CMS integration.

**Alternatives considered**:
- Keep both systems (creates technical debt)
- Migrate everything to a database (overengineering for a static site)

## Decision: Update Decap CMS Configuration
**Rationale**: The current CMS configuration points to both content collections and JSON files. This needs to be unified to work with the new content collection approach.

**Alternatives considered**:
- Switch to a different CMS (more complexity than needed)
- Remove CMS entirely (wouldn't meet content management needs)

## Decision: Identify Build Process Issues
**Rationale**: Though the build command runs successfully, we need to ensure there are no warnings or potential issues that could become problematic later.

**Alternatives considered**: 
- Ignore potential issues (results in technical debt)
- Address only critical errors (may miss important warnings)