import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock4, Plus, Tag } from "lucide-react";
import { services } from "../data/services";

export default function ServiceAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      {services.map((service, index) => {
        const open = openIdx === index;
        return (
          <div
            key={service.number}
            className="glass mb-4 overflow-hidden rounded-[28px] shadow-sm transition-shadow hover:shadow-soft"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : index)}
              aria-expanded={open}
              aria-controls={`service-panel-${index}`}
              className="focus-ring flex w-full items-center gap-4 px-6 py-5 text-left sm:gap-6 sm:px-8 sm:py-6"
            >
              <span
                className={`font-display text-sm font-extrabold tracking-widest transition-colors ${
                  open ? "text-brand-accent" : "text-brand-accent/60"
                }`}
              >
                {service.number}
              </span>
              <span className="flex-1 display-card text-lg sm:text-xl">
                {service.title}
              </span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                  open
                    ? "bg-primary-gradient border-transparent text-white shadow-md shadow-brand-accent/30"
                    : "border-hairline bg-white/70 text-brand-primary"
                }`}
                aria-hidden="true"
              >
                <Plus size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`service-panel-${index}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-7 sm:px-8">
                    <p className="max-w-2xl leading-relaxed text-brand-secondary">
                      {service.description}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-brand-primary/85"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-brand-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-brand-secondary">
                        <Clock4 size={13} className="text-brand-accent" />
                        {service.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-brand-secondary">
                        <Tag size={13} className="text-brand-accent" />
                        {service.priceRange}
                      </span>
                      <Link
                        to="/contact"
                        className="focus-ring group ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-primary"
                      >
                        Booking layanan ini
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
