# Data Model: Migrate Remaining Data to Decap CMS Accessible Format

## Overview
This document outlines the data models for content that needs to be made accessible through Decap CMS, including schemas for previously JSON-only content.

## Content Collections Schema

### 1. Privacy Policy Collection (`privacy-policy`)
**Source**: `src/data/kebijakan-privasi.json`

**Schema**:
```yaml
type: object
fields:
  - name: "judul"
    label: "Judul Kebijakan Privasi"
    widget: "string"
  - name: "isiKebijakan"
    label: "Isi Kebijakan Privasi"
    widget: "markdown"
  - name: "tanggalUpdate"
    label: "Tanggal Update"
    widget: "datetime"
```

### 2. Contact Information Collection (`contact`)
**Source**: `src/data/kontak.json`

**Schema**:
```yaml
type: object
fields:
  - name: "judul"
    label: "Judul Halaman Kontak"
    widget: "string"
  - name: "deskripsi"
    label: "Deskripsi Halaman Kontak"
    widget: "text"
  - name: "informasiKontak"
    label: "Informasi Kontak"
    widget: "object"
    fields:
      - name: "alamat"
        label: "Alamat"
        widget: "text"
      - name: "email"
        label: "Email"
        widget: "string"
      - name: "telepon"
        label: "Telepon"
        widget: "string"
      - name: "mapsUrl"
        label: "URL Peta Google Maps"
        widget: "string"
  - name: "formKontak"
    label: "Formulir Kontak"
    widget: "object"
    fields:
      - name: "judulForm"
        label: "Judul Formulir"
        widget: "string"
      - name: "deskripsiForm"
        label: "Deskripsi Formulir"
        widget: "text"
```

### 3. Sitemap Collection (`sitemap`)
**Source**: `src/data/peta-situs.json`

**Schema**:
```yaml
type: object
fields:
  - name: "judul"
    label: "Judul Halaman Peta Situs"
    widget: "string"
  - name: "deskripsi"
    label: "Deskripsi Halaman Peta Situs"
    widget: "text"
  - name: "tautanSitemap"
    label: "Tautan Peta Situs"
    widget: "list"
    fields:
      - name: "judul"
        label: "Judul Tautan"
        widget: "string"
      - name: "url"
        label: "URL"
        widget: "string"
      - name: "deskripsi"
        label: "Deskripsi"
        widget: "text"
```

### 4. About KKN Collection (`about-kkn`)
**Source**: `src/data/tentang-kkn.json`

**Schema**:
```yaml
type: object
fields:
  - name: "judul"
    label: "Judul Halaman Tentang KKN"
    widget: "string"
  - name: "deskripsi"
    label: "Deskripsi Halaman"
    widget: "text"
  - name: "informasiKKN"
    label: "Informasi KKN"
    widget: "object"
    fields:
      - name: "judulInfo"
        label: "Judul Informasi"
        widget: "string"
      - name: "isiInfo"
        label: "Isi Informasi"
        widget: "markdown"
      - name: "timKKN"
        label: "Tim KKN"
        widget: "list"
        fields:
          - name: "nama"
            label: "Nama"
            widget: "string"
          - name: "jabatan"
            label: "Jabatan"
            widget: "string"
```

### 5. Updated Site Configuration Schema (consolidated)
**Sources**: `src/data/footer.json`, `src/data/index.json`, `src/content/config/site.md` (consolidating all into one)

**Schema**:
```yaml
type: object
fields:
  - name: "footer"
    label: "Footer Configuration"
    widget: "object"
    fields:
      - name: "address"
        label: "Alamat"
        widget: "text"
      - name: "email"
        label: "Email"
        widget: "string"
      - name: "phone"
        label: "Telepon"
        widget: "string"
      - name: "mainLinks"
        label: "Tautan Utama"
        widget: "list"
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
    label: "Homepage Configuration"
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
  - name: "galeri"
    label: "Galeri Configuration"
    widget: "object"
    fields:
      - name: "foto"
        label: "Galeri Foto"
        widget: "list"
        summary: "{{fields.alt}}"
        fields:
          - name: "url"
            label: "Gambar"
            widget: "image"
          - name: "alt"
            label: "Keterangan (Alt Text)"
            widget: "string"
      - name: "video"
        label: "Galeri Video"
        widget: "list"
        summary: "{{fields.judul}}"
        fields:
          - name: "url"
            label: "URL Video"
            widget: "string"
            hint: "Contoh: https://www.youtube.com/watch?v=xxxxx"
          - name: "judul"
            label: "Judul Video"
            widget: "string"
```

## Relationships

- All content is organized by purpose and accessibility needs
- Site configuration consolidates multiple content types for easier management
- Individual content collections maintain their specific purpose

## Validation Rules

1. All text fields must be properly sanitized
2. URL fields must follow proper URL format
3. Image fields must reference valid assets
4. Array fields have appropriate minimum and maximum item counts
5. All required fields must be present

## Migration Path

1. Create CMS collection schemas for all remaining JSON-based content
2. Update `public/admin/config.yml` with new collections
3. Create initial data files in appropriate format
4. Update components to access new content sources
5. Remove redundant JSON files after verification