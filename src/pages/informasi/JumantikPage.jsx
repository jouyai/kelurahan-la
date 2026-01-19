import React from "react";
import { Link } from "react-router-dom";

export default function JumantikPage() {
  // Data Dummy Foto Kegiatan (Ganti src dengan path foto asli Anda)
  const activities = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Foto Petugas/Warga
      alt: "Pemeriksaan Jentik Berkala"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558086266-939e65839446?auto=format&fit=crop&q=80&w=800", // Foto Diskusi
      alt: "Sosialisasi Jumantik"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1627843825832-6a7590d6435c?auto=format&fit=crop&q=80&w=800", // Foto Kerja Bakti
      alt: "Kerja Bakti Lingkungan"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800", // Foto Menyapu
      alt: "Membersihkan Lingkungan"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1617870952348-7524edfb61b7?auto=format&fit=crop&q=80&w=800", // Foto Warga
      alt: "Koordinasi Warga"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1599813391721-0a631665a3c6?auto=format&fit=crop&q=80&w=800", // Foto Tanaman
      alt: "Penghijauan"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-64 w-full">
        {/* Gambar Background Kantor Kelurahan */}
        <img
          src="/bg_hero.png" 
          alt="Jumantik Kelurahan Lenteng Agung"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2">
            Jumantik
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            Juru Pemantau Jentik - Kelurahan Lenteng Agung
          </p>
        </div>
      </section>

      {/* NAVIGASI BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mt-8 mb-6">
        <div className="text-sm text-gray-500 flex items-center gap-2">
           <Link to="/" className="hover:text-[#06452F] hover:underline">Beranda</Link>
           <span>&gt;</span>
           <span className="font-semibold text-gray-700">Jumantik</span>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mb-10">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          
          {/* JUDUL KONTEN */}
          <h2 className="text-xl md:text-2xl font-bold text-[#124076] mb-8 border-b border-gray-100 pb-4">
            Dokumentasi Kegiatan Jumantik
          </h2>

          {/* GRID GALERI FOTO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {activities.map((item) => (
              <div 
                key={item.id} 
                className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay (Efek saat hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Keterangan Tambahan */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-4 items-start">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-bold text-[#124076] text-sm md:text-base mb-1">
                Jadwal Kegiatan Rutin
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kegiatan Pemberantasan Sarang Nyamuk (PSN) dilaksanakan secara rutin setiap hari Jumat 
                pagi (Jumat Bersih) serentak di seluruh RW Kelurahan Lenteng Agung untuk mencegah penyebaran Demam Berdarah Dengue (DBD).
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}