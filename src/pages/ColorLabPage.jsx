import { ArrowRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

/**
 * Halaman bantu untuk memilih warna teks headline & sub-headline.
 * Headline memakai warna `headline`, sub-headline memakai `sub`.
 * Hapus halaman ini setelah warna final dipilih.
 */
const options = [
  {
    name: "Charcoal Netral",
    headline: "#161c1f",
    sub: "#4a5760",
    note: "Hitam netral tanpa kesan kebiruan. Bersih dan tegas.",
    current: true,
  },
  {
    name: "Ink Navy",
    headline: "#0a2540",
    sub: "#40566b",
    note: "Navy dalam, sedikit lebih biru dari charcoal. Kesan korporat.",
  },
  {
    name: "Ocean Deep",
    headline: "#0b3d5c",
    sub: "#3e6076",
    note: "Biru laut gelap, paling nyambung dengan aksen gradasi.",
  },
  {
    name: "Brand Blue",
    headline: "#0b5c8a",
    sub: "#3d5b6a",
    note: "Headline ikut warna biru brand, lebih berani dan berwarna.",
  },
  {
    name: "Teal Gelap",
    headline: "#0b3b3c",
    sub: "#3a5f60",
    note: "Hijau kebiruan, terasa segar dan dingin — cocok tema AC.",
  },
  {
    name: "Cokelat Tinta",
    headline: "#241a17",
    sub: "#5a4a42",
    note: "Hangat dan earthy, kontras tinggi dengan background biru muda.",
  },
];

function Swatch({ label, color }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-3 py-1 text-[11px] font-semibold text-brand-secondary">
      <span
        className="h-3 w-3 rounded-full border border-black/10"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

export default function ColorLabPage() {
  return (
    <>
      <PageHeader
        label="Color Lab"
        title="Pilih warna teks yang paling enak dilihat."
        description="Setiap kartu di bawah memakai font, ukuran, dan tata letak asli website — yang berbeda hanya warna headline dan sub-headline. Sebutkan nomornya, nanti saya terapkan ke seluruh halaman."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {options.map((option, index) => (
              <Reveal key={option.name} delay={index * 0.04}>
                <article className="glass h-full rounded-[28px] p-7 shadow-soft sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow">Opsi {index + 1}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-secondary">
                      {option.current && (
                        <>
                          <Check size={13} className="text-brand-accent" />
                          dipakai sekarang
                        </>
                      )}
                    </span>
                  </div>

                  <h2 className="mt-5 display-card text-xl">{option.name}</h2>

                  <p className="mt-5 eyebrow">Jasa AC Jabodetabek</p>
                  <p
                    className="mt-3 display-section-sm"
                    style={{ color: option.headline }}
                  >
                    Sejukin ruangan, nyamankan hidup.
                  </p>
                  <p
                    className="mt-3 max-w-lg lead"
                    style={{ color: option.sub }}
                  >
                    Jasa pemasangan, perawatan, dan perbaikan AC profesional
                    dengan teknisi bersertifikat dan garansi resmi di seluruh
                    Jabodetabek.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="focus-ring bg-primary-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25">
                      Booking Sekarang
                      <ArrowRight size={16} />
                    </span>
                    <Swatch label={option.headline} color={option.headline} />
                    <Swatch label={option.sub} color={option.sub} />
                  </div>

                  <p className="mt-5 border-t border-hairline pt-4 text-sm leading-relaxed text-brand-secondary">
                    {option.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-sm font-medium text-brand-secondary">
            Tidak ada yang pas? Sebutkan kode warna sendiri (misal
            <span className="font-semibold text-brand-ink"> #0F3B57</span>),
            saya pakai itu untuk headline dan sub-headline.
          </p>
        </div>
      </section>
    </>
  );
}
