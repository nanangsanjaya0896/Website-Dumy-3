import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { buildSrcSet } from "../lib/img";
import Reveal from "./Reveal";
import { values } from "../data/company";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=960&auto=format&fit=crop";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Tentang Sejukin</p>
            <h2 className="mt-4 display-section">
              Sejak 2015, menghadirkan udara sejuk untuk ribuan ruangan.
            </h2>
            <p className="mt-6 max-w-xl lead-lg">
              Sejukin lahir dari kegelisahan sederhana: terlalu banyak jasa AC
              yang datang terlambat, bekerja asal-asalan, dan menagih lebih di
              akhir. Kami membangun tim yang kebalikannya — teknisi
              bersertifikat, harga disepakati di depan, dan garansi tertulis
              untuk setiap pekerjaan.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value, i) => (
                <li key={value.title} className="flex items-start gap-3">
                  <span className="font-display mt-0.5 w-6 shrink-0 text-[13px] font-extrabold tracking-[0.12em] text-brand-accent-ink/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-primary">
                      {value.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-secondary">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="focus-ring group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-primary"
            >
              Kenali kami lebih dekat
              <span className="grid h-8 w-8 place-items-center rounded-full border border-hairline bg-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.12}>
            <div className="gradient-border">
              <div className="gradient-border-inner overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  srcSet={buildSrcSet(ABOUT_IMG, [480, 720, 960, 1440])}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  width={960}
                  height={720}
                  alt="Tim teknisi Sejukin berdiskusi merencanakan jadwal pemasangan AC"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex items-center justify-between gap-4 border-t border-hairline bg-white/80 px-6 py-5">
                  <div>
                    <p className="font-display text-2xl font-extrabold text-brand-primary">
                      12 armada siaga
                    </p>
                    <p className="mt-1 text-sm text-brand-secondary">
                      Menjangkau seluruh Jabodetabek setiap hari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
