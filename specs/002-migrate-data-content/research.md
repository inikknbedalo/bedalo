# Research: Migrate Remaining Data to Decap CMS Accessible Format

## Overview
This research document outlines the approach for migrating remaining JSON data files to be accessible through Decap CMS, ensuring all content on the site can be managed via the CMS.

## Research Findings

### 1. Current Content Structure

**CMS-Managed Content** (already accessible via Decap CMS):
- `src/content/config/site.md` - Contains both footer and index data (newer format)
- `src/content/profil/index.md` - Profile page content
- `src/content/pariwisata/*.md` - Tourism content collection
- `src/content/potensi/*.md` - Potential/UMKM content collection
- `src/content/struktur/*.md` - Government structure collection
- `src/content/kkn/*.md` - KKN team members collection
- `src/content/galeri/index.md` - Gallery content

**Non-CMS Content** (still using JSON files):
- `src/data/footer.json` - Footer information (duplicate of site.md)
- `src/data/index.json` - Homepage content (duplicate of site.md)
- `src/data/galeri.json` - Gallery content (duplicate of galeri/index.md?)
- `src/data/kebijakan-privasi.json` - Privacy policy content
- `src/data/kontak.json` - Contact information
- `src/data/pariwisata.json` - Tourism information
- `src/data/peta-situs.json` - Sitemap information
- `src/data/tentang-kkn.json` - KKN information

### 2. Current CMS Configuration

The current `public/admin/config.yml` already has a configuration for site settings that includes both footer and index data, but the actual data files remain in both the new CMS-managed format (site.md) and old JSON format (footer.json, index.json).

### 3. Migration Strategy

**Decision**: Migrate all remaining JSON files to CMS-accessible formats
**Rationale**: Provides complete content management through CMS as requested by user
**Alternatives considered**: 
- Keep hybrid approach (rejected - doesn't solve consistency issue)
- Remove CMS entirely (rejected - contradicts user's goal)

### 4. Content Structure Plan

**For existing JSON files, create appropriate CMS collections:**
- Privacy Policy: Create in content collection or single file
- Contact Info: Create in content collection or single file
- Site Map: Create in content collection or single file
- About KKN: Create in content collection or single file

**For redundant files:**
- Remove `src/data/footer.json` (replaced by `src/content/config/site.md`)
- Remove `src/data/index.json` (replaced by `src/content/config/site.md`)
- Check if `src/data/galeri.json` is redundant with `src/content/galeri/index.md`

### 5. CMS Configuration Update Requirements

**Decision**: Extend `public/admin/config.yml` with collections for all remaining JSON content
**Rationale**: Provides centralized content management as requested
**Implementation approach**:
- Add new sections to config.yml for each remaining JSON file type
- Define appropriate schemas and widget configurations
- Maintain backward compatibility

### 6. Component Update Requirements

**Decision**: Update all .astro files to use CMS-managed content
**Rationale**: Components must access content through the new unified CMS system
**Alternative**: Keep dual access methods (rejected - doesn't solve consistency issue)

### 7. File Migration Process

**Decision**: Create migration plan for each JSON file type:
1. Create appropriate MD file format with frontmatter
2. Define schema in CMS configuration
3. Update component imports
4. Remove old JSON files after migration
5. Test for content integrity

### 8. Content Integrity Preservation

**Decision**: Ensure 100% content preservation during migration
**Rationale**: No user-facing changes should occur as a result of the technical migration
**Validation approach**:
- Before/after comparison of all content
- Build process verification
- Manual QA of all pages

## Technical Implementation Notes

### CMS Configuration Structure

The config.yml will need additional collections for:
- Privacy policy content
- Contact information
- Site map content
- About KKN content

### Component Update Process

All components currently importing from src/data/ will need to be updated to access CMS-managed content via getCollection or direct file imports.

## Next Steps

1. Create CMS collections for all remaining JSON content
2. Update the config.yml file with appropriate configurations
3. Migrate data from JSON files to CMS-managed formats
4. Update all .astro files to use new content sources
5. Remove redundant JSON files
6. Test all functionality to ensure content integrity