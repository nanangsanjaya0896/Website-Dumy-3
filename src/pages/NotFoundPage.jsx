import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="font-display text-[20vw] leading-none font-semibold tracking-tight select-none md:text-[14rem]"
        aria-hidden="true"
      >
        <span className="text-gradient">404</span>
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="display-card text-2xl md:text-3xl"
      >
        Halaman tidak ditemukan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.32, 0.72, 0, 1] }}
        className="mt-4 max-w-md lead"
      >
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26, ease: [0.32, 0.72, 0, 1] }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-9"
      >
        <Link
          to="/"
          className="focus-ring bg-primary-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
        >
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </Link>
      </motion.div>
    </section>
  );
}
