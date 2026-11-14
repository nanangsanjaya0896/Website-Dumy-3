/**
 * Konten artikel — dipakai halaman /artikel dan /artikel/:slug.
 *
 * Struktur body sengaja berupa data (bukan HTML mentah) supaya bisa
 * dirender sekaligus dipakai untuk metadata SEO (description, JSON-LD).
 *
 * Menambah artikel baru: tambahkan objek di array `articles` dengan
 * `slug` yang unik, lalu sitemap.xml perlu diperbarui manual.
 */

export const articles = [
  {
    slug: "cara-menghitung-kebutuhan-pk-ac",
    title: "Cara Menghitung Kebutuhan PK AC Sesuai Luas Ruangan",
    excerpt:
      "Salah hitung PK bikin AC cepat rusak dan listrik boros. Ini rumus sederhana yang dipakai teknisi Sejukin sebelum pemasangan.",
    description:
      "Panduan menghitung kebutuhan PK AC berdasarkan luas ruangan, jumlah orang, dan paparan sinar matahari — lengkap dengan tabel ukuran umum dan tanda AC kekecilan.",
    date: "2026-02-18",
    updated: "2026-10-02",
    readingTime: "6 menit",
    category: "Panduan Pemasangan",
    keyword: "cara menghitung PK AC",
    sections: [
      {
        heading: "Kenapa PK tidak boleh dikira-kira",
        paragraphs: [
          "PK (paardekracht) pada AC adalah kapasitas pendinginan, bukan daya listrik. Satu PK setara kurang lebih 9.000–10.000 BTU per jam. Kalau kapasitas terlalu kecil untuk ruangan, kompresor bekerja tanpa henti untuk mengejar suhu yang tidak akan tercapai. Akibatnya tiga hal sekaligus: ruangan tidak dingin, tagihan listrik naik, dan umur kompresor memendek.",
          "Sebaliknya, AC yang terlalu besar juga bermasalah. Kompresor menyala-matikan terlalu cepat (short cycling), kelembapan ruangan tidak turun, dan udara terasa dingin tapi pengap.",
        ],
      },
      {
        heading: "Rumus dasar: 600 BTU per meter persegi",
        paragraphs: [
          "Untuk rumah tinggal dengan tinggi plafon standar 2,8–3 meter, teknisi kami memakai patokan 600 BTU/m². Kebutuhan BTU dibagi 9.000 menghasilkan angka PK minimum.",
          "Contoh kamar tidur 3 × 4 meter = 12 m². Kebutuhan = 12 × 600 = 7.200 BTU, artinya cukup AC 3/4 PK (7.000 BTU). Untuk ruang tamu 5 × 6 meter = 30 m², kebutuhan 18.000 BTU, berarti 2 PK.",
        ],
      },
      {
        heading: "Tiga faktor yang sering dilupakan",
        paragraphs: [
          "Rumus di atas adalah titik awal, bukan hasil akhir. Ada tiga koreksi yang selalu kami terapkan saat survei:",
        ],
        list: [
          "Tambahkan sekitar 600 BTU untuk setiap orang di atas dua orang yang rutin berada di ruangan.",
          "Untuk ruangan yang menghadap barat atau beratap langsung tanpa plafon, tambahkan 10–15% kapasitas.",
          "Dapur dan ruang server butuh 15–20% lebih besar karena ada sumber panas aktif di dalamnya.",
        ],
      },
      {
        heading: "Tabel cepat ukuran ruangan umum",
        paragraphs: [
          "Kamar 3 × 3 m: 1/2 PK. Kamar 3 × 4 m: 3/4 PK. Kamar 4 × 4 m: 1 PK. Ruang tamu 4 × 6 m: 1,5 PK. Ruang keluarga 5 × 6 m: 2 PK. Kantor terbuka 8 × 10 m: butuh 2 unit 2 PK atau cassette 3 PK, tergantung sebaran orang dan jendela.",
          "Untuk area di atas 60 m², pemasangan satu unit besar biasanya lebih boros daripada dua unit sedang, karena distribusi udara lebih merata dan kompresor bisa dioperasikan bergantian.",
        ],
      },
      {
        heading: "Inverter atau bukan?",
        paragraphs: [
          "Kalau ruangan dipakai lebih dari enam jam sehari, AC inverter lebih hemat listrik karena kompresornya tidak pernah benar-benar mati, hanya menurunkan putaran. Untuk ruangan yang dipakai sesekali, AC standard lebih cepat dingin dan lebih murah di awal.",
        ],
      },
    ],
    faq: [
      {
        q: "Apakah AC 1/2 PK cukup untuk kamar 3 × 3 meter?",
        a: "Cukup, selama ruangan tidak menghadap barat secara langsung dan dihuni maksimal dua orang. Kalau kamar berada di lantai atas dengan atap beton, sebaiknya naik ke 3/4 PK.",
      },
      {
        q: "Lebih baik beli AC terlalu besar daripada kekurangan?",
        a: "Tidak. AC yang terlalu besar membuat kompresor cepat mati-nyala, kelembapan ruangan tidak turun, dan konsumsi listrik tetap tinggi saat start.",
      },
    ],
  },
  {
    slug: "biaya-cuci-ac-jakarta",
    title: "Berapa Biaya Cuci AC di Jakarta dan Apa Saja yang Termasuk",
    excerpt:
      "Rincian harga cuci AC 2026, perbedaan cuci standard dan deep cleaning, serta tanda-tanda AC perlu dicuci lebih sering.",
    description:
      "Rincian biaya cuci AC di Jakarta tahun 2026: cuci standard, deep cleaning, isi freon, dan bongkar pasang — plus tanda AC sudah harus diservis.",
    date: "2026-03-06",
    updated: "2026-09-21",
    readingTime: "5 menit",
    category: "Harga & Perawatan",
    keyword: "biaya cuci AC Jakarta",
    sections: [
      {
        heading: "Kisaran harga yang wajar",
        paragraphs: [
          "Untuk Jabodetabek, cuci AC standard pada unit split wall 0,5–2 PK umumnya berada di rentang Rp75.000–Rp120.000 per unit. Deep cleaning — bongkar unit indoor, cuci koil, evaporator, dan blower — berada di Rp150.000–Rp250.000 per unit.",
          "Harga di bawah itu biasanya berarti salah satu dari dua hal: jumlah unit yang dikerjakan banyak sehingga teknisinya mengejar waktu, atau ada biaya tambahan yang muncul setelah pekerjaan selesai.",
        ],
      },
      {
        heading: "Apa yang membedakan cuci standard dan deep cleaning",
        paragraphs: [
          "Cuci standard membersihkan filter, evaporator bagian luar, drip pan, dan saluran pembuangan. Ini cukup untuk perawatan rutin tiga bulan sekali.",
          "Deep cleaning membongkar casing indoor dan melepas blower. Tujuannya membersihkan lapisan lendir dan jamur yang menempel di kisi-kisi blower — sumber bau apek yang tidak hilang hanya dengan menyemprot koil.",
        ],
      },
      {
        heading: "Tanda AC perlu dicuci lebih cepat dari jadwal",
        paragraphs: [
          "Jadwal normal di rumah tangga adalah 3 bulan sekali. Beberapa kondisi membuatnya perlu lebih sering:",
        ],
        list: [
          "Ruangan berdekatan dengan jalan raya, dapur, atau proyek konstruksi — debu lebih cepat menumpuk.",
          "Muncul bau apek saat AC dinyalakan, tanda jamur sudah tumbuh di blower.",
          "Air menetes dari unit indoor, biasanya karena saluran pembuangan tersumbat lendir.",
          "AC tidak sedingin biasanya padahal kompresor tetap bekerja.",
        ],
      },
      {
        heading: "Yang seharusnya tidak dikenakan biaya tambahan",
        paragraphs: [
          "Vakum mesin saat pemasangan, pengecekan tekanan freon, dan pengecekan kebocoran saluran seharusnya termasuk dalam kunjungan servis. Kalau teknisi menagih biaya 'cek' terpisah sebelum pekerjaan dimulai, itu tanda estimasi awalnya tidak lengkap.",
          "Isi freon memang pekerjaan terpisah, tetapi hanya boleh dilakukan setelah kebocoran ditemukan dan diperbaiki. Menambah freon tanpa mencari sumber bocor hanya mengulang masalah yang sama dalam hitungan minggu.",
        ],
      },
    ],
    faq: [
      {
        q: "Seberapa sering cuci AC sebaiknya dilakukan?",
        a: "Rumah tangga: 3 bulan sekali. Kantor, ruko, atau area berdebu: 2 bulan sekali. Restoran dan area berasap: setiap bulan.",
      },
      {
        q: "Apakah cuci AC bisa dilakukan tanpa bongkar unit?",
        a: "Bisa, itu yang disebut cuci standard. Namun kalau sudah muncul bau atau blower terlihat kotor, deep cleaning dengan bongkar unit yang diperlukan.",
      },
    ],
  },
  {
    slug: "freon-r32-vs-r410a",
    title: "Freon R32 vs R410A: Mana yang Cocok untuk AC Rumah",
    excerpt:
      "Dua jenis freon yang paling umum di AC rumah Indonesia, perbedaannya, dan kenapa freon tidak boleh dicampur.",
    description:
      "Perbedaan freon R32 dan R410A pada AC rumah: efisiensi, tekanan kerja, dampak lingkungan, dan alasan freon tidak boleh dicampur antar jenis.",
    date: "2026-04-12",
    updated: "2026-08-30",
    readingTime: "5 menit",
    category: "Teknis",
    keyword: "freon R32 R410A",
    sections: [
      {
        heading: "Dua jenis yang paling banyak dipakai",
        paragraphs: [
          "Hampir semua AC rumah yang dijual di Indonesia sekarang memakai R32 atau R410A. R22 sudah ditinggalkan karena dinilai merusak lapisan ozon, meski unit lama masih banyak yang memakainya.",
          "Perbedaan paling praktis: R32 memiliki potensi pemanasan global sekitar sepertiga R410A dan sedikit lebih efisien, sehingga untuk kapasitas sama dibutuhkan freon lebih sedikit.",
        ],
      },
      {
        heading: "Kenapa freon tidak boleh dicampur",
        paragraphs: [
          "R32 adalah refrigeran tunggal, sedangkan R410A adalah campuran 50:50 dari dua refrigeran. Kalau R410A bocor sebagian, komposisinya bergeser dan performanya turun — itulah sebabnya sistem R410A tidak boleh diisi sebagian tanpa pemulihan total.",
          "Mencampur dua jenis freon di satu sistem membuat tekanan kerja dan titik didih tidak bisa diprediksi. Kompresor bekerja di luar spesifikasi, dan kerusakan yang muncul biasanya tidak tertutup garansi pabrik.",
        ],
      },
      {
        heading: "Yang perlu dicek sebelum isi freon",
        paragraphs: [],
        list: [
          "Baca nameplate di unit outdoor: di sana tertulis jenis dan jumlah freon yang dipakai pabrikan.",
          "Pastikan teknisi mencari sumber kebocoran lebih dulu, bukan langsung menambah freon.",
          "Minta jumlah gram yang diisikan tercatat di nota, bukan hanya 'sudah ditambah'.",
          "Untuk R410A, minta pengisian dilakukan dalam keadaan sistem kosong dan divakum ulang.",
        ],
      },
      {
        heading: "Kapan sebenarnya freon perlu ditambah?",
        paragraphs: [
          "Pada sistem yang sehat, freon tidak berkurang — sistemnya tertutup rapat. Jadi kalau tekanan rendah, penyebabnya hampir selalu kebocoran pada sambungan flaring, pipa, atau koil.",
          "Freon yang habis dalam waktu singkat setelah pengisian adalah tanda kebocoran belum diperbaiki. Menambah freon berulang setiap bulan jauh lebih mahal daripada satu kali pencarian kebocoran yang benar.",
        ],
      },
    ],
    faq: [
      {
        q: "Bolehkah AC R410A diisi dengan R32?",
        a: "Tidak. Tekanan kerja dan karakteristik keduanya berbeda, dan pencampuran membuat garansi pabrikan hangus.",
      },
      {
        q: "Berapa lama freon bertahan?",
        a: "Selama tidak ada kebocoran, freon bertahan sepanjang umur unit. Berkurangnya tekanan selalu berarti ada kebocoran yang harus dicari.",
      },
    ],
  },
  {
    slug: "tanda-ac-butuh-servis",
    title: "7 Tanda AC Butuh Servis Sebelum Rusak Total",
    excerpt:
      "AC jarang mati mendadak tanpa gejala. Ini tanda-tanda awal yang biasanya diabaikan sampai biaya perbaikan membengkak.",
    description:
      "Tujuh tanda AC perlu diservis: tidak dingin, berisik, menetes, bau apek, kompresor cepat mati, dan konsumsi listrik naik — plus langkah pengecekan awal.",
    date: "2026-05-20",
    updated: "2026-10-15",
    readingTime: "4 menit",
    category: "Perawatan",
    keyword: "tanda AC butuh servis",
    sections: [
      {
        heading: "Kenapa gejala awal penting",
        paragraphs: [
          "Kerusakan AC hampir selalu bertahap. Filter yang kotor membuat evaporator membeku, evaporator yang membeku membuat kompresor bekerja lebih keras, dan kompresor yang terus dipaksa akhirnya mati. Satu servis Rp100.000 di awal bisa mencegah penggantian kompresor yang biayanya berkali-kali lipat.",
        ],
      },
      {
        heading: "Tujuh tanda yang perlu diperhatikan",
        paragraphs: [],
        list: [
          "AC menyala tapi ruangan tidak dingin meski sudah 30 menit — biasanya freon kurang atau evaporator kotor.",
          "Muncul bunga es di unit indoor — filter tersumbat atau aliran udara terhalang.",
          "Air menetes dari unit indoor — saluran pembuangan tersumbat lendir.",
          "Bunyi kasar atau getaran baru — bantalan blower mulai aus atau ada part yang lepas.",
          "Bau apek saat dinyalakan — jamur di blower, butuh deep cleaning.",
          "Kompresor cepat mati-nyala (short cycling) — bisa karena kapasitas tidak sesuai atau kelistrikan bermasalah.",
          "Tagihan listrik naik tanpa perubahan pemakaian — efisiensi unit sudah menurun.",
        ],
      },
      {
        heading: "Yang bisa dicek sendiri tanpa alat",
        paragraphs: [
          "Bersihkan filter setiap dua sampai empat minggu: lepas, cuci dengan air, keringkan di tempat teduh sebelum dipasang kembali. Periksa juga apakah ada benda menghalangi aliran udara di depan unit indoor maupun outdoor.",
          "Jangan memaksa AC menyala saat evaporator sudah membeku. Matikan, biarkan es mencair, lalu panggil teknisi. Menyalakan unit yang membeku berisiko merusak kompresor.",
        ],
      },
      {
        heading: "Kapan harus berhenti menunda",
        paragraphs: [
          "Kalau dua gejala atau lebih muncul bersamaan, atau AC sudah lebih dari tiga bulan tidak dibersihkan, jadwalkan servis. Untuk AC yang tidak dingin sama sekali disertai bunyi kompresor tidak normal, matikan unit dan hubungi teknisi — memaksa menyalakan hanya memperbesar kerusakan.",
        ],
      },
    ],
    faq: [
      {
        q: "Kalau AC tidak dingin, apakah selalu berarti kurang freon?",
        a: "Tidak. Penyebab paling sering justru filter dan evaporator yang kotor. Freon hanya berkurang kalau ada kebocoran.",
      },
    ],
  },
];

/** Cari satu artikel berdasarkan slug. */
export const getArticle = (slug) => articles.find((a) => a.slug === slug);

/** Artikel lain untuk blok "baca juga". */
export const relatedArticles = (slug, count = 2) =>
  articles.filter((a) => a.slug !== slug).slice(0, count);

/** Format tanggal Indonesia tanpa bergantung pada locale browser. */
export function formatDate(iso) {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const [tahun, bln, hari] = iso.split("-");
  return `${Number(hari)} ${bulan[Number(bln) - 1]} ${tahun}`;
}
