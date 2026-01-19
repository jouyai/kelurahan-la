import React from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingBagIcon, 
  CalendarDaysIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  TagIcon,
  TicketIcon,
  TruckIcon, // Pastikan ini di-import
  BuildingStorefrontIcon // Icon baru untuk Bazar
} from "@heroicons/react/24/solid";

// Dummy Data Pangan Murah
const programPangan = [
  {
    id: 1,
    title: "Distribusi Pangan Bersubsidi (KJP Plus)",
    desc: "Program pangan murah khusus bagi pemegang Kartu Jakarta Pintar (KJP) Plus, Kartu Lansia Jakarta (KLJ), dan Kartu Penyandang Disabilitas (KPDJ).",
    jadwal: "Setiap Tanggal 5 - 15",
    lokasi: "RPTRA Lenteng Agung",
    items: "Daging Sapi, Ayam, Telur, Ikan, Susu UHT, Beras",
    status: "Perlu Antrean Online",
    icon: TicketIcon, // Icon Ticket
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Pasar Murah Keliling (Mobile)",
    desc: "Mobil pangan murah yang berkeliling ke setiap RW menyediakan paket sembako dengan harga dibawah pasar untuk warga umum.",
    jadwal: "Senin & Kamis (09:00 - 12:00)",
    lokasi: "Bergilir di Kantor RW 01 - RW 10",
    items: "Beras 5kg, Minyak Goreng 2L, Gula Pasir",
    status: "Tersedia / Walk-in",
    icon: TruckIcon, // Icon Truck
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Bazar Pangan Rakyat",
    desc: "Bazar bulanan yang bekerja sama dengan Bulog dan UMKM lokal, menyediakan sembako, sayur mayur segar, dan produk olahan.",
    jadwal: "Akhir Bulan (Sabtu-Minggu)",
    lokasi: "Halaman Kantor Kelurahan",
    items: "Sembako, Sayur, Buah, Frozen Food",
    status: "Terbuka Umum",
    icon: BuildingStorefrontIcon, // <-- PERBAIKAN: Menambahkan Icon disini
    color: "bg-orange-100 text-orange-700",
  },
];

export default function PanganMurahPage({ onConnectStaff }) {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION */}
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
                <span className="ml-1 text-gray-500 md:ml-2">Program Kerja</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Pangan Murah</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Program Pangan Murah
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Upaya menjaga ketahanan pangan dan stabilitas harga kebutuhan pokok 
            bagi warga Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: PROGRAM LIST */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <ShoppingBagIcon className="h-5 w-5 text-[#06452F]" />
              Jadwal & Lokasi Distribusi
            </h3>

            <div className="space-y-6">
              {programPangan.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row gap-5"
                >
                  {/* Icon Box */}
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${item.color} bg-opacity-20 group-hover:scale-105 transition-transform`}>
                    <item.icon className={`h-8 w-8 ${item.color.split(" ")[1]}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-[#124076] transition-colors">
                        {item.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border ${
                        item.status.includes('Online') ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                        'bg-green-50 text-green-700 border-green-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <CalendarDaysIcon className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">Waktu:</span> {item.jadwal}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPinIcon className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">Lokasi:</span> {item.lokasi}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-600 border-t border-gray-200 pt-2 mt-2">
                        <CurrencyDollarIcon className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-semibold block mb-0.5">Komoditas:</span>
                          <span className="text-gray-500">{item.items}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Info Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <TagIcon className="h-5 w-5" />
                Syarat Pengambilan
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Untuk memastikan distribusi tepat sasaran, warga diwajibkan membawa dokumen berikut:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="shrink-0 w-5 h-5 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-xs text-blue-900 font-medium">KTP Asli & Fotocopy</span>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="shrink-0 w-5 h-5 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-xs text-blue-900 font-medium">Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="shrink-0 w-5 h-5 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-xs text-blue-900 font-medium">Kartu Bantuan (KJP/KLJ/KPDJ) *Khusus Program Bersubsidi</span>
                </li>
              </ul>

              {/* Call to Action Chat */}
              <div className="mt-6 bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Cek Kuota Hari Ini?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Tanyakan ketersediaan stok pangan murah hari ini kepada petugas.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Info Pangan Murah")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm cursor-pointer"
                >
                  Cek Stok via Chat
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}