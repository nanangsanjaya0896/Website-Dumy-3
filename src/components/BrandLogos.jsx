import { Snowflake } from "lucide-react";
import { brands } from "../data/brands";

/**
 * Satu baris berisi brand yang diulang 2x supaya lebarnya selalu
 * melebihi lebar layar; baris ini digandakan lagi agar animasi
 * translateX(-50%) menghasilkan loop tanpa lompatan.
 */
const row = [...brands, ...brands];

function BrandChip({ brand }) {
  return (
    <div className="glass flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap text-brand-primary/80 shadow-sm">
      <Snowflake
        size={14}
        className="shrink-0 text-brand-accent"
        aria-hidden="true"
      />
      {brand}
    </div>
  );
}

export default function BrandLogos() {
  return (
    <section className="border-y border-brand-silver/50 bg-white py-10">
      <p className="eyebrow mb-7 px-4 text-center text-brand-secondary">
        Melayani semua merek AC utama
      </p>
      <p className="sr-only">Merek yang dilayani: {brands.join(", ")}.</p>
      <div
        aria-hidden="true"
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="brand-marquee">
          {[0, 1].map((group) => (
            <div key={group} className="brand-marquee-group">
              {row.map((brand, index) => (
                <BrandChip key={`${brand}-${index}`} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
