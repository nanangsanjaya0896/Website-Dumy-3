import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "../data/company";

export default function ContactCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <Reveal>
          <div className="gradient-border">
            <div className="gradient-border-inner relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-accent/10 blur-[80px]"
              />
              <motion.div
                whileHover={{ y: -2 }}
                className="relative inline-block"
              >
                <p className="eyebrow">{company.status}</p>
              </motion.div>
              <h2 className="relative mt-5 display-section">
                Siap bikin ruangan Anda sejuk lagi?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl lead-lg">
                Ceritakan kebutuhan AC Anda — tim kami{" "}
                {company.responseTime.toLowerCase()} pada jam kerja, dengan
                estimasi harga yang jelas sebelum pengerjaan.
              </p>
              <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="focus-ring bg-primary-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
                  >
                    Hubungi Teknisi
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="focus-ring glass-strong inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-brand-primary transition-colors hover:bg-white"
                  >
                    <PhoneCall size={18} className="text-brand-accent" />
                    {company.phone}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
