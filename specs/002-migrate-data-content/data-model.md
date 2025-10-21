# Data Model: Migrate Data Content to Astro Collections

## Overview
This document outlines the data models for the migrated Astro content collections, defining schemas and relationships for each content type.

## Content Collections Schema

### 1. Profile Collection (`profil`)
**Source**: `src/content/profil/index.md`

**Schema**:
```typescript
{
  title: string,           // Page title
  visi: string,            // Vision statement
  misi: string[],          // Array of mission points
  petaUrl: string,         // Google Maps embed URL
  demografi: {
    jumlahPenduduk: string, // Total population
    lakiLaki: string,       // Male population
    perempuan: string,      // Female population
    mataPencaharian: string[] // Occupations array
  },
  pertanian: {
    gambarUrl: string,     // Main image
    altText: string,       // Alt text
    judul: string,         // Title
    deskripsi: string,     // Description
    komoditas: Array<{
      nama: string,        // Commodity name
      icon: string         // Font Awesome class
    }>
  },
  lainnya: Array<{
    icon: string,          // Icon class
    judul: string,         // Title
    deskripsi: string      // Description
  }>
}
```

### 2. Tourism Collection (`pariwisata`)
**Source**: `src/content/pariwisata/*.md`

**Schema**:
```typescript
{
  judul: string,           // Destination title
  coverImage: string,      // Main cover image
  altText: string,         // Image alt text
  deskripsi: string,       // Brief description
  petaLink: string,        // Google Maps link
  gallery: Array<{
    url: string,           // Image URL
    alt: string            // Alt text
  }>
}
```

### 3. Potentials/UMKM Collection (`potensi`)
**Source**: `src/content/potensi/*.md`

**Schema**:
```typescript
{
  judul: string,           // Product name
  gambarUrl: string,       // Product image
  altText: string,         // Image alt text
  deskripsi: string,       // Product description
  harga: string,           // Price
  kontakLink: string,      // Contact link
  petaLink: string         // Map link
}
```

### 4. Government Structure Collection (`struktur`)
**Source**: `src/content/struktur/*.md`

**Schema**:
```typescript
{
  nama: string,            // Full name
  fotoUrl: string,         // Photo URL
  jabatan: string,         // Position
  order: number            // Display order
}
```

### 5. KKN Team Collection (`kkn`)
**Source**: `src/content/kkn/*.md`

**Schema**:
```typescript
{
  nama: string,            // Full name
  fotoUrl: string,         // Photo URL
  prodi: string,           // Study program
  instagramUrl: string,    // Instagram URL (optional)
  order: number            // Display order
}
```

### 6. Gallery Collection (`galeri`)
**Source**: `src/data/galeri.json`

**Schema**:
```typescript
{
  foto: Array<{
    url: string,           // Image URL
    alt: string            // Alt text
  }>,
  video: Array<{
    url: string,           // Video URL
    judul: string          // Video title
  }>
}
```

### 7. Homepage Collection (`homepage`)
**Source**: `src/data/index.json`

**Schema**:
```typescript
{
  hero: {
    image: string,         // Hero image
    imageAlt: string,      // Alt text
    judul: string,         // Title
    subjudul: string       // Subtitle
  },
  profilSingkat: {
    fotoUrl: string,       // Headman photo
    namaKepalaDusun: string, // Headman name
    jabatan: string,       // Position
    sambutan: string[]     // Welcome message array
  },
  potensiUnggulan: Array<{
    judul: string,         // Potential title
    deskripsi: string,     // Description
    link: string           // Link
  }>,
  pariwisata: {
    deskripsi: string,     // Tourism description
    gambar: Array<{
      url: string,         // Image
      alt: string          // Alt text
    }>
  },
  galeri: Array<{
    url: string,           // Gallery image
    alt: string            // Alt text
  }>
}
```

### 8. Footer Collection (`footer`)
**Source**: `src/data/footer.json`

**Schema**:
```typescript
{
  address: string,         // Address
  email: string,           // Email
  phone: string,           // Phone
  mainLinks: Array<{
    text: string,          // Link text
    href: string           // Link URL
  }>,
  aboutLinks: Array<{
    text: string,          // Link text
    href: string           // Link URL
  }>,
  socialLinks: Array<{
    href: string,          // Link URL
    label: string,         // Label
    iconClass: string      // Icon class
  }>
}
```

### 9. Page Content Collections
**Sources**: Various JSON files that contain page content

- `privacy-policy` collection (from `src/data/kebijakan-privasi.json`)
- `contact` collection (from `src/data/kontak.json`)
- `sitemap` collection (from `src/data/peta-situs.json`)
- `kkn-about` collection (from `src/data/tentang-kkn.json`)

## Relationships

- Tourism, Potentials, Structure, and KKN collections are individual content items
- Gallery, Homepage, and Footer collections will have single items per type
- Each collection provides type-safe access to content through Astro's content API

## Validation Rules

1. All text fields must be properly sanitized
2. URL fields must follow proper URL format
3. Image fields must reference valid assets
4. Array fields must have minimum and maximum item counts where appropriate
5. All required fields must be present

## Migration Path

1. Create MD files with frontmatter for JSON-based content
2. Define schemas using Zod validation
3. Update components to use `getCollection` API
4. Ensure backward compatibility with existing functionality