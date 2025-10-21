import { z, defineCollection } from 'astro:content';

// Skema UMKM (tidak berubah)
const umkmSchema = z.object({
    altText: z.string(),
    judul: z.string(),
    deskripsi: z.string(),
    harga: z.string(),
    kontakLink: z.string().url(),
    petaLink: z.string().url(),
    gambarUrl: z.string(),
});

// Skema Pariwisata (tidak berubah)
const pariwisataSchema = z.object({
    altText: z.string(),
    judul: z.string(),
    deskripsi: z.string(),
    petaLink: z.string().url(),
    coverImage: z.string(),
    gallery: z.array(z.object({
        url: z.string(),
        alt: z.string(),
    })).optional(),
});

// Skema Galeri
const galeriSchema = z.object({
    foto: z.array(z.object({
        url: z.string(),
        alt: z.string(),
    })),
    video: z.array(z.object({
        url: z.string(),
        judul: z.string(),
    })).optional(),
});

// Skema Konfigurasi Situs
const configSchema = z.object({
    footer: z.object({
        address: z.string(),
        email: z.string().email().optional().or(z.string().regex(/^$/)), // Allow empty string
        phone: z.string(),
        mainLinks: z.array(z.object({
            href: z.string(),
            text: z.string(),
        })),
        aboutLinks: z.array(z.object({
            href: z.string(),
            text: z.string(),
        })),
        socialLinks: z.array(z.object({
            href: z.string(),
            label: z.string(),
            iconClass: z.string(),
        })),
    }),
    index: z.object({
        hero: z.object({
            image: z.string(),
            imageAlt: z.string(),
            judul: z.string(),
            subjudul: z.string(),
        }),
        profilSingkat: z.object({
            fotoUrl: z.string(),
            namaKepalaDusun: z.string(),
            jabatan: z.string(),
            sambutan: z.array(z.string()),
        }),
        potensiUnggulan: z.array(z.object({
            judul: z.string(),
            deskripsi: z.string(),
            link: z.string(),
        })),
        pariwisata: z.object({
            deskripsi: z.string(),
            gambar: z.array(z.object({
                url: z.string(),
                alt: z.string(),
            })),
        }),
        galeri: z.array(z.object({
            url: z.string(),
            alt: z.string(),
        })),
    }),
});

// --- PERUBAHAN DI SINI ---
// Skema untuk konten halaman profil
const profilSchema = z.object({
    title: z.string(),
    visi: z.string(),
    misi: z.array(z.string()),
    petaUrl: z.string().url(),
    // Data Demografi sekarang menjadi bagian dari profil
    demografi: z.object({
        jumlahPenduduk: z.string(),
        lakiLaki: z.string(),
        perempuan: z.string(),
        mataPencaharian: z.array(z.string()),
    }),
    // Data Pertanian juga dipindahkan ke sini
    pertanian: z.object({
        gambarUrl: z.string(),
        altText: z.string(),
        judul: z.string(),
        deskripsi: z.string(),
        komoditas: z.array(z.object({
            nama: z.string(),
            icon: z.string(),
        })),
    }),
    // Data "Potensi Lainnya" juga ada di sini
    lainnya: z.array(z.object({
        icon: z.string(),
        judul: z.string(),
        deskripsi: z.string(),
    })),
});

// Skema Anggota KKN (tidak berubah)
const kknSchema = z.object({
    nama: z.string(),
    prodi: z.string(),
    fotoUrl: z.string(),
    instagramUrl: z.string().url().optional(),
    order: z.number(),
});

// Skema Struktur Pemerintahan (tidak berubah)
const strukturSchema = z.object({
    nama: z.string(),
    jabatan: z.string(),
    fotoUrl: z.string(),
    order: z.number(),
});


// Definisikan semua koleksi
const potensiCollection = defineCollection({ type: 'content', schema: umkmSchema });
const pariwisataCollection = defineCollection({ type: 'content', schema: pariwisataSchema });
const galeriCollection = defineCollection({ type: 'content', schema: galeriSchema });
const configCollection = defineCollection({ type: 'content', schema: configSchema });
const kknCollection = defineCollection({ type: 'content', schema: kknSchema });
const strukturCollection = defineCollection({ type: 'content', schema: strukturSchema });

// --- PERUBAHAN DI SINI ---
// Ubah tipe koleksi 'profil' menjadi 'content'
const profilCollection = defineCollection({
    type: 'content',
    schema: profilSchema,
});


// Ekspor semua koleksi
export const collections = {
  'potensi': potensiCollection,
  'pariwisata': pariwisataCollection,
  'galeri': galeriCollection,
  'config': configCollection,
  'profil': profilCollection,
  'kkn': kknCollection,
  'struktur': strukturCollection,
};