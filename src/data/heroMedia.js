/**
 * Media untuk hero (Section 1).
 *
 * CARA MENGGANTI VIDEO BACKGROUND:
 * 1. Taruh file video di folder `public/videos/` dengan nama `hero.mp4`
 *    → otomatis dipakai (tidak perlu mengubah kode).
 * 2. Format yang disarankan: MP4 (H.264), resolusi 1920×1080, tanpa audio,
 *    ukuran ≤ 8 MB, durasi 8–15 detik, dan loop-nya menyambung.
 * 3. Poster (gambar yang tampil sebelum video siap): `public/videos/hero-poster.jpg`.
 *
 * Kalau file lokal belum ada, situs otomatis memakai URL cadangan di bawah,
 * jadi hero tidak pernah kosong.
 */
export const heroVideoSources = [
  "/videos/hero.mp4",
  "https://cdn.pixabay.com/video/2023/07/26/173158-849610807_large.mp4",
  "https://videos.pexels.com/video-files/11519743/11519743-hd_1920_1080_50fps.mp4",
];

export const heroPosterLocal = "/videos/hero-poster.jpg";

export const heroPosterFallback =
  "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=1920&auto=format&fit=crop";
