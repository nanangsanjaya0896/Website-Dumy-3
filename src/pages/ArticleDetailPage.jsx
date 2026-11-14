import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import ContactCTA from "../components/ContactCTA";
import { BannerBackdrop } from "../components/PageHeader";
import NotFoundPage from "./NotFoundPage";
import { formatDate, getArticle, relatedArticles } from "../data/articles";
import { usePageMeta, SITE_URL } from "../hooks/usePageMeta";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  usePageMeta({
    title: article ? `${article.title} — Sejukin` : "Artikel tidak ditemukan — Sejukin",
    description:
      article?.description ??
      "Kumpulan panduan seputar perawatan dan pemasangan AC dari Sejukin.",
    path: `/artikel/${slug}`,
    type: "article",
    jsonLd: article
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: article.title,
              description: article.description,
              datePublished: article.date,
              dateModified: article.updated,
              inLanguage: "id-ID",
              mainEntityOfPage: `${SITE_URL}/artikel/${article.slug}`,
              author: { "@type": "Organization", name: "Sejukin" },
              publisher: {
                "@type": "Organization",
                name: "Sejukin",
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/og-image.png`,
                },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Beranda",
                  item: `${SITE_URL}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Artikel",
                  item: `${SITE_URL}/artikel`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: article.title,
                  item: `${SITE_URL}/artikel/${article.slug}`,
                },
              ],
            },
            ...(article.faq?.length
              ? [
                  {
                    "@type": "FAQPage",
                    mainEntity: article.faq.map((item) => ({
                      "@type": "Question",
                      name: item.q,
                      acceptedAnswer: { "@type": "Answer", text: item.a },
                    })),
                  },
                ]
              : []),
          ],
        }
      : undefined,
  });

  if (!article) return <NotFoundPage />;

  const related = relatedArticles(article.slug);

  return (
    <>
      <article>
        {/* Header artikel */}
        <header className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <BannerBackdrop />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
            <Link
              to="/artikel"
              className="focus-ring inline-flex items-center gap-2 rounded text-xs font-semibold tracking-wide text-brand-accent-ink uppercase transition-colors hover:text-brand-accent"
            >
              <ArrowLeft size={14} />
              Semua artikel
            </Link>

            <p className="mt-6 text-[11px] font-bold tracking-[0.18em] text-brand-accent uppercase">
              {article.category}
            </p>
            <h1 className="mt-3 display-page">{article.title}</h1>
            <p className="mt-5 lead-lg">{article.excerpt}</p>

            <p className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold text-brand-secondary">
              <span>Diterbitkan {formatDate(article.date)}</span>
              <span className="text-brand-secondary/40">•</span>
              <span>Diperbarui {formatDate(article.updated)}</span>
              <span className="text-brand-secondary/40">•</span>
              <span>baca {article.readingTime}</span>
            </p>
          </div>
        </header>

        {/* Isi artikel */}
        <div className="bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <div className="article-body pt-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {article.faq?.length ? (
                <section>
                  <h2>Pertanyaan yang sering muncul</h2>
                  {article.faq.map((item) => (
                    <div key={item.q} className="article-faq">
                      <h3>{item.q}</h3>
                      <p>{item.a}</p>
                    </div>
                  ))}
                </section>
              ) : null}
            </div>

            {/* Ajakan konsultasi */}
            <Reveal className="mt-14 rounded-[28px] border border-brand-silver/60 bg-brand-ice/60 p-7 md:p-9">
              <h2 className="display-section-sm">
                Butuh angka pasti untuk ruangan Anda?
              </h2>
              <p className="mt-3 lead">
                Kirim ukuran ruangan lewat WhatsApp — teknisi kami bantu hitung
                kebutuhan PK dan estimasi biaya pemasangan, tanpa biaya survei
                untuk area Jabodetabek.
              </p>
              <Link
                to="/contact"
                className="focus-ring bg-primary-gradient mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
              >
                Konsultasi gratis
                <ArrowRight size={16} />
              </Link>
            </Reveal>

            {/* Baca juga */}
            <div className="mt-14 border-t border-hairline pt-10">
              <h2 className="text-[11px] font-bold tracking-[0.18em] text-brand-accent-ink uppercase">
                Baca juga
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/artikel/${item.slug}`}
                    className="focus-ring group rounded-2xl border border-brand-silver/60 p-5 transition-colors hover:border-brand-accent-ink/40"
                  >
                    <p className="text-xs font-semibold text-brand-secondary">
                      {formatDate(item.date)} · baca {item.readingTime}
                    </p>
                    <h3 className="mt-2 display-card text-base transition-colors group-hover:text-brand-accent-ink">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}
