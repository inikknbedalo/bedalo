import { getCollection } from 'astro:content';

interface FooterLink {
  href: string;
  text: string;
}

interface SocialLink {
  href: string;
  label: string;
  iconClass: string;
}

interface MainImage {
  url: string;
  alt: string;
}

interface FooterConfig {
  address: string;
  email: string;
  phone: string;
  mainLinks: FooterLink[];
  aboutLinks: FooterLink[];
  socialLinks: SocialLink[];
}

interface HeroConfig {
  image: string;
  imageAlt: string;
  judul: string;
  subjudul: string;
}

interface ProfilSingkatConfig {
  fotoUrl: string;
  namaKepalaDusun: string;
  jabatan: string;
  sambutan: string[];
}

interface PotensiUnggulanConfig {
  judul: string;
  deskripsi: string;
  link: string;
}

interface PariwisataConfig {
  deskripsi: string;
  gambar: MainImage[];
}

interface IndexConfig {
  hero: HeroConfig;
  profilSingkat: ProfilSingkatConfig;
  potensiUnggulan: PotensiUnggulanConfig[];
  pariwisata: PariwisataConfig;
  galeri: MainImage[];
}

interface SiteConfig {
  footer: FooterConfig;
  index: IndexConfig;
}

export async function getConfig(): Promise<SiteConfig> {
  try {
    const configs = await getCollection('config');
    if (configs.length > 0) {
      const configEntry = configs[0]; // Assuming we have one site config
      return configEntry.data as SiteConfig;
    } else {
      throw new Error('No config entries found');
    }
  } catch {
    // In development, we can log the error, but avoid console in production code
    // Return default values if config is not found
    return {
      footer: {
        address: "Default address",
        email: "default@example.com",
        phone: "+1 234 567 8900",
        mainLinks: [],
        aboutLinks: [],
        socialLinks: [],
      },
      index: {
        hero: {
          image: "default.jpg",
          imageAlt: "Default image",
          judul: "Default Title",
          subjudul: "Default subtitle",
        },
        profilSingkat: {
          fotoUrl: "default.jpg",
          namaKepalaDusun: "Default Name",
          jabatan: "Default Position",
          sambutan: ["Default welcome message"],
        },
        potensiUnggulan: [],
        pariwisata: {
          deskripsi: "Default description",
          gambar: [],
        },
        galeri: [],
      },
    };
  }
}