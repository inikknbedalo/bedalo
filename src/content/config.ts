import { z, defineCollection, reference } from 'astro:content';

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

// --- CHANGES ARE HERE ---
// Schema for each tourism destination
const pariwisataSchema = z.object({
    altText: z.string(),
    judul: z.string(),
    deskripsi: z.string(),
    petaLink: z.string().url(),
    coverImage: z.string(), // Renamed from gambarUrl
    // Add an optional array for gallery images
    gallery: z.array(z.object({
        url: z.string(),
        alt: z.string(),
    })).optional(),
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


// Export a single `collections` object to register your collection(s)
export const collections = {
  'potensi': potensiCollection,
  'pariwisata': pariwisataCollection,
};