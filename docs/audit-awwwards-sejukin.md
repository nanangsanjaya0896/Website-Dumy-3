# Audit "Awwwards-tier" — Sejukin

Metode: pipeline 9 fase dari `Ga14ctic/awwwards-skill` (dipakai sebagai **standar penilaian**, bukan di-install).
Objek: `sejukin-psi.vercel.app`, commit `f1121dd`, 13 Nov 2026. Basis: kode sumber aktual (`src/`, 3.350 baris).

---

## Ringkasan skor

| # | Fase | Skor | Catatan satu baris |
|---|------|------|--------------------|
| 1 | Brief & arah estetika | **4/10** | Belum ada satu arah yang dikunci; campuran glass-SaaS + editorial + playful |
| 2 | Palette | **6/10** | Token rapi, tapi 6 biru tanpa pemimpin; mint nyaris tak terpakai |
| 3 | Inspiration / pola | **3/10** | Pola landing SaaS generik, tidak ada referensi khas industri pendingin |
| 4 | Composition | **4/10** | Ritme seragam (semua `py-24 md:py-32`), hampir semua section "eyebrow + h2 center" |
| 5 | Motion | **6/10** | Kaya (GSAP, motion, marquee, drag, counter, stack) tapi banyak default tanpa makna |
| 6 | Implementation | **7/10** | Bersih, token konsisten, komponen rapi |
| 7 | Video | **7/10** | 1,3 MB, 1344×768, 24 fps, faststart; belum loop-seamless |
| 8 | Polish & audit (a11y/perf) | **4/10** | Placeholder kontak, semantik ARIA salah, tanpa skip-link, semua gambar hotlink |
| 9 | Verifikasi 4-viewport | **n/a** | Tidak ada browser di sandbox ini — perlu sweep manual |

**Total: 5,1/10 — "rapi dan kredibel, tapi belum punya satu hal yang bikin diingat."**

---

## Fase 1 — Brief: arah estetika belum dikunci

Skill ini menuntut **satu** arah (brutally minimal / luxury editorial / industrial brutalist / organik / playful toy-like / dst). Sejukin sekarang memakai tiga bahasa desain sekaligus:

1. **Glass-SaaS** — `.glass`, `.glass-strong`, `backdrop-blur-xl`, kartu `rounded-[28px]` (dipakai di 20+ tempat).
2. **Editorial dingin** — headline Plus Jakarta Sans 800 dengan tracking negatif, eyebrow uppercase, layout grid 12 kolom. Ini bagian terkuatnya.
3. **Playful** — kartu profil yang mengapung (`rotateZ: [-1,1,-1]`, 7 detik loop), kartu bisa di-drag, `animate-bounce` panah scroll.

Campuran ini yang membuat situs terasa "bagus tapi aman". Yang paling jujur dengan produknya (AC = udara dingin, presisi, tenang) adalah **editorial dingin**: tipografi tegas, banyak ruang kosong, satu aksen warna yang dipakai hemat, motion yang meniru perilaku udara/suhu — bukan kartu mengapung.

## Fase 2 — Palette

Yang benar: token CSS (`--color-brand-*`), tidak ada hex liar di komponen, kontras lolos (headline 16,7:1, body 6,9:1).

Yang jadi temuan:
- Enam biru aktif: `#0C2231`, `#0B2545`, `#0A1628`, `#0E86D4`, `#38BDF8`, `#0B5C8A`, plus mint `#6DD5C8`. Tidak ada hierarki "pemimpin" — akibatnya gradient biru→cyan dipakai di semua tempat (tombol, ikon, angka, judul) sehingga tidak ada satu pun yang jadi aksen khusus.
- `mint #6DD5C8` hanya muncul di aurora blob dan `gradient-border`, jadi praktis tak terlihat.
- Gradient-redup: **"purple gradients on white"** dalam versi biru — pola yang secara eksplisit ditolak skill ini. Gradient biru di atas latar terang adalah default paling umum di landing page AI-generated.
- `theme-color` di `index.html` masih `#F0F7FA` (cocok), tapi tidak ada `color-scheme` dan tidak ada varian dark — di perangkat dark mode, scrollbar & form control tetap terang.

## Fase 3 — Inspiration

Tidak ada satu pun elemen yang mengambil kosakata industri pendingin: tidak ada satuan suhu (°C), tidak ada visual aliran udara, tidak ada termostat, tidak ada pola garis louvre/kisi AC, tidak ada "sebelum–sesudah" (yang justru jadi kekuatan situs referensi ARKTIS). Semua ilustrasi = ikon Lucide generik (`Snowflake`, `AirVent`, `ShieldCheck`) yang sudah dipakai ribuan situs lain.

## Fase 4 — Composition

- **Ritme seragam.** Lima section beruntun memakai `py-24 md:py-32` + `Reveal` + eyebrow + `h2 display-section`. Scroll jadi monoton; tidak ada perubahan kontras, skala, atau lebar yang menandai "bab baru".
- **Anti-pattern yang ditolak skill:** hero = eyebrow + `h1` + paragraf + 2 tombol, semua di tengah, simetris. Ini persis "AI slop landing page" versi skill itu. Yang menyelamatkan hanya video latar.
- **Tidak ada section full-bleed** kecuali strip merek dan footer (yang baru saja diperbaiki). Rata-rata semua terkunci di `max-w-7xl`.
- **Asimetri hanya sekali** (AboutPreview & CompanyCard, 6/7 kolom) — itu bagian terbaik layout-nya dan layak jadi pola utama, bukan pengecualian.
- Footer sekarang full-bleed → sudah benar arahnya.

## Fase 5 — Motion

Yang ada: GSAP timeline hero (7 target, stagger 0,1 s), `Reveal` (fade + y32) di hampir semua blok, marquee 45 s, kartu drag + float, counter angka, stack kartu proyek, `animate-bounce`.

Temuan:
- **`Reveal` dipakai di mana-mana** → setiap blok masuk dengan gerakan yang sama. Aturan "motion-meaning": kalau semua bergerak, tidak ada yang menonjol.
- **Timeline hero bergantung pada `onCanPlay` video**; ada jaring aman 2,6 s. Artinya di koneksi lambat, teks hero bisa tidak terlihat sampai 2,6 detik. Risiko LCP + persepsi "situs lambat".
- **Kartu mengapung selamanya** (`repeat: Infinity`, 7 s) sambil bisa di-drag — gerakan tanpa pesan, dan caption "Coba geser kartunya" adalah pengakuan bahwa affordance-nya tidak jelas.
- Marquee sudah benar (linear, pause saat hover) — dipertahankan.
- `prefers-reduced-motion` hanya mematikan aurora & wa-ping; `animate-bounce` dan float kartu tetap jalan.

## Fase 6 — Implementation

Kuat: komponen kecil dan terbaca, token warna/font terpusat, `useCounter` & `Reveal` dipisah, tidak ada inline-style liar, `focus-ring` konsisten.

Catatan: `viteSingleFile()` membuat build **656 kB dalam satu `index.html`** (210 kB gzip) — CSS + JS + GSAP + motion + Lucide semuanya inline. Tidak ada chunk yang bisa di-cache terpisah, dan parser HTML harus selesai sebelum paint pertama.

## Fase 7 — Video

`hero.mp4` 1,3 MB / 1344×768 / 24 fps / 6,59 s, tanpa audio, faststart — sudah tepat. Kekurangan: tidak loop-seamless (masih ada lompatan di detik 6,59), dan poster tidak dipakai sebagai `background-image` untuk LCP instan.

## Fase 8 — Polish & audit (yang paling perlu dibereskan)

| Sev | Temuan | Lokasi |
|-----|--------|--------|
| **P0** | Nomor telepon & email masih placeholder `+62 812-0000-0000`, `hello@sejukin.id`, alamat hanya "Jakarta, Indonesia" | `src/data/company.js` |
| **P0** | Semua gambar `hotlink` ke Unsplash/Pexels; tanpa `width`/`height`/`srcset` → CLS + risiko 404 pihak ketiga | `CompanyCard`, `AboutPreview`, `ProjectsPreview`, `projects.js` |
| P1 | `role="img"` pada kartu yang interaktif (bisa di-drag) — semantik salah, drag tidak bisa dioperasikan keyboard | `CompanyCard.jsx:26` |
| P1 | `aria-label` pada `<div>` marquee non-interaktif → diabaikan screen reader | `BrandLogos.jsx:33` |
| P1 | Tidak ada skip-to-content link | `MainLayout.jsx` |
| P2 | Gradient text (`bg-clip-text`) di atas video: kontras tidak stabil mengikuti frame video; hilang total di forced-colors mode | `HeroContent.jsx` |
| P2 | Semua angka statistik gradient + count-up, tanpa konteks pembanding | `StatCounter.jsx` |
| P2 | Tidak ada `og:image`/Twitter card → share ke WhatsApp tampil tanpa gambar (ironis untuk bisnis yang CTA utamanya WhatsApp) | `index.html` |
| P2 | Tidak ada structured data `LocalBusiness` | `index.html` |

## Fase 9 — Verifikasi

Tidak bisa dijalankan di lingkungan ini (tanpa Chromium). Perlu sweep manual 4 viewport (375 / 768 / 1280 / 1600) setelah perubahan, minimal cek: hero di 375 px, footer full-bleed, stack proyek, dan menu mobile.

---

## Rencana eksekusi (berurutan, tiap langkah = 1 commit + deploy)

### Paket A — Kredibilitas (P0, cepat, tanpa risiko desain)
1. Isi data kontak nyata (atau tabel data terpisah agar mudah diganti klien).
2. `og:image` + `twitter:card` + `LocalBusiness` JSON-LD.
3. Skip-link + perbaikan semantik `CompanyCard` & `BrandLogos`.
4. Gambar: `width`/`height` + `loading`/`decoding` + `srcset` untuk 3 gambar utama.

### Paket B — Komposisi (P1, dampak visual terbesar)
5. Kunci arah **"cold editorial"**: hapus float kartu, ganti `gradient-border` → border tipis + satu aksen.
6. Hero asimetris: teks kiri (rata kiri), elemen `°C`/termostat besar di kanan — keluar dari stack tengah.
7. Ritme: selang-seling `py-20 / py-32 / py-44`, satu section full-bleed gelap sebelum footer.
8. Satu "momen tak terlupakan": angka suhu/tahun berjalan sebagai elemen tipografi raksasa, bukan kartu kaca.

### Paket C — Motion (P1)
9. Kurangi `Reveal` jadi 4 momen saja; sisanya statis.
10. Motion bermakna: mask-reveal per baris di headline hero, counter statistik dengan garis suhu, marquee dipertahankan.
11. Hero tidak lagi bergantung `onCanPlay` (pakai poster + timeline mulai saat mount).

### Paket D — Perf (P2)
12. Evaluasi `viteSingleFile()`: kalau tidak wajib, pisahkan CSS/JS agar cacheable.
13. Loop-seamless video (ping-pong) atau `poster` sebagai layer pertama.

> Rekomendasi: **A sekarang** (semua P0, ~1 jam), lalu **B langkah 6 saja** (hero asimetris) karena itu satu perubahan yang paling mengubah "rasa" situs. C bisa menyusul setelah arah B disetujui.
