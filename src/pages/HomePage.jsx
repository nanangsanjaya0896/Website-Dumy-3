import { MousePointer2 } from "lucide-react";
import Hero from "../components/Hero";
import BrandLogos from "../components/BrandLogos";
import AboutPreview from "../components/AboutPreview";
import CompanyCard from "../components/CompanyCard";
import ProjectsPreview from "../components/ProjectsPreview";
import ServicesPreview from "../components/ServicesPreview";
import StatCounter from "../components/StatCounter";
import ContactCTA from "../components/ContactCTA";
import Reveal from "../components/Reveal";

function CompanyCardSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-accent uppercase">
              Sejukin dalam genggaman
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-brand-primary md:text-5xl">
              Rapi, transparan, dan selalu bisa diandalkan.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed font-medium text-brand-secondary">
              Setiap kunjungan teknisi kami membawa standar yang sama: datang
              tepat waktu, harga sesuai estimasi, area kerja bersih kembali,
              dan garansi tertulis di tangan Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Teknisi bersertifikat", "Garansi hingga 90 hari", "Estimasi harga di depan"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-brand-primary/80"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="flex flex-col items-center">
              <CompanyCard />
              <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-secondary uppercase">
                <MousePointer2 size={13} className="text-brand-accent" />
                Coba geser kartunya
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <AboutPreview />
      <CompanyCardSection />
      <ProjectsPreview />
      <ServicesPreview />
      <StatCounter />
      <ContactCTA />
    </>
  );
}
