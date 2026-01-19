import React from "react";
import { Link } from "react-router-dom";
import { 
  HeartIcon, 
  CalendarDaysIcon, 
  UserGroupIcon, 
  HandRaisedIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

// Dummy Data Kegiatan Kesra
const kegiatanKesra = [
  {
    id: 1,
    title: "Posyandu Balita & Lansia",
    desc: "Layanan kesehatan dasar rutin untuk pemantauan tumbuh kembang balita dan pemeriksaan kesehatan lansia di setiap RW.",
    jadwal: "Setiap Awal Bulan",
    lokasi: "Balai Warga RW 01 - RW 10",
    icon: UserGroupIcon,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Penyaluran Bantuan Sosial (Bansos)",
    desc: "Distribusi bantuan pangan non-tunai (BPNT) dan bantuan sosial lainnya dari pemerintah pusat maupun daerah.",
    jadwal: "Sesuai Jadwal Dinsos",
    lokasi: "Kantor Kelurahan / RPTRA",
    icon: HandRaisedIcon,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    title: "Senam Jantung Sehat",
    desc: "Kegiatan olahraga bersama warga untuk menjaga kebugaran fisik dan mempererat silaturahmi antar tetangga.",
    jadwal: "Setiap Minggu Pagi",
    lokasi: "Halaman RPTRA Lenteng Agung",
    icon: HeartIcon,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "Santunan Yatim & Dhuafa",
    desc: "Program kepedulian sosial berupa pemberian santunan kepada anak yatim dan kaum dhuafa di lingkungan kelurahan.",
    jadwal: "Ramadhan & Muharram",
    lokasi: "Masjid Jami Al-Ikhlas",
    icon: SparklesIcon,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    title: "Pelatihan Keterampilan Warga",
    desc: "Pelatihan memasak, menjahit, dan kerajinan tangan untuk ibu-ibu PKK guna meningkatkan ekonomi keluarga.",
    jadwal: "Triwulan (Per 3 Bulan)",
    lokasi: "Aula Kelurahan Lt. 3",
    icon: AcademicCapIcon,
    color: "bg-orange-100 text-orange-700",
  },
];

export default function KegiatanKesraPage({ onConnectStaff }) {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Kegiatan Kesra</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Kegiatan Kesejahteraan Rakyat
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Berbagai program sosial, kesehatan, dan pemberdayaan masyarakat untuk 
            meningkatkan kualitas hidup warga Lenteng Agung.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: ACTIVITY GRID */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <CalendarDaysIcon className="h-5 w-5 text-[#06452F]" />
              Agenda & Program Rutin
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {kegiatanKesra.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 group"
                >
                  {/* Icon Wrapper */}
                  <div className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${item.color} bg-opacity-20 group-hover:scale-105 transition-transform`}>
                    <item.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${item.color.split(" ")[1]}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#124076] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        <CalendarDaysIcon className="h-4 w-4 text-blue-500" />
                        <span>{item.jadwal}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                        <UserGroupIcon className="h-4 w-4 text-orange-500" />
                        <span>{item.lokasi}</span>
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
                <HeartIcon className="h-5 w-5" />
                Fokus Seksi Kesra
              </h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed text-justify">
                Seksi Kesejahteraan Rakyat (Kesra) bertugas membantu Lurah dalam melaksanakan 
                tugas-tugas di bidang pembangunan manusia, kesehatan masyarakat, pendidikan, 
                mental spiritual, serta bantuan sosial.
              </p>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-6">
                <h5 className="font-bold text-purple-800 text-xs uppercase tracking-wide mb-2">
                  Layanan Prioritas
                </h5>
                <ul className="list-disc ml-4 text-xs text-purple-700 space-y-1">
                  <li>Pendataan penerima Bansos.</li>
                  <li>Fasilitasi kegiatan Posyandu/Posbindu.</li>
                  <li>Koordinasi kegiatan keagamaan.</li>
                </ul>
              </div>

              {/* Call to Action Chat */}
              <div className="mt-6 bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Informasi Bansos?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Cek jadwal penyaluran bansos atau syarat pengajuan bantuan melalui chat.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Info Kesra / Bansos")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm cursor-pointer"
                >
                  Tanya Petugas Kesra
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}