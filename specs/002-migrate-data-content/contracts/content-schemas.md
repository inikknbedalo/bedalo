# Content Schema Contracts: Migrate Data Content to Astro Collections

## Overview
This document defines the API contracts for the Astro content collections system, specifying the structure and validation rules for each content type.

## Collection Schemas

### Tourism Collection (`pariwisata`)
**Endpoint**: `getCollection('pariwisata')`

**Schema Contract**:
```typescript
interface TourismContent {
  id: string;              // Unique identifier (auto-generated from filename)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    judul: string;         // Required: Destination title
    coverImage: string;    // Required: Main cover image
    altText: string;       // Required: Image alt text
    deskripsi: string;     // Required: Brief description
    petaLink: string;      // Required: Google Maps link
    gallery: Array<{       // Required: Image gallery
      url: string;         // Required: Image URL
      alt: string;         // Required: Alt text
    }>
  }
}
```

**Validation Rules**:
- `judul` must be 1-200 characters
- `coverImage` must be a valid image path
- `gallery` must have 0-20 items
- `petaLink` must be a valid URL

### Potentials/UMKM Collection (`potensi`)
**Endpoint**: `getCollection('potensi')`

**Schema Contract**:
```typescript
interface PotensiContent {
  id: string;              // Unique identifier (auto-generated)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    judul: string;         // Required: Product name
    gambarUrl: string;     // Required: Product image
    altText: string;       // Required: Image alt text
    deskripsi: string;     // Required: Product description
    harga: string;         // Required: Price
    kontakLink: string;    // Required: Contact link
    petaLink: string;      // Required: Map link
  }
}
```

**Validation Rules**:
- `judul` must be 1-100 characters
- `gambarUrl` must be a valid image path
- `harga` must follow currency format
- `kontakLink` must be a valid URL

### Government Structure Collection (`struktur`)
**Endpoint**: `getCollection('struktur')`

**Schema Contract**:
```typescript
interface StrukturContent {
  id: string;              // Unique identifier (auto-generated)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    nama: string;          // Required: Full name
    fotoUrl: string;       // Required: Photo URL
    jabatan: string;       // Required: Position
    order: number;         // Required: Display order (1-100)
  }
}
```

**Validation Rules**:
- `nama` must be 2-100 characters
- `fotoUrl` must be a valid image path
- `jabatan` must be 2-50 characters
- `order` must be 1-100

### KKN Team Collection (`kkn`)
**Endpoint**: `getCollection('kkn')`

**Schema Contract**:
```typescript
interface KKNContent {
  id: string;              // Unique identifier (auto-generated)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    nama: string;          // Required: Full name
    fotoUrl: string;       // Required: Photo URL
    prodi: string;         // Required: Study program
    instagramUrl?: string; // Optional: Instagram URL
    order: number;         // Required: Display order (1-100)
  }
}
```

**Validation Rules**:
- `nama` must be 2-100 characters
- `fotoUrl` must be a valid image path
- `prodi` must be 2-100 characters
- `instagramUrl` if provided, must be a valid URL
- `order` must be 1-100

### Homepage Content (`homepage`)
**Endpoint**: `getCollection('homepage')`

**Schema Contract**:
```typescript
interface HomepageContent {
  id: string;              // Unique identifier (auto-generated)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    hero: {
      image: string;       // Required: Hero image
      imageAlt: string;    // Required: Alt text
      judul: string;       // Required: Title
      subjudul: string;    // Required: Subtitle
    },
    profilSingkat: {
      fotoUrl: string;     // Required: Headman photo
      namaKepalaDusun: string; // Required: Headman name
      jabatan: string;     // Required: Position
      sambutan: string[];  // Required: Welcome message array (1-3 items)
    },
    potensiUnggulan: Array<{
      judul: string;       // Required: Potential title
      deskripsi: string;   // Required: Description
      link: string;        // Required: Link
    }>,
    pariwisata: {
      deskripsi: string;   // Required: Tourism description
      gambar: Array<{
        url: string;       // Required: Image
        alt: string;       // Required: Alt text
      }>
    },
    galeri: Array<{
      url: string;         // Required: Gallery image
      alt: string;         // Required: Alt text
    }>
  }
}
```

**Validation Rules**:
- `hero.image` must be a valid image path
- `profilSingkat.sambutan` must have 1-3 items
- `potensiUnggulan` must have 1-5 items

### Gallery Content (`galeri`)
**Endpoint**: `getCollection('galeri')`

**Schema Contract**:
```typescript
interface GalleryContent {
  id: string;              // Unique identifier (auto-generated)
  slug: string;            // URL-friendly slug (auto-generated)
  body: string;            // Main content body (from MD file content)
  data: {
    foto: Array<{
      url: string;         // Required: Image URL
      alt: string;         // Required: Alt text
    }>,
    video: Array<{
      url: string;         // Required: Video URL
      judul: string;       // Required: Video title
    }>
  }
}
```

**Validation Rules**:
- `foto` must have 0-50 items
- `video` must have 0-20 items
- All URLs must be valid

## Error Handling

**Content Not Found**: Returns empty array when collection has no items
**Schema Validation Error**: Build fails with detailed validation error message
**Invalid Content**: Build fails with file and field identification

## Performance Considerations

- Collections are loaded at build time
- Content is pre-validated against schemas
- No runtime content validation needed
- Efficient static generation