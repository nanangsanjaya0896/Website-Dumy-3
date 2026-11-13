import { useMemo, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Building2, CalendarDays, Layers } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ProjectStack from "../components/ProjectStack";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import ContactCTA from "../components/ContactCTA";
import { projects, projectCategories } from "../data/projects";

const headlineStats = [
  { icon: Layers, value: "500+", label: "Unit terpasang" },
  { icon: Building2, value: "50+", label: "Klien korporat" },
  { icon: CalendarDays, value: "10 thn", label: "Pengalaman" },
];

function FeaturedStack() {
  const featured = projects.slice(0, 4);
  const [activeIdx, setActiveIdx] = useState(0);
  const active = featured[activeIdx];

  return (
    <section className="pb-8 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProjectStack items={featured} onActiveChange={setActiveIdx} />
          </Reveal>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="glass rounded-[28px] p-7 shadow-soft sm:p-8"
                >
                  <p className="eyebrow">
                    {active.category}
                  </p>
                  <h2 className="mt-3 display-section-sm">
                    {active.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-brand-secondary">
                    {active.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-hairline bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-hairline pt-5 text-center">
                    <div>
                      <p className="display-card text-lg">
                        {active.numberOfUnits}
                      </p>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wide">
                        Unit
                      </p>
                    </div>
                    <div>
                      <p className="display-card text-lg">
                        {active.year}
                      </p>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wide">
                        Tahun
                      </p>
                    </div>
                    <div>
                      <p className="display-card text-lg">
                        90 hr
                      </p>
                      <p className="text-[11px] font-semibold text-brand-secondary uppercase tracking-wide">
                        Garansi
                      </p>
                    </div>
                  </div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-7">
                    <Link
                      to={`/projects/${active.id}`}
                      className="focus-ring bg-primary-gradient flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
                    >
                      Lihat Detail Proyek
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("Semua");

  const filtered = useMemo(
    () =>
      filter === "Semua"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        label="Portofolio Proyek"
        title="Hasil kerja yang bisa Anda lihat dan rasakan."
        description="Setiap proyek Sejukin kerjakan dengan perencanaan matang, pemasangan presisi, dan perhatian penuh pada detail."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {headlineStats.map((stat) => (
            <span
              key={stat.label}
              className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-primary/80"
            >
              <stat.icon size={15} className="text-brand-accent" />
              {stat.value} {stat.label}
            </span>
          ))}
        </motion.div>
      </PageHeader>

      <FeaturedStack />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="display-section-sm">
                  Jelajahi semua proyek.
                </h2>
                <p className="mt-3 max-w-md font-medium text-brand-secondary">
                  {filtered.length} proyek dalam kategori{" "}
                  <span className="font-semibold text-brand-accent">{filter}</span>
                </p>
              </div>
              <ProjectFilter
                categories={projectCategories}
                active={filter}
                onChange={setFilter}
              />
            </div>
          </Reveal>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
