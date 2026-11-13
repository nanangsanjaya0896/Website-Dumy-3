import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ExperienceTimeline from "../components/ExperienceTimeline";
import StatCounter from "../components/StatCounter";
import ContactCTA from "../components/ContactCTA";
import { values } from "../data/company";
import { buildSrcSet } from "../lib/img";

const ABOUT_PAGE_IMG =
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=960&auto=format&fit=crop";

const reasons = [
  {
    title: "Teknisi Bersertifikat",
    description:
      "Seluruh teknisi memegang sertifikasi resmi pabrikan dan mengikuti pelatihan ulang setiap tahun.",
  },
  {
    title: "Harga Transparan",
    description:
      "Estimasi tertulis sebelum pengerjaan dimulai. Tidak ada biaya kejutan di akhir pekerjaan.",
  },
  {
    title: "Garansi Layanan",
    description:
      "Garansi tertulis hingga 90 hari untuk setiap pemasangan dan perbaikan — dihormati tanpa drama.",
  },
  {
    title: "Respons Cepat",
    description:
      "Konfirmasi booking dalam 30 menit pada jam kerja, siaga darurat 24/7 untuk pelanggan kontrak.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Tentang Sejukin"
        title="Mitra terpercaya untuk kenyamanan udara Anda."
        description="Kami adalah tim teknisi AC yang percaya bahwa pekerjaan rapi, harga jujur, dan garansi nyata adalah standar minimum — bukan nilai tambah."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Cerita kami</p>
              <h2 className="mt-4 display-section-sm">
                Berawal dari tiga teknisi dan satu kekesalan yang sama.
              </h2>
              <div className="mt-6 space-y-5 lead">
                <p>
                  Tahun 2015, pendiri Sejukin berulang kali mendengar keluhan
                  yang sama dari tetangganya: teknisi AC datang telat, bekerja
                  tanpa penjelasan, lalu menagih biaya tambahan di akhir. Dari
                  situ lahir Sejukin — jasa AC yang bekerja dengan SOP jelas,
                  estimasi harga di depan, dan garansi tertulis.
                </p>
                <p>
                  Kini, sepuluh tahun kemudian, tim kami tumbuh menjadi 12
                  armada yang melayani rumah tangga, kantor, hingga gudang dan
                  hotel di seluruh Jabodetabek — tanpa pernah mengubah prinsip
                  awal itu.
                </p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <li key={value.title} className="glass rounded-2xl px-5 py-4">
                    <p className="display-card">{value.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-secondary">
                      {value.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.12}>
              <div className="gradient-border">
                <div className="gradient-border-inner overflow-hidden">
                  <img
                    src={ABOUT_PAGE_IMG}
                    srcSet={buildSrcSet(ABOUT_PAGE_IMG, [480, 720, 960, 1440])}
                    sizes="(min-width: 1024px) 38vw, 92vw"
                    width={960}
                    height={1200}
                    alt="Teknisi Sejukin memeriksa instalasi kelistrikan unit AC"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kenapa memilih Sejukin</p>
            <h2 className="mt-4 display-section">
              Empat hal yang tidak pernah kami tawar.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass h-full rounded-[28px] p-7 transition-all hover:border-brand-accent/50 hover:shadow-soft"
                >
                  <span className="font-display block text-4xl font-extrabold tracking-tight text-brand-accent-ink/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 display-card text-lg">{reason.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-secondary">
                    {reason.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Perjalanan kami</p>
              <h2 className="mt-4 display-section-sm">
                Satu dekade tumbuh bersama pelanggan.
              </h2>
              <p className="mt-5 leading-relaxed text-brand-secondary">
                Setiap milestone dicapai berkat kepercayaan yang kami jaga satu
                per satu — dari servis pertama hingga kontrak korporat.
              </p>
            </Reveal>
            <div className="lg:col-span-8">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </section>

      <StatCounter />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal>
            <div className="gradient-border">
              <div className="gradient-border-inner relative px-8 py-14 text-center md:px-20 md:py-16">
                <span className="bg-primary-gradient mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg shadow-brand-accent/30">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl leading-none text-brand-accent-ink/25"
                  >
                    &ldquo;
                  </span>
                </span>
                <blockquote className="mx-auto mt-8 max-w-3xl font-display text-2xl leading-snug font-bold tracking-tight text-balance text-brand-primary md:text-3xl">
                  “Kami percaya kenyamanan ruangan bukan kemewahan, melainkan
                  kebutuhan. Setiap instalasi Sejukin kerjakan dengan standar
                  tertinggi agar pelanggan merasakan perbedaannya.”
                </blockquote>
                <p className="mt-6 text-sm font-semibold tracking-wide text-brand-secondary uppercase">
                  Tim Pendiri Sejukin
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
