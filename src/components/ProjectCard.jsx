import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { buildSrcSet, withWidth } from "../lib/img";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        to={`/projects/${project.id}`}
        className="focus-ring glass block overflow-hidden rounded-[28px] shadow-soft transition-shadow"
        aria-label={`Lihat detail proyek: ${project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={withWidth(project.image, 800)}
            srcSet={buildSrcSet(project.image, [400, 800, 1200])}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            width={800}
            height={600}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-brand-primary uppercase backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-medium text-brand-secondary">
            <span>{project.client}</span>
            <span className="h-1 w-1 rounded-full bg-brand-secondary/50" />
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 line-clamp-2 display-card text-xl transition-colors group-hover:text-brand-accent">
            {project.title}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-brand-secondary">
            {project.description}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
            <span className="text-xs font-semibold text-brand-secondary">
              {project.numberOfUnits} unit — {project.acType}
            </span>
            <span className="bg-primary-gradient grid h-9 w-9 place-items-center rounded-full text-white opacity-90 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
