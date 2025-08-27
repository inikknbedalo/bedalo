# Website Profil Dusun Bedalo

![Astro](https://img.shields.io/badge/Astro-4.9.2-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?logo=tailwind-css)
![Decap CMS](https://img.shields.io/badge/Decap_CMS-2.10.19-563D7C?logo=decap-cms)

Ini adalah repositori untuk website profil **Dusun Bedalo**, dibangun menggunakan Astro. Proyek ini dibuat sebagai bagian dari program Kuliah Kerja Nyata (KKN) oleh mahasiswa UIN Sunan Kalijaga Yogyakarta.

Tujuannya adalah untuk mendigitalisasi informasi dusun dan menyajikannya dalam format yang modern, cepat, dan mudah diakses. Website ini sepenuhnya terintegrasi dengan **Decap CMS** untuk manajemen konten yang mudah oleh perangkat dusun.

***

## 🚀 Fitur Utama

* **Static Site Generation (SSG)** dengan Astro untuk performa maksimal dan keamanan tinggi.
* **Styling Modern** dengan Tailwind CSS.
* **Manajemen Konten Mudah** melalui Decap CMS (sebelumnya Netlify CMS), memungkinkan pengeditan konten tanpa perlu menyentuh kode.
* **Optimasi Gambar Otomatis** menggunakan `astro:assets` untuk menyajikan gambar yang responsif dan cepat dimuat.
* **Galeri Foto & Video Interaktif** dengan GLightbox.
* **Optimasi Video YouTube** dengan teknik *Lite YouTube Embed* untuk loading halaman yang sangat cepat.
* **Animasi Scroll** yang halus dengan AOS (Animate On Scroll).
* **Arsitektur Berbasis Komponen** yang modular dan mudah dikelola.

***

## 🛠️ Teknologi yang Digunakan

* **Framework**: [Astro](https://astro.build/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **CMS**: [Decap CMS](https://decapcms.org/)
* **Lightbox**: [GLightbox](https://biati-digital.github.io/glightbox/)
* **Animasi**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
* **Icons**: [Font Awesome](https://fontawesome.com/)

***

## 📁 Struktur Proyek

Struktur folder utama pada proyek ini adalah sebagai berikut:
Of course. Here is the full raw markdown for the README.md file.

Markdown

# Website Profil Dusun Bedalo

![Astro](https://img.shields.io/badge/Astro-4.9.2-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?logo=tailwind-css)
![Decap CMS](https://img.shields.io/badge/Decap_CMS-2.10.19-563D7C?logo=decap-cms)

Ini adalah repositori untuk website profil resmi **Dusun Bedalo**, dibangun menggunakan Astro. Proyek ini dibuat sebagai bagian dari program Kuliah Kerja Nyata (KKN) oleh mahasiswa UIN Sunan Kalijaga Yogyakarta.

Tujuannya adalah untuk mendigitalisasi informasi dusun dan menyajikannya dalam format yang modern, cepat, dan mudah diakses. Website ini sepenuhnya terintegrasi dengan **Decap CMS** untuk manajemen konten yang mudah oleh perangkat dusun.

***

## 🚀 Fitur Utama

* **Static Site Generation (SSG)** dengan Astro untuk performa maksimal dan keamanan tinggi.
* **Styling Modern** dengan Tailwind CSS.
* **Manajemen Konten Mudah** melalui Decap CMS (sebelumnya Netlify CMS), memungkinkan pengeditan konten tanpa perlu menyentuh kode.
* **Optimasi Gambar Otomatis** menggunakan `astro:assets` untuk menyajikan gambar yang responsif dan cepat dimuat.
* **Galeri Foto & Video Interaktif** dengan GLightbox.
* **Optimasi Video YouTube** dengan teknik *Lite YouTube Embed* untuk loading halaman yang sangat cepat.
* **Animasi Scroll** yang halus dengan AOS (Animate On Scroll).
* **Arsitektur Berbasis Komponen** yang modular dan mudah dikelola.

***

## 🛠️ Teknologi yang Digunakan

* **Framework**: [Astro](https://astro.build/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **CMS**: [Decap CMS](https://decapcms.org/)
* **Lightbox**: [GLightbox](https://biati-digital.github.io/glightbox/)
* **Animasi**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
* **Icons**: [Font Awesome](https://fontawesome.com/)

***

## 📁 Struktur Proyek

Struktur folder utama pada proyek ini adalah sebagai berikut:

.
├── public/
│   └── admin/
│       └── config.yml      # 📄 Konfigurasi untuk Decap CMS
│   └── favicon.svg         # 📄 Ikon website
│
├── src/
│   ├── assets/
│   │   └── images/         # 🖼️ Gambar yang akan dioptimasi oleh Astro
│   ├── components/
│   │   ├── Header.astro    # 🧩 Komponen yang dapat digunakan kembali
│   │   └── ...
│   ├── data/
│   │   ├── index.json      # 📝 File konten untuk setiap halaman
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro    # 📐 Template utama halaman
│   └── pages/
│       ├── index.astro     # 🏠 Halaman utama dan halaman lainnya
│       └── ...
│
├── astro.config.mjs        # 📄 Konfigurasi utama Astro
├── package.json            # 📦 Daftar dependensi dan skrip proyek
├── tailwind.config.mjs     # 📄 Konfigurasi Tailwind CSS
└── tsconfig.json           # 📄 Konfigurasi TypeScript

***

## ⚙️ Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/inikknbedalo/bedalo.git](https://github.com/inikknbedalo/bedalo.git)
    cd bedalo
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:4321` di browser Anda untuk melihat hasilnya.

4.  **Build untuk produksi:**
    ```bash
    npm run build
    ```
    Perintah ini akan membuat versi statis dari website di dalam folder `dist/`.

***

## 🎨 Kustomisasi Konten

Ada dua cara utama untuk mengedit konten website ini:

### 1. Melalui Decap CMS (Direkomendasikan)

Setelah website di-deploy ke platform seperti Netlify, Anda dapat mengakses antarmuka admin dengan mengunjungi `https://bedalo.pages.dev/admin`. Dari sana, Anda dapat mengedit semua teks, gambar, dan data lainnya secara visual.

### 2. Secara Manual (Mengedit File JSON)

Semua konten teks dan referensi gambar untuk setiap halaman disimpan dalam file JSON di dalam direktori `src/data/`. Anda dapat mengedit file-file ini secara langsung jika Anda merasa nyaman bekerja dengan kode.

* `src/data/index.json` - Konten Halaman Beranda
* `src/data/profil.json` - Konten Halaman Profil
* `src/data/pariwisata.json` - Konten Halaman Pariwisata
* ...dan seterusnya.