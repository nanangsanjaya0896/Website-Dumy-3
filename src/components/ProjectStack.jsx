import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectStack({
  items,
  compact = false,
  onActiveChange,
  className = "",
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const len = items.length;

  const go = useCallback(
    (dir) => setActiveIdx((prev) => (((prev + dir) % len) + len) % len),
    [len],
  );

  useEffect(() => {
    onActiveChange?.(activeIdx);
  }, [activeIdx, onActiveChange]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const heightClass = compact
    ? "h-[300px] sm:h-[380px]"
    : "h-[340px] sm:h-[450px] md:h-[480px]";

  return (
    <div className={className}>
      <div
        className={`relative ${heightClass} [perspective:1000px]`}
        role="group"
        aria-label="Tumpukan kartu proyek unggulan — gunakan tombol panah untuk berpindah"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {items.map((item, i) => {
          const diff = (((i - activeIdx) % len) + len) % len;
          const hidden = diff > 3;
          return (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => (diff === 0 ? go(1) : setActiveIdx(i))}
              aria-label={
                diff === 0
                  ? `${item.title} — klik untuk proyek berikutnya`
                  : `Tampilkan ${item.title}`
              }
              className="glass-strong absolute inset-0 overflow-hidden rounded-[28px] text-left shadow-soft outline-none focus-visible:ring-[3px] focus-visible:ring-brand-accent/40"
              style={{ zIndex: len - diff }}
              initial={false}
              animate={{
                y: diff * 35,
                scale: 1 - diff * 0.05,
                rotateX: diff * 2,
                z: -diff * 50,
                opacity: hidden ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-brand-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-white/90 uppercase backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="mt-3 line-clamp-2 display-card text-xl text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-white/70">
                  {item.numberOfUnits} unit • {item.client} • {item.year}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Proyek sebelumnya"
          className="focus-ring glass grid h-10 w-10 place-items-center rounded-full text-brand-primary transition-transform hover:scale-105"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveIdx(i)}
              aria-label={`Ke proyek ${i + 1}: ${item.title}`}
              aria-current={i === activeIdx}
              className={`focus-ring h-2 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "bg-primary-gradient w-7"
                  : "w-2 bg-brand-primary/15 hover:bg-brand-primary/30"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Proyek berikutnya"
          className="focus-ring glass grid h-10 w-10 place-items-center rounded-full text-brand-primary transition-transform hover:scale-105"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
