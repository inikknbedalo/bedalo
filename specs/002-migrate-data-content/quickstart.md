# Quickstart Guide: Migrate Data Content to Astro Collections

## Overview
This guide provides a quick start for developers who need to understand and work with the new Astro content collections system after the migration from JSON and MD files.

## Prerequisites
- Node.js 18+ installed
- Astro CLI knowledge
- Understanding of TypeScript schemas

## Setting Up the Environment

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd bedalo3
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

## Working with Content Collections

### Adding New Content

**For Tourism Content** (`pariwisata` collection):
1. Create a new MD file in `src/content/pariwisata/`
2. Add frontmatter with required fields:
   ```markdown
   ---
   judul: "New Destination"
   coverImage: "image.jpg"
   altText: "Description of image"
   deskripsi: "Brief description"
   petaLink: "https://maps.google.com/..."
   gallery: []
   ---
   ```

**For Potentials/UMKM Content** (`potensi` collection):
1. Create a new MD file in `src/content/potensi/`
2. Add frontmatter with required fields.

### Accessing Content in Components

**Example - Accessing Tourism Content**:
```astro
---
import { getCollection } from 'astro:content';

const tourismItems = await getCollection('pariwisata');
---

{tourismItems.map((item) => (
  <div>
    <h2>{item.data.judul}</h2>
    <p>{item.data.deskripsi}</p>
  </div>
))}
```

### Content Schema Validation

All content is validated against defined schemas. If you add new content:
- Ensure all required fields are present
- Follow the expected data types
- Test that the site builds successfully after changes

## Migration Process Overview

1. **JSON to MD Migration**: JSON content was converted to MD files with frontmatter
2. **Schema Definition**: All content types now have Zod validation schemas
3. **Component Updates**: All components now use `getCollection` to access content
4. **Validation**: All content is type-safe and validated at build time

## Troubleshooting

**Common Issues**:

- **Build errors**: Usually caused by schema validation failures
  - Check that all required fields are present in new content
  - Verify field types match the schema definition

- **Content not displaying**: May be due to changes in component access patterns
  - Ensure components use `getCollection` API
  - Verify the collection name matches the directory name

- **Type errors**: Make sure TypeScript is properly recognizing content types
  - Run `npm run build` to see full type validation errors
  - Check that Astro types are properly generated

## Key Files and Directories

- `src/content/config.ts` - Main content configuration and schemas
- `src/content/profil/` - Profile page content
- `src/content/pariwisata/` - Tourism content
- `src/content/potensi/` - Potentials/UMKM content
- `src/content/struktur/` - Government structure content
- `src/content/kkn/` - KKN team content
- `src/content/galeri/` - Gallery content
- `src/content/homepage/` - Homepage content
- `src/content/footer/` - Footer content

## Next Steps

1. Review the content schemas in `src/content/config.ts`
2. Add new content following the established patterns
3. Update any remaining components that may reference old data paths
4. Test all pages to ensure content displays correctly