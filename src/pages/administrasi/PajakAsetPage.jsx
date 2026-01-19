import React from "react";
import { DATA_LAYANAN } from "../../data/knowledgeBase";

export default function PajakAsetPage() {
  const layananPajak = DATA_LAYANAN.filter(item => item.kategori === "Pajak");

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pajak & Aset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Pajak & Aset
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10 space-y-8">
        
        {/* Info Box (Opsional) */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
          <p className="text-sm text-indigo-800">
            <strong>Info:</strong> Pastikan Anda membawa SPPT PBB asli tahun terakhir saat melakukan pengurusan administrasi pertanahan atau perpajakan.
          </p>
        </div>

        {/* 3. Render Data Otomatis */}
        {layananPajak.length > 0 ? (
          layananPajak.map((layanan) => (
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
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        {/* Ikon Dekoratif (Uang/Pajak) */}
        <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-indigo-100 items-center justify-center text-indigo-600 font-bold text-xl">
          💰
        </div>

        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-[#124076] mb-3">{title}</h2>
          <p className="text-sm text-gray-700 mb-3">
            Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan permohonan:
          </p>
          <ul className="list-disc ml-5 space-y-1.5 text-sm text-gray-800 leading-relaxed marker:text-indigo-500">
            {requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}