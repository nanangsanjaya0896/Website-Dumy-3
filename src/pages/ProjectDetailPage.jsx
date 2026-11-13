import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Layers,
  Quote,
  ThermometerSnowflake,
  X,
} from "lucide-react";
import Reveal from "../components/Reveal";
import ContactCTA from "../components/ContactCTA";
import NotFoundPage from "./NotFoundPage";
import { projects } from "../data/projects";

const metaIcons = [
  { icon: Building2, label: "Klien", key: "client" },
  { icon: CalendarDays, label: "Tahun", key: "year" },
  { icon: ThermometerSnowflake, label: "Tipe AC", key: "acType" },
  { icon: Layers, label: "Jumlah Unit", key: "numberOfUnits" },
];

function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-primary/70 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri foto proyek"
    >
      <motion.img
        key={index}
        src={images[index]}
        alt={`Dokumentasi proyek ${index + 1}`}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="max-h-[82vh] max-w-[90vw] rounded-[28px] object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup galeri"
        className="focus-ring absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/30"
      >
        <X size={20} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Foto sebelumnya"
        className="focus-ring absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/30 sm:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Foto berikutnya"
        className="focus-ring absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/30 sm:right-8"
      >
        <ChevronRight size={22} />
      </button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => String(item.id) === id);
  const [lightbox, setLightbox] = useState(null);

  if (!project) {
    return <NotFoundPage />;
  }

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const navigateLightbox = (dir) =>
    setLightbox(
      (prev) =>
        (((prev + dir) % project.gallery.length) + project.gallery.length) %
        project.gallery.length,
    );

  return (
    <>
      <article className="pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal>
            <Link
              to="/projects"
              className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-accent"
            >
              <ArrowLeft size={16} />
              Semua Proyek
            </Link>
            <div className="relative h-[65vh] min-h-[420px] overflow-hidden rounded-[28px] shadow-soft">
              <img
                src={withWidth(project.image, 1600)}
                srcSet={buildSrcSet(project.image, [640, 960, 1280, 1920])}
                sizes="100vw"
                width={1600}
                height={900}
                alt={project.title}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                  {project.category}
                </span>
                <h1 className="mt-4 max-w-3xl display-page text-white">
                  {project.title}
                </h1>
                <p className="mt-3 text-sm font-medium text-white/75">
                  {project.client} • {project.year}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metaIcons.map((meta, index) => (
              <Reveal key={meta.label} delay={index * 0.06}>
                <div className="glass flex h-full items-center gap-4 rounded-[28px] p-5">
                  <span className="bg-primary-gradient grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white shadow-md shadow-brand-accent/30">
                    <meta.icon size={19} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-wider text-brand-secondary uppercase">
                      {meta.label}
                    </p>
                    <p className="truncate display-card">
                      {meta.key === "numberOfUnits"
                        ? `${project[meta.key]} unit`
                        : project[meta.key]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-14 py-16 md:py-24 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Gambaran proyek</p>
              <h2 className="mt-4 display-section-sm">
                Cerita di balik instalasi ini.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <p className="max-w-[62ch] lead">{project.overview}</p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="display-section-sm">Dokumentasi pengerjaan.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 0.05}
                className={index === 0 ? "col-span-2 row-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Perbesar dokumentasi ${index + 1}`}
                  className="focus-ring group block h-full w-full overflow-hidden rounded-[28px]"
                >
                  <img
                    src={image}
                    alt={`Dokumentasi ${project.title} ${index + 1}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0 ? "aspect-square md:h-full" : "aspect-[4/3]"
                    }`}
                  />
                </button>
              </Reveal>
            ))}
          </div>

          <div className="py-16 md:py-24">
            <Reveal>
              <p className="eyebrow">Tahapan kerja</p>
              <h2 className="mt-4 display-section-sm">
                Proses yang kami jalani.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.process.map((step, index) => (
                <Reveal key={step.step} delay={index * 0.06}>
                  <div className="glass h-full rounded-[28px] p-7 shadow-soft">
                    <p className="font-display text-4xl font-extrabold tracking-tight">
                      <span className="text-gradient">{step.step}</span>
                    </p>
                    <h3 className="mt-4 display-card text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <h2 className="display-section-sm">Hasil yang terukur.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06}>
                <div className="glass h-full rounded-[28px] px-6 py-8 text-center shadow-soft">
                  <p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                    <span className="text-gradient">{metric.value}</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-wide text-brand-secondary uppercase">
                    {metric.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="gradient-border">
              <div className="gradient-border-inner relative px-7 py-10 md:px-12 md:py-12">
                <span className="bg-primary-gradient absolute -top-6 left-10 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg shadow-brand-accent/30">
                  <Quote size={20} />
                </span>
                <blockquote className="font-display text-xl leading-snug font-bold tracking-tight text-balance text-brand-primary md:text-2xl">
                  “{project.testimonial.quote}”
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-brand-primary">
                  {project.testimonial.name}
                  <span className="ml-2 font-medium text-brand-secondary">
                    — {project.testimonial.role}
                  </span>
                </p>
                <p className="mt-6 max-w-3xl leading-relaxed text-brand-secondary">
                  {project.results}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-center justify-between gap-5 py-16 sm:flex-row md:py-20">
            <Link
              to="/projects"
              className="focus-ring glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-white/80"
            >
              <ArrowLeft size={16} />
              Semua Proyek
            </Link>
            <Link
              to={`/projects/${nextProject.id}`}
              className="focus-ring group inline-flex items-center gap-3 rounded-full text-right"
            >
              <span>
                <span className="block text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                  Proyek berikutnya
                </span>
                <span className="block max-w-[16rem] truncate display-card transition-colors group-hover:text-brand-accent">
                  {nextProject.title}
                </span>
              </span>
              <span className="bg-primary-gradient grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-md shadow-brand-accent/30 transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </article>

      <ContactCTA />

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={project.gallery}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onNavigate={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
