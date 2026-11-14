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
│   ├── WhatsAppFloat.jsx    # Tombol WhatsApp mengambang
│   └── AIChatWidget.jsx     # Chat AI lokal (rule-based, tanpa API) di atas tombol WA
├── data/                # Sumber data (company, projects, services, stats,
│                        #  socials, brands, faqs)
├── hooks/               # useScrollToTop, useCounter
├── layouts/
│   └── MainLayout.jsx       # Aurora background + Header/Footer/chat AI + WA float
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

## Media Hero (Section 1)

Video background hero diatur di `src/data/heroMedia.js` (panduan lengkap: `docs/hero-media.md`).

- Taruh file **`public/videos/hero.mp4`** (MP4/H.264, 1080p, ≤ 8 MB, 8–15 detik) → langsung dipakai.
- Poster opsional: **`public/videos/hero-poster.jpg`**.
- Selama file lokal belum ada, hero memakai URL video cadangan sehingga tidak pernah kosong.

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

- Font: **Plus Jakarta Sans** untuk headline & teks isi (mengikuti referensi ARKTIS Home Service).
  Headline weight 800 dengan tracking −0.024em s.d. −0.032em.
  (kontras 15.1:1 dan 6.4:1 di atas `brand-bg`, lolos WCAG AA/AAA).
- Label aksen kecil memakai `brand-accent-ink #0B5C8A` (6.7:1); `brand-accent #0E86D4`
  hanya untuk isian/gradasi karena terlalu terang untuk teks kecil.
- `text-wrap: balance` untuk headline dan `pretty` untuk paragraf.

## Catatan Desain

- Palet mengikuti referensi **ARKTIS HOME SERVICE** (definisi di `@theme` `src/index.css`):
  | Token | Hex | Peran |
  |---|---|---|
  | `brand-bg` | `#F8FAFB` (clean) | latar halaman |
  | `brand-ink` / `brand-primary` | `#0A1628` (arctic) | headline & teks utama |
  | `brand-secondary` | `#4A5568` (slatebody) | sub-headline & teks isi |
  | `brand-accent` | `#E8720C` (flame) | CTA utama, fokus, aksen hangat |
  | `brand-accent-2` | `#D66408` (flame gelap) | hover & ujung gradient CTA |
  | `brand-accent-ink` | `#2E6DA4` (glacier) | eyebrow, tautan, aksen struktural |
  | `brand-sky` | `#5BA3D9` (sky) | aksen dingin terang, logo footer |
  | `brand-mint` | `#7BC8C0` (mint) | aksen dingin, ikon kontak |
  | `brand-ice` | `#EEF6FF` (ice) | isian lembut |
  | `brand-silver` | `#C8D8E8` (silver) | scrollbar, pemisah |
  | `brand-navy` | `#1E2832` (coal) | footer & permukaan gelap |

  Kontras: arctic/clean 17.3:1, slatebody/clean 7.2:1, glacier/clean 5.2:1, sky/coal 5.5:1.
  Catatan: teks putih di atas flame = 3.1:1 (sama seperti referensi ARKTIS) — cukup untuk teks besar,
  di bawah ambang AA untuk teks kecil. Ganti ke `text-brand-ink` bila butuh AA penuh.
- Kartu memakai glassmorphism (`bg-white/60 backdrop-blur-xl border-hairline`) dan radius `28px`.
- Aurora background bergerak lambat di luar hero dan otomatis berhenti saat `prefers-reduced-motion` aktif.
- Timeline GSAP hero memiliki safety timeout agar konten tidak pernah tertinggal dalam keadaan tersembunyi.

## SEO, share card & aksesibilitas (Paket A)

- **OG / Twitter card**: `public/og-image.png` (1200×630, navy + aksen cyan) dipakai untuk preview saat link dibagikan di WhatsApp/Facebook/X. URL absolut di `index.html` mengarah ke `sejukin-psi.vercel.app` — kalau domain berubah, perbarui `og:url`, `og:image`, `twitter:image`, dan `canonical`.
- **Structured data**: blok `HVACBusiness` JSON-LD di `index.html` (nama, telepon, email, area layanan, jam buka). Duplikat dari `src/data/company.js` — ubah keduanya saat data perusahaan berubah.
- **Skip link**: "Lewati ke konten utama" di `MainLayout.jsx`, target `<main id="main">`.
- **Gambar**: semua gambar pihak ketiga memakai `width`/`height` eksplisit + `srcSet` via `src/lib/img.js` (`buildSrcSet`, `withWidth`) untuk mencegah CLS.
- **Kartu profil** (`CompanyCard`): bisa digeser dengan panah keyboard (Home = reset), semantik `role="group"`, bukan `role="img"`.
- **Marquee merek**: dekoratif (`aria-hidden`), daftar merek disediakan sebagai teks `sr-only`.
- **Data kontak**: lihat peringatan di kepala `src/data/company.js` — nomor/email masih contoh.

## Ikon & citra

- **Tanpa ilustrasi hasil AI.** Avatar robot di widget chat sudah dihapus (`src/assets/sejukin-ai-robot.jpg` ikut dihapus); penanda bot sekarang monogram tipografis (lingkaran navy + snowflake), konsisten dengan logo.
- **Ikon dekoratif diganti tipografi.** Kotak ikon gradient di kartu layanan, kartu "alasan memilih", dan daftar nilai kini memakai **nomor** (`01`, `02`, …) dalam Plus Jakarta Sans — bukan ikon Lucide generik. Tanda kutip sitasi memakai glyph `“`, bukan ikon `Quote`.
- **Ikon fungsional tetap dipertahankan** karena membawa informasi: panah & chevron navigasi, telepon/email/lokasi/jam di footer & halaman kontak, cek di daftar deliverables, QR WhatsApp.
- Data ikon yang tidak terpakai sudah dibuang dari `src/data/services.js`, `AboutPage`, `ServicesPage`, dan `ProjectsPage`.

## Artikel & SEO

- **Rute**: `/artikel` (daftar) dan `/artikel/:slug` (detail), konten di `src/data/articles.js`.
- **Meta per halaman**: `src/hooks/usePageMeta.js` mengatur `document.title`, description, canonical, Open Graph, dan JSON-LD saat rute berubah.
- **Prerender meta**: `scripts/prerender-meta.mjs` berjalan otomatis setelah `vite build` (`npm run build`). Skrip menyalin `dist/index.html` ke folder per rute (`dist/artikel/<slug>/index.html`) dan menimpa title/description/OG/canonical + JSON-LD `Article`, sehingga crawler dan pratinjau share WhatsApp membaca isi yang benar walau aplikasinya SPA. Untuk build tanpa langkah ini: `npm run build:vite`.
- **Structured data artikel**: `Article` + `BreadcrumbList` + `FAQPage` (bila artikel punya `faq`).
- **`public/sitemap.xml` + `public/robots.txt`**: daftar semua rute termasuk artikel. **Tambahkan entri baru setiap kali menambah artikel.**
- **Menambah artikel**: tambah objek di `src/data/articles.js`, lalu tambah `<url>` di `sitemap.xml`; prerender mengikuti otomatis.
