import React from "react";

export default function PekerjaanUsahaPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pekerjaan dan Usaha"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pekerjaan & Usaha
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          
          {/* INFO BOX (GRAY BACKGROUND) */}
          <div className="bg-[#E5E5E5] rounded-xl p-6 mb-10 text-center shadow-sm">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              Layanan ini dikhususkan untuk memfasilitasi administrasi warga terkait
              ketenagakerjaan dan perizinan usaha mikro. Pastikan Anda telah 
              melengkapi berkas persyaratan sebelum mengajukan permohonan ke 
              kantor kelurahan.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#06452F] px-6 py-2 text-sm font-medium text-white hover:bg-[#053724] transition-colors shadow-sm"
              >
                Terhubung dengan staff terkait
              </button>
            </div>
          </div>

          {/* JUDUL UTAMA */}
          <h2 className="text-lg md:text-xl font-semibold text-[#124076] mb-6 text-center">
            Persyaratan & Ketentuan Layanan
          </h2>

          {/* ITEM 1: IZIN BEKERJA DI LUAR NEGERI */}
          <div className="mb-8">
            <h3 className="font-semibold text-[#124076] md:text-lg mb-2">
              • Permohonan Pencatatan Register Izin Bekerja di Luar Negeri
            </h3>
            <p className="text-sm text-gray-800 mb-2">
              Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan
              surat keterangan/izin bagi Tenaga Kerja Indonesia (TKI):
            </p>
            <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
              <li>Surat Pengantar RT/RW</li>
              <li>Fotocopy KTP (Kartu Tanda Penduduk) Pemohon</li>
              <li>Fotocopy KK (Kartu Keluarga) Pemohon</li>
              <li>Fotocopy Akta Kelahiran / Ijazah Terakhir</li>
              <li>Surat Izin dari Orang Tua / Suami / Istri (bermaterai)</li>
              <li>Fotocopy KTP Orang Tua / Suami / Istri yang memberi izin</li>
              <li>Surat Rekomendasi dari PT/Penyalur Tenaga Kerja (jika ada)</li>
            </ol>
          </div>

          {/* DIVIDER (Garis Pemisah Halus) */}
          <hr className="border-gray-200 my-6" />

          {/* ITEM 2: IUMK */}
          <div className="mb-8">
            <h3 className="font-semibold text-[#124076] md:text-lg mb-2">
              • Permohonan Rekomendasi IUMK (Izin Usaha Mikro Kecil)
            </h3>
            <p className="text-sm text-gray-800 mb-2">
              Berikut merupakan persyaratan yang harus dilengkapi bagi pelaku usaha
              mikro untuk mendapatkan surat rekomendasi perizinan:
            </p>
            <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
              <li>Surat Pengantar RT/RW (Menyatakan lokasi usaha)</li>
              <li>Fotocopy KTP Pemohon (Pemilik Usaha)</li>
              <li>Fotocopy Kartu Keluarga (KK)</li>
              <li>Pas Foto berwarna ukuran 4x6 (2 lembar)</li>
              <li>Foto lokasi tempat usaha (dicetak)</li>
              <li>Surat Pernyataan kebenaran lokasi dan jenis usaha (bermaterai)</li>
              <li>Mengisi formulir permohonan IUMK di Kelurahan</li>
            </ol>
          </div>

        </div>
      </section>
    </main>
  );
}