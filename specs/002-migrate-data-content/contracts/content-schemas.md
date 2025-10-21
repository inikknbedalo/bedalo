# Content Schema Contracts: Decap CMS Configuration

## Overview
This document defines the schema contracts for the Decap CMS configuration that makes all site content accessible via the CMS.

## Updated CMS Configuration Schema

### Site Configuration (`src/content/config/site.md`)
**CMS Collection**: `pengaturan` → `site_config`

**Schema Contract**:
```yaml
- file: "src/content/config/site.md"
  label: "⚙️ Konfigurasi Situs"
  name: "site_config"
  fields:
    - name: "footer"
      label: "Footer"
      widget: "object"
      fields:
        - name: "address"
          label: "Alamat"
          widget: "string"
        - name: "email"
          label: "Email"
          widget: "string"
        - name: "phone"
          label: "Telepon"
          widget: "string"
        - name: "mainLinks"
          label: "Tautan Utama"
          widget: "list"
          summary: "{{fields.text}}"
          fields:
            - name: "text"
              label: "Teks Tautan"
              widget: "string"
            - name: "href"
              label: "URL"
              widget: "string"
        - name: "aboutLinks"
          label: "Tautan Tentang"
          widget: "list"
          summary: "{{fields.text}}"
          fields:
            - name: "text"
              label: "Teks Tautan"
              widget: "string"
            - name: "href"
              label: "URL"
              widget: "string"
        - name: "socialLinks"
          label: "Tautan Media Sosial"
          widget: "list"
          summary: "{{fields.label}}"
          fields:
            - name: "href"
              label: "URL"
              widget: "string"
            - name: "label"
              label: "Label"
              widget: "string"
            - name: "iconClass"
              label: "Kelas Ikon (Font Awesome)"
              widget: "string"
    - name: "index"
      label: "Konfigurasi Halaman Utama"
      widget: "object"
      fields:
        - name: "hero"
          label: "Bagian Hero"
          widget: "object"
          fields:
            - name: "image"
              label: "Gambar"
              widget: "image"
            - name: "imageAlt"
              label: "Teks Alternatif Gambar"
              widget: "string"
            - name: "judul"
              label: "Judul"
              widget: "string"
            - name: "subjudul"
              label: "Subjudul"
              widget: "text"
        - name: "profilSingkat"
          label: "Profil Singkat"
          widget: "object"
          fields:
            - name: "fotoUrl"
              label: "Gambar"
              widget: "image"
            - name: "namaKepalaDusun"
              label: "Nama Kepala Dusun"
              widget: "string"
            - name: "jabatan"
              label: "Jabatan"
              widget: "string"
            - name: "sambutan"
              label: "Sambutan"
              widget: "list"
              field:
                label: "Kalimat Sambutan"
                name: "sambutan"
                widget: "text"
        - name: "potensiUnggulan"
          label: "Potensi Unggulan"
          widget: "list"
          summary: "{{fields.judul}}"
          fields:
            - name: "judul"
              label: "Judul"
              widget: "string"
            - name: "deskripsi"
              label: "Deskripsi"
              widget: "text"
            - name: "link"
              label: "Link"
              widget: "string"
        - name: "pariwisata"
          label: "Bagian Pariwisata"
          widget: "object"
          fields:
            - name: "deskripsi"
              label: "Deskripsi"
              widget: "text"
            - name: "gambar"
              label: "Gambar-Gambar"
              widget: "list"
              summary: "{{fields.alt}}"
              fields:
                - name: "url"
                  label: "Gambar"
                  widget: "image"
                - name: "alt"
                  label: "Teks Alternatif"
                  widget: "string"
        - name: "galeri"
          label: "Gambar-Gambar Galeri"
          widget: "list"
          summary: "{{fields.alt}}"
          fields:
            - name: "url"
              label: "Gambar"
              widget: "image"
            - name: "alt"
              label: "Teks Alternatif"
              widget: "string"
```

### New Content Collections to Add

#### Privacy Policy Collection
**Path**: To be created as needed
```yaml
- name: "kebijakan-privasi"
  label: "📋 Kebijakan Privasi"
  folder: "src/content/pages"
  create: false  # Single file configuration
  fields:
    - { label: "Judul", name: "judul", widget: "string" }
    - { label: "Isi Kebijakan", name: "isiKebijakan", widget: "markdown" }
    - { label: "Tanggal Update", name: "tanggalUpdate", widget: "datetime" }
```

#### Contact Page Collection
**Path**: To be created as needed
```yaml
- name: "kontak"
  label: "📞 Halaman Kontak"
  folder: "src/content/pages"
  create: false  # Single file configuration
  fields:
    - { label: "Judul", name: "judul", widget: "string" }
    - { label: "Deskripsi", name: "deskripsi", widget: "text" }
    - name: "informasiKontak"
      label: "Informasi Kontak"
      widget: "object"
      fields:
        - { label: "Alamat", name: "alamat", widget: "text" }
        - { label: "Email", name: "email", widget: "string" }
        - { label: "Telepon", name: "telepon", widget: "string" }
        - { label: "URL Peta", name: "mapsUrl", widget: "string" }
```

#### Sitemap Collection
**Path**: To be created as needed
```yaml
- name: "peta-situs"
  label: "🗺️ Peta Situs"
  folder: "src/content/pages"
  create: false  # Single file configuration
  fields:
    - { label: "Judul", name: "judul", widget: "string" }
    - { label: "Deskripsi", name: "deskripsi", widget: "text" }
    - name: "tautanSitemap"
      label: "Tautan Peta Situs"
      widget: "list"
      fields:
        - { label: "Judul Tautan", name: "judul", widget: "string" }
        - { label: "URL", name: "url", widget: "string" }
        - { label: "Deskripsi", name: "deskripsi", widget: "text" }
```

#### About KKN Collection
**Path**: To be created as needed
```yaml
- name: "tentang-kkn"
  label: "🎓 Tentang KKN"
  folder: "src/content/pages"
  create: false  # Single file configuration
  fields:
    - { label: "Judul", name: "judul", widget: "string" }
    - { label: "Deskripsi", name: "deskripsi", widget: "text" }
    - name: "informasiKKN"
      label: "Informasi KKN"
      widget: "object"
      fields:
        - { label: "Judul Informasi", name: "judulInfo", widget: "string" }
        - { label: "Isi Informasi", name: "isiInfo", widget: "markdown" }
        - name: "timKKN"
          label: "Tim KKN"
          widget: "list"
          fields:
            - { label: "Nama", name: "nama", widget: "string" }
            - { label: "Jabatan", name: "jabatan", widget: "string" }
```

## File Migration Contracts

### JSON to MD Migration Plan
**Files to be consolidated and removed:**
- `src/data/footer.json` → Consolidated into `src/content/config/site.md`
- `src/data/index.json` → Consolidated into `src/content/config/site.md`
- `src/data/galeri.json` → Contents moved to appropriate location
- `src/data/kebijakan-privasi.json` → Migrate to CMS-managed format
- `src/data/kontak.json` → Migrate to CMS-managed format
- `src/data/pariwisata.json` → Contents moved to appropriate collection
- `src/data/peta-situs.json` → Migrate to CMS-managed format
- `src/data/tentang-kkn.json` → Migrate to CMS-managed format

## Component Access Contracts

### Updated Component Access Patterns
**Old pattern** (to be phased out):
```javascript
import data from '../data/filename.json'
```

**New pattern** (to be implemented):
```javascript
import { getCollection } from 'astro:content';
// or
import siteConfig from '../content/config/site.md';
```

## Validation Requirements

**All CMS content must:**
- Pass schema validation before saving
- Maintain backward compatibility with existing components
- Follow proper file naming conventions
- Include all required fields as defined in schema