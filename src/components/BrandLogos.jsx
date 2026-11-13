import { Snowflake } from "lucide-react";
import { brands } from "../data/brands";

export default function BrandLogos() {
  const doubled = [...brands, ...brands];

  return (
    <section className="border-y border-hairline bg-white/40 py-10 backdrop-blur-sm">
      <p className="mb-7 px-4 text-center eyebrow text-brand-secondary">
        Melayani semua merek AC utama
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track animate-marquee flex w-max gap-4 pr-4 hover:[animation-play-state:paused]">
          {doubled.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="glass flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap text-brand-primary/80 shadow-sm"
            >
              <Snowflake size={14} className="shrink-0 text-brand-accent" aria-hidden="true" />
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
