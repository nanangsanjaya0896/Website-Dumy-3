import { Link } from "react-router";
import { MapPin, Mail, Snowflake } from "lucide-react";
import { company } from "../data/company";
import { socials } from "../data/socials";
import { WhatsAppIcon } from "./WhatsAppFloat";

export function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.061 4.859-.061l.011.001zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  );
}

export function TikTokIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

const socialIcon = (icon) => {
  switch (icon) {
    case "instagram":
      return <InstagramIcon size={18} />;
    case "whatsapp":
      return <WhatsAppIcon size={18} />;
    case "maps":
      return <MapPin size={18} />;
    case "tiktok":
      return <TikTokIcon size={18} />;
    default:
      return null;
  }
};

const menuLinks = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang" },
  { to: "/services", label: "Layanan" },
  { to: "/projects", label: "Proyek" },
  { to: "/contact", label: "Kontak" },
];

const serviceLinks = [
  { to: "/services", label: "Pasang AC" },
  { to: "/services", label: "Servis Rutin" },
  { to: "/services", label: "Isi Freon" },
  { to: "/services", label: "Bongkar Pasang" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 md:px-8 md:pt-24 lg:px-16 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <Snowflake
                className="h-7 w-7 text-brand-accent-2"
                strokeWidth={2}
                fill="rgba(56, 189, 248, 0.2)"
              />
              <span className="font-display text-xl font-bold tracking-wide">
                SEJUKIN
              </span>
            </div>
            <h2 className="mt-6 max-w-md display-section-sm text-white">
              Udara sejuk, ruangan nyaman — mulai dari{" "}
              <span className="text-gradient-bright">Sejukin</span>.
            </h2>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent-2 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent-2" />
              </span>
              {company.status}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-bg"
              >
                <WhatsAppIcon size={18} />
                WhatsApp Kami
              </a>
              <a
                href={`mailto:${company.email}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                <Mail size={16} />
                {company.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
              Menu
            </h3>
            <ul className="mt-5 space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="focus-ring text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold tracking-widest text-white/50 uppercase">
              Layanan populer
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="focus-ring text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
              Terhubung dengan kami
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-all hover:scale-105 hover:border-white/40 hover:bg-white/20 hover:text-white"
                >
                  {socialIcon(social.icon)}
                </a>
              ))}
            </div>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-white/90">Jam operasional</dt>
                <dd className="mt-1 text-white/60">{company.businessHours}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/90">Layanan darurat</dt>
                <dd className="mt-1 text-white/60">
                  {company.emergencyService}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white/90">Area layanan</dt>
                <dd className="mt-1 text-white/60">{company.serviceArea}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p className="text-white/50">© 2025 Sejukin. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="focus-ring text-white/50 transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="focus-ring text-white/50 transition-colors hover:text-white/80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
