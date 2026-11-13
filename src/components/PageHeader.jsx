import { motion } from "motion/react";

export default function PageHeader({ label, title, description, children }) {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-accent-ink uppercase"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
          className="mt-6 max-w-3xl display-page"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="mt-6 max-w-2xl lead-lg"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
