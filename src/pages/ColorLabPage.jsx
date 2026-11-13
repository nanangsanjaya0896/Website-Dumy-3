import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Image as ImageIcon,
  Pipette,
  RotateCcw,
  Upload,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const BG = "#f0f7fa";
const DEFAULT_HEADLINE = "#0b3d5c";
const DEFAULT_SUB = "#3e6076";
const STORAGE_KEY = "sejukin:color-lab";

const presets = [
  { name: "Charcoal Netral", headline: "#161c1f", sub: "#4a5760" },
  { name: "Ink Navy", headline: "#0a2540", sub: "#40566b" },
  { name: "Ocean Deep", headline: "#0b3d5c", sub: "#3e6076" },
  { name: "Brand Blue", headline: "#0b5c8a", sub: "#3d5b6a" },
  { name: "Teal Frost", headline: "#0d4f52", sub: "#3c6265" },
  { name: "Midnight", headline: "#101c2b", sub: "#46586b" },
  { name: "Hijau Pinus", headline: "#1b3b33", sub: "#46615a" },
  { name: "Cokelat Tinta", headline: "#241a17", sub: "#5a4a42" },
];

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function rating(ratio) {
  if (ratio >= 7) return { label: "AAA", tone: "text-emerald-700" };
  if (ratio >= 4.5) return { label: "AA", tone: "text-emerald-700" };
  if (ratio >= 3) return { label: "AA besar", tone: "text-amber-700" };
  return { label: "kurang", tone: "text-rose-700" };
}

function normalizeHex(value) {
  const clean = value.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3,8}$/.test(clean)) return null;
  if (clean.length !== 3 && clean.length !== 6) return null;
  return `#${clean.toLowerCase()}`;
}

function ColorField({ label, value, onChange, hint }) {
  const [draft, setDraft] = useState(value);

  useEffect(() => setDraft(value), [value]);

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase">
          {label}
        </span>
        <span className="text-xs font-semibold text-brand-secondary">{hint}</span>
      </div>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-hairline bg-white/70 p-2 pl-3">
        <label
          className="relative h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-black/10"
          style={{ backgroundColor: value }}
        >
          <input
            type="color"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0"
            aria-label={`Pilih warna ${label}`}
          />
        </label>
        <input
          type="text"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            const next = normalizeHex(event.target.value);
            if (next) onChange(next);
          }}
          spellCheck={false}
          className="w-full bg-transparent font-mono text-sm font-semibold text-brand-ink uppercase outline-none"
          aria-label={`Kode hex ${label}`}
        />
      </div>
    </div>
  );
}

function ImagePicker({ onPick }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [hover, setHover] = useState(null);

  const loadFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const max = 1200;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      setReady(true);
      setName(file.name);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const pick = (event) => {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * canvas.height);
    const [r, g, b] = canvas
      .getContext("2d", { willReadFrequently: true })
      .getImageData(x, y, 1, 1).data;
    onPick(
      `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`,
    );
  };

  return (
    <div>
      <label className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-full border border-hairline bg-white/80 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-white">
        <Upload size={16} className="text-brand-accent" />
        Pilih gambar dari perangkat
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => loadFile(event.target.files?.[0])}
        />
      </label>
      <span className="ml-3 text-xs font-medium text-brand-secondary">
        Gambar tidak diunggah ke mana pun — diproses di browser Anda.
      </span>

      <div className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-white/50">
        {ready ? (
          <div className="relative">
            <canvas
              ref={canvasRef}
              onClick={pick}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = Math.floor(
                  ((event.clientX - rect.left) / rect.width) * event.currentTarget.width,
                );
                const y = Math.floor(
                  ((event.clientY - rect.top) / rect.height) * event.currentTarget.height,
                );
                const data = event.currentTarget
                  .getContext("2d", { willReadFrequently: true })
                  .getImageData(x, y, 1, 1).data;
                setHover(
                  `#${[data[0], data[1], data[2]]
                    .map((v) => v.toString(16).padStart(2, "0"))
                    .join("")}`,
                );
              }}
              onMouseLeave={() => setHover(null)}
              className="block max-h-[420px] w-full cursor-crosshair object-contain"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-brand-primary/80 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur-sm">
              <span className="truncate">{name}</span>
              <span className="flex items-center gap-2">
                <Pipette size={12} className="text-brand-accent-2" />
                Klik area mana pun pada gambar
                {hover && (
                  <span className="rounded-full bg-white/15 px-2 py-0.5 font-mono">
                    {hover}
                  </span>
                )}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex h-44 flex-col items-center justify-center gap-2 px-6 text-center">
            <ImageIcon size={22} className="text-brand-accent" />
            <p className="text-sm font-medium text-brand-secondary">
              Belum ada gambar. Pilih screenshot referensi / foto, lalu klik
              untuk mengambil kode warnanya.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ColorLabPage() {
  const [headline, setHeadline] = useState(DEFAULT_HEADLINE);
  const [sub, setSub] = useState(DEFAULT_SUB);
  const [target, setTarget] = useState("headline");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved?.headline) setHeadline(saved.headline);
      if (saved?.sub) setSub(saved.sub);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ headline, sub }));
    } catch {
      /* ignore */
    }
  }, [headline, sub]);

  const applyPicked = (hex) => {
    if (target === "headline") setHeadline(hex);
    else setSub(hex);
  };

  const code = `headline ${headline} · sub-headline ${sub}`;
  const headRatio = contrastRatio(headline, BG);
  const subRatio = contrastRatio(sub, BG);
  const headRating = rating(headRatio);
  const subRating = rating(subRatio);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <PageHeader
        label="Color Lab"
        title="Pilih sendiri warna teksnya."
        description="Ubah warna headline dan sub-headline, lihat hasilnya langsung dengan tipografi asli website, atau ambil warna dari gambar referensi seperti color picker. Kalau sudah pas, salin kodenya dan kirim ke saya."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Preview */}
            <div className="lg:col-span-7">
              <div className="glass overflow-hidden rounded-[28px] shadow-soft">
                <div className="flex items-center justify-between gap-3 border-b border-hairline px-6 py-4">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-secondary uppercase">
                    Pratinjau langsung
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setHeadline(DEFAULT_HEADLINE);
                      setSub(DEFAULT_SUB);
                    }}
                    className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-secondary transition-colors hover:text-brand-ink"
                  >
                    <RotateCcw size={12} />
                    Reset
                  </button>
                </div>

                <div className="relative bg-brand-bg px-6 py-10 sm:px-10 sm:py-14">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-brand-accent/10 blur-[70px]"
                  />
                  <p className="eyebrow">Terpercaya • Cepat • Bergaransi</p>
                  <h2
                    className="mt-4 display-page"
                    style={{ color: headline }}
                  >
                    Sejukin ruangan Anda
                  </h2>
                  <p className="mt-5 max-w-lg lead-lg" style={{ color: sub }}>
                    Jasa pemasangan, perawatan, dan perbaikan AC profesional
                    dengan teknisi bersertifikat dan garansi resmi di seluruh
                    Jabodetabek.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <span className="bg-primary-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25">
                      Booking Sekarang
                      <ArrowRight size={16} />
                    </span>
                    <span className="glass-strong inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-brand-ink">
                      Lihat Portofolio
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 border-t border-hairline px-6 py-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-brand-secondary">Headline</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-brand-ink uppercase">
                      {headline}
                    </p>
                    <p className={`mt-0.5 text-xs font-semibold ${headRating.tone}`}>
                      Kontras {headRatio.toFixed(1)}:1 · {headRating.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-secondary">Sub-headline / isi</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-brand-ink uppercase">
                      {sub}
                    </p>
                    <p className={`mt-0.5 text-xs font-semibold ${subRating.tone}`}>
                      Kontras {subRatio.toFixed(1)}:1 · {subRating.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6 lg:col-span-5">
              <div className="glass rounded-[28px] p-6 shadow-soft">
                <h3 className="display-card text-lg">Warna manual</h3>
                <div className="mt-4 space-y-4">
                  <ColorField
                    label="Headline"
                    value={headline}
                    onChange={setHeadline}
                    hint="judul besar"
                  />
                  <ColorField
                    label="Sub-headline"
                    value={sub}
                    onChange={setSub}
                    hint="paragraf & isi"
                  />
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Kode tersalin — kirim ke chat" : "Salin kode warna"}
                </button>
                <p className="mt-3 font-mono text-[11px] leading-relaxed text-brand-secondary">
                  {code}
                </p>
              </div>

              <div className="glass rounded-[28px] p-6 shadow-soft">
                <h3 className="display-card text-lg">Palet siap pakai</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {presets.map((preset) => {
                    const active =
                      preset.headline.toLowerCase() === headline.toLowerCase() &&
                      preset.sub.toLowerCase() === sub.toLowerCase();
                    return (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => {
                          setHeadline(preset.headline);
                          setSub(preset.sub);
                        }}
                        className={`focus-ring flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-left transition-colors ${
                          active
                            ? "border-brand-accent/60 bg-white"
                            : "border-hairline bg-white/50 hover:bg-white/80"
                        }`}
                      >
                        <span className="flex shrink-0 flex-col gap-0.5">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-black/10"
                            style={{ backgroundColor: preset.headline }}
                          />
                          <span
                            className="h-2 w-2 rounded-full border border-black/10"
                            style={{ backgroundColor: preset.sub }}
                          />
                        </span>
                        <span className="truncate text-xs font-semibold text-brand-ink">
                          {preset.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Image picker */}
          <div className="glass mt-6 rounded-[28px] p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="display-card text-lg">Ambil warna dari gambar</h3>
                <p className="mt-1 text-sm text-brand-secondary">
                  Sama seperti color picker: unggah gambar, klik bagian yang
                  warnanya Anda suka, langsung masuk ke teks.
                </p>
              </div>
              <div className="inline-flex rounded-full border border-hairline bg-white/60 p-1">
                {[
                  { id: "headline", label: "ke Headline" },
                  { id: "sub", label: "ke Sub-headline" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTarget(item.id)}
                    className={`focus-ring rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                      target === item.id
                        ? "bg-brand-primary text-white"
                        : "text-brand-secondary hover:text-brand-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <ImagePicker onPick={applyPicked} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
