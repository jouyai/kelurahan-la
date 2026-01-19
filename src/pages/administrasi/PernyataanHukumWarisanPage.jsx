import React from "react";
import { DATA_LAYANAN } from "../../data/knowledgeBase";

export default function PernyataanHukumWarisanPage() {
  const layananHukum = DATA_LAYANAN.filter(item => item.kategori === "Hukum & Warisan");

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Layanan Hukum dan Warisan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Layanan Pernyataan Hukum & Warisan
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              Informasi persyaratan administrasi kewarisan dan surat keterangan hukum
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10 space-y-8">
        
        {/* Info Box (Penting untuk Warisan) */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-amber-800">
            <strong>Perhatian:</strong> Untuk pengurusan surat waris, pastikan seluruh ahli waris hadir atau melampirkan surat kuasa yang sah. Tanda tangan saksi wajib dilakukan di atas materai.
          </p>
        </div>

        {/* 3. Render Data Otomatis */}
        {layananHukum.length > 0 ? (
          layananHukum.map((layanan) => (
            <ServiceSection
              key={layanan.id}
              title={layanan.layanan}
              requirements={layanan.syarat}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Data layanan belum tersedia.</p>
          </div>
        )}

      </section>
    </main>
  );
}

/* ===================================
   REUSABLE COMPONENT
   =================================== */
function ServiceSection({ title, requirements }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        {/* Ikon Dekoratif (Timbangan Hukum) */}
        <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-amber-100 items-center justify-center text-amber-600 font-bold text-xl">
          ⚖️
        </div>
        
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-bold text-[#124076] mb-3">
            {title}
          </h2>

          <p className="text-sm text-gray-600 mb-3">
            Persyaratan dokumen yang harus dilampirkan:
          </p>

          <ul className="list-disc ml-5 text-sm text-gray-800 space-y-1.5 marker:text-amber-500">
            {requirements.map((item, index) => (
              <li key={index} className="leading-relaxed pl-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}