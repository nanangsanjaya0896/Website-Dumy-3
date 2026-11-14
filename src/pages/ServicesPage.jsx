import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ServiceAccordion from "../components/ServiceAccordion";
import FAQAccordion from "../components/FAQAccordion";
import BrandLogos from "../components/BrandLogos";
import ContactCTA from "../components/ContactCTA";
import { services } from "../data/services";

const processSteps = [
  {
    title: "Booking",
    description: "Hubungi kami via WhatsApp atau formulir.",
  },
  {
    title: "Survei",
    description: "Teknisi cek lokasi & kalkulasi kebutuhan.",
  },
  {
    title: "Estimasi",
    description: "Penawaran harga tertulis, tanpa biaya tersembunyi.",
  },
  {
    title: "Pengerjaan",
    description: "Dikerjakan rapi sesuai SOP pabrikan.",
  },
  {
    title: "Testing",
    description: "Uji suhu, tekanan freon, dan drain.",
  },
  {
    title: "Serah Terima",
    description: "Garansi tertulis & edukasi perawatan.",
  },
];

const pricingPlans = [
  {
    name: "Hemat",
    price: "Rp 75.000",
    unit: "per unit / kunjungan",
    description: "Servis rutin untuk rumah dan apartemen.",
    features: [
      "Cuci AC split wall menyeluruh",
      "Cek freon & ampere kompresor",
      "Pembersihan filter & saluran drain",
      "Disinfektan anti-bau",
      "Garansi servis 30 hari",
    ],
    featured: false,
    cta: "Mulai dari sini",
  },
  {
    name: "Bisnis",
    price: "Rp 950.000",
    unit: "per bulan, hingga 10 unit",
    description: "Kontrak perawatan untuk kantor dan ruko.",
    features: [
      "Kunjungan terjadwal 2× per bulan",
      "Semua poin paket Hemat termasuk",
      "Prioritas jadwal teknisi",
      "Laporan kondisi unit digital",
      "Garansi layanan 90 hari",
    ],
    featured: true,
    cta: "Pilih paket Bisnis",
  },
  {
    name: "Korporat",
    price: "Kustom",
    unit: "sesuai survei & SLA",
    description: "Untuk gedung, hotel, dan fasilitas komersial.",
    features: [
      "Survei & desain sistem menyeluruh",
      "Instalasi VRV/VRF & ducting",
      "SLA respons darurat < 4 jam",
      "Account manager khusus",
      "Laporan triwulan ke manajemen",
    ],
    featured: false,
    cta: "Konsultasi dulu",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Layanan Sejukin"
        title="Dari pemasangan baru hingga perawatan berkala."
        description="Layanan AC lengkap untuk rumah, kantor, dan bangunan komersial — dikerjakan teknisi bersertifikat dengan garansi resmi tertulis."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Semua layanan</p>
            <h2 className="mt-4 display-section-sm">
              Apa pun kebutuhan AC Anda, kami punya timnya.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass group flex h-full flex-col overflow-hidden rounded-[28px] shadow-sm transition-shadow hover:shadow-soft"
                >
                  <div className="relative h-40 shrink-0 overflow-hidden sm:h-44">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={980}
                      height={547}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-arctic/40 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-2.5 py-1 font-display text-[11px] font-extrabold tracking-[0.16em] text-brand-ink backdrop-blur-sm">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-6">
                    <h3 className="display-card text-xl">{service.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-secondary">
                      {service.description}
                    </p>
                    <p className="mt-5 border-t border-hairline pt-4 text-xs font-semibold text-brand-accent">
                      {service.priceRange}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Cara kerja kami</p>
            <h2 className="mt-4 display-section-sm">
              Enam langkah, tanpa kejutan.
            </h2>
          </Reveal>
          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="bg-primary-gradient absolute top-6 right-[8%] left-[8%] hidden h-px opacity-40 lg:block"
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div className="relative text-center">
                    <span className="font-display relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border border-brand-accent-ink/25 bg-white text-sm font-extrabold text-brand-accent-ink ring-4 ring-brand-bg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 display-card">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-brand-secondary">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Detail & estimasi</p>
            <h2 className="mt-4 display-section-sm">
              Buka untuk melihat ruang lingkup tiap layanan.
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={0.1}>
            <ServiceAccordion />
          </Reveal>
        </div>
      </section>

      <section id="harga" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Paket harga</p>
            <h2 className="mt-4 display-section-sm">
              Harga jelas sebelum teknisi berangkat.
            </h2>
          </Reveal>
          <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08} className="h-full">
                {plan.featured ? (
                  <div className="gradient-border relative h-full lg:-translate-y-4">
                    <span className="bg-primary-gradient absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-md shadow-brand-accent/30">
                      Paling populer
                    </span>
                    <div className="gradient-border-inner flex h-full flex-col p-8">
                      <PlanBody plan={plan} />
                    </div>
                  </div>
                ) : (
                  <div className="glass flex h-full flex-col rounded-[28px] p-8 shadow-soft">
                    <PlanBody plan={plan} />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center" delay={0.1}>
            <p className="text-sm font-medium text-brand-secondary">
              Semua harga sudah termasuk jasa teknisi. Sparepart pengganti
              selalu dikonfirmasi terlebih dahulu.
            </p>
          </Reveal>
        </div>
      </section>

      <BrandLogos />

      <section id="faq" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Pertanyaan umum</p>
            <h2 className="mt-4 display-section-sm">
              Yang sering ditanyakan pelanggan.
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={0.1}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function PlanBody({ plan }) {
  return (
    <>
      <h3 className="display-card text-lg tracking-wide uppercase">
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span
          className={`font-display text-4xl font-extrabold tracking-tight ${plan.featured ? "text-gradient" : "text-brand-primary"}`}
        >
          {plan.price}
        </span>
      </div>
      <p className="mt-1 text-xs font-semibold tracking-wide text-brand-secondary uppercase">
        {plan.unit}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-brand-secondary">
        {plan.description}
      </p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-hairline pt-6">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm font-medium text-brand-primary/85"
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-brand-accent"
            />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`focus-ring mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
          plan.featured
            ? "bg-primary-gradient text-white shadow-lg shadow-brand-accent/30 hover:shadow-xl"
            : "border border-hairline bg-white/70 text-brand-primary hover:border-brand-accent/40 hover:bg-white"
        }`}
      >
        {plan.cta}
        <ArrowRight size={16} />
      </Link>
    </>
  );
}
