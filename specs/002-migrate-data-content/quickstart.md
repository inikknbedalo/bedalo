# Quickstart Guide: Managing All Site Content via Decap CMS

## Overview
This guide provides a quick start for content managers who need to understand and work with the Decap CMS to manage all content on the Bedalo3 website.

## Accessing the CMS

1. **Deploy the website** with the updated configuration
2. **Navigate to**: `https://your-site-url/admin` (e.g., `https://bedalo.pages.dev/admin`)
3. **Authenticate** using your GitHub account (configured in the backend)

## Content Management Areas

### 1. Site Settings & Pages (pengaturan)
Location in CMS: **⚙️ Pengaturan Situs & Halaman**

This section manages global site content including:
- **📖 Halaman Profil & Potensi**: Content for the profile page
- **🖼️ Galeri (Foto & Video)**: All gallery content
- **⚙️ Konfigurasi Situs**: Site-wide configuration including
  - Footer information
  - Homepage content
  - Hero section configuration

### 2. Dynamic Content Collections
Location in CMS: Individual collection sections

- **🏖️ Destinasi Pariwisata**: Add and edit tourism destinations
- **✨ Potensi & UMKM**: Add and edit potential/UMKM products
- **🏛️ Struktur Pemerintahan**: Add and edit government structure
- **🎓 Anggota Tim KKN**: Add and edit KKN team members

### 3. New Content Collections (added)
Location in CMS: Additional individual collections

- **📋 Kebijakan Privasi**: Manage privacy policy content in `src/content/pages/kebijakan-privasi.md`
- **📞 Halaman Kontak**: Manage contact page content in `src/content/pages/kontak.md`
- **🗺️ Peta Situs**: Manage sitemap content in `src/content/pages/peta-situs.md`
- **🎓 Tentang KKN**: Manage KKN information in `src/content/pages/tentang-kkn.md`
- **🏞️ Informasi Pariwisata**: Manage additional tourism info (traditions, arts, calendar) in `src/content/info/pariwisata.md`

## Adding New Content

### For Site Configuration (Footer, Homepage, etc.)
1. Go to **⚙️ Pengaturan Situs & Halaman**
2. Select **⚙️ Konfigurasi Situs**
3. Edit the appropriate section (footer, index, galeri)
4. Save and publish changes

### For Static Pages (Privacy Policy, Contact, etc.)
1. Navigate to the appropriate collection in the CMS sidebar
2. Edit the content using the appropriate widgets
3. Save and publish changes

### For Tourism Information (Traditions, Arts, Calendar)
1. Go to **🏞️ Informasi Pariwisata** collection
2. Edit the `pariwisata.md` file content
3. Save and publish changes

## Content Structure

### Site Configuration Schema
All site-wide content is configured in the `src/content/config/site.md` file with the following structure:

```yaml
---
footer:
  address: "String content for address"
  email: "Email address"
  phone: "Phone number"
  mainLinks: 
    - text: "Link text"
      href: "URL"
  aboutLinks: 
    - text: "Link text"
      href: "URL"
  socialLinks:
    - href: "URL"
      label: "Display label"
      iconClass: "Font Awesome class"

index:
  hero:
    image: "image filename"
    imageAlt: "alt text"
    judul: "title"
    subjudul: "subtitle"
  profilSingkat:
    fotoUrl: "image filename"
    namaKepalaDusun: "headman name"
    jabatan: "position"
    sambutan: ["welcome message sentences"]
  # ... other fields
---
```

## Updating Individual Page Content

For each type of dynamic content:
1. Use the appropriate CMS collection
2. Create new entries using the "Add" button (for collections that allow creation)
3. Fill in all required fields
4. Save and publish to see changes on the live site

## Troubleshooting

**Common Issues**:

- **Content not updating**: Ensure you clicked "Publish" after making changes
- **Images not showing**: Verify image paths are correct in the CMS
- **Links not working**: Check that URLs follow proper format (include http:// or https://)
- **Build errors**: Contact developer if CMS changes cause site build failures
- **Footer or homepage content missing**: Check that `src/content/config/site.md` has all required fields

## Next Steps

1. Review all content sections in the CMS
2. Update content to match current requirements
3. Add any missing content to the new collections
4. Verify all pages display content correctly after updates