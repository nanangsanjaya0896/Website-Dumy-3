import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactCTA from "../components/ContactCTA";
import { articles, formatDate } from "../data/articles";
import { usePageMeta, SITE_URL } from "../hooks/usePageMeta";

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

  usePageMeta({
    title: "Artikel & Panduan AC — Sejukin",
    description:
      "Panduan praktis seputar AC: cara menghitung PK, biaya cuci AC Jakarta, perbedaan freon R32 dan R410A, hingga tanda AC perlu diservis.",
    path: "/artikel",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Artikel & Panduan AC Sejukin",
      description:
        "Kumpulan panduan teknis dan harga seputar jasa AC di Jabodetabek.",
      url: `${SITE_URL}/artikel`,
      hasPart: articles.map((a) => ({
        "@type": "Article",
        headline: a.title,
        url: `${SITE_URL}/artikel/${a.slug}`,
        datePublished: a.date,
      })),
    },
  });

  return (
    <>
      <PageHeader
        label="Artikel & Panduan"
        title="Ilmu AC yang biasanya hanya diketahui teknisi."
        description="Kami menuliskan hal-hal yang paling sering ditanyakan pelanggan — supaya Anda bisa mengambil keputusan sebelum teknisi datang, bukan sesudahnya."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {/* Artikel unggulan */}
          <Reveal>
            <Link
              to={`/artikel/${featured.slug}`}
              className="focus-ring group grid gap-8 rounded-[28px] border border-brand-silver/60 bg-brand-ice/60 p-7 transition-colors hover:border-brand-accent-ink/40 md:grid-cols-[1.4fr_1fr] md:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase">
                  <span className="text-brand-accent">Terbaru</span>
                  <span className="text-brand-secondary/60">•</span>
                  <span className="text-brand-accent-ink">{featured.category}</span>
                </div>
                <h2 className="mt-4 display-section-sm transition-colors group-hover:text-brand-accent-ink">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl lead">{featured.excerpt}</p>
                <p className="mt-6 text-xs font-semibold tracking-wide text-brand-secondary">
                  {formatDate(featured.date)} · baca {featured.readingTime}
                </p>
              </div>
              <div className="flex items-end justify-between md:flex-col md:items-end">
                <span className="font-display text-[clamp(3rem,8vw,6rem)] leading-none font-extrabold text-brand-accent-ink/15">
                  01
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent-ink">
                  Baca artikel
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Daftar artikel lain */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <Link
                  to={`/artikel/${article.slug}`}
                  className="focus-ring group flex h-full flex-col rounded-[28px] border border-brand-silver/60 bg-white p-7 transition-colors hover:border-brand-accent-ink/40"
                >
                  <span className="font-display text-3xl font-extrabold tracking-tight text-brand-accent-ink/20">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-[11px] font-bold tracking-[0.16em] text-brand-accent-ink uppercase">
                    {article.category}
                  </p>
                  <h3 className="mt-2 display-card text-lg">{article.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-secondary">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4 text-xs font-semibold text-brand-secondary">
                    <span>{formatDate(article.date)}</span>
                    <span className="inline-flex items-center gap-1 text-brand-accent-ink">
                      Baca
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
