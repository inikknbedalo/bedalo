# Research: Migrate Data Content to Astro Collections

## Overview
This research document outlines the approach for migrating existing JSON and MD data files to Astro content collections, ensuring all data is properly organized and accessible through the new system.

## Research Findings

### 1. Astro Content Collections Structure

**Decision**: Organize content collections by type, following Astro 5+ best practices
**Rationale**: This provides clear separation of concerns and makes content management more predictable
**Alternatives considered**: 
- Keep all content in single collection (rejected - doesn't follow Astro patterns)
- Mix collection and legacy approaches (rejected - doesn't solve consistency issue)

### 2. Current Data Locations in the Project

**Decision**: Identify and catalog all existing JSON and MD files
**Rationale**: Need comprehensive understanding of all content that requires migration

**JSON Files Found**:
- `src/data/index.json` - Homepage content
- `src/data/footer.json` - Footer information
- `src/data/galeri.json` - Gallery content
- `src/data/kebijakan-privasi.json` - Privacy policy
- `src/data/kontak.json` - Contact information
- `src/data/pariwisata.json` - Tourism information
- `src/data/peta-situs.json` - Sitemap info
- `src/data/tentang-kkn.json` - KKN information

**MD Files Found**:
- `src/content/profil/index.md` - Profile page content
- Files in `src/content/pariwisata/` - Tourism content collection
- Files in `src/content/potensi/` - Potential/UMKM content collection
- Files in `src/content/struktur/` - Government structure collection
- Files in `src/content/kkn/` - KKN team members collection

### 3. Astro Content Collection Implementation

**Decision**: Use Astro's content collections API with proper schemas
**Rationale**: Provides type safety, validation, and follows framework best practices
**Alternatives considered**: 
- Continue using direct file imports (rejected - doesn't solve consistency)
- Use third-party CMS (rejected - project no longer uses CMS)

Example collection implementation:
```javascript
import { defineCollection, z } from 'astro:content';

const profileCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    visi: z.string(),
    misi: z.array(z.string()),
    // ... other fields
  })
});
```

### 4. Migration Strategy

**Decision**: Migrate content in phases, starting with content that has existing collections
**Rationale**: Allows for gradual migration while maintaining website functionality
**Alternatives considered**: 
- Big bang migration (rejected - too risky)
- Partial migration (rejected - doesn't solve consistency issue)

**Phased Approach**:
- Phase 1: Consolidate existing MD-based collections (pariwisata, potensi, struktur, kkn)
- Phase 2: Migrate JSON files to new collections (index, footer, galeri, etc.)
- Phase 3: Update all .astro files to use new collection APIs

### 5. Schema Definition for JSON Content

**Decision**: Convert JSON structure to appropriate content collection schemas
**Rationale**: Provides validation and type safety while maintaining content integrity
**Alternatives considered**: 
- Keep loose schemas (rejected - doesn't provide type safety)
- Overly restrictive schemas (rejected - might break existing content)

### 6. Component Update Requirements

**Decision**: Update all .astro files to use the getCollection API
**Rationale**: Components must access content through the new collection system
**Alternatives considered**:
- Keep dual access methods (rejected - doesn't solve consistency)
- Update gradually (rejected - can cause mixed data access patterns)

Example component update:
```javascript
// Old approach
---
import homepageData from '../data/index.json';
---

// New approach
---
import { getCollection } from 'astro:content';
const homepageContent = await getCollection('homepage');
---
```

### 7. Content Integrity Preservation

**Decision**: Ensure 100% content preservation during migration
**Rationale**: No user-facing changes should occur as a result of the technical migration
**Alternatives considered**: 
- Accept minor content changes (rejected - violates requirement)
- Simplify content during migration (rejected - changes user experience)

## Technical Implementation Notes

### Astro Content Collections API

- Use `defineCollection` and `z` from 'astro:content' for schema validation
- Content files (MD) can have frontmatter with validated fields
- JSON content can be migrated by creating MD files with frontmatter
- Use `getCollection` to retrieve content in .astro files
- Dynamic routes can use `getStaticPaths` with collection data

### Migration Path for JSON Content

Since JSON files don't naturally fit the MD-based collections, we'll:

1. Create MD files with empty body and content in frontmatter
2. Define appropriate schemas for each content type
3. Update component imports to use the collection API
4. Ensure all functionality remains the same

## Next Steps

1. Define schemas for all content types
2. Create MD files for JSON-based content
3. Update all .astro files to use new collections
4. Verify all content displays correctly after migration