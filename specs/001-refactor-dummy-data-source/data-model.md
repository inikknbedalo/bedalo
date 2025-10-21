# Data Model: Astro Content Collections

## Content Collections Structure

### 1. Profil Collection
**Path**: `src/content/profil/`
**Schema**: `profilSchema` (defined in `src/content/config.ts`)

**Fields**:
- `title`: string - Title of the profile page
- `visi`: string - Vision statement of the village
- `misi`: array of strings - Mission points of the village
- `petaUrl`: string (URL) - Google Maps embed URL
- `demografi`: object - Demographic information
  - `jumlahPenduduk`: string - Total population
  - `lakiLaki`: string - Male population
  - `perempuan`: string - Female population
  - `mataPencaharian`: array of strings - Occupations of residents
- `pertanian`: object - Agricultural information
  - `gambarUrl`: string - Main image URL
  - `altText`: string - Alternative text for image
  - `judul`: string - Title of agricultural section
  - `deskripsi`: string - Description of agricultural practices
  - `komoditas`: array of objects - Agricultural commodities
    - `nama`: string - Name of commodity
    - `icon`: string - Font Awesome icon class
- `lainnya`: array of objects - Other potential information
  - `icon`: string - Font Awesome icon class
  - `judul`: string - Title of potential
  - `deskripsi`: string - Description of potential
- `body`: markdown - Main content of the profile page

### 2. Pariwisata Collection
**Path**: `src/content/pariwisata/`
**Schema**: `pariwisataSchema` (defined in `src/content/config.ts`)

**Fields**:
- `altText`: string - Alternative text for cover image
- `judul`: string - Title of the tourist destination
- `deskripsi`: string - Description of the destination
- `petaLink`: string (URL) - Google Maps link
- `coverImage`: string - Cover image URL
- `gallery`: array of objects (optional) - Photo gallery
  - `url`: string - Image URL
  - `alt`: string - Alternative text for image

### 3. Potensi Collection
**Path**: `src/content/potensi/`
**Schema**: `umkmSchema` (defined in `src/content/config.ts`)

**Fields**:
- `altText`: string - Alternative text for product image
- `judul`: string - Name of the product
- `deskripsi`: string - Description of the product
- `harga`: string - Price information
- `kontakLink`: string (URL) - Contact link (WhatsApp)
- `petaLink`: string (URL) - Map link
- `gambarUrl`: string - Product image URL

### 4. KKN Collection
**Path**: `src/content/kkn/`
**Schema**: `kknSchema` (defined in `src/content/config.ts`)

**Fields**:
- `nama`: string - Full name of KKN member
- `prodi`: string - Study program of the member
- `fotoUrl`: string - URL of the member's photo
- `instagramUrl`: string (URL, optional) - Instagram profile link
- `order`: number - Display order

### 5. Struktur Collection
**Path**: `src/content/struktur/`
**Schema**: `strukturSchema` (defined in `src/content/config.ts`)

**Fields**:
- `nama`: string - Full name of the village official
- `jabatan`: string - Position/title
- `fotoUrl`: string - URL of the official's photo
- `order`: number - Display order

## Data Migration Plan

### Current Data in JSON Files to be Migrated

1. **src/data/galeri.json** → New collection: `galeri`
2. **src/data/footer.json** → Part of global settings, possibly `config` collection
3. **src/data/index.json** → Content for homepage, could be `index` collection or frontmatter
4. **src/data/kebijakan-privasi.json** → Static page content, possibly `pages` collection
5. **src/data/kontak.json** → Contact page content, possibly `pages` collection
6. **src/data/pariwisata.json** → Already handled by content collection
7. **src/data/peta-situs.json** → Sitemap configuration, possibly `config`

## Proposed Content Collection Structure After Migration

### 1. Global/Settings Collection
For site-wide configuration data currently in JSON files:
- Footer information
- General site settings
- Page metadata

### 2. Page Collection
For static pages that are currently JSON:
- Privacy policy
- Contact page
- Site map content

### 3. Galeri Collection
For media content currently in galeri.json:
- Photo galleries
- Video galleries