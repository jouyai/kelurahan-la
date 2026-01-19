import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  AcademicCapIcon, 
  MapPinIcon, 
  BuildingLibraryIcon, 
  FunnelIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";

// Dummy Data Sekolah
const schools = [
  { id: 1, name: "SDN Lenteng Agung 01 Pagi", level: "SD", address: "Jl. Agung Raya No. 1", akreditasi: "A", status: "Negeri" },
  { id: 2, name: "SDN Lenteng Agung 03 Pagi", level: "SD", address: "Jl. Camat Gabun I", akreditasi: "A", status: "Negeri" },
  { id: 3, name: "SMP Negeri 98 Jakarta", level: "SMP", address: "Jl. Raya Lenteng Agung", akreditasi: "A", status: "Negeri" },
  { id: 4, name: "SMA Negeri 38 Jakarta", level: "SMA", address: "Jl. Raya Lenteng Agung", akreditasi: "A", status: "Negeri" },
  { id: 5, name: "PAUD Melati RW 02", level: "PAUD", address: "Balai Warga RW 02", akreditasi: "B", status: "Swasta" },
  { id: 6, name: "TK Islam Al-Ikhlas", level: "TK", address: "Jl. Kebagusan Kecil", akreditasi: "A", status: "Swasta" },
  { id: 7, name: "SMK Perguruan Cikini", level: "SMA", address: "Jl. Srengseng Sawah", akreditasi: "A", status: "Swasta" },
  { id: 8, name: "PKBM Negeri 15 (Paket A/B/C)", level: "Non-Formal", address: "Jl. Joe", akreditasi: "B", status: "Negeri" },
];

export default function PendidikanPage({ onConnectStaff }) {
  const [filter, setFilter] = useState("Semua");

  const filteredSchools = filter === "Semua" 
    ? schools 
    : schools.filter(s => s.level === filter || (filter === "SMA" && s.level === "SMK"));

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB */}
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Pendidikan</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Sarana Pendidikan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Data sekolah dan lembaga pendidikan formal maupun non-formal yang tersebar 
            di wilayah Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: SCHOOL LIST */}
          <div className="w-full lg:w-2/3">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Semua", "PAUD", "SD", "SMP", "SMA"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    filter === level 
                    ? "bg-[#06452F] text-white border-[#06452F]" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#06452F]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredSchools.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-lg border border-blue-100">
                    {item.level}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        item.status === 'Negeri' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      {item.address}
                    </div>

                    <div className="flex gap-3 text-xs">
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <StarIcon className="h-3 w-3 text-yellow-500" />
                        Akreditasi: <span className="font-bold text-gray-800">{item.akreditasi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Info KJP & PPDB */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5" />
                Informasi Penting
              </h4>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h5 className="font-bold text-orange-800 text-sm mb-1">KJP Plus</h5>
                  <p className="text-xs text-orange-700 leading-relaxed">
                    Pusat Pelayanan Pendanaan Personal dan Operasional Pendidikan (P4OP) bagi warga tidak mampu.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-bold text-blue-800 text-sm mb-1">PPDB Online</h5>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Pendaftaran Peserta Didik Baru (PPDB) DKI Jakarta biasanya dibuka bulan Mei-Juni.
                  </p>
                </div>
              </div>

              {/* Chat Button */}
              <div className="mt-6 pt-6 border-t border-gray-50">
                <button
                  onClick={() => onConnectStaff && onConnectStaff("Tanya Info KJP/PPDB")}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  Tanya Petugas
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}