import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, index) => {
        const open = openIdx === index;
        return (
          <div
            key={faq.question}
            className="glass mb-4 overflow-hidden rounded-[28px] shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : index)}
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="display-card text-base sm:text-lg">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                  open
                    ? "bg-primary-gradient border-transparent text-white shadow-md shadow-brand-accent/30"
                    : "border-hairline bg-white/70 text-brand-primary"
                }`}
                aria-hidden="true"
              >
                <ChevronDown size={17} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-panel-${index}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-relaxed text-brand-secondary sm:px-8">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
