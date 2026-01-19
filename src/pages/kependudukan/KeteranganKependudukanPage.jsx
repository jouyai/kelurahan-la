// src/pages/kependudukan/KeteranganKependudukanPage.jsx
import React from "react";

export default function KeteranganKependudukanPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* HERO */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Keterangan Kependudukan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Keterangan Kependudukan Lainnya
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10 space-y-10">
        <p className="text-sm text-gray-700 leading-relaxed mb-2">
          Halaman ini memuat persyaratan umum untuk layanan keterangan
          kependudukan lainnya di Kelurahan Lenteng Agung. Silakan
          menyesuaikan isi dengan dokumen resmi jika ada pembaruan.
        </p>

        <ServiceSection
          title="Pencatatan Register Surat Pengantar PMI Belum Memiliki Rumah"
          requirements={[
            "Surat permohonan kepada Lurah yang ditandatangani pemohon.",
            "Surat pengantar RT/RW setempat.",
            "Fotokopi KTP dan Kartu Keluarga pemohon.",
            "Surat keterangan belum memiliki rumah dari RT/RW atau pernyataan bermaterai.",
            "Dokumen pendukung lain sesuai ketentuan (jika ada).",
          ]}
        />

        <ServiceSection
          title="Pencatatan Register Surat Keterangan Bersih Diri untuk Sekolah Kedinasan"
          requirements={[
            "Surat permohonan kepada Lurah yang ditandatangani pemohon.",
            "Surat pengantar RT/RW.",
            "Fotokopi KTP dan Kartu Keluarga.",
            "Pas foto terbaru sesuai ketentuan sekolah kedinasan (jika diminta).",
            "Surat atau formulir dari instansi/sekolah kedinasan (jika ada format khusus).",
          ]}
        />
      </section>
    </main>
  );
}

function ServiceSection({ title, requirements }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8">
      <h2 className="text-lg md:text-xl font-semibold text-[#124076] mb-3">
        {title}
      </h2>
      <p className="text-sm text-gray-700 mb-2">
        Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan
        permohonan:
      </p>
      <ul className="ml-5 list-decimal text-sm text-gray-800 space-y-1 leading-relaxed">
        {requirements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
