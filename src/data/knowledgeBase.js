// ============================================================================
// DATA PUSAT (SINGLE SOURCE OF TRUTH)
// ============================================================================
// File ini berisi seluruh data persyaratan layanan Kelurahan Lenteng Agung.
// Digunakan oleh AI Chatbot (Gemini) untuk menjawab pertanyaan warga.
// ============================================================================

export const INFO_KELURAHAN = {
  nama: "Kelurahan Lenteng Agung",
  alamat: "Jl. Agung Raya No. 1, Lenteng Agung, Jagakarsa, Jakarta Selatan",
  jamKerja: "Senin - Jumat, 07.30 - 16.00 WIB",
  kontak: "(021) 786-xxxx",
};

export const DATA_LAYANAN = [
  // =========================================
  // 1. KATEGORI: KTP ELEKTRONIK (KTP-el)
  // =========================================
  {
    id: "ktp-1",
    kategori: "KTP & Identitas",
    layanan: "Perekaman KTP-el Baru (Pemula 17 Tahun)",
    syarat: [
      "Telah berusia 17 tahun",
      "Surat Pengantar RT/RW",
      "Fotokopi Kartu Keluarga (KK)",
      "Fotokopi Akta Kelahiran / Ijazah Terakhir",
      "Datang langsung ke Kelurahan/Kecamatan untuk foto & sidik jari (Wajib, pakaian rapi berkerah)",
    ],
  },
  {
    id: "ktp-2",
    kategori: "KTP & Identitas",
    layanan: "Pengurusan KTP Hilang",
    syarat: [
      "Surat Keterangan Kehilangan dari Kepolisian (Asli)",
      "Surat Pengantar RT/RW",
      "Fotokopi Kartu Keluarga (KK)",
      "Fotokopi KTP yang hilang (jika ada arsipnya)",
    ],
  },
  {
    id: "ktp-3",
    kategori: "KTP & Identitas",
    layanan: "Pengurusan KTP Rusak / Patah / Terkelupas",
    syarat: [
      "Fisik KTP asli yang rusak",
      "Surat Pengantar RT/RW",
      "Fotokopi Kartu Keluarga (KK)",
    ],
  },
  {
    id: "kia-1",
    kategori: "KTP & Identitas",
    layanan: "Pembuatan Kartu Identitas Anak (KIA)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi Akta Kelahiran Anak",
      "Fotokopi Kartu Keluarga (KK)",
      "Fotokopi KTP Kedua Orang Tua",
      "Pas Foto Anak 2x3 (2 lembar) untuk anak usia > 5 tahun (usia < 5 tahun tidak perlu foto)",
    ],
  },

  // =========================================
  // 2. KATEGORI: KARTU KELUARGA (KK)
  // =========================================
  {
    id: "kk-1",
    kategori: "Kartu Keluarga",
    layanan: "Pembuatan KK Baru (Baru Menikah / Pecah KK)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Kartu Keluarga (KK) Asli dari orang tua masing-masing",
      "Fotokopi Buku Nikah / Akta Perkawinan (legalisir KUA/Catatn Sipil)",
      "Fotokopi KTP Suami & Istri",
      "Surat Pindah (SKPWNI) jika salah satu dari luar daerah",
    ],
  },
  {
    id: "kk-2",
    kategori: "Kartu Keluarga",
    layanan: "Pengurusan KK Hilang atau Rusak",
    syarat: [
      "Surat Keterangan Kehilangan dari Kepolisian (Asli) - Untuk KK Hilang",
      "Fisik KK yang rusak (Asli) - Untuk KK Rusak",
      "Surat Pengantar RT/RW",
      "Fotokopi KTP Kepala Keluarga",
      "Fotokopi KTP salah satu anggota keluarga lain",
    ],
  },
  {
    id: "kk-3",
    kategori: "Kartu Keluarga",
    layanan: "Perubahan Data KK (Penambahan Anggota / Kelahiran)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Kartu Keluarga (KK) Asli",
      "Fotokopi KTP Orang Tua",
      "Surat Keterangan Lahir dari RS/Bidan (Asli)",
      "Fotokopi Buku Nikah Orang Tua",
    ],
  },
  {
    id: "kk-4",
    kategori: "Kartu Keluarga",
    layanan: "Perubahan Data KK (Pengurangan Anggota / Kematian)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Kartu Keluarga (KK) Asli",
      "Surat Keterangan Kematian (dari RS atau Kelurahan)",
      "KTP Asli yang meninggal (untuk ditarik)",
    ],
  },

  // =========================================
  // 3. KATEGORI: PERPINDAHAN PENDUDUK
  // =========================================
  {
    id: "pindah-1",
    kategori: "Perpindahan Penduduk",
    layanan: "Surat Keterangan Pindah Keluar (SKP) DKI",
    syarat: [
      "Surat Pengantar RT/RW",
      "Kartu Keluarga (KK) Asli",
      "KTP Asli pemohon dan pengikut pindah (untuk ditarik)",
      "Alamat lengkap tujuan pindah (Jalan, RT/RW, Kelurahan, Kecamatan, Kab/Kota, Provinsi)",
      "Pas Foto 3x4 (2 lembar) - opsional tergantung tujuan",
    ],
  },
  {
    id: "pindah-2",
    kategori: "Perpindahan Penduduk",
    layanan: "Lapor Pindah Datang (Masuk ke Lenteng Agung)",
    syarat: [
      "Surat Pengantar RT/RW tempat tinggal baru",
      "Surat Keterangan Pindah (SKPWNI) dari daerah asal (Asli)",
      "KTP & KK Penjamin / Keluarga yang ditumpangi (jika numpang KK)",
      "Surat Pernyataan Jaminan Tempat Tinggal (bermaterai)",
    ],
  },

  // =========================================
  // 4. KATEGORI: PELAYANAN UMUM (SKU, SKTM, DLL)
  // =========================================
  {
    id: "umum-1",
    kategori: "Pelayanan Umum",
    layanan: "Surat Keterangan Usaha (SKU)",
    syarat: [
      "Surat Pengantar RT/RW (Mencantumkan jenis usaha)",
      "Fotokopi KTP Pemohon",
      "Fotokopi Kartu Keluarga",
      "Bukti/Foto kegiatan usaha atau tempat usaha (dicetak)",
      "Surat Pernyataan Tidak Keberatan Tetangga (jika usaha berpotensi ganggu lingkungan)",
    ],
  },
  {
    id: "umum-2",
    kategori: "Pelayanan Umum",
    layanan: "Surat Keterangan Tidak Mampu (SKTM) - Sekolah/RS",
    syarat: [
      "Surat Pengantar RT/RW (Menyatakan keluarga tidak mampu)",
      "Fotokopi KTP & KK",
      "Surat Pernyataan Tidak Mampu (Bermaterai 10.000)",
      "Foto kondisi rumah (Depan, Ruang Tamu, Dapur)",
      "Kartu KIS/BPJS (jika ada)",
    ],
  },
  {
    id: "umum-3",
    kategori: "Pelayanan Umum",
    layanan: "Surat Pengantar SKCK (Catatan Kepolisian)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP & KK",
      "Fotokopi Akta Kelahiran / Ijazah",
      "Pas Foto 4x6 Background Merah (untuk di Polsek)",
    ],
  },
  {
    id: "umum-4",
    kategori: "Pelayanan Umum",
    layanan: "Surat Izin Keramaian / Kegiatan Warga",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP Penanggung Jawab Acara",
      "Proposal Singkat Kegiatan (Waktu, Lokasi, Bentuk Acara)",
      "Surat Pernyataan Menjaga Ketertiban (Bermaterai)",
    ],
  },
  {
    id: "umum-5",
    kategori: "Pelayanan Umum",
    layanan: "Surat Keterangan Domisili Usaha / Lembaga",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP & KK Ketua/Penanggung Jawab",
      "Akta Pendirian Yayasan/Badan Usaha (Fotokopi)",
      "Bukti Kepemilikan Tempat (Sertifikat/PBB) atau Surat Sewa",
      "Foto Lokasi Kantor/Sekretariat",
    ],
  },

  // =========================================
  // 5. KATEGORI: TANAH & WARISAN
  // =========================================
  {
    id: "tanah-1",
    kategori: "Pertanahan & Waris",
    layanan: "Surat Keterangan Waris (WNI Pribumi)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Surat Keterangan Kematian Pewaris",
      "Fotokopi KTP & KK seluruh Ahli Waris",
      "Fotokopi Buku Nikah Pewaris",
      "Fotokopi Akta Kelahiran seluruh Ahli Waris",
      "Surat Pernyataan Dua Orang Saksi (Bermaterai) & Fotokopi KTP Saksi",
      "Bagan Silsilah Keluarga (Diketahui RT/RW)",
    ],
  },
  {
    id: "tanah-2",
    kategori: "Pertanahan & Waris",
    layanan: "Surat Keterangan Riwayat Tanah / PM1",
    syarat: [
      "Surat Permohonan kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotokopi KTP & KK Pemohon",
      "Fotokopi Bukti Kepemilikan (Girik/AJB/Sertifikat)",
      "Fotokopi SPPT PBB Tahun Terakhir (Lunas)",
      "Surat Pernyataan Tidak Sengketa (Bermaterai)",
    ],
  },

  // =========================================
  // 6. KATEGORI: PERNIKAHAN
  // =========================================
  {
    id: "nikah-1",
    kategori: "Pernikahan",
    layanan: "Surat Pengantar Nikah (N1, N2, N4)",
    syarat: [
      "Surat Pengantar RT/RW (PM1)",
      "Fotokopi KTP & KK Calon Suami Istri (Catin)",
      "Fotokopi Akta Kelahiran & Ijazah Terakhir Catin",
      "Fotokopi KTP Orang Tua (Ayah & Ibu)",
      "Surat Pernyataan Belum Menikah (Bermaterai)",
      "Pas Foto 2x3 (3 lembar) & 3x4 (2 lembar) background biru/merah",
      "Bukti Imunisasi TT bagi Catin Wanita (dari Puskesmas)",
      "Akta Cerai / Surat Kematian (jika status Janda/Duda)",
    ],
  },
  {
    id: "nikah-2",
    kategori: "Pernikahan",
    layanan: "Surat Keterangan Belum Menikah",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP & KK",
      "Surat Pernyataan Belum Pernah Menikah (Bermaterai 10.000) diketahui saksi",
      "Fotokopi KTP 2 orang saksi",
    ],
  },

  // =========================================
  // 7. KATEGORI: WNA (ASING)
  // =========================================
  {
    id: "wna-1",
    kategori: "Warga Negara Asing",
    layanan: "Surat Keterangan Tempat Tinggal (SKTT)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi Paspor & KITAS/KITAP",
      "Surat Tanda Melapor (STM) dari Kepolisian",
      "Fotokopi KTP Sponsor / Penjamin di Indonesia",
      "Pas Foto 3x4 (2 lembar)",
    ],
  },
];

// ============================================================================
// HELPER FUNCTION UNTUK AI
// ============================================================================
export const generateAIContext = () => {
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  let knowledgeText = "";
  DATA_LAYANAN.forEach((item, index) => {
    knowledgeText += `\n${index + 1}. LAYANAN: ${item.layanan}\n   KATEGORI: ${item.kategori}\n   SYARAT:\n`;
    item.syarat.forEach((s) => {
      knowledgeText += `   - ${s}\n`;
    });
  });

  const systemPrompt = `
=================================================================
IDENTITAS & KONTEKS
=================================================================
WAKTU: ${today}
ANDA: Asisten Virtual (CS) Kelurahan Lenteng Agung.
LOKASI: ${INFO_KELURAHAN.alamat}
JAM OPERASIONAL: ${INFO_KELURAHAN.jamKerja}

TUGAS:
Memberikan informasi persyaratan layanan administrasi, kependudukan, dan umum kepada warga.

=================================================================
DATABASE PERSYARATAN (GUNAKAN INI SEBAGAI RUJUKAN UTAMA)
=================================================================
${knowledgeText}

=================================================================
ATURAN MENJAWAB
=================================================================
1. Jawablah dengan format DAFTAR (Bullet Points) agar mudah dibaca.
2. Gunakan bahasa Indonesia yang sopan, formal, tapi ramah.
3. Panggil user dengan "Bapak/Ibu".
4. Jika user bertanya syarat "Bikin KTP" atau "KK", pastikan tanya dulu kondisinya (Baru/Hilang/Rusak/Pindah) atau berikan opsi syarat untuk masing-masing kondisi jika tidak spesifik.
5. Jika layanan tidak ada di data, katakan: "Mohon maaf, informasi belum tersedia." lalu arahkan ke petugas.

HANDOVER KE MANUSIA:
Keluarkan teks: "HANDOVER_TO_HUMAN" jika:
- User ingin bicara dengan orang/petugas.
- User marah/komplain.
- Pertanyaan sangat spesifik di luar data persyaratan.
`;

  return systemPrompt;
};