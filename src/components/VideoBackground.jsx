import { useRef, useState } from "react";

const PRIMARY_SRC =
  "https://cdn.pixabay.com/video/2023/07/26/173158-849610807_large.mp4";
const FALLBACK_SRC =
  "https://videos.pexels.com/video-files/11519743/11519743-hd_1920_1080_50fps.mp4";
const POSTER =
  "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=1920&auto=format&fit=crop";

export default function VideoBackground({ onVideoComplete }) {
  const [src, setSrc] = useState(PRIMARY_SRC);
  const notified = useRef(false);

  const notify = () => {
    if (!notified.current) {
      notified.current = true;
      onVideoComplete?.();
    }
  };

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
        poster={POSTER}
        onCanPlay={notify}
        onError={() => {
          if (src !== FALLBACK_SRC) setSrc(FALLBACK_SRC);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Top blend into navigation */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-bg via-brand-bg/55 to-transparent" />
      {/* Bottom blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-brand-bg" />
      {/* Soft lateral haze for text contrast */}
      <div className="absolute inset-0 bg-brand-bg/10" />
    </div>
  );
}
