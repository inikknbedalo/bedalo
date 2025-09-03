import { z, defineCollection } from 'astro:content';

// Schema for each UMKM item
const umkmSchema = z.object({
    altText: z.string(),
    judul: z.string(),
    deskripsi: z.string(),
    harga: z.string(),
    kontakLink: z.string().url(),
    petaLink: z.string().url(),
    gambarUrl: z.string(),
});

// Schema for each tourism destination
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

// --- NEW SCHEMAS START HERE ---

// Schema for the main profile page content
const profilSchema = z.object({
    title: z.string(), // e.g., "Profil Dusun Bedalo"
    sejarah: z.array(z.string()),
    visi: z.string(),
    misi: z.array(z.string()),
    petaUrl: z.string().url(),
});

// Schema for KKN team members
const kknSchema = z.object({
    nama: z.string(),
    prodi: z.string(),
    fotoUrl: z.string(),
    instagramUrl: z.string().url().optional(),
    // Add an order field to control display sequence
    order: z.number(),
});

// Schema for each government member
const strukturSchema = z.object({
    nama: z.string(),
    jabatan: z.string(),
    fotoUrl: z.string(),
    order: z.number(),
});



// Define the collections
const potensiCollection = defineCollection({
    type: 'content',
    schema: umkmSchema,
});

const pariwisataCollection = defineCollection({
    type: 'content',
    schema: pariwisataSchema,
});

// --- NEW COLLECTIONS START HERE ---

const profilCollection = defineCollection({
    type: 'data', // Use 'data' for single JSON/YAML files
    schema: profilSchema,
});

const kknCollection = defineCollection({
    type: 'content', // Use 'content' for a folder of Markdown files
    schema: kknSchema,
});

const strukturCollection = defineCollection({
    type: 'content',
    schema: strukturSchema,
});

// Export all collections
export const collections = {
  'potensi': potensiCollection,
  'pariwisata': pariwisataCollection,
  'profil': profilCollection,
  'kkn': kknCollection,
  'struktur': strukturCollection,
};