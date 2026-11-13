/**
 * Helper gambar untuk sumber pihak ketiga (Unsplash & Pexels).
 *
 * Keduanya menerima parameter `w` pada query string, jadi srcset bisa
 * dibangun hanya dengan mengganti angka tersebut — tanpa perlu
 * menyimpan beberapa URL di data.
 */

const WIDTHS = [320, 640, 960, 1280, 1600];

/** Ganti parameter lebar (`w=...`) pada URL gambar. */
export function withWidth(url, width) {
  if (!url) return url;
  if (/[?&]w=\d+/.test(url)) return url.replace(/([?&])w=\d+/, `$1w=${width}`);
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}w=${width}`;
}

/**
 * Bangun atribut `srcSet` dari satu URL gambar.
 * Contoh: buildSrcSet(url, [400, 800, 1200]) → "url?w=400 400w, url?w=800 800w, ..."
 */
export function buildSrcSet(url, widths = WIDTHS) {
  if (!url) return undefined;
  return widths.map((w) => `${withWidth(url, w)} ${w}w`).join(", ");
}
