# Content Collection API Contracts

## Profil Collection Contract

### Schema Definition
```typescript
{
  title: string,
  visi: string,
  misi: string[],
  petaUrl: string,
  demografi: {
    jumlahPenduduk: string,
    lakiLaki: string,
    perempuan: string,
    mataPencaharian: string[]
  },
  pertanian: {
    gambarUrl: string,
    altText: string,
    judul: string,
    deskripsi: string,
    komoditas: {
      nama: string,
      icon: string
    }[]
  },
  lainnya: {
    icon: string,
    judul: string,
    deskripsi: string
  }[],
  body: string (markdown content)
}
```

### Expected Endpoints/Usage
- Query: `content/profil` - Get all profil content
- Single item: `content/profil/index` - Get the main profil content

## Pariwisata Collection Contract

### Schema Definition
```typescript
{
  altText: string,
  judul: string,
  deskripsi: string,
  petaLink: string,
  coverImage: string,
  gallery: {
    url: string,
    alt: string
  }[] (optional)
}
```

### Expected Endpoints/Usage
- Query: `content/pariwisata` - Get all tourism destinations
- Single item: `content/pariwisata/[slug]` - Get specific tourism destination

## Potensi/UMKM Collection Contract

### Schema Definition
```typescript
{
  altText: string,
  judul: string,
  deskripsi: string,
  harga: string,
  kontakLink: string,
  petaLink: string,
  gambarUrl: string
}
```

### Expected Endpoints/Usage
- Query: `content/potensi` - Get all UMKM/potential entries
- Single item: `content/potensi/[slug]` - Get specific UMKM entry

## KKN Collection Contract

### Schema Definition
```typescript
{
  nama: string,
  prodi: string,
  fotoUrl: string,
  instagramUrl: string (optional),
  order: number
}
```

### Expected Endpoints/Usage
- Query: `content/kkn` - Get all KKN members
- Single item: `content/kkn/[slug]` - Get specific KKN member

## Struktur Collection Contract

### Schema Definition
```typescript
{
  nama: string,
  jabatan: string,
  fotoUrl: string,
  order: number
}
```

### Expected Endpoints/Usage
- Query: `content/struktur` - Get all village officials
- Single item: `content/struktur/[slug]` - Get specific official
```

## Galeri Collection Contract (to be implemented)

### Schema Definition
```typescript
{
  foto: {
    url: string,
    alt: string
  }[],
  video: {
    url: string,
    judul: string
  }[] (optional)
}
```

### Expected Endpoints/Usage
- Query: `content/galeri` - Get all gallery content
- Single item: `content/galeri/main` - Get main gallery content