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

// Skema Privacy Policy
const privacySchema = z.object({
    judul: z.string(),
    isiKebijakan: z.string(),
    tanggalUpdate: z.string(),
});

// Skema Contact Information
const contactSchema = z.object({
    judul: z.string(),
    deskripsi: z.string(),
    informasiKontak: z.object({
        alamat: z.string(),
        email: z.string(),
        telepon: z.string(),
        mapsUrl: z.string(),
        formAspirasi: z.object({
            judul: z.string(),
            deskripsi: z.string(),
            formActionUrl: z.string(),
            entry: z.object({
                nama: z.string(),
                kontak: z.string(),
                subjek: z.string(),
                pesan: z.string(),
            })
        }),
        kontakPemerintah: z.array(z.object({
            fotoUrl: z.string(),
            nama: z.string(),
            jabatan: z.string(),
            telepon: z.string(),
        }))
    })
});

// Skema Sitemap
const sitemapSchema = z.object({
    judul: z.string(),
    deskripsi: z.string(),
    tautanSitemap: z.array(z.object({
        category: z.string(),
        pages: z.array(z.object({
            url: z.string(),
            title: z.string(),
            description: z.string(),
            icon: z.string(),
        }))
    }))
});

// Skema About KKN
const aboutKKNSchema = z.object({
    judul: z.string(),
    deskripsi: z.string(),
    informasiKKN: z.object({
        judulInfo: z.string(),
        isiInfo: z.string(),
        gambarUrl: z.string(),
        timKKN: z.array(z.object({
            nama: z.string(),
            prodi: z.string(),
            jabatan: z.string(),
        }))
    })
});

// Skema Pariwisata Info
const pariwisataInfoSchema = z.object({
    destinasi: z.array(z.object({
        gambarUrl: z.string(),
        altText: z.string(),
        judul: z.string(),
        deskripsi: z.string(),
        petaLink: z.string(),
    })),
    tradisi: z.array(z.object({
        gambarUrl: z.string(),
        altText: z.string(),
        judul: z.string(),
        deskripsi: z.array(z.string()),
    })),
    kesenian: z.array(z.object({
        gambarUrl: z.string(),
        altText: z.string(),
        judul: z.string(),
        deskripsi: z.array(z.string()),
    })),
    kalender: z.array(z.object({
        acara: z.string(),
        deskripsi: z.string(),
        tanggal: z.string(),
    }))
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

// Ekspor semua koleksi - hanya untuk direktori eksplisit, bukan untuk file tunggal
export const collections = {
  'potensi': potensiCollection,
  'pariwisata': pariwisataCollection,
  'galeri': galeriCollection,
  'config': configCollection,
  'profil': profilCollection,
  'kkn': kknCollection,
  'struktur': strukturCollection,
  // NOTE: The 'pages' and 'info' collections are auto-generated since they're single files in directories
  // These don't need explicit definitions in this export as they'll be auto-discovered
};