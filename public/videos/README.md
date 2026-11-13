# Media Hero (Section 1)

Taruh file video background di folder ini dengan nama **`hero.mp4`** — situs akan
otomatis memakainya tanpa perlu mengubah kode.

- Format: MP4 (H.264 + AAC/atau tanpa audio), 1920×1080
- Ukuran disarankan: ≤ 8 MB (makin kecil makin cepat loading)
- Durasi: 8–15 detik, sebaiknya loop-nya menyambung (tidak ada potongan kasar)
- Poster (gambar tampil sebelum video siap): **`hero-poster.jpg`** di folder yang sama

Kalau `hero.mp4` belum ada, hero otomatis memakai video cadangan (CDN), jadi
halaman tidak pernah kosong.

Konfigurasi ada di `src/data/heroMedia.js`.
