import React from "react";
import { Link } from "react-router-dom";

// --- DUMMY DATA (Disamakan kontennya agar mirip gambar) ---
const healthNews = Array(9).fill({
  id: 1,
  title: "Aktivasi IKD di RT 03 RW 02 Kelurahan Lenteng Agung Berjalan Lancar dan Tertib",
  date: "Senin, 18 Sep 2024",
  author: "Admin",
  desc: "Aktivasi IKD (Identitas Kependudukan Digital) di lingkungan RT 03 RW 02 Kelurahan Lenteng Agung, Jagakarsa, Jakarta Selatan berjalan dengan lancar...",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400", // Placeholder Image
});

export default function BeritaKesehatanPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-8">
      
      {/* HEADER & BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-6">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <Link to="/berita" className="hover:text-[#06452F] hover:underline">
            Berita Kelurahan
          </Link>
          <span>&gt;</span>
          <span className="font-semibold text-gray-700">Berita Kesehatan</span>
        </div>

        {/* Judul Halaman */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#06452F]">
          Berita Kesehatan
        </h1>
      </div>

      {/* CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          
          {/* GRID BERITA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthNews.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>

          {/* PAGINATION (Opsional - Visual saja) */}
          <div className="mt-10 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full bg-[#06452F] text-white font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium flex items-center justify-center transition-colors">
              3
            </button>
            <span className="flex items-end px-2 text-gray-400">...</span>
          </div>

        </div>
      </section>
    </main>
  );
}

// --- KOMPONEN KARTU BERITA ---
function NewsCard({ item }) {
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
      {/* Image Wrapper */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay Label Kategori (Opsional) */}
        <div className="absolute top-3 left-3 bg-[#06452F]/90 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
          Kesehatan
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-bold text-[#124076] text-sm md:text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#06452F] transition-colors">
          {item.title}
        </h3>
        
        {/* Meta Data */}
        <div className="text-xs text-gray-400 mb-3 flex items-center gap-2 border-b border-gray-100 pb-3">
          <span className="flex items-center gap-1">
            📅 {item.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4 flex-grow">
          {item.desc}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <button className="w-full py-2 rounded-lg border border-[#06452F] text-[#06452F] text-xs font-semibold hover:bg-[#06452F] hover:text-white transition-all duration-300">
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}