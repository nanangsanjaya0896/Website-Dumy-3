import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Send, X } from "lucide-react";
import { company } from "../data/company";
import { services } from "../data/services";
import { faqs } from "../data/faqs";

/* Penanda bot: glif robot geometris (SVG garis), bukan ilustrasi hasil AI */
function RobotMark({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.2v3" />
      <circle cx="12" cy="1.8" r="1" fill="currentColor" stroke="none" />
      <rect x="3.6" y="5.2" width="16.8" height="12.4" rx="4" />
      <path d="M3.6 10.4h1.8M18.6 10.4h1.8" />
      <circle cx="9" cy="10.6" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10.6" r="1.15" fill="currentColor" stroke="none" />
      <path d="M9.4 14.4h5.2" />
    </svg>
  );
}

function BotMark({ size = "md" }) {
  const box = size === "lg" ? "h-10 w-10 rounded-2xl" : "h-7 w-7 rounded-full";
  return (
    <span
      aria-hidden="true"
      className={`${box} grid shrink-0 place-items-center bg-brand-navy text-white`}
    >
      <RobotMark className={size === "lg" ? "h-6 w-6" : "h-4 w-4"} />
    </span>
  );
}

const priceList = services
  .map((service) => `• ${service.title} — ${service.priceRange}`)
  .join("\n");

const quickPrompts = ["Harga servis", "Booking", "Area layanan", "Garansi"];

/**
 * Jawaban disusun dari data lokal (services, faqs, company).
 * Tidak ada panggilan API — semua pencocokan kata kunci terjadi di browser.
 */
function buildReply(input) {
  const text = input.toLowerCase();

  const has = (...words) => words.some((word) => text.includes(word));

  if (has("harga", "biaya", "tarif", "berapa", "price")) {
    return `Estimasi tarif layanan kami:\n${priceList}\n\nHarga final ditentukan setelah pengecekan kondisi unit. Survei dan estimasi tertulis gratis untuk Jabodetabek.`;
  }
  if (has("pasang", "instalasi", "install", "unit baru", "beli ac")) {
    return `Pemasangan AC baru mulai Rp 450.000/unit (3–6 jam per unit), sudah termasuk vakum, pengisian freon sesuai standar, perapihan pipa, dan garansi pemasangan 90 hari. Ingin dijadwalkan survei gratis?`;
  }
  if (has("cuci", "servis", "service", "perawatan", "maintenance", "bersih")) {
    return `Servis & cuci AC mulai Rp 75.000/unit, sekitar 60 menit per unit. Termasuk pembersihan filter, coil, blower, saluran drain, plus disinfektan anti-bau. Garansi servis 30 hari.`;
  }
  if (has("freon", "isi ulang", "bocor")) {
    return `Untuk isi freon, teknisi mengecek dulu kebocoran dan tekanan sistem — karena isi ulang tanpa perbaikan kebocoran hanya bertahan sebentar. Biaya pengecekan mulai Rp 150.000, dan hasilnya kami jelaskan transparan sebelum pengerjaan.`;
  }
  if (
    has(
      "rusak",
      "mati",
      "tidak dingin",
      "gak dingin",
      "ga dingin",
      "error",
      "berisik",
      "menetes",
      "perbaikan",
      "troubleshoot",
    )
  ) {
    return `Perbaikan & troubleshooting mulai Rp 150.000, mencakup 12 titik pemeriksaan: kebocoran freon, PCB, motor fan, sampai kompresor. Penggantian sparepart memakai part original dan bergaransi 90 hari.`;
  }
  if (has("garansi", "warranty")) {
    return (
      faqs.find((faq) => faq.question.toLowerCase().includes("garansi"))
        ?.answer ?? "Semua pekerjaan bergaransi tertulis."
    );
  }
  if (
    has(
      "area",
      "lokasi",
      "jangkauan",
      "jabodetabek",
      "mana saja",
      "jakarta",
      "bogor",
      "depok",
      "tangerang",
      "bekasi",
    )
  ) {
    return `Kami melayani seluruh ${company.serviceArea}: Jakarta, Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi, termasuk Cikarang & Cibubur. Di luar area itu? Bisa kami konsultasikan dulu.`;
  }
  if (
    has(
      "booking",
      "pesan",
      "jadwal",
      "order",
      "sekarang",
      "kapan",
      "hari ini",
      "besok",
    )
  ) {
    return `Booking bisa lewat WhatsApp, telepon ${company.phone}, atau formulir di halaman Kontak. Tim kami biasanya merespons dalam ${company.responseTime.replace("Biasanya merespons dalam ", "")} pada jam kerja (${company.businessHours}).`;
  }
  if (has("darurat", "malam", "24 jam", "24/7", "libur", "urgent")) {
    return (
      faqs.find((faq) => faq.question.toLowerCase().includes("darurat"))
        ?.answer ?? `Layanan darurat 24/7 tersedia untuk pelanggan kontrak.`
    );
  }
  if (
    has(
      "merek",
      "brand",
      "daikin",
      "panasonic",
      "lg",
      "samsung",
      "sharp",
      "gree",
      "midea",
      "haier",
      "mitsubishi",
    )
  ) {
    return (
      faqs.find((faq) => faq.question.toLowerCase().includes("merek"))
        ?.answer ?? "Kami menangani semua merek utama AC."
    );
  }
  if (
    has("bayar", "pembayaran", "transfer", "cicil", "tunai", "cash", "invoice")
  ) {
    return `Pembayaran bisa tunai atau transfer bank setelah pekerjaan selesai dan Anda cek hasilnya. Untuk proyek korporat, kami sediakan invoice resmi dan termin pembayaran.`;
  }
  if (has("lama", "durasi", "berapa jam", "waktu pengerjaan")) {
    return `Durasi pengerjaan: pemasangan 3–6 jam per unit, servis ±60 menit per unit, dan perbaikan 1–4 jam tergantung kasus. Teknisi selalu mengonfirmasi estimasi waktu sebelum mulai.`;
  }
  if (has("promo", "diskon", "murah", "potongan")) {
    return `Untuk pelanggan kontrak perawatan rutin (minimal 3 unit), ada harga khusus per kunjungan. Sebutkan jumlah unit Anda, nanti kami hitungkan penawarannya.`;
  }
  if (
    has(
      "kontak",
      "telepon",
      "telpon",
      "email",
      "whatsapp",
      "wa",
      "hubungi",
      "admin",
    )
  ) {
    return `Tim Sejukin bisa dihubungi di:\n• WhatsApp/Telepon: ${company.phone}\n• Email: ${company.email}\n• Jam kerja: ${company.businessHours}`;
  }
  if (has("terima kasih", "makasih", "thanks", "oke", "siap")) {
    return "Sama-sama! Kalau ada yang ingin ditanyakan lagi soal AC, tinggal chat di sini ya. Tim teknisi kami siap membantu.";
  }
  if (has("halo", "hai", "hi", "pagi", "siang", "sore", "malam")) {
    return `Halo! Saya asisten Sejukin. Ada yang bisa saya bantu — servis AC, pemasangan baru, atau perbaikan?`;
  }

  return `Saya belum yakin memahami pertanyaan itu. Saya bisa bantu soal harga, servis/cuci AC, pemasangan, perbaikan, garansi, area layanan, dan booking. Untuk kasus khusus, tim kami siap di WhatsApp ${company.phone}.`;
}

function timeLabel() {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const replyTimer = useRef(null);

  const greeting = useMemo(
    () => ({
      id: "greeting",
      role: "bot",
      text: `Halo, saya **Sejukin AI** 👋\nSaya bisa bantu soal harga servis, pemasangan, perbaikan, garansi, dan area layanan. Mau tanya apa dulu?`,
      time: timeLabel(),
    }),
    [],
  );

  useEffect(() => {
    if (open && messages.length === 0) setMessages([greeting]);
  }, [open, messages.length, greeting]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const node = scrollRef.current;
    if (node) node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 220);
  }, [open]);

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text, time: timeLabel() },
    ]);
    setInput("");
    setTyping(true);

    const delay = 550 + Math.min(1100, text.length * 20);
    replyTimer.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          role: "bot",
          text: buildReply(text),
          time: timeLabel(),
        },
      ]);
      setTyping(false);
    }, delay);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="ai-chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-label="Chat asisten Sejukin"
            className="fixed right-4 bottom-40 z-50 flex max-h-[min(32rem,calc(100dvh-11.5rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[28px] border border-hairline bg-brand-bg/95 shadow-[0_32px_70px_-32px_rgb(11_37_69/0.55)] backdrop-blur-xl sm:right-6"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-brand-navy px-5 py-4 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-6 h-24 w-24 rounded-full bg-brand-accent/40 blur-2xl"
              />
              <div className="relative flex items-center gap-3">
                <BotMark size="lg" />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-extrabold tracking-wide">
                    Sejukin AI
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] font-medium text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online · balas seketika
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup chat"
                  className="focus-ring grid h-8 w-8 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "bot" && (
                    <span className="mt-auto mr-2">
                      <BotMark />
                    </span>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      message.role === "user"
                        ? "bg-primary-gradient font-medium text-white"
                        : "border border-hairline bg-white/85 text-brand-ink"
                    }`}
                  >
                    {message.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                    <span
                      className={`mt-1 block text-[10px] font-semibold ${
                        message.role === "user"
                          ? "text-white/70"
                          : "text-brand-secondary/80"
                      }`}
                    >
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <span className="mt-auto mr-2">
                    <BotMark />
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl border border-hairline bg-white/85 px-3.5 py-3">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent"
                        style={{ animationDelay: `${dot * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 border-t border-hairline px-4 pt-3">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="focus-ring rounded-full border border-hairline bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-brand-secondary transition-colors hover:border-brand-accent/40 hover:text-brand-ink"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Composer */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
              className="p-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-hairline bg-white/90 py-1.5 pr-1.5 pl-4">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Tulis pertanyaan soal AC…"
                  className="min-w-0 flex-1 bg-transparent text-sm font-medium text-brand-ink placeholder:text-brand-secondary/70 outline-none"
                  aria-label="Tulis pesan"
                />
                <button
                  type="submit"
                  aria-label="Kirim pesan"
                  disabled={!input.trim() || typing}
                  className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-navy text-white transition-opacity disabled:opacity-40"
                >
                  <Send size={15} />
                </button>
              </div>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-brand-secondary transition-colors hover:text-brand-accent"
              >
                Butuh teknisi? Lanjut ke WhatsApp
                <ArrowUpRight size={12} />
              </a>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button — tepat di atas tombol WhatsApp */}
      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Tutup chat Sejukin AI" : "Buka chat Sejukin AI"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group fixed right-6 bottom-24 z-50"
      >
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-brand-navy text-white shadow-[0_10px_28px_-6px_rgb(11_37_69/0.55)] ring-2 ring-white/70 transition-shadow group-hover:shadow-[0_14px_34px_-6px_rgb(11_37_69/0.7)]">
          <RobotMark className="h-7 w-7" />
          <AnimatePresence initial={false}>
            {open && (
              <motion.span
                key="close-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="absolute inset-0 grid place-items-center bg-brand-navy/75 backdrop-blur-[1px]"
              >
                <X size={22} />
              </motion.span>
            )}
          </AnimatePresence>
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand-accent-2 text-[9px] font-bold text-brand-navy">
              AI
            </span>
          )}
        </span>
        <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 translate-x-1 rounded-full bg-brand-primary px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Tanya Sejukin AI
        </span>
      </motion.button>
    </>
  );
}
