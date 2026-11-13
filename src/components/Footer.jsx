import { Link } from "react-router";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Snowflake,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
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

const socialIcon = (icon, size = 16) => {
  switch (icon) {
    case "instagram":
      return <InstagramIcon size={size} />;
    case "whatsapp":
      return <WhatsAppIcon size={size} />;
    case "maps":
      return <MapPin size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    default:
      return null;
  }
};

/* ── Tautan footer ─────────────────────────────────────────────── */
const serviceLinks = [
  { to: "/services", label: "Pasang AC Baru" },
  { to: "/services", label: "Servis & Perawatan" },
  { to: "/services", label: "Perbaikan & Troubleshooting" },
  { to: "/services", label: "Isi Ulang Freon" },
  { to: "/services", label: "Bongkar & Pindah Unit" },
  { to: "/services", label: "Kontrak Perawatan Berkala" },
];

const infoLinks = [
  { to: "/about", label: "Tentang Kami" },
  { to: "/projects", label: "Portofolio Proyek" },
  { to: "/services#harga", label: "Harga & Paket" },
  { to: "/contact", label: "Cara Booking" },
  { to: "/about", label: "Garansi & SOP Kerja" },
  { to: "/services#faq", label: "Pertanyaan Umum" },
];

const legalLinks = [
  { to: "/privacy", label: "Kebijakan Privasi" },
  { to: "/terms", label: "Syarat Layanan" },
];

const footerLinkClass =
  "text-[13.5px] font-medium text-white/60 transition-colors hover:text-white";

function FooterLink({ to, label }) {
  return (
    <Link to={to} className={`focus-ring ${footerLinkClass} rounded`}>
      {label}
    </Link>
  );
}

function SocialButton({ social }) {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky/50 hover:bg-white/5 hover:text-white"
    >
      {socialIcon(social.icon)}
    </a>
  );
}

/* QR asli yang mengarah ke WhatsApp, pesan sudah terisi otomatis */
function WhatsAppQr() {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 p-3">
      <div className="rounded-lg bg-white p-2" aria-hidden="true">
        <QRCodeSVG
          value={company.whatsappLink}
          size={64}
          level="M"
          bgColor="#ffffff"
          fgColor="#0a1628"
        />
      </div>
      <div>
        <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/80 uppercase">
          Scan &amp; Chat
        </p>
        <p className="mt-1 text-[11px] text-white/40">Arahkan kamera ke kode</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="kontak"
      className="relative overflow-hidden bg-brand-navy text-white/60"
    >
      <div className="relative z-[2] mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 md:px-8 md:pt-28 lg:px-16 xl:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="focus-ring inline-flex items-center gap-2.5 rounded-lg"
              aria-label="Sejukin — kembali ke beranda"
            >
              <Snowflake
                className="h-8 w-8 text-brand-sky"
                strokeWidth={2}
                fill="rgba(91, 163, 217, 0.2)"
              />
              <span className="font-display text-xl font-bold tracking-wide text-white">
                SEJUKIN
              </span>
            </Link>

            <p className="mt-6 text-[13.5px] leading-relaxed text-white/55">
              {company.tagline}
              <br />
              <span className="text-white/40">
                Pasang, servis, dan perbaikan AC — bergaransi tertulis.
              </span>
            </p>

            <p className="mt-5 flex items-start gap-2 text-[12.5px] font-semibold text-white/45">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-sky" />
              {company.serviceArea}
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <SocialButton key={social.label} social={social} />
              ))}
            </div>
          </div>

          {/* Layanan */}
          <nav aria-label="Layanan">
            <h2 className="text-[11px] font-extrabold tracking-[0.28em] text-white/35 uppercase">
              Layanan
            </h2>
            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Informasi */}
          <nav aria-label="Informasi">
            <h2 className="text-[11px] font-extrabold tracking-[0.28em] text-white/35 uppercase">
              Informasi
            </h2>
            <ul className="mt-6 space-y-3.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h2 className="text-[11px] font-extrabold tracking-[0.28em] text-white/35 uppercase">
              Kontak
            </h2>
            <ul className="mt-6 space-y-4 text-[13.5px]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-mint" />
                <div>
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="focus-ring font-bold text-white/85 transition-colors hover:text-white"
                  >
                    {company.phone}
                  </a>
                  <p className="text-[11.5px] text-white/40">
                    Respons ± 30 menit di jam kerja
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-mint" />
                <a
                  href={`mailto:${company.email}`}
                  className="focus-ring font-medium text-white/70 transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-mint" />
                <div className="text-[12.5px] leading-relaxed text-white/55">
                  {company.hours.map((row) => (
                    <p key={row.day}>
                      {row.day}: {row.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-7">
              <WhatsAppQr />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 pt-8 text-[12px] text-white/35 md:flex-row">
          <p>
            © {year} {company.name}. Semua hak dilindungi undang-undang.
          </p>
          <p className="font-semibold text-white/45">
            Dipercaya 500+ unit terpasang di Jabodetabek.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="focus-ring rounded text-[12px] font-medium text-white/35 transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Watermark raksasa */}
      <div
        className="pointer-events-none relative select-none"
        aria-hidden="true"
      >
        <div className="mx-auto flex max-w-7xl items-end justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <span className="font-display -mb-[0.16em] text-[clamp(3rem,15vw,13rem)] leading-none font-extrabold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]">
            SEJUKIN
          </span>
          <Snowflake
            className="-mb-4 h-16 w-16 text-white/[0.05] md:h-24 md:w-24"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Kembali ke atas */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="focus-ring group absolute top-8 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent hover:text-white md:right-10"
        aria-label="Kembali ke atas"
      >
        <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45" />
      </button>
    </footer>
  );
}
