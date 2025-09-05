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
  'profil': profilCollection,
  'kkn': kknCollection,
  'struktur': strukturCollection,
};