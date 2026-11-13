import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroContent() {
  return (
    <>
      <div className="gsap-hero-eyebrow mb-6 inline-flex items-center space-x-3 rounded-full border border-white/50 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-secondary shadow-sm backdrop-blur-md">
        <ShieldCheck size={14} className="text-brand-accent" />
        <span>TERPERCAYA • CEPAT • BERGARANSI</span>
      </div>

      <h1 className="gsap-hero-heading mb-6 font-display text-6xl leading-[1.05] font-extrabold tracking-tight text-balance text-brand-primary md:text-[80px]">
        <span className="text-gradient">Sejukin</span> Ruangan Anda
      </h1>

      <p className="gsap-hero-paragraph mb-6 max-w-md text-lg leading-relaxed font-medium text-brand-secondary md:text-xl">
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
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-8 py-4 font-semibold text-brand-primary backdrop-blur-md transition-colors hover:bg-white"
          >
            Lihat Portofolio Proyek
          </Link>
        </motion.div>
      </div>
    </>
  );
}
