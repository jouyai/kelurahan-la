// ============================================================================
// DATA PUSAT (SINGLE SOURCE OF TRUTH)
// ============================================================================
// File ini berisi seluruh data persyaratan layanan Kelurahan Lenteng Agung.
// Digunakan oleh AI Chatbot (Gemini) untuk menjawab pertanyaan warga.
// ============================================================================

export const INFO_KELURAHAN = {
  nama: "Kelurahan Lenteng Agung",
  alamat: "Jl. Agung Raya No. 1, Lenteng Agung, Jagakarsa, Jakarta Selatan",
  jamKerja: "Senin - Jumat, 08.00 - 16.00 WIB",
  kontak: "(021) 786-xxxx",
};

export const DATA_LAYANAN = [
  // =========================================
  // 1. KATEGORI: TANAH
  // =========================================
  {
    id: "tanah-1",
    kategori: "Tanah",
    layanan: "Permohonan Pengantar Laporan Bukti Kepemilikan Tanah yang Hilang",
    syarat: [
      "Surat Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP dan Kartu Keluarga",
      "Fotocopy Asal Usul Surat Tanah / Keterangan Tanah",
      "Fotocopy Surat Ahli Waris (jika terkait warisan)",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Kehilangan dari Kepolisian (Jika Dokumen Hilang)",
      "Iklan di 2 Surat Kabar berbeda (Jika Dokumen Hilang)",
      "Fotocopy KTP Saksi 2 orang",
    ],
  },
  {
    id: "tanah-2",
    kategori: "Tanah",
    layanan: "Permohonan Surat Rekomendasi Hak Atas Tanah Negara",
    syarat: [
      "Surat Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP dan Kartu Keluarga",
      "Fotocopy Asal Usul Surat Tanah / Keterangan Tanah / Bukti Kepemilikan Tanah",
      "Fotocopy Surat Ahli Waris (jika terkait warisan)",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Pernyataan Alamat yang Sama",
      "Surat Pernyataan Pemasangan Tanda Batas",
      "KTP Saksi-saksi",
    ],
  },
  {
    id: "tanah-3",
    kategori: "Tanah",
    layanan: "Permohonan Surat Keterangan Riwayat Tanah",
    syarat: [
      "Surat Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP dan Kartu Keluarga",
      "Fotocopy Asal Usul Surat Tanah / Keterangan Tanah / Bukti Kepemilikan Tanah",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Pernyataan Alamat yang Sama",
      "Surat Pernyataan Pemasangan Tanda Batas",
      "KTP Saksi-saksi",
    ],
  },
  {
    id: "tanah-4",
    kategori: "Tanah",
    layanan: "Permohonan Pencatatan Register Pengaktifan Kembali HGB Expired",
    syarat: [
      "Form Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP",
      "Fotocopy Kartu Keluarga",
      "Surat Pernyataan bahwa tanah/bangunan untuk tempat tinggal sendiri",
      "Surat Kuasa (jika dikuasakan)",
      "Fotocopy Sertifikat HGB",
      "Fotocopy SPPT PBB",
      "Bukti Lunas PBB",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Pernyataan Alamat Yang Sama",
      "Fotocopy KTP Saksi 2 orang",
    ],
  },
  {
    id: "tanah-5",
    kategori: "Tanah",
    layanan: "Permohonan Pencatatan Register PM1 – Balik Nama Sertifikat",
    syarat: [
      "Form Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP",
      "Fotocopy Kartu Keluarga",
      "Bukti kepemilikan (SHM / AJB / Girik / Waris)",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Pernyataan Alamat Yang Sama",
      "Surat Kuasa, jika dikuasakan",
      "Fotocopy KTP Penerima Kuasa",
      "Fotocopy KTP Saksi 2 orang",
    ],
  },

  // =========================================
  // 2. KATEGORI: PAJAK & ASET
  // =========================================
  {
    id: "pajak-1",
    kategori: "Pajak",
    layanan: "Pencatatan PMI – Keringanan PBB",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotocopy KTP",
      "Fotocopy Kartu Keluarga",
      "Bukti kepemilikan (SHM / AJB / Girik / Waris)",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Pas Foto Warna 4x6",
      "Surat Pernyataan Keabsahan Dokumen",
      "Foto Lokasi Usaha",
      "Fotocopy KTP Saksi 2 orang",
    ],
  },
  {
    id: "pajak-2",
    kategori: "Pajak",
    layanan: "Pencatatan PMI – Balik Nama PBB",
    syarat: [
      "Form Permohonan Kepada Lurah",
      "Surat Pengantar RT/RW",
      "Fotocopy KTP",
      "Fotocopy Kartu Keluarga",
      "Bukti kepemilikan (SHM / AJB / Girik)",
      "Fotocopy SPPT PBB dan Bukti Lunas",
      "Surat Pernyataan Tidak Sengketa",
      "Surat Pernyataan Penguasaan Fisik",
      "Surat Pernyataan Keabsahan Dokumen",
      "Surat Pernyataan Alamat Yang Sama",
      "Surat Kuasa (jika dikuasakan)",
      "Fotocopy KTP Penerima Kuasa",
      "Fotocopy KTP Saksi 2 orang",
    ],
  },

  // =========================================
  // 3. KATEGORI: KEPENDUDUKAN (LAINNYA)
  // =========================================
  {
    id: "penduduk-1",
    kategori: "Kependudukan",
    layanan: "Pencatatan Register Surat Pengantar PMI Belum Memiliki Rumah",
    syarat: [
      "Surat permohonan kepada Lurah yang ditandatangani pemohon",
      "Surat pengantar RT/RW setempat",
      "Fotokopi KTP dan Kartu Keluarga pemohon",
      "Surat keterangan belum memiliki rumah dari RT/RW atau pernyataan bermaterai",
      "Dokumen pendukung lain sesuai ketentuan (jika ada)",
    ],
  },
  {
    id: "penduduk-2",
    kategori: "Kependudukan",
    layanan: "Pencatatan Register Surat Keterangan Bersih Diri untuk Sekolah Kedinasan",
    syarat: [
      "Surat permohonan kepada Lurah yang ditandatangani pemohon",
      "Surat pengantar RT/RW",
      "Fotokopi KTP dan Kartu Keluarga",
      "Pas foto terbaru sesuai ketentuan sekolah kedinasan (jika diminta)",
      "Surat atau formulir dari instansi/sekolah kedinasan (jika ada format khusus)",
    ],
  },

  // =========================================
  // 4. KATEGORI: WARGA NEGARA ASING (WNA)
  // =========================================
  {
    id: "wna-1",
    kategori: "Warga Negara Asing",
    layanan: "Surat Keterangan Tempat Tinggal (SKTT) WNA",
    syarat: [
      "Surat Pengantar RT/RW setempat",
      "Fotokopi Paspor yang masih berlaku",
      "Fotokopi KITAS (Kartu Izin Tinggal Terbatas) / KITAP (Tetap)",
      "Surat Tanda Melapor (STM) dari Kepolisian",
      "Fotokopi KTP Sponsor / Penjamin",
      "Pas Foto berwarna ukuran 3x4 (2 lembar) latar belakang merah",
      "Surat Kuasa (jika pengurusan dikuasakan) bermaterai",
    ],
  },
  {
    id: "wna-2",
    kategori: "Warga Negara Asing",
    layanan: "Surat Keterangan Kelahiran Orang Asing",
    syarat: [
      "Surat Pengantar RT/RW",
      "Surat Keterangan Kelahiran dari Rumah Sakit / Bidan",
      "Fotokopi Paspor Orang Tua",
      "Fotokopi KITAS/KITAP Orang Tua",
      "Fotokopi Buku Nikah / Akta Perkawinan Orang Tua (Terjemahan Bahasa Indonesia)",
      "Fotokopi KTP Saksi 2 orang",
    ],
  },

  // =========================================
  // 5. KATEGORI: PERNYATAAN HUKUM & WARISAN
  // =========================================
  {
    id: "hukum-1",
    kategori: "Hukum & Warisan",
    layanan: "Surat Keterangan Ahli Waris (WNI Pribumi)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Surat Permohonan Ahli Waris (Bermaterai)",
      "Surat Keterangan Kematian Pewaris (Alm/Almh)",
      "Fotokopi KTP & KK Seluruh Ahli Waris",
      "Fotokopi Buku Nikah / Akta Perkawinan Pewaris",
      "Fotokopi Akta Kelahiran Seluruh Ahli Waris",
      "Surat Pernyataan Dua Orang Saksi (Bermaterai) & Fotokopi KTP Saksi",
      "Bagan Silsilah Keluarga (Diketahui RT/RW)",
    ],
  },
  {
    id: "hukum-2",
    kategori: "Hukum & Warisan",
    layanan: "Surat Keterangan Gaib / Tidak Diketahui Keberadaannya",
    syarat: [
      "Surat Pengantar RT/RW",
      "Surat Pernyataan Jaminan Keluarga (Bermaterai)",
      "Fotokopi KTP & KK Pelapor",
      "Surat Keterangan Lapor Orang Hilang dari Kepolisian",
      "Fotokopi Dokumen pendukung orang yang hilang (jika ada)",
    ],
  },
  {
    id: "hukum-3",
    kategori: "Hukum & Warisan",
    layanan: "Surat Keterangan Catatan Kepolisian (Pengantar SKCK)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP dan Kartu Keluarga",
      "Fotokopi Akta Kelahiran",
      "Pas Foto ukuran 4x6 (Background Merah)",
      "Mengisi Formulir Permohonan SKCK",
    ],
  },

  // =========================================
  // 6. KATEGORI: STATUS PERKAWINAN
  // =========================================
  {
    id: "nikah-1",
    kategori: "Status Perkawinan",
    layanan: "Surat Pengantar Nikah (N1, N2, N4)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP & KK Calon Suami dan Istri",
      "Fotokopi Akta Kelahiran Calon Suami dan Istri",
      "Fotokopi KTP Orang Tua (Ayah & Ibu) Calon Pengantin",
      "Surat Pernyataan Belum Menikah (Bermaterai) diketahui RT/RW",
      "Pas Foto 2x3 dan 3x4 (Background Biru/Merah sesuai tahun lahir)",
      "Surat Izin Orang Tua (jika umur kurang dari 21 tahun)",
      "Akta Cerai / Surat Kematian Pasangan (jika status Janda/Duda)",
      "Bukti Imunisasi TT (Tetanus) bagi Calon Pengantin Wanita (dari Puskesmas)",
    ],
  },
  {
    id: "nikah-2",
    kategori: "Status Perkawinan",
    layanan: "Surat Keterangan Belum Menikah",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP dan Kartu Keluarga",
      "Surat Pernyataan Belum Pernah Menikah (Bermaterai 10.000)",
      "Fotokopi KTP dua orang saksi",
    ],
  },
  {
    id: "nikah-3",
    kategori: "Status Perkawinan",
    layanan: "Surat Keterangan Janda / Duda",
    syarat: [
      "Surat Pengantar RT/RW",
      "Fotokopi KTP dan Kartu Keluarga",
      "Fotokopi Akta Cerai (Jika Cerai Hidup)",
      "Fotokopi Surat Kematian Pasangan (Jika Cerai Mati)",
      "Surat Pernyataan Status Janda/Duda (Bermaterai)",
    ],
  },

  // =========================================
  // 7. KATEGORI: LAYANAN KTP & KK (BARU)
  // =========================================
  {
    id: "ktp-1",
    kategori: "KTP & Kartu Keluarga",
    layanan: "Perekaman KTP Elektronik (e-KTP) Baru / Pemula",
    syarat: [
      "Berusia minimal 17 tahun",
      "Surat Pengantar RT/RW",
      "Fotokopi Kartu Keluarga (KK)",
      "Fotokopi Akta Kelahiran atau Ijazah Terakhir",
      "Datang langsung untuk foto dan sidik jari (tidak bisa diwakilkan)",
      "Berpakaian sopan (kemeja/berkerah)",
    ],
  },
  {
    id: "ktp-2",
    kategori: "KTP & Kartu Keluarga",
    layanan: "Pengurusan KTP Hilang atau Rusak",
    syarat: [
      "Surat Pengantar RT/RW",
      "Surat Keterangan Kehilangan dari Kepolisian (Asli) - Jika Hilang",
      "Fisik KTP yang rusak - Jika Rusak",
      "Fotokopi Kartu Keluarga (KK)",
      "Pas foto 3x4 (opsional, tergantung kebijakan Dukcapil setempat)",
    ],
  },
  {
    id: "ktp-3",
    kategori: "KTP & Kartu Keluarga",
    layanan: "Pembuatan / Perubahan Kartu Keluarga (KK)",
    syarat: [
      "Surat Pengantar RT/RW",
      "Kartu Keluarga (KK) Asli yang lama",
      "Buku Nikah / Akta Perkawinan (jika baru menikah)",
      "Surat Keterangan Pindah (SKPWNI) dari daerah asal (jika pendatang)",
      "Akta Kelahiran Anak (jika penambahan anggota keluarga)",
      "Surat Kematian (jika pengurangan anggota karena meninggal)",
    ],
  },

  // =========================================
  // 8. KATEGORI: PENGADUAN & KELUHAN WARGA (BARU)
  // =========================================
  {
    id: "aduan-1",
    kategori: "Pengaduan Masyarakat",
    layanan: "Pelaporan Gangguan Fasilitas Publik (Jalan Rusak/Sampah/Lampu Mati)",
    syarat: [
      "Foto bukti kondisi / kerusakan",
      "Alamat lengkap lokasi kejadian (RT/RW)",
      "Identitas / KTP Pelapor",
      "Sebaiknya sudah melapor ke RT/RW terlebih dahulu untuk diketahui",
      "Mengisi formulir pengaduan di kantor kelurahan (jika lapor manual)",
    ],
  },
  {
    id: "aduan-2",
    kategori: "Pengaduan Masyarakat",
    layanan: "Laporan Gangguan Ketertiban Umum (Kebisingan/Keributan)",
    syarat: [
      "Lapor terlebih dahulu ke Ketua RT dan RW setempat (Wajib)",
      "Bukti foto/video gangguan (jika ada)",
      "Jika tidak selesai di tingkat RT/RW, lapor ke Kelurahan dengan membawa surat pengantar RT/RW",
    ],
  },
];

// ============================================================================
// HELPER FUNCTION UNTUK AI (OPTIMIZED)
// ============================================================================
// Fungsi ini menghasilkan System Prompt yang kuat agar AI patuh pada data.
export const generateAIContext = () => {
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Kita susun data layanan agar mudah dibaca AI berdasarkan kategori
  let knowledgeText = "";
  DATA_LAYANAN.forEach((item, index) => {
    knowledgeText += `\n[${index + 1}] LAYANAN: ${item.layanan} (Kategori: ${item.kategori})\n`;
    knowledgeText += `    SYARAT:\n`;
    item.syarat.forEach((s) => {
      knowledgeText += `    - ${s}\n`;
    });
  });

  const systemPrompt = `
=================================================================
IDENTITAS & KONTEKS SISTEM
=================================================================
WAKTU SERVER: ${today}

PERAN ANDA:
Anda adalah Asisten Virtual (Customer Service) Resmi untuk ${INFO_KELURAHAN.nama}.
Alamat: ${INFO_KELURAHAN.alamat}.
Jam Kerja: ${INFO_KELURAHAN.jamKerja}.

TUGAS UTAMA:
Memberikan informasi persyaratan layanan kelurahan kepada warga dengan ramah, akurat, dan formal.

=================================================================
DATABASE PENGETAHUAN (SINGLE SOURCE OF TRUTH)
=================================================================
Gunakan data di bawah ini sebagai SATU-SATUNYA acuan jawaban Anda. 
JANGAN MENGARANG ATAU MENAMBAH SYARAT SENDIRI.

${knowledgeText}

=================================================================
ATURAN MENJAWAB (PENTING!)
=================================================================
1. GAYA BAHASA: 
   Gunakan Bahasa Indonesia yang baik, sopan, namun tetap luwes (tidak kaku seperti robot). Panggil user dengan sebutan "Kak" atau "Bapak/Ibu".

2. FORMAT JAWABAN:
   Jika user bertanya syarat layanan, sebutkan dalam bentuk DAFTAR (Bullet Points) agar mudah dibaca di layar HP.

3. UNKNOWN KNOWLEDGE:
   Jika user bertanya layanan yang TIDAK ADA di database di atas, katakan:
   "Mohon maaf, informasi mengenai layanan tersebut belum tersedia di sistem saya."
   Lalu picu handover.

4. HANDOVER PROTOCOL (PENGALIHAN KE MANUSIA):
   Keluarkan output teks persis: "HANDOVER_TO_HUMAN" (tanpa tanda kutip, hanya teks itu saja atau disisipkan di akhir kalimat) jika:
   - User marah-marah atau komplain.
   - User meminta berbicara dengan "orang", "admin", "staf", "manusia", "petugas".
   - User bertanya hal sensitif di luar layanan umum.
   - User ingin melakukan pendaftaran online yang butuh verifikasi manual.

5. BATASAN:
   Anda tidak bisa memproses dokumen, anda hanya memberikan INFORMASI persyaratan.

CONTOH INTERAKSI:
User: "Syarat nikah apa aja?"
Bot: "Untuk pengurusan Surat Pengantar Nikah, berikut persyaratannya ya Kak:
- Surat Pengantar RT/RW
- Fotokopi KTP & KK Calon Suami dan Istri
- (dan seterusnya sesuai data)..."
`;

  return systemPrompt;
};