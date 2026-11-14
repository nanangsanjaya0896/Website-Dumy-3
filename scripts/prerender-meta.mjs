/**
 * Prerender meta untuk setiap rute.
 *
 * Situs ini SPA + `vite-plugin-singlefile`, artinya semua rute dilayani
 * satu `index.html`. Akibatnya crawler dan pratinjau share (WhatsApp,
 * Facebook, Slack) selalu membaca judul & deskripsi halaman beranda.
 *
 * Skrip ini menyalin `dist/index.html` ke folder per rute dan menimpa
 * <title>, meta description, canonical, Open Graph, serta JSON-LD —
 * tanpa perlu mengubah aplikasi React-nya.
 *
 * Dijalankan otomatis setelah `vite build` (lihat package.json).
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { articles } from "../src/data/articles.js";

const SITE_URL = "https://sejukin-psi.vercel.app";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const staticPages = [
  {
    path: "services",
    title: "Layanan Jasa AC: Pasang, Servis, Isi Freon — Sejukin",
    description:
      "Layanan AC lengkap di Jabodetabek: pemasangan, servis rutin, deep cleaning, isi freon, dan perbaikan. Harga jelas, garansi tertulis 90 hari.",
  },
  {
    path: "about",
    title: "Tentang Sejukin — Jasa AC Sejak 2015",
    description:
      "Sejak 2015 melayani ribuan ruangan di Jabodetabek dengan teknisi bersertifikat, estimasi harga di depan, dan garansi tertulis.",
  },
  {
    path: "projects",
    title: "Portofolio Proyek Pemasangan AC — Sejukin",
    description:
      "Dokumentasi proyek pemasangan AC residensial, perkantoran, ruko, dan gudang di Jabodetabek.",
  },
  {
    path: "contact",
    title: "Kontak & Booking Servis AC — Sejukin",
    description:
      "Hubungi Sejukin untuk booking pemasangan atau servis AC. Respons biasanya dalam 30 menit pada jam kerja.",
  },
  {
    path: "artikel",
    title: "Artikel & Panduan AC — Sejukin",
    description:
      "Panduan praktis seputar AC: menghitung PK, biaya cuci AC, jenis freon, dan tanda AC perlu diservis.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function applyMeta(html, { title, description, url, jsonLd }) {
  const t = escapeHtml(title);
  const d = escapeHtml(description);

  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${url}" />`,
    );

  if (jsonLd) {
    out = out.replace(
      "</head>",
      `    <script type="application/ld+json">${JSON.stringify(
        jsonLd,
      )}</script>\n  </head>`,
    );
  }
  return out;
}

async function writePage(routePath, meta) {
  const base = await readFile(join(dist, "index.html"), "utf8");
  const html = applyMeta(base, meta);
  const target =
    routePath === ""
      ? join(dist, "index.html")
      : join(dist, routePath, "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  console.log(`  ✓ /${routePath}`.replace(/\/$/, "/"));
}

async function main() {
  console.log("Prerender meta:");

  for (const page of staticPages) {
    await writePage(page.path, {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/${page.path}`,
    });
  }

  for (const article of articles) {
    await writePage(`artikel/${article.slug}`, {
      title: `${article.title} — Sejukin`,
      description: article.description,
      url: `${SITE_URL}/artikel/${article.slug}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated,
        inLanguage: "id-ID",
        mainEntityOfPage: `${SITE_URL}/artikel/${article.slug}`,
        author: { "@type": "Organization", name: "Sejukin" },
        publisher: {
          "@type": "Organization",
          name: "Sejukin",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
      },
    });
  }

  console.log(`Selesai: ${staticPages.length + articles.length} halaman.`);
}

main().catch((error) => {
  console.error("Prerender gagal:", error);
  process.exit(1);
});
