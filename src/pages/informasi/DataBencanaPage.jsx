import React from "react";
import { Link } from "react-router-dom";

export default function DataBencanaPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      
      {/* HERO SECTION */}
      <section className="relative h-48 md:h-64 w-full">
        <img
          src="/bg_hero.png"
          alt="Data Bencana Kelurahan Lenteng Agung"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Data Bencana
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            Peta Lokasi Rawan dan Titik Pengungsian
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mt-8 mb-6">
        <div className="text-sm text-gray-500 flex items-center gap-2">
           <Link to="/" className="hover:text-[#06452F] hover:underline">Beranda</Link>
           <span>&gt;</span>
           <span className="font-semibold text-gray-700">Data Bencana</span>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* KOLOM KIRI: PETA */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-inner bg-gray-100 h-[500px] relative">
                {/* Placeholder Peta - Ganti src dengan gambar peta asli Anda */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Peta Rawan Bencana" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Label (Opsional jika gambar peta belum ada labelnya) */}
                <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-xl shadow-lg text-xs md:text-sm space-y-2 backdrop-blur-sm border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2 border-b pb-1">Legenda Peta</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span>Rawan Banjir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span>Rawan Longsor</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span>Rawan Tawuran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span>Titik Pengungsian</span>
                  </div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: DATA TEKS */}
            <div className="w-full lg:w-1/2 space-y-8">
              
              <div className="bg-[#124076] text-white p-4 rounded-xl text-center shadow-md">
                <h2 className="text-xl font-bold uppercase tracking-wider">Data Lokasi Rawan</h2>
              </div>

              {/* LIST RAWAN BANJIR */}
              <CategorySection title="Lokasi Rawan Banjir" color="border-blue-500" icon="🌊">
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  <li>RT. 012/01 Gg. Kampus Lenteng Agung Barat</li>
                  <li>RT. 006/02 Jalan Guru Lenteng Agung Timur</li>
                  <li>RT. 012/02 Jl. Lagga IV Lenteng Agung Timur</li>
                  <li>RT. 013-014/03 Gg. Kecapi Lenteng Agung Timur</li>
                  <li>RT. 002-003/04 Jl. Agung Raya II Lenteng Agung Timur</li>
                  <li>RT. 001/05 Gg. Upu Lenteng Agung Barat</li>
                  <li>RT. 006/06 Jl. Jagakarsa Lenteng Agung Timur</li>
                  <li>RT. 006/07 Gg. Pandawa Jl. Agung Raya II LA Barat</li>
                  <li>RT. 010/07 Gg. H. Salim Jl. Agung Raya II LA Barat</li>
                  <li>RT. 012/07 Gg. H. Salim Jl. Agung Raya II LA Barat</li>
                </ul>
              </CategorySection>

              {/* LIST RAWAN LONGSOR */}
              <CategorySection title="Lokasi Rawan Longsor" color="border-red-500" icon="⚠️">
                <p className="text-sm font-semibold text-gray-800 mb-2">Sepanjang Kali Ciliwung yg melewati:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  <li><span className="font-semibold text-red-600">RW. 02:</span> RT 003, 004, 006, 012</li>
                  <li><span className="font-semibold text-red-600">RW. 03:</span> RT 013, 014</li>
                  <li><span className="font-semibold text-red-600">RW. 04:</span> RT 001, 002, 003</li>
                  <li><span className="font-semibold text-red-600">RW. 07:</span> RT 005, 006, 009, 011, 012</li>
                  <li><span className="font-semibold text-red-600">RW. 08:</span> RT 001, 003, 006, 007, 009</li>
                </ul>
              </CategorySection>

              {/* LIST RAWAN TAWURAN */}
              <CategorySection title="Lokasi Rawan Tawuran" color="border-yellow-500" icon="⚔️">
                 <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  <li>RT. 005/01 Jalur Lambat PDIP Lenteng Agung Barat</li>
                  <li>RT. 003/03 Gg. Lontar Lenteng Agung Timur</li>
                  <li>RT. 009/04 Gg. Joko Lenteng Agung Timur</li>
                  <li>RT. 013/05 Gg. Waspada 1 dan 2</li>
                </ul>
              </CategorySection>

              {/* LIST TITIK PENGUNGSIAN */}
              <CategorySection title="Lokasi Titik Pengungsian" color="border-green-500" icon="⛺">
                 <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  <li>RT. 012/02 Musholla Al-Mubarok</li>
                  <li>RT. 014/03 Masjid Jami’ As Shidiqiah</li>
                </ul>
              </CategorySection>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

// --- SUB-COMPONENT UNTUK KATEGORI ---
function CategorySection({ title, color, icon, children }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-5 border-l-4 ${color} shadow-sm hover:shadow-md transition-shadow`}>
      <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}