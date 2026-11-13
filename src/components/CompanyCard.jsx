import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { Snowflake, Star, Clock4, AirVent } from "lucide-react";

const miniStats = [
  { icon: AirVent, value: "500+", label: "Unit terpasang" },
  { icon: Star, value: "4.9/5", label: "Rating pelanggan" },
  { icon: Clock4, value: "24/7", label: "Siaga darurat" },
];

const DRAG_LIMIT = 50;

export default function CompanyCard({ className = "" }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Penggeseran lewat keyboard: panah menggeser kartu, sama seperti drag.
  const onKeyDown = (event) => {
    const step = 12;
    const clamp = (value) => Math.max(-DRAG_LIMIT, Math.min(DRAG_LIMIT, value));
    let handled = true;
    switch (event.key) {
      case "ArrowLeft":
        x.set(clamp(x.get() - step));
        break;
      case "ArrowRight":
        x.set(clamp(x.get() + step));
        break;
      case "ArrowUp":
        y.set(clamp(y.get() - step));
        break;
      case "ArrowDown":
        y.set(clamp(y.get() + step));
        break;
      case "Home":
        x.set(0);
        y.set(0);
        break;
      default:
        handled = false;
    }
    if (handled) event.preventDefault();
  };

  return (
    <motion.div
      className={`${className} select-none`}
      animate={reduce ? undefined : { y: [0, -14, 0], rotateZ: [-1, 1, -1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        drag={reduce ? false : true}
        dragConstraints={{
          left: -DRAG_LIMIT,
          right: DRAG_LIMIT,
          top: -DRAG_LIMIT,
          bottom: DRAG_LIMIT,
        }}
        dragElastic={0.2}
        dragMomentum={false}
        whileDrag={{ scale: 1.03, cursor: "grabbing" }}
        style={{ x, y }}
        onKeyDown={onKeyDown}
        tabIndex={0}
        className="focus-ring h-96 w-72 cursor-grab touch-none"
        role="group"
        aria-label="Kartu profil Sejukin. Gunakan tombol panah untuk menggeser kartu, atau seret dengan mouse."
      >
        <div className="gradient-border h-full">
          <div className="gradient-border-inner flex flex-col overflow-hidden">
            <div className="relative h-44 shrink-0 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&w=576"
                srcSet="https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&w=288 288w, https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&w=576 576w, https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&w=864 864w"
                sizes="18rem"
                width={576}
                height={352}
                alt="Unit AC split Sejukin terpasang rapi di dinding interior modern"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-primary/55 to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-primary backdrop-blur">
                Sejak 2015
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="bg-primary-gradient grid h-10 w-10 place-items-center rounded-2xl text-white shadow-md shadow-brand-accent/30">
                  <Snowflake size={18} />
                </span>
                <div>
                  <p className="font-display text-lg leading-tight font-extrabold text-brand-primary">
                    Sejukin
                  </p>
                  <p className="text-xs font-medium text-brand-secondary">
                    Jasa AC Profesional
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {miniStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-hairline bg-brand-bg/70 px-2 py-3 text-center"
                  >
                    <stat.icon
                      size={14}
                      className="mx-auto text-brand-accent"
                    />
                    <p className="mt-1.5 font-display text-sm font-extrabold text-brand-primary">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-tight font-medium text-brand-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-auto pt-4 text-center text-[11px] font-semibold tracking-wider text-brand-secondary uppercase">
                Jabodetabek dan sekitarnya
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
