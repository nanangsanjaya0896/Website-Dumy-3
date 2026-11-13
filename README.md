# Sejukin — Company Profile Website

Website company profile multi-page untuk **Sejukin**, perusahaan jasa AC profesional (pemasangan, perawatan, perbaikan, dan penjualan unit AC) yang melayani area Jabodetabek.

## Tech Stack

- **Vite** + **React 19** (JSX, functional components, hooks)
- **Tailwind CSS v4** via plugin `@tailwindcss/vite` — semua design token didefinisikan di blok `@theme` pada `src/index.css`
- **react-router** — routing multi-page dengan lazy loading dan page transition
- **motion (motion/react)** — micro-interactions, AnimatePresence, reveal on scroll
- **GSAP** — hero load sequence timeline (berjalan setelah video background siap)
- **lucide-react** — ikon

## Menjalankan Project

```bash
npm install      # instalasi dependensi
npm run dev      # mode development (server dev, host: true)
npm run build    # build produksi ke dist/
npm run preview  # pratinjau hasil build
```

## Struktur Folder

```
src/
├── components/          # Komponen UI reusable
│   ├── Header.jsx           # Navigasi fixed + menu mobile (AnimatePresence)
│   ├── Hero.jsx             # Hero 100dvh + GSAP load sequence
│   ├── HeroContent.jsx      # Konten hero (eyebrow, heading, CTA)
│   ├── VideoBackground.jsx  # Video looping awan + overlay gradasi
│   ├── Footer.jsx           # Footer kartu gelap besar
│   ├── PageTransition.jsx   # Transisi halaman (opacity + y + blur)
│   ├── PageHeader.jsx       # Header halaman (pill label + judul)
│   ├── Reveal.jsx           # Reveal on scroll (whileInView)
│   ├── CompanyCard.jsx      # Kartu profil kaca 3D (drag + float loop)
│   ├── AboutPreview.jsx     # Preview tentang di beranda
│   ├── ProjectsPreview.jsx  # Mini ProjectStack di beranda
│   ├── ServicesPreview.jsx  # Empat kartu layanan di beranda
│   ├── ContactCTA.jsx       # CTA bertepi gradasi
│   ├── ProjectStack.jsx     # Tumpukan kartu 3D proyek (keyboard + dots)
│   ├── ProjectCard.jsx      # Kartu proyek grid
│   ├── ProjectFilter.jsx    # Filter kategori proyek
│   ├── StatCounter.jsx      # Statistik dengan counter animation
│   ├── ServiceAccordion.jsx # Akordeon detail layanan
│   ├── FAQAccordion.jsx     # Akordeon FAQ
│   ├── ContactForm.jsx      # Formulir kontak dengan state pengiriman
│   ├── ExperienceTimeline.jsx # Linimasa perjalanan perusahaan
│   ├── BrandLogos.jsx       # Marquee merek AC yang dilayani
│   └── WhatsAppFloat.jsx    # Tombol WhatsApp mengambang
├── data/                # Sumber data (company, projects, services, stats,
│                        #  socials, brands, faqs)
├── hooks/               # useScrollToTop, useCounter
├── layouts/
│   └── MainLayout.jsx       # Aurora background + Header/Footer/WA float
└── pages/               # HomePage, AboutPage, ProjectsPage,
                         # ProjectDetailPage, ServicesPage, ContactPage,
                         # NotFoundPage
```

## Routing

| Route            | Halaman            |
| ---------------- | ------------------ |
| `/`              | Beranda            |
| `/about`         | Tentang            |
| `/services`      | Layanan + harga    |
| `/projects`      | Portofolio proyek  |
| `/projects/:id`  | Detail proyek      |
| `/contact`       | Kontak             |
| `*`              | 404                |

## Tipografi

Skala tipografi terpusat di `src/index.css` (blok `@layer components`), jadi ukuran,
tracking, dan warna headline tidak lagi ditulis ulang di tiap komponen.

| Class            | Dipakai untuk                                     | Ukuran (fluid)          |
| ---------------- | ------------------------------------------------- | ----------------------- |
| `.display-hero`  | H1 hero beranda                                   | 38px → 80px             |
| `.display-page`  | H1 header halaman (`PageHeader`), hero detail     | 32px → 56px             |
| `.display-section` | H2 section utama                               | 28px → 48px             |
| `.display-section-sm` | H2 section sekunder / footer                 | 26px → 40px             |
| `.display-card`  | Judul kartu, nama, angka pendek                   | mengikuti `text-*`      |
| `.lead-lg`       | Sub-headline di bawah H1                          | 17px → 19px             |
| `.lead`          | Paragraf pembuka / isi panjang                    | 16px → 17px             |
| `.eyebrow`       | Label kecil di atas headline                      | 11px, tracking 0.18em   |

- Font: **Outfit** (headline, weight 800, tracking −0.024em s.d. −0.032em) dan **Inter** (teks isi).
- Warna teks: headline `brand-ink #0B3D5C`, sub-headline & isi `brand-secondary #3E6076`
  (kontras 15.9:1 dan 6.6:1 di atas `brand-bg`, lolos WCAG AA/AAA).
- Label aksen kecil memakai `brand-accent-ink #0B5C8A` (6.7:1); `brand-accent #0E86D4`
  hanya untuk isian/gradasi karena terlalu terang untuk teks kecil.
- Halaman `/warna` (`ColorLabPage`) adalah color lab: input hex, palet siap pakai, dan color picker
dari gambar (canvas, diproses lokal). Pilihan tersimpan di `localStorage` — hapus setelah final.
- `text-wrap: balance` untuk headline dan `pretty` untuk paragraf.

## Catatan Desain

- Palet: `brand-bg #F0F7FA`, headline `#161C1F`, teks isi `#4A5760`, permukaan gelap `#0C2231`, aksen gradasi `#0B5C8A → #0E86D4`, mint `#6DD5C8`.
- Kartu memakai glassmorphism (`bg-white/60 backdrop-blur-xl border-hairline`) dan radius `28px`.
- Aurora background bergerak lambat di luar hero dan otomatis berhenti saat `prefers-reduced-motion` aktif.
- Timeline GSAP hero memiliki safety timeout agar konten tidak pernah tertinggal dalam keadaan tersembunyi.
