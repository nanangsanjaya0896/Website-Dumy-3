export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div
      className="flex flex-wrap items-center gap-3"
      role="group"
      aria-label="Filter kategori proyek"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`focus-ring rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-primary-gradient text-white shadow-md shadow-brand-accent/30"
                : "glass text-brand-secondary hover:border-brand-accent/40 hover:text-brand-primary"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
