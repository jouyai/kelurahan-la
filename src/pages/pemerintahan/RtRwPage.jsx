import React from "react";
import { Link } from "react-router-dom";
import { 
  UserGroupIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon,
  InformationCircleIcon 
} from "@heroicons/react/24/solid";

// Dummy Data RW & RT
const listRW = [
  { id: 1, name: "RW 01", rt_count: 12, ketua: "Bapak Ahmad", lokasi: "Jl. Agung Raya" },
  { id: 2, name: "RW 02", rt_count: 9, ketua: "Bapak Budi", lokasi: "Jl. Joe" },
  { id: 3, name: "RW 03", rt_count: 15, ketua: "Bapak Cecep", lokasi: "Jl. Lontar" },
  { id: 4, name: "RW 04", rt_count: 10, ketua: "Bapak Dedi", lokasi: "Jl. Camat Gabun" },
  { id: 5, name: "RW 05", rt_count: 14, ketua: "Bapak Eko", lokasi: "Jl. Raya Lenteng" },
  { id: 6, name: "RW 06", rt_count: 8, ketua: "Bapak Fajar", lokasi: "Jl. Gardu" },
  { id: 7, name: "RW 07", rt_count: 11, ketua: "Bapak Gilang", lokasi: "Jl. Srengseng" },
  { id: 8, name: "RW 08", rt_count: 13, ketua: "Bapak Haryono", lokasi: "Jl. Kebagusan" },
  { id: 9, name: "RW 09", rt_count: 10, ketua: "Bapak Indra", lokasi: "Jl. Margasatwa" },
  { id: 10, name: "RW 10", rt_count: 12, ketua: "Bapak Joko", lokasi: "Jl. Jagakarsa" },
];

export default function RtRwPage({ onConnectStaff }) {
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
                <span className="ml-1 text-gray-500 md:ml-2">Profil & Lembaga</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">RT & RW</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Kelembagaan RT & RW
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Daftar pengurus Rukun Warga (RW) dan informasi Rukun Tetangga (RT) 
            di lingkungan Kelurahan Lenteng Agung.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: LIST RW */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-[#06452F]" />
                Daftar Rukun Warga
              </h3>
              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-500">
                Total: {listRW.length} RW
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listRW.map((rw) => (
                <div 
                  key={rw.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all group flex items-start gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#06452F]/5 flex items-center justify-center group-hover:bg-[#06452F] transition-colors duration-300">
                    <UserGroupIcon className="h-6 w-6 text-[#06452F] group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-800 text-lg">{rw.name}</h4>
                      <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">
                        {rw.rt_count} RT
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1">
                      Ketua: <span className="font-medium text-gray-800">{rw.ketua}</span>
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                      <MapPinIcon className="h-3 w-3" />
                      {rw.lokasi}
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
              <h4 className="font-bold text-[#124076] mb-3 flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5" />
                Tentang Lembaga
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
                <strong>Rukun Tetangga (RT)</strong> dan <strong>Rukun Warga (RW)</strong> adalah lembaga kemasyarakatan 
                yang dibentuk melalui musyawarah warga setempat untuk membantu pelaksanaan pelayanan pemerintahan, 
                pembangunan, dan kemasyarakatan.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                <h5 className="font-bold text-gray-700 text-sm mb-2">Fungsi Utama:</h5>
                <ul className="list-disc ml-4 text-xs text-gray-600 space-y-1">
                  <li>Pendataan kependudukan & pelayanan administrasi dasar.</li>
                  <li>Pemeliharaan keamanan, ketertiban, dan kerukunan.</li>
                  <li>Penggerak swadaya gotong royong masyarakat.</li>
                </ul>
              </div>

              {/* Call to Action Chat */}
              <div className="bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Butuh Kontak RT/RW?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Hubungi petugas kelurahan untuk mendapatkan informasi kontak pengurus wilayah Anda.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Info Kontak RT/RW")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm"
                >
                  Hubungi Petugas
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}