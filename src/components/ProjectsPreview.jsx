import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import ProjectStack from "./ProjectStack";
import { projects } from "../data/projects";

export default function ProjectsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Portofolio unggulan</p>
            <h2 className="mt-4 display-section">
              Proyek yang bisa Anda lihat dan rasakan.
            </h2>
            <p className="mt-6 max-w-md lead-lg">
              Dari rumah mewah hingga gudang logistik — setiap instalasi kami
              dokumentasikan dengan perencanaan matang dan pengerjaan presisi.
              Geser tumpukan kartu untuk menjelajah.
            </p>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-9"
            >
              <Link
                to="/projects"
                className="focus-ring bg-primary-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-shadow hover:shadow-xl hover:shadow-brand-accent/30"
              >
                Lihat Semua Proyek
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <ProjectStack items={projects.slice(0, 4)} compact />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
