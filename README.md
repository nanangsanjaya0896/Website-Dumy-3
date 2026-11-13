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

## Catatan Desain

- Palet: `brand-bg #F0F7FA`, aksen gradasi `#0E86D4 → #38BDF8`, mint `#6DD5C8`.
- Kartu memakai glassmorphism (`bg-white/60 backdrop-blur-xl border-hairline`) dan radius `28px`.
- Aurora background bergerak lambat di luar hero dan otomatis berhenti saat `prefers-reduced-motion` aktif.
- Timeline GSAP hero memiliki safety timeout agar konten tidak pernah tertinggal dalam keadaan tersembunyi.
