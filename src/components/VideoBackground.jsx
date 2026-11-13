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

      {/* Top blend into navigation */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-bg via-brand-bg/55 to-transparent" />
      {/* Bottom blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-brand-bg" />
      {/* Soft lateral haze for text contrast */}
      <div className="absolute inset-0 bg-brand-bg/10" />
    </div>
  );
}
