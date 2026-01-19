import React from "react";
import { DATA_LAYANAN } from "../../data/knowledgeBase";

export default function TanahPage() {
  const layananTanah = DATA_LAYANAN.filter(item => item.kategori === "Tanah");

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">

      {/* HERO MINI */}
      <section className="relative h-48 md:h-56 w-full">
        <img
          src="/bg_hero.png"
          alt="Pelayanan Tanah"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Persyaratan Pelayanan Tanah
          </h1>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-10 space-y-10">
        
        {/* 3. LOOPING DATA: Render otomatis sesuai isi knowledgeBase.js */}
        {layananTanah.length > 0 ? (
          layananTanah.map((item) => (
            <ServiceSection
              key={item.id}
              title={item.layanan}
              requirements={item.syarat}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Data layanan belum tersedia.</p>
        )}

      </section>
    </main>
  );
}

/* ===================================
 REUSABLE SECTION COMPONENT
===================================
*/
function ServiceSection({ title, requirements }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 hover:shadow-md transition-shadow">
      <h2 className="text-lg md:text-xl font-semibold text-[#06452F] mb-3">
        {title}
      </h2>

      <p className="text-sm text-gray-700 mb-2">
        Berikut merupakan persyaratan yang harus dilengkapi dalam pengajuan permohonan:
      </p>

      <ul className="ml-5 list-decimal text-sm text-gray-800 space-y-1">
        {requirements.map((item, index) => (
          <li key={index} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  );
}