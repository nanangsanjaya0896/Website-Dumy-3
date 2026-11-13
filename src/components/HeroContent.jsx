import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <>
      <div className="gsap-hero-eyebrow mb-6 inline-flex items-center space-x-3 rounded-full border border-white/50 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand-secondary shadow-sm backdrop-blur-md">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-brand-accent"
        />
        <span>TERPERCAYA • CEPAT • BERGARANSI</span>
      </div>

      <h1 className="gsap-hero-heading mb-6 display-hero">
        <span className="text-gradient">Sejukin</span> Ruangan Anda
      </h1>

      <p className="gsap-hero-paragraph mb-6 max-w-md lead-lg">
        Jasa pemasangan, perawatan, dan perbaikan AC profesional dengan teknisi
        bersertifikat dan garansi resmi di seluruh Jabodetabek.
      </p>

      <div className="gsap-hero-buttons flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/contact"
            className="focus-ring bg-primary-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
          >
            Booking Sekarang
            <ArrowRight size={18} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-brand-accent-ink/40 bg-white/85 px-8 py-4 font-semibold text-brand-accent-ink backdrop-blur-md transition-colors hover:border-brand-accent-ink hover:bg-brand-ice"
          >
            Lihat Portofolio Proyek
          </Link>
        </motion.div>
      </div>
    </>
  );
}
