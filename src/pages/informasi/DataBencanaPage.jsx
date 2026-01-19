import React from "react";
import { Link } from "react-router-dom";
import { 
  ExclamationTriangleIcon, 
  LifebuoyIcon, 
  FireIcon, 
  MapIcon, 
  PhoneIcon,
  ShieldCheckIcon,
  MegaphoneIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";

// Dummy Data Statistik Bencana (2025-2026)
const stats = [
  { label: "Kejadian Banjir", value: "12", icon: LifebuoyIcon, color: "bg-blue-100 text-blue-600" },
  { label: "Kebakaran", value: "3", icon: FireIcon, color: "bg-red-100 text-red-600" },
  { label: "Pohon Tumbang", value: "8", icon: ExclamationTriangleIcon, color: "bg-green-100 text-green-600" },
  { label: "Tanah Longsor", value: "1", icon: MapIcon, color: "bg-orange-100 text-orange-600" },
];

// Data Riwayat Bencana Terbaru
const recentDisasters = [
  {
    id: 1,
    title: "Siaga Banjir Kiriman (Katulampa)",
    date: "14 Januari 2026",
    location: "RW 01 & RW 03 (Bantaran Ciliwung)",
    status: "Waspada",
    desc: "Kenaikan debit air Ciliwung menyebabkan genangan setinggi 30-50 cm di beberapa titik bantaran kali.",
    type: "Banjir"
  },
  {
    id: 2,
    title: "Pohon Tumbang Hujan Angin",
    date: "02 Januari 2026",
    location: "Jl. Raya Lenteng Agung (Arah Depok)",
    status: "Selesai",
    desc: "Pohon angsana tua tumbang menutup sebagian jalan. Penanganan selesai dilakukan oleh PPSU dan Damkar.",
    type: "Cuaca Ekstrem"
  },
  {
    id: 3,
    title: "Kebakaran Lahan Kosong",
    date: "12 Desember 2025",
    location: "Jl. Joe (Lahan Warga)",
    status: "Selesai",
    desc: "Diduga akibat puntung rokok. Api berhasil dipadamkan warga sebelum armada Damkar tiba.",
    type: "Kebakaran"
  }
];

export default function DataBencanaPage({ onConnectStaff }) {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* === BREADCRUMB SECTION === */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 mb-8">
        <nav className="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-[#06452F] hover:underline flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-gray-500 md:ml-2">Informasi</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Data Bencana</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Data & Potensi Bencana
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Informasi terkini mengenai titik rawan, riwayat kejadian, dan kesiapsiagaan 
            bencana di lingkungan Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* === STATS CARDS === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-20`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: MAIN CONTENT */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Peta Rawan Bencana (Placeholder Visual) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapIcon className="h-5 w-5 text-[#06452F]" />
                Peta Titik Rawan Banjir
              </h3>
              
              {/* Visualisasi Sederhana menggunakan CSS Grid/Flex sebagai representasi Peta */}
              <div className="w-full h-64 bg-blue-50 rounded-lg relative overflow-hidden border border-blue-100 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(#06452F 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>
                
                {/* Sungai Ciliwung Representation */}
                <div className="absolute top-0 right-10 w-24 h-full bg-blue-200 transform -skew-x-12 opacity-50 flex items-center justify-center">
                  <span className="transform rotate-90 text-blue-800 font-bold text-xs tracking-widest opacity-50">SUNGAI CILIWUNG</span>
                </div>

                {/* Hotspots */}
                <div className="absolute top-10 right-28 group cursor-pointer">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 items-center justify-center text-white text-[10px] font-bold">RW01</span>
                  </span>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Rawan Banjir (Siaga 3)
                  </div>
                </div>

                <div className="absolute bottom-20 right-20 group cursor-pointer">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-orange-500 items-center justify-center text-white text-[10px] font-bold">RW03</span>
                  </span>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Rawan Longsor Tebing
                  </div>
                </div>

                <p className="z-10 bg-white/80 px-4 py-2 rounded-full text-xs font-semibold text-gray-600 shadow-sm backdrop-blur-sm">
                  Visualisasi Area Bantaran Ciliwung
                </p>
              </div>

              <div className="mt-4 flex gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span> Zona Merah (Rawan Tinggi)
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span> Zona Kuning (Waspada)
                </div>
              </div>
            </div>

            {/* Riwayat Bencana */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-[#06452F]" />
                Riwayat Kejadian Terbaru
              </h3>
              <div className="space-y-4">
                {recentDisasters.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                          item.type === 'Banjir' ? 'bg-blue-50 text-blue-600' :
                          item.type === 'Kebakaran' ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'Waspada' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-green-50 text-green-700 border-green-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 text-base">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 mb-2">{item.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <MapIcon className="h-3 w-3" />
                      Lokasi: {item.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Widget: Kontak Darurat */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100 sticky top-24">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 animate-pulse" />
                Kontak Darurat 24 Jam
              </h4>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">Siaga Bencana (Pusat)</span>
                  <a href="tel:112" className="text-red-600 font-extrabold text-lg hover:underline">112</a>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">Damkar Jagakarsa</span>
                  <a href="tel:0217890113" className="text-red-600 font-bold hover:underline">021-7890113</a>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">Polsek Jagakarsa</span>
                  <a href="tel:0217864446" className="text-red-600 font-bold hover:underline">021-7864446</a>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">Posko Kelurahan</span>
                  <a href="tel:0217865555" className="text-red-600 font-bold hover:underline">021-7865555</a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-200 text-center">
                <p className="text-xs text-red-700 mb-2">Butuh bantuan evakuasi segera?</p>
                <button 
                  onClick={() => onConnectStaff("Lapor Darurat Bencana")}
                  className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MegaphoneIcon className="h-4 w-4" />
                  Lapor Petugas Piket
                </button>
              </div>
            </div>

            {/* Widget: Kampung Siaga Bencana */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <h4 className="font-bold text-[#124076] mb-2 text-sm flex items-center gap-2">
                 <ShieldCheckIcon className="h-4 w-4" />
                 Kampung Siaga Bencana (KSB)
               </h4>
               <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                 Kelurahan Lenteng Agung telah membentuk KSB untuk mitigasi bencana berbasis masyarakat. Gudang logistik tersedia di Kantor Kelurahan.
               </p>
               <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-gray-50 p-2 rounded border border-gray-100">
                    <span className="block text-lg font-bold text-[#06452F]">1</span>
                    <span className="text-[10px] text-gray-500">Tenda Pengungsi</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded border border-gray-100">
                    <span className="block text-lg font-bold text-[#06452F]">2</span>
                    <span className="text-[10px] text-gray-500">Perahu Karet</span>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}