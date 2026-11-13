import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { brands, serviceTypes, acTypes } from "../data/brands";
import { company } from "../data/company";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceType: "",
  acBrand: "",
  acType: "",
  numberOfUnits: 1,
  preferredDate: "",
  message: "",
};

const inputClass =
  "w-full rounded-2xl border border-hairline bg-white/70 px-4 py-3 text-sm font-medium text-brand-primary placeholder:text-brand-secondary/60 transition-all outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/15";

const labelClass =
  "mb-1.5 block text-xs font-semibold tracking-wide text-brand-secondary uppercase";

function Field({ label, htmlFor, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");
    // Simulasi pengiriman ke server, lalu tampilkan status sukses.
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm(initialForm);
      }, 4000);
    }, 1500);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="glass relative overflow-hidden rounded-[28px] p-7 shadow-soft sm:p-10"
      aria-label="Formulir permintaan layanan Sejukin"
    >
      <h2 className="display-card text-2xl">Kirim permintaan layanan</h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
        Isi detail di bawah — {company.responseTime.toLowerCase()} pada jam
        kerja.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Nama lengkap" htmlFor="name">
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="cth. Budi Santoso"
            className={inputClass}
          />
        </Field>
        <Field label="Nomor telepon / WhatsApp" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="cth. 0812-3456-7890"
            className={inputClass}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="cth. budi@email.com"
            className={inputClass}
          />
        </Field>
        <Field label="Alamat lokasi pengerjaan" htmlFor="address">
          <input
            id="address"
            type="text"
            required
            value={form.address}
            onChange={update("address")}
            placeholder="cth. Kebayoran Baru, Jakarta Selatan"
            className={inputClass}
          />
        </Field>
        <Field label="Jenis layanan" htmlFor="serviceType">
          <select
            id="serviceType"
            required
            value={form.serviceType}
            onChange={update("serviceType")}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih layanan
            </option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Merek AC" htmlFor="acBrand">
          <select
            id="acBrand"
            value={form.acBrand}
            onChange={update("acBrand")}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih merek
            </option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
            <option value="Lainnya">Merek lainnya</option>
          </select>
        </Field>
        <Field label="Tipe AC" htmlFor="acType">
          <select
            id="acType"
            value={form.acType}
            onChange={update("acType")}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih tipe
            </option>
            {acTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Jumlah unit" htmlFor="numberOfUnits">
          <input
            id="numberOfUnits"
            type="number"
            min={1}
            max={100}
            required
            value={form.numberOfUnits}
            onChange={update("numberOfUnits")}
            className={inputClass}
          />
        </Field>
        <Field
          label="Tanggal pengerjaan yang diinginkan"
          htmlFor="preferredDate"
          className="sm:col-span-2"
        >
          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={update("preferredDate")}
            className={inputClass}
          />
        </Field>
        <Field
          label="Ceritakan kebutuhan Anda"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="cth. AC kamar utama kurang dingin sejak dua minggu lalu, sepertinya perlu cek freon."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={status === "idle" ? { y: -2 } : undefined}
        whileTap={status === "idle" ? { scale: 0.98 } : undefined}
        className={`focus-ring mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 font-semibold text-white transition-all ${
          status === "success"
            ? "bg-gradient-to-r from-emerald-500 to-teal-400"
            : "bg-primary-gradient shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/30"
        } ${status === "loading" ? "opacity-80" : ""}`}
      >
        {status === "idle" && (
          <>
            Kirim Permintaan
            <Send size={17} />
          </>
        )}
        {status === "loading" && (
          <>
            Mengirim...
            <Loader2 size={17} className="animate-spin" />
          </>
        )}
        {status === "success" && (
          <>
            Terkirim!
            <CheckCircle2 size={17} />
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-sm font-medium text-emerald-600"
          >
            Permintaan Anda sudah kami terima. Tim Sejukin akan menghubungi Anda
            dalam 30 menit pada jam kerja.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
