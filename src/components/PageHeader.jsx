import { motion } from "motion/react";

const EASE = [0.32, 0.72, 0, 1];

/**
 * Latar bersama untuk header halaman dalam (Tentang, Layanan, Proyek,
 * Kontak, Artikel). Foto AC dibuat samar, lalu ditutup selubung es putih
 * di tengah supaya teks navy tetap tajam dan kontrasnya aman.
 */
export function BannerBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Foto AC sebagai tekstur latar (didinginkan ke arah es) */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        decoding="async"
        className="h-full w-full object-cover object-center grayscale-[0.7]"
      />
      {/* Tint es supaya warnanya masuk palet ARKTIS */}
      <div className="absolute inset-0 bg-brand-ice/55" />
      {/* Selubung putih di area teks: kontras judul & deskripsi tetap aman */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_48%,rgb(255_255_255/0.93)_0%,rgb(255_255_255/0.74)_58%,rgb(255_255_255/0)_100%)]" />
      {/* Navbar transparan tetap terbaca */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-bg/85 to-transparent" />
      {/* Menyambung mulus ke section berikutnya */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-brand-bg" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-brand-silver/60" />
    </div>
  );
}

export default function PageHeader({ label, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <BannerBackdrop />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-accent-ink uppercase"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mx-auto mt-6 max-w-3xl display-page"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl lead-lg"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <div className="flex flex-wrap justify-center">{children}</div>
        )}
      </div>
    </section>
  );
}
