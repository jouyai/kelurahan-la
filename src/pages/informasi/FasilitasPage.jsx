import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPinIcon, 
  BuildingLibraryIcon, 
  TrophyIcon, 
  HeartIcon, 
  FaceSmileIcon,
  CheckCircleIcon,
  PhoneIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";

// Dummy Data Fasilitas
const facilities = [
  {
    id: 1,
    name: "RPTRA Lenteng Agung",
    category: "Ruang Publik",
    address: "Jl. Lontar RT 010/RW 03",
    features: ["Taman Bermain Anak", "Perpustakaan", "Lapangan Futsal", "Ruang Laktasi"],
    imageColor: "bg-green-100",
    icon: FaceSmileIcon,
    status: "Buka"
  },
  {
    id: 2,
    name: "Gedung Sasana Krida (GSK)",
    category: "Olahraga & Seni",
    address: "Jl. Agung Raya No. 1",
    features: ["Lapangan Bulutangkis", "Panggung Seni", "Aula Serbaguna"],
    imageColor: "bg-orange-100",
    icon: TrophyIcon,
    status: "Perlu Reservasi"
  },
  {
    id: 3,
    name: "Puskesmas Kelurahan 1",
    category: "Kesehatan",
    address: "Jl. Camat Gabun II",
    features: ["Poli Umum", "Poli Gigi", "KIA/KB", "Farmasi"],
    imageColor: "bg-red-100",
    icon: HeartIcon,
    status: "Buka (07.30 - 16.00)"
  },
  {
    id: 4,
    name: "Bank Sampah Induk",
    category: "Lingkungan",
    address: "Jl. Kebagusan Kecil",
    features: ["Penimbangan Sampah", "Daur Ulang", "Edukasi Kompos"],
    imageColor: "bg-blue-100",
    icon: BuildingLibraryIcon,
    status: "Buka (Senin & Kamis)"
  },
  {
    id: 5,
    name: "Masjid Raya Al-Ikhlas",
    category: "Ibadah",
    address: "Jl. Raya Lenteng Agung",
    features: ["Ruang Sholat Utama", "Aula Pengajian", "Parkir Luas"],
    imageColor: "bg-purple-100",
    icon: BuildingLibraryIcon,
    status: "Buka 24 Jam"
  }
];

export default function FasilitasPage({ onConnectStaff }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFacilities = facilities.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* === BREADCRUMB === */}
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Fasilitas</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Fasilitas Umum
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Daftar sarana dan prasarana publik yang tersedia di Kelurahan Lenteng Agung 
            untuk mendukung aktivitas sosial, kesehatan, dan olahraga warga.
          </p>
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: FACILITIES LIST */}
          <div className="w-full lg:w-2/3">
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Cari fasilitas (misal: RPTRA, Puskesmas)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06452F]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-6">
              {filteredFacilities.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 group"
                >
                  {/* Image Placeholder */}
                  <div className={`shrink-0 w-full sm:w-32 h-32 rounded-xl flex items-center justify-center ${item.imageColor} group-hover:opacity-90 transition-opacity`}>
                    <item.icon className={`h-10 w-10 ${item.imageColor.replace('bg-', 'text-').replace('100', '600')}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#124076] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase border ${
                        item.status.includes('Buka') ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      {item.address}
                    </div>
                    
                    {/* Features List */}
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-xs text-gray-600 border border-gray-100">
                          <CheckCircleIcon className="h-3 w-3 text-[#06452F]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {filteredFacilities.length === 0 && (
                <div className="text-center py-10 bg-gray-50 rounded-xl">
                  <p className="text-gray-500">Fasilitas tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Widget: Peminjaman Fasilitas */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5" />
                Prosedur Peminjaman
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
                Untuk penggunaan Aula Kelurahan atau Gedung Sasana Krida (GSK) bagi kegiatan warga, 
                mohon perhatikan prosedur berikut:
              </p>
              
              <ol className="relative border-l border-gray-200 ml-3 space-y-4">
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-[#06452F] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-xs font-bold text-gray-900">Surat Permohonan</h5>
                  <p className="text-xs text-gray-500 mt-1">Ajukan surat ke Sekretariat Kelurahan min. 7 hari sebelum acara.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-xs font-bold text-gray-900">Verifikasi Jadwal</h5>
                  <p className="text-xs text-gray-500 mt-1">Petugas akan mengecek ketersediaan jadwal gedung.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <h5 className="text-xs font-bold text-gray-900">Persetujuan</h5>
                  <p className="text-xs text-gray-500 mt-1">Jika disetujui, pemohon akan menerima surat izin penggunaan.</p>
                </li>
              </ol>

              {/* Call to Action Chat */}
              <div className="mt-6 pt-6 border-t border-gray-50">
                <button
                  type="button"
                  onClick={() => onConnectStaff && onConnectStaff("Cek Jadwal Fasilitas")}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Cek Ketersediaan
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}