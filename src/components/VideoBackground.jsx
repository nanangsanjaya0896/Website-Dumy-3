import { useEffect, useRef, useState } from "react";
import {
  heroPosterFallback,
  heroPosterLocal,
  heroVideoSources,
} from "../data/heroMedia";

export default function VideoBackground({ onVideoComplete }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [poster, setPoster] = useState(heroPosterLocal);
  const notified = useRef(false);
  const src = heroVideoSources[srcIndex];

  const notify = () => {
    if (!notified.current) {
      notified.current = true;
      onVideoComplete?.();
    }
  };

  // Poster lokal opsional: kalau belum ada, pakai gambar cadangan.
  useEffect(() => {
    if (!heroPosterLocal) return;
    const image = new Image();
    image.onerror = () => setPoster(heroPosterFallback);
    image.src = heroPosterLocal;
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        key={src}
        className="h-full w-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        src={src}
        onCanPlay={notify}
        onError={() => {
          // Coba sumber berikutnya (lokal → cadangan) agar hero tetap hidup.
          if (srcIndex < heroVideoSources.length - 1) {
            setSrcIndex((index) => index + 1);
          }
        }}
      />

      {/* Veil tipis merata agar teks tetap terbaca — tanpa gradasi putih di atas/bawah */}
      <div className="absolute inset-0 bg-brand-bg/10" />
    </div>
  );
}
