import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/services";

export default function ServicesPreview() {
  const featured = services.slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">
            Layanan utama
          </p>
          <h2 className="mt-4 display-section">
            Satu tim untuk semua kebutuhan AC Anda.
          </h2>
          <p className="mt-5 lead-lg">
            Dari pemasangan unit pertama hingga perawatan bertahun-tahun
            kemudian — semuanya ditangani teknisi bersertifikat.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass group flex h-full flex-col rounded-[28px] p-7 shadow-soft transition-colors hover:border-brand-accent/40"
              >
                <span className="bg-primary-gradient grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md shadow-brand-accent/30">
                  <service.icon size={22} />
                </span>
                <h3 className="mt-5 display-card text-lg">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-secondary">
                  {service.description}
                </p>
                <p className="mt-5 text-xs font-semibold text-brand-accent">
                  {service.priceRange}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.15}>
          <Link
            to="/services"
            className="focus-ring group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-primary"
          >
            Jelajahi semua layanan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
