import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactCTA from "../components/ContactCTA";
import { company } from "../data/company";
import { areas, areaSummary, visitSteps } from "../data/areas";
import { usePageMeta, SITE_URL } from "../hooks/usePageMeta";

/** Nomor WhatsApp dari data perusahaan, dengan pesan yang menyebut wilayah. */
const waLink = (areaName) =>
  `https://wa.me/${company.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Halo Sejukin, saya di ${areaName} ingin booking layanan AC.`,
  )}`;

export default function AreasPage() {
  usePageMeta({
    title: "Area Kerja — Layanan AC Jabodetabek",
    description:
      "Sejukin melayani pemasangan, servis, perbaikan, dan isi freon AC di seluruh Jabodetabek: Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi.",
    path: "/area",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Jasa Pasang, Servis & Perbaikan AC",
      serviceType: "Air conditioner installation and maintenance",
      url: `${SITE_URL}/area`,
      provider: {
        "@type": "HVACBusiness",
        name: company.name,
        areaServed: areas.map((area) => area.name),
      },
      areaServed: areas.map((area) => ({
        "@type": "AdministrativeArea",
        name: area.name,
      })),
    },
  });

  return (
    <>
      <PageHeader
        label="Area Kerja"
        title="Melayani seluruh Jabodetabek, setiap hari."
        description={`Dari Jakarta sampai Cikarang — teknisi bersertifikat untuk pemasangan, servis, perbaikan, dan isi freon AC. ${company.businessHours}.`}
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {areaSummary.map((stat) => (
            <span
              key={stat.label}
              className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-primary/80"
            >
              <span className="display-card text-brand-ink">{stat.value}</span>
              <span className="text-brand-secondary">{stat.label}</span>
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Jangkauan</p>
            <h2 className="mt-4 display-section-sm">
              Enam wilayah, satu standar pengerjaan.
            </h2>
            <p className="mx-auto mt-5 lead">
              Pilih wilayah Anda untuk melihat kawasan yang kami layani, lalu
              langsung booking lewat WhatsApp.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Reveal key={area.id} delay={index * 0.05}>
                <article
                  id={area.id}
                  className="glass flex h-full flex-col rounded-[28px] p-7 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display-card text-xl">{area.name}</h3>
                    <span className="font-display text-sm font-extrabold tracking-[0.16em] text-brand-accent-ink/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-secondary">
                    {area.intro}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-wrap gap-2 content-start">
                    {area.localities.map((locality) => (
                      <li
                        key={locality}
                        className="rounded-full border border-hairline bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-secondary"
                      >
                        {locality}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(area.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-6 inline-flex items-center gap-2 border-t border-hairline pt-4 text-xs font-semibold text-brand-accent-ink transition-colors hover:text-brand-accent"
                  >
                    Booking di {area.name}
                    <ArrowRight size={14} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-3xl">
            <p className="rounded-2xl border border-hairline bg-brand-ice/60 px-5 py-4 text-center text-sm leading-relaxed text-brand-secondary">
              Di luar daftar di atas? Kirim lokasi Anda lewat WhatsApp — kami
              kabari apakah bisa dijangkau beserta estimasi biaya kunjungannya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Cara kunjungan</p>
            <h2 className="mt-4 display-section-sm">
              Tiga langkah, tanpa menebak-nebak.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {visitSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="glass h-full rounded-[28px] p-7 shadow-sm">
                  <span className="font-display block text-4xl font-extrabold tracking-tight text-brand-accent-ink/20">
                    {step.number}
                  </span>
                  <h3 className="mt-4 display-card text-lg">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-brand-secondary">
              {company.responseTime} pada jam kerja. {company.emergencyService}{" "}
              —{" "}
              <Link
                to="/contact"
                className="focus-ring rounded font-semibold text-brand-accent-ink underline-offset-4 hover:text-brand-accent hover:underline"
              >
                lihat semua kanal kontak
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
