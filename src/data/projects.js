const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const projectCategories = [
  "Semua",
  "Residensial",
  "Perkantoran",
  "Ruko & Komersial",
  "Gudang & Pabrik",
  "Servis & Perawatan",
];

export const projects = [
  {
    id: 1,
    category: "Residensial",
    title: "Instalasi 8 Unit Split Wall Daikin — Rumah Mewah Pondok Indah",
    description:
      "Pemasangan delapan unit AC inverter hemat energi untuk hunian tiga lantai seluas 620 m², lengkap dengan jalur pipa tersembunyi dan penyeimbangan beban listrik.",
    tags: ["Daikin Inverter", "Split Wall", "Pipa Tersembunyi", "Hemat Energi"],
    image: img("photo-1512917774080-9991f1c4c750"),
    client: "Keluarga Hartono",
    year: "2024",
    acType: "Split Wall Inverter 1–2 PK",
    numberOfUnits: 8,
    gallery: [
      img("photo-1600585154340-be6161a56a0c", 1600),
      img("photo-1600607687939-ce8a6c25118c", 1600),
      img("photo-1600585152220-90363fe7e115", 1600),
      img("photo-1600566753086-00f18fb6b3ea", 1600),
      img("photo-1556912167-f556f1f39fdf", 1600),
    ],
    overview:
      "Hunian tiga lantai ini memiliki delapan zona ruang dengan beban panas berbeda — dari kamar tidur yang teduh hingga ruang keluarga beratap kaca. Sejukin menghitung kebutuhan BTU per ruangan, menempatkan unit outdoor di service yard agar fasad tetap bersih, dan merapikan seluruh jalur pipa ke dalam shaft tersembunyi. Hasilnya: pendinginan merata, tampilan interior tetap bersih, dan konsumsi listrik terkontrol berkat unit inverter yang disesuaikan ukurannya.",
    process: [
      {
        step: "01",
        title: "Survei & kalkulasi BTU",
        description:
          "Pengukuran luas, orientasi jendela, dan beban panas tiap ruangan untuk menentukan PK yang tepat.",
      },
      {
        step: "02",
        title: "Perencanaan jalur pipa",
        description:
          "Pemetaan shaft tersembunyi agar tidak ada pipa terekspos di dinding interior maupun fasad.",
      },
      {
        step: "03",
        title: "Pemasangan presisi",
        description:
          "Delapan unit dipasang dalam dua hari oleh dua tim, dengan vakum dan pressure test per unit.",
      },
      {
        step: "04",
        title: "Balancing listrik",
        description:
          "Penataan MCB per zona agar beban listrik AC tidak bertumpuk pada satu fasa.",
      },
      {
        step: "05",
        title: "Testing & serah terima",
        description:
          "Uji suhu outlet tiap unit, edukasi perawatan filter, dan penyerahan kartu garansi 90 hari.",
      },
    ],
    results:
      "Seluruh ruangan mencapai suhu setpoint dalam waktu kurang dari sepuluh menit, tagihan listrik justru turun dibanding sistem AC lama, dan tidak ada satu pun pipa yang terlihat mata.",
    metrics: [
      { value: "8 unit", label: "AC terpasang rapi" },
      { value: "2 hari", label: "Durasi pemasangan" },
      { value: "-30%", label: "Konsumsi listrik" },
      { value: "0", label: "Pipa terekspos" },
    ],
    testimonial: {
      quote:
        "Tim Sejukin bekerja sangat rapi. Pipa tidak terlihat sama sekali, dan rumah terasa dingin merata di semua lantai.",
      name: "Ratna Hartono",
      role: "Pemilik rumah, Pondok Indah",
    },
  },
  {
    id: 2,
    category: "Perkantoran",
    title: "AC Sentral Ducting — Menara Perkantoran 12 Lantai, Sudirman",
    description:
      "Desain dan instalasi sistem ducting tersembunyi untuk empat lantai perkantoran, dengan zoning per departemen dan kontrol terpusat.",
    tags: ["Ducted System", "Zoning Control", "AHU", "Kontrol Terpusat"],
    image: img("photo-1486406146926-c627a92ad1ab"),
    client: "PT Sarana Propertindo",
    year: "2023",
    acType: "Ducted Split & AHU",
    numberOfUnits: 24,
    gallery: [
      img("photo-1497366216548-37526070297c", 1600),
      img("photo-1497366754035-f200968a6e72", 1600),
      img("photo-1524758631624-e2822e304c36", 1600),
      img("photo-1519389950473-47ba0277781c", 1600),
    ],
    overview:
      "Klien membutuhkan pendinginan senyap untuk ruang kerja open-plan tanpa unit yang terlihat. Sejukin merancang sistem ducting tersembunyi di atas plafon dengan diffuser linear, zona terpisah untuk ruang rapat dan area kerja, serta panel kontrol terpusat di ruang facility. Pekerjaan dilakukan akhir pekan bertahap agar operasional kantor tidak terganggu sama sekali.",
    process: [
      {
        step: "01",
        title: "Studi beban & airflow",
        description:
          "Simulasi distribusi udara dan perhitungan static pressure untuk setiap zona lantai.",
      },
      {
        step: "02",
        title: "Fabrikasi ducting",
        description:
          "Ducting galvanis dengan isolasi thermal dipabrikasi sesuai shop drawing yang disetujui.",
      },
      {
        step: "03",
        title: "Instalasi bertahap",
        description:
          "Pemasangan tiap akhir pekan, lantai per lantai, tanpa menghentikan operasional kantor.",
      },
      {
        step: "04",
        title: "Commissioning & balancing",
        description:
          "Pengaturan damper airflow per zona dan kalibrasi thermostat kontrol terpusat.",
      },
    ],
    results:
      "Empat lantai beroperasi dengan tingkat kebisingan di bawah 40 dB, suhu stabil 22–24°C di semua zona, dan facility manager dapat memantau seluruh sistem dari satu panel.",
    metrics: [
      { value: "24 unit", label: "Indoor & outdoor" },
      { value: "4 lantai", label: "Zona terpisah" },
      { value: "<40 dB", label: "Tingkat kebisingan" },
      { value: "6 pekan", label: "Tanpa ganggu operasional" },
    ],
    testimonial: {
      quote:
        "Yang paling kami hargai: proyek selesai tanpa satu hari pun operasional kantor terganggu. Sistemnya senyap dan mudah dikontrol.",
      name: "Bambang Wijaya",
      role: "Facility Manager, PT Sarana Propertindo",
    },
  },
  {
    id: 3,
    category: "Ruko & Komersial",
    title: "AC Cassette Panasonic — Ruko 3 Lantai Kelapa Gading",
    description:
      "Pemasangan enam unit cassette 3 PK untuk gerai ritel tiga lantai, memastikan kenyamanan pelanggan merata dari lantai dasar hingga mezzanine.",
    tags: ["Panasonic Cassette", "Ritel", "360° Airflow", "Jadwal Malam"],
    image: img("photo-1441986300917-64674bd600d8"),
    client: "Toko Otomasi Cipta Karya",
    year: "2024",
    acType: "Cassette 3 PK Inverter",
    numberOfUnits: 6,
    gallery: [
      img("photo-1441984904996-e0b6ba687e04", 1600),
      img("photo-1555396273-367ea4eb4db5", 1600),
      img("photo-1517248135467-4c7edcad34c4", 1600),
      img("photo-1521017432531-fbd92d768814", 1600),
    ],
    overview:
      "Gerai ritel ini buka 12 jam setiap hari, sehingga pemasangan harus dilakukan di luar jam operasional. Sejukin mengerjakan instalasi dalam empat malam berturut-turut: dua unit cassette per lantai dengan arah semburan 360° agar tidak ada spot panas, drain pump untuk pembuangan tanpa gradien, dan piping naik ke atap agar unit outdoor tersembunyi dari jalan.",
    process: [
      {
        step: "01",
        title: "Survei malam hari",
        description:
          "Pemetaan plafon dan jalur pipa dilakukan setelah toko tutup agar layout rak tidak terganggu.",
      },
      {
        step: "02",
        title: "Reinforcement plafon",
        description:
          "Penguatan gantungan hollow di titik cassette agar aman menahan beban unit 3 PK.",
      },
      {
        step: "03",
        title: "Instalasi per lantai",
        description:
          "Empat sesi kerja malam; setiap pagi toko tetap dapat beroperasi normal.",
      },
      {
        step: "04",
        title: "Commissioning",
        description:
          "Uji arah semburan 360°, drain pump, dan penjadwalan timer operasional harian.",
      },
    ],
    results:
      "Suhu toko stabil di semua lantai bahkan saat jam ramai akhir pekan, tidak ada lagi keluhan gerah dari pelanggan, dan tagihan listrik terkendali berkat inverter.",
    metrics: [
      { value: "6 unit", label: "Cassette 3 PK" },
      { value: "4 malam", label: "Tanpa tutup toko" },
      { value: "3 lantai", label: "Dingin merata" },
      { value: "12 jam", label: "Operasional harian" },
    ],
    testimonial: {
      quote:
        "Toko tetap buka setiap hari selama pemasangan. Pagi toko bersih, malamnya tim Sejukin bekerja. Profesional sekali.",
      name: "Andreas Kurnia",
      role: "Pemilik Toko Otomasi Cipta Karya",
    },
  },
  {
    id: 4,
    category: "Gudang & Pabrik",
    title: "Sistem VRF Daikin — Gudang Logistik Cikarang",
    description:
      "Instalasi sistem VRF dengan 14 unit indoor untuk area office, control room, dan staging area gudang logistik seluas 4.200 m².",
    tags: ["Daikin VRF", "Area Logistik", "Control Room", "Efisiensi Energi"],
    image: img("photo-1586528116311-ad8dd3c8310d"),
    client: "PT Lintas Logistics Nusantara",
    year: "2023",
    acType: "VRF Multi-Split System",
    numberOfUnits: 14,
    gallery: [
      img("photo-1553413077-190dd305871c", 1600),
      img("photo-1578575437130-527eed3abbec", 1600),
      img("photo-1581094794329-c8112a89af12", 1600),
      img("photo-1504328345606-18bbc8c9d7d1", 1600),
    ],
    overview:
      "Gudang logistik beroperasi 24 jam dengan server control room yang wajib dingin stabil. Sejukin merancang satu sistem VRF dengan dua unit outdoor modular yang melayani 14 indoor: kantor operasional, ruang kontrol, mushola, dan area staging. Sistem modular memastikan jika satu outdoor maintenance, zona kritikal tetap berjalan dari modul lainnya.",
    process: [
      {
        step: "01",
        title: "Load profiling 24 jam",
        description:
          "Analisis beban pendinginan per zona sepanjang siklus operasional gudang.",
      },
      {
        step: "02",
        title: "Desain redundancy",
        description:
          "Pembagian zona kritikal ke dua modul outdoor agar selalu ada cadangan kapasitas.",
      },
      {
        step: "03",
        title: "Instalasi & piping",
        description:
          "Pemasangan refnet, piping tembaga terisolasi, dan nitrogen pressure test menyeluruh.",
      },
      {
        step: "04",
        title: "Commissioning VRF",
        description:
          "Auto-addressing indoor, setting prioritas zona, dan integrasi ke BMS gudang.",
      },
      {
        step: "05",
        title: "Training tim facility",
        description:
          "Pelatihan dasar troubleshooting dan serah terima dokumentasi as-built drawing.",
      },
    ],
    results:
      "Control room bertahan stabil di 21°C sepanjang tahun, konsumsi energi turun berkat part-load efficiency VRF, dan tim facility mandiri melakukan perawatan ringan.",
    metrics: [
      { value: "14 indoor", label: "Dalam 1 sistem" },
      { value: "4.200 m²", label: "Area terlayani" },
      { value: "21°C", label: "Control room stabil" },
      { value: "-25%", label: "Biaya energi" },
    ],
    testimonial: {
      quote:
        "Sistem VRF dari Sejukin sudah dua tahun berjalan tanpa satu pun insiden downtime di ruang kontrol kami.",
      name: "Hendra Saputra",
      role: "Head of Operations, PT Lintas Logistics Nusantara",
    },
  },
  {
    id: 5,
    category: "Servis & Perawatan",
    title: "Overhaul & Kontrak Perawatan 52 Unit — Hotel Aruna Kuningan",
    description:
      "Overhaul menyeluruh 52 unit AC kamar dan area publik hotel bintang empat, dilanjutkan kontrak perawatan berkala dengan laporan digital.",
    tags: ["Hotel", "Overhaul", "Kontrak Perawatan", "Laporan Digital"],
    image: img("photo-1566073771259-6a8506099945"),
    client: "Hotel Aruna Kuningan",
    year: "2022",
    acType: "Split Wall & Cassette Campuran",
    numberOfUnits: 52,
    gallery: [
      img("photo-1582719508461-905c673771fd", 1600),
      img("photo-1611892440504-42a792e24d32", 1600),
      img("photo-1590490360182-c33d57733427", 1600),
      img("photo-1571896349842-33c89424de2d", 1600),
    ],
    overview:
      "Hotel menghadapi keluhan kamar kurang dingin pada musim liburan. Tim Sejukin melakukan audit 52 unit dalam tiga hari: 11 unit butuh overhaul kompresor, 20 unit perlu penggantian kapasitor dan flushing coil, sisanya cukup deep cleaning. Setelah overhaul, hotel mengikat kontrak perawatan bulanan dengan jadwal rotasi kamar agar okupansi tidak terganggu.",
    process: [
      {
        step: "01",
        title: "Audit kondisi unit",
        description:
          "Pemeriksaan 12 titik untuk 52 unit, hasil kondisi dikelompokkan per prioritas tindakan.",
      },
      {
        step: "02",
        title: "Overhaul bertahap",
        description:
          "Perbaikan berat dikerjakan per lantai dengan koordinasi housekeeping setiap hari.",
      },
      {
        step: "03",
        title: "Deep cleaning menyeluruh",
        description:
          "Chemical wash coil dan blower plus disinfektan anti-bau untuk seluruh kamar.",
      },
      {
        step: "04",
        title: "Kontrak berkala",
        description:
          "Kunjungan bulanan terjadwal dengan checklist digital dan laporan kondisi per unit.",
      },
    ],
    results:
      "Keluhan kamar panas turun ke nol pada kuartal pertama, skor ulasan kenyamanan kamar naik signifikan, dan manajemen mendapat visibilitas penuh atas kondisi setiap unit.",
    metrics: [
      { value: "52 unit", label: "Diaudit & dirawat" },
      { value: "3 hari", label: "Audit awal" },
      { value: "0", label: "Keluhan kamar panas" },
      { value: "24/7", label: "Siaga darurat kontrak" },
    ],
    testimonial: {
      quote:
        "Review tamu soal kenyamanan kamar naik drastis. Laporan digitalnya membuat kami tahu kondisi tiap unit tanpa perlu menebak.",
      name: "Maya Lestari",
      role: "Chief Engineer, Hotel Aruna Kuningan",
    },
  },
  {
    id: 6,
    category: "Ruko & Komersial",
    title: "Instalasi AC + Filtrasi Udara — Klinik Gigi Senyum Sehat, Tebet",
    description:
      "Instalasi lima unit split inverter dengan tambahan filter HEPA untuk menjaga kualitas udara ruang praktik agar bersih dan bebas bau.",
    tags: ["Klinik", "HEPA Filter", "Inverter", "Standar Hygiene"],
    image: img("photo-1629909613654-28e377c37b09"),
    client: "Klinik Gigi Senyum Sehat",
    year: "2024",
    acType: "Split Inverter + HEPA Box",
    numberOfUnits: 5,
    gallery: [
      img("photo-1629909615184-74f495363b67", 1600),
      img("photo-1586773860418-d37222d8fce3", 1600),
      img("photo-1538108149393-fbbd81895907", 1600),
      img("photo-1621905251189-08b45d6a269e", 1600),
    ],
    overview:
      "Ruang praktik gigi membutuhkan udara yang sejuk sekaligus bersih dari partikel aerosol. Sejukin memasang lima unit split inverter yang dipadukan dengan filter box HEPA pada jalur distribusi udara ruang tindakan, serta mengatur pola aliran agar udara tidak berpusar di area kursi pasien. Jadwal perawatan triwulan disepakati untuk menjaga filter tetap optimal.",
    process: [
      {
        step: "01",
        title: "Konsultasi kebutuhan hygiene",
        description:
          "Diskusi dengan dokter penanggung jawab tentang standar udara ruang tindakan.",
      },
      {
        step: "02",
        title: "Desain airflow & filtrasi",
        description:
          "Penempatan diffuser dan HEPA box agar aliran udara menjauhi kursi pasien.",
      },
      {
        step: "03",
        title: "Instalasi dua hari",
        description:
          "Pemasangan lima unit dan filter box di luar jam praktik, area disterilkan setelahnya.",
      },
      {
        step: "04",
        title: "Kalibrasi & jadwal perawatan",
        description:
          "Pengaturan suhu zona per ruang dan kontrak penggantian filter triwulan.",
      },
    ],
    results:
      "Udara ruang praktik terasa sejuk tanpa bau klinis yang menyengat, pasien lebih nyaman selama tindakan panjang, dan filter diganti terjadwal tanpa perlu diingatkan.",
    metrics: [
      { value: "5 unit", label: "Split inverter" },
      { value: "HEPA", label: "Filtrasi ruang tindakan" },
      { value: "2 hari", label: "Di luar jam praktik" },
      { value: "3 bulan", label: "Siklus ganti filter" },
    ],
    testimonial: {
      quote:
        "Pasien sering berkomentar ruangan kami terasa segar. Bagi klinik, udara yang bersih itu bagian dari pelayanan.",
      name: "drg. Sinta Maharani",
      role: "Pemilik Klinik Gigi Senyum Sehat",
    },
  },
];
