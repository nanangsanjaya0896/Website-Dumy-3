import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, Snowflake, X } from "lucide-react";

const links = [
  { to: "/", label: "Beranda", end: true },
  { to: "/about", label: "Tentang" },
  { to: "/services", label: "Layanan" },
  { to: "/projects", label: "Proyek" },
  { to: "/services#harga", label: "Harga", hash: true },
  { to: "/contact", label: "Kontak" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on every navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll + Escape key while the menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`gsap-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-hairline bg-white/70 shadow-[0_10px_40px_-24px_rgb(15_30_45/0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            to="/"
            className="focus-ring flex items-center gap-2.5 rounded-full"
            aria-label="Sejukin — kembali ke beranda"
          >
            <Snowflake
              className="h-8 w-8 text-brand-accent-ink"
              strokeWidth={2}
              fill="rgba(91, 163, 217, 0.22)"
            />
            <span className="font-display text-2xl font-bold tracking-wide text-brand-primary">
              SEJUKIN
            </span>
          </Link>

          <nav
            className="hidden items-center space-x-10 lg:flex"
            aria-label="Navigasi utama"
          >
            {links.map((link) =>
              link.hash ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="nav-link focus-ring text-sm font-medium text-brand-primary/80 transition-colors hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `nav-link focus-ring text-sm font-medium transition-colors hover:text-brand-accent ${
                      isActive
                        ? "is-active text-brand-accent"
                        : "text-brand-primary/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <Link
            to="/contact"
            className="focus-ring bg-primary-gradient hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-brand-accent/30 lg:inline-flex"
          >
            Hubungi Teknisi
            <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-hairline bg-white/70 text-brand-primary backdrop-blur-md lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-gray-100 bg-white/95 shadow-xl backdrop-blur-xl lg:hidden"
            aria-label="Navigasi mobile"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-2xl px-4 py-3.5 text-base font-medium text-brand-primary/85 transition-colors hover:bg-brand-bg hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring bg-primary-gradient mt-3 flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25"
              >
                Hubungi Teknisi
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
