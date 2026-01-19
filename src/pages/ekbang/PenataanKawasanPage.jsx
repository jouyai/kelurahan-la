import React from "react";
import { Link } from "react-router-dom";
import { 
  MapIcon, 
  PaintBrushIcon, 
  SunIcon,
  HomeModernIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

const proyekList = [
  {
    id: 1,
    title: "Taman Interaksi Warga RW 02",
    desc: "Transformasi lahan tidur seluas 50m² menjadi taman bermain anak dan area duduk lansia yang asri.",
    lokasi: "Jl. Joe, RT 04/RW 02",
    status: "Selesai",
    icon: SunIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Mural Edukasi & Budaya Betawi",
    desc: "Pengecatan tembok sepanjang 100 meter dengan tema Ondel-ondel dan pesan menjaga kebersihan lingkungan.",
    lokasi: "Gg. H. Joko, RW 04",
    status: "Dalam Pengerjaan",
    icon: PaintBrushIcon,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "Gang Hijau Hidroponik",
    desc: "Penataan lorong gang sempit dengan rak tanaman hidroponik (sayuran) untuk ketahanan pangan keluarga.",
    lokasi: "RT 08/RW 01",
    status: "Selesai",
    icon: SparklesIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    title: "Revitalisasi Pos Kamling Terpadu",
    desc: "Perbaikan fisik pos keamanan lingkungan agar lebih layak dan dilengkapi CCTV pemantau.",
    lokasi: "RW 05 & RW 06",
    status: "Direncanakan (TW 3)",
    icon: HomeModernIcon,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PenataanKawasanPage({ onConnectStaff }) {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-8">
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
                <span className="ml-1 text-gray-500 md:ml-2">Ekonomi & Pembangunan</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Penataan Kawasan</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Penataan Kawasan Unggulan (PKU)
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Program transformasi lingkungan kumuh atau lahan tidur menjadi ruang terbuka hijau, 
            taman interaktif, dan kawasan yang asri, rapi, serta indah dipandang.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT: INFO BOX */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-[#124076] text-lg mb-3 flex items-center gap-2">
                <MapIcon className="h-5 w-5" />
                Usulkan Lokasi
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Warga dapat mengusulkan lokasi yang perlu ditata (misal: lahan kosong terbengkalai, 
                tembok kusam, atau saluran mampet) melalui pengurus RT/RW atau langsung ke Kelurahan.
              </p>
              
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 mb-6">
                <p className="text-xs text-orange-800 font-medium">
                  🛠️ Penataan dilakukan Triwulan (3 bulan sekali) dengan target 1 lokasi per RW secara bergilir.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onConnectStaff("Usulan Penataan Kawasan")}
                className="w-full rounded-lg bg-[#06452F] py-3 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                Ajukan Usulan via Chat
              </button>
            </div>
          </div>

          {/* RIGHT: LIST PROYEK */}
          <div className="w-full md:w-2/3">
            <h3 className="font-bold text-gray-700 mb-4 px-1">Daftar Kawasan yang Ditata</h3>
            <div className="grid grid-cols-1 gap-4">
              {proyekList.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex gap-4 items-start group"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h4 className="font-bold text-gray-800 text-lg group-hover:text-[#124076] transition-colors">
                        {item.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border ${
                        item.status === 'Selesai' ? 'bg-green-50 text-green-700 border-green-100' : 
                        item.status === 'Dalam Pengerjaan' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-600 border-gray-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 w-fit px-2 py-1 rounded">
                      <MapIconSmall className="h-3 w-3" />
                      Lokasi: {item.lokasi}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

function MapIconSmall(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
    </svg>
  );
}