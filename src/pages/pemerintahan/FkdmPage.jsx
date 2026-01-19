import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheckIcon, 
  UserIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  EyeIcon
} from "@heroicons/react/24/solid";

// Dummy Data Anggota FKDM
const listFKDM = [
  { id: 1, name: "Bapak H. Zamroni", jabatan: "Ketua FKDM", wilayah: "Kelurahan Lenteng Agung", color: "bg-red-100 text-red-700" },
  { id: 2, name: "Bapak Dedi Suryadi", jabatan: "Wakil Ketua", wilayah: "Kelurahan Lenteng Agung", color: "bg-orange-100 text-orange-700" },
  { id: 3, name: "Ibu Siti Aminah", jabatan: "Sekretaris", wilayah: "Kelurahan Lenteng Agung", color: "bg-blue-100 text-blue-700" },
  { id: 4, name: "Bapak Rahmat Hidayat", jabatan: "Anggota", wilayah: "Bidang Pemerintahan", color: "bg-gray-100 text-gray-700" },
  { id: 5, name: "Bapak Joko Susilo", jabatan: "Anggota", wilayah: "Bidang Keamanan", color: "bg-gray-100 text-gray-700" },
  { id: 6, name: "Ibu Wahyuni", jabatan: "Anggota", wilayah: "Bidang Kesejahteraan", color: "bg-gray-100 text-gray-700" },
  { id: 7, name: "Bapak Anton", jabatan: "Anggota", wilayah: "Bidang Pembangunan", color: "bg-gray-100 text-gray-700" },
];

export default function FkdmPage({ onConnectStaff }) {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">FKDM</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Forum Kewaspadaan Dini Masyarakat
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Mitra strategis pemerintah dalam mendeteksi potensi ancaman, tantangan, 
            dan gangguan keamanan di lingkungan masyarakat secara dini.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: LIST MEMBERS */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-[#06452F]" />
                Anggota FKDM
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {listFKDM.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all group flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${member.color} bg-opacity-20 group-hover:bg-opacity-100 group-hover:text-white transition-all duration-300`}>
                    <UserIcon className="h-8 w-8" />
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg">{member.name}</h4>
                  <span className="inline-block mt-1 mb-2 px-3 py-1 text-xs font-bold rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                    {member.jabatan}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-auto">
                    <MapPinIcon className="h-3 w-3" />
                    <span>{member.wilayah}</span>
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
                <EyeIcon className="h-5 w-5" />
                Deteksi & Cegah Dini
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
                <strong>FKDM</strong> bertugas membantu instansi pemerintah dalam menyelenggarakan 
                kewaspadaan dini terhadap potensi gangguan ketertiban umum, bencana alam, 
                maupun gesekan sosial di masyarakat.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                <h5 className="font-bold text-red-800 text-sm mb-2 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  Fokus Pengawasan:
                </h5>
                <ul className="list-disc ml-4 text-xs text-red-700 space-y-1">
                  <li>Potensi Bencana Alam (Banjir/Longsor).</li>
                  <li>Gangguan Keamanan & Ketertiban.</li>
                  <li>Konflik Sosial Antar Warga.</li>
                </ul>
              </div>

              {/* Call to Action Chat */}
              <div className="bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Lihat Potensi Gangguan?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Segera laporkan kejadian mencurigakan atau potensi bencana kepada petugas kami.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Lapor FKDM")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm"
                >
                  Lapor Sekarang
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}