import { useEffect } from "react";

const SITE_URL = "https://sejukin-ac.vercel.app";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Ubah title, meta description, Open Graph, canonical, dan JSON-LD
 * sesuai halaman yang sedang dibuka.
 *
 * Catatan: situs ini SPA, jadi meta di atas dipasang saat runtime.
 * Google bisa merendernya, tetapi pratinjau share (WhatsApp/Facebook)
 * hanya membaca HTML awal — karena itu artikel juga terdaftar di
 * `public/sitemap.xml` dan ringkasannya ada di `index.html`.
 */
export function usePageMeta({ title, description, path = "/", type = "website", jsonLd }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = title.includes("Sejukin") ? title : `${title} — Sejukin`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setCanonical(url);

    const scriptId = "page-jsonld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [title, description, path, type, jsonLd]);
}

export { SITE_URL };
