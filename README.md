# Website Dusun Bedalo

Website profil untuk Dusun Bedalo, dibangun dengan Astro dan Tailwind CSS sebagai bagian dari program KKN UIN Sunan Kalijaga.

## Deskripsi

Website ini merupakan bagian dari program Kuliah Kerja Nyata (KKN) dari UIN Sunan Kalijaga yang bertujuan untuk membuat profil digital bagi Dusun Bedalo. Website ini menyediakan informasi tentang potensi wisata, struktur organisasi, profil dusun, galeri foto, dan informasi lainnya yang relevan dengan komunitas lokal.

## Teknologi yang Digunakan

### Framework & Build Tools
- **Astro**: v5.13.3 - Static site builder untuk website berbasis konten
- **Vite**: Build tool modern untuk pengalaman pengembangan yang cepat
- **TypeScript**: Superset dari JavaScript dengan type checking
- **ESLint**: v9.38.0 - Linting untuk kualitas kode

### Styling & Design
- **Tailwind CSS**: v4.1.12 - Framework CSS utility-first
- **@tailwindcss/typography**: v0.5.16 - Plugin untuk styling konten

### Frontend Libraries
- **Font Awesome**: v7.0.0 - Koleksi ikon
- **Google Fonts (Poppins)**: v5.2.6 - Font yang digunakan
- **AOS (Animate On Scroll)**: v2.3.4 - Animasi saat scroll
- **Chart.js**: v4.5.0 - Visualisasi data dan grafik
- **CountUp.js**: v2.9.0 - Animasi penjumlahan angka
- **GLightbox**: v3.3.1 - Lightbox untuk galeri foto
- **GSAP**: v3.13.0 - Animasi profesional

### SEO & Performance
- **@astrojs/sitemap**: v3.5.1 - Otomatisasi pembuatan sitemap

## Struktur Proyek

```
/home/rd/project/bedalo3/
├── public/                 # Aset statis
│   ├── admin/              # Aset terkait admin
│   ├── assets/             # Gambar dan aset umum
│   └── fonts/              # File font
├── src/                    # Kode sumber
│   ├── components/         # Komponen Astro yang dapat digunakan kembali
│   ├── content/            # File konten (Markdown/MDX)
│   ├── layouts/            # Layout komponen
│   ├── pages/              # Halaman rute
│   ├── styles/             # File CSS
│   └── utils/              # Fungsi utilitas
├── functions/              # Fungsi serverless (API routes)
│   └── api/
├── astro.config.mjs        # Konfigurasi Astro
├── package.json            # Dependensi dan skrip
└── tailwind.config.mjs     # Konfigurasi Tailwind CSS
```

## Fitur-fitur

- Desain responsif menggunakan Tailwind CSS
- SEO-friendly dengan meta tags dan sitemap otomatis
- Galeri foto interaktif
- Formulir kontak
- Tampilan statistik dengan Chart.js
- Animasi halus menggunakan GSAP
- Konten terstruktur menggunakan Markdown/MDX
- Galeri foto dengan efek lightbox
- Typography yang indah dengan plugin typography

## Instalasi

1. Clone repository ini:
   ```bash
   git clone <repository-url>
   ```

2. Masuk ke direktori proyek:
   ```bash
   cd bedalo3
   ```

3. Install dependensi:
   ```bash
   npm install
   ```

## Penggunaan

### Menjalankan Server Pengembangan
```bash
npm run dev
```
Server pengembangan akan berjalan di `http://localhost:4321`

### Membangun Proyek untuk Produksi
```bash
npm run build
```
File build akan ditempatkan di folder `dist/`

### Menjalankan Server Preview Lokal
```bash
npm run preview
```

### Linting dan Type Checking
- Lint kode: `npm run lint`
- Perbaiki linting otomatis: `npm run lint:fix`
- Cek type TypeScript: `npm run type-check`

## Deployment

Proyek ini dikonfigurasi untuk deployment ke Cloudflare Pages dengan URL situs: https://bedalo.pages.dev

## Kontribusi

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur/AwesomeFeature`)
3. Commit perubahan (`git commit -m 'Add some AwesomeFeature'`)
4. Push ke branch (`git push origin fitur/AwesomeFeature`)
5. Buka Pull Request

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## Author

KKN 117 UIN SUKA Kelompok 129

## Contact

Jika Anda memiliki pertanyaan tentang proyek ini, silakan hubungi tim pengembang melalui fitur kontak di website.