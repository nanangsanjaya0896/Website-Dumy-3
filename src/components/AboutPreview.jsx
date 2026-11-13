import { Link } from "react-router";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { values } from "../data/company";

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-accent uppercase">
              Tentang Sejukin
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-brand-primary md:text-5xl">
              Sejak 2015, menghadirkan udara sejuk untuk ribuan ruangan.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-brand-secondary">
              Sejukin lahir dari kegelisahan sederhana: terlalu banyak jasa AC
              yang datang terlambat, bekerja asal-asalan, dan menagih lebih di
              akhir. Kami membangun tim yang kebalikannya — teknisi
              bersertifikat, harga disepakati di depan, dan garansi tertulis
              untuk setiap pekerjaan.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <li key={value.title} className="flex items-start gap-3">
                  <span className="bg-primary-gradient mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-white">
                    <BadgeCheck size={15} />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-primary">{value.title}</p>
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
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                  alt="Tim teknisi Sejukin berdiskusi merencanakan jadwal pemasangan AC"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
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
                  <span className="bg-primary-gradient grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-lg shadow-brand-accent/30">
                    <BadgeCheck size={22} />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
