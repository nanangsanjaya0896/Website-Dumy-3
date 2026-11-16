/**
 * SUMBER TUNGGAL DATA AREA KERJA
 * ------------------------------
 * Halaman `/area` membaca file ini. Untuk mengubah jangkauan layanan,
 * cukup tambah/hapus kota atau kawasan di daftar `localities` — tidak
 * perlu menyentuh `AreasPage.jsx`.
 *
 * Yang ditulis di sini harus sesuai kenyataan operasional: jangan
 * cantumkan wilayah yang belum benar-benar dilayani.
 */

export const areaSummary = [
  { value: "6", label: "Wilayah utama" },
  { value: "12", label: "Armada siaga" },
  { value: "Setiap hari", label: "Jadwal kunjungan" },
];

export const areas = [
  {
    id: "jakarta",
    name: "Jakarta",
    intro: "Rumah tinggal, apartemen, kantor, dan ruko di seluruh Jakarta.",
    localities: [
      "Jakarta Pusat",
      "Jakarta Selatan",
      "Jakarta Barat",
      "Jakarta Timur",
      "Jakarta Utara",
    ],
  },
  {
    id: "bogor",
    name: "Bogor",
    intro: "Kota Bogor hingga kawasan penyangga di sekitarnya.",
    localities: ["Kota Bogor", "Cibinong", "Cileungsi", "Cibubur", "Sentul"],
  },
  {
    id: "depok",
    name: "Depok",
    intro: "Melayani rumah, kontrakan, dan ruko di Kota Depok.",
    localities: ["Kota Depok", "Margonda", "Cinere", "Sawangan", "Cimanggis"],
  },
  {
    id: "tangerang",
    name: "Tangerang",
    intro: "Kota Tangerang dan Kabupaten Tangerang.",
    localities: ["Kota Tangerang", "Ciledug", "Karawaci", "Cikupa", "BSD"],
  },
  {
    id: "tangerang-selatan",
    name: "Tangerang Selatan",
    intro: "Kawasan hunian dan perkantoran di Tangerang Selatan.",
    localities: ["Serpong", "Bintaro", "Pamulang", "Ciputat", "Pondok Aren"],
  },
  {
    id: "bekasi",
    name: "Bekasi",
    intro: "Kota Bekasi sampai kawasan industri Kabupaten Bekasi.",
    localities: ["Kota Bekasi", "Kab. Bekasi", "Cikarang", "Cibitung"],
  },
];

/**
 * Alur kunjungan. Semua angka diambil dari data perusahaan yang sudah
 * dipakai di halaman lain, bukan karangan baru.
 */
export const visitSteps = [
  {
    number: "01",
    title: "Booking",
    description:
      "Hubungi kami via WhatsApp, telepon, atau formulir. Sebutkan wilayah dan jenis layanannya.",
  },
  {
    number: "02",
    title: "Konfirmasi jadwal",
    description:
      "Tim mengonfirmasi ketersediaan teknisi dan jam kunjungan untuk wilayah Anda.",
  },
  {
    number: "03",
    title: "Teknisi berangkat",
    description:
      "Teknisi datang sesuai jadwal dengan estimasi harga yang sudah disepakati di depan.",
  },
];
