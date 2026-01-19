import React from "react";
import { Link } from "react-router-dom";
import { 
  UserGroupIcon, 
  ClipboardDocumentListIcon, 
  HeartIcon, 
  HomeModernIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

// Data Kegiatan Utama Dasawisma
const activities = [
  {
    id: 1,
    title: "Pendataan Keluarga (Carik Jakarta)",
    desc: "Melakukan pendataan terpadu satu pintu meliputi data kesehatan, pendidikan, dan ekonomi warga secara *door-to-door*.",
    icon: ClipboardDocumentListIcon,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Pemantauan Jentik (Jumantik)",
    desc: "Pemeriksaan rutin tempat penampungan air di rumah warga untuk mencegah perkembangbiakan nyamuk DBD.",
    icon: HeartIcon,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    title: "Tanaman Obat Keluarga (TOGA)",
    desc: "Pemanfaatan lahan pekarangan rumah untuk budidaya tanaman obat dan sayuran guna ketahanan pangan keluarga.",
    icon: HomeModernIcon,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "UP2K (Usaha Peningkatan Pendapatan)",
    desc: "Pemberdayaan ibu rumah tangga melalui pelatihan kerajinan dan kuliner untuk menambah penghasilan keluarga.",
    icon: SparklesIcon,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function DasawismaPage({ onConnectStaff }) {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Dasawisma</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Kelompok Dasawisma
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Ujung tombak pemberdayaan kesejahteraan keluarga (PKK) yang terdiri dari 
            kelompok 10-20 rumah tangga bertetangga untuk mempermudah koordinasi dan pendataan.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: MAIN CONTENT */}
          <div className="w-full lg:w-2/3">
            
            {/* Intro Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 flex items-start gap-4">
              <div className="bg-[#06452F]/10 p-3 rounded-lg hidden sm:block">
                <UserGroupIcon className="h-8 w-8 text-[#06452F]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Apa itu Dasawisma?</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  Dasawisma adalah kelompok ibu-ibu yang berasal dari 10-20 kepala keluarga (KK) 
                  rumah yang bertetangga. Kelompok ini memiliki peran vital dalam membantu pemerintah 
                  kelurahan memantau kondisi warga secara *real-time*, mulai dari ibu hamil, balita, 
                  hingga lansia, serta menggerakkan partisipasi gotong royong.
                </p>
              </div>
            </div>

            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
              <ChartBarIcon className="h-5 w-5 text-[#06452F]" />
              Kegiatan Pokok
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all group flex flex-col hover:-translate-y-1 duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} bg-opacity-20`}>
                    <item.icon className={`h-6 w-6 ${item.color.split(" ")[1]}`} />
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#124076] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* 10 Program Pokok PKK Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h4 className="font-bold text-[#124076] mb-4 text-center border-b border-gray-100 pb-2">
                10 Program Pokok PKK
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">1.</span> Penghayatan & Pengamalan Pancasila</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">2.</span> Gotong Royong</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">3.</span> Pangan</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">4.</span> Sandang</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">5.</span> Perumahan & Tata Laksana RT</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">6.</span> Pendidikan & Keterampilan</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">7.</span> Kesehatan</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">8.</span> Pengembangan Kehidupan Berkoperasi</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">9.</span> Kelestarian Lingkungan Hidup</li>
                <li className="flex gap-2 items-center"><span className="text-[#06452F] font-bold">10.</span> Perencanaan Sehat</li>
              </ul>

              {/* Call to Action Chat */}
              <div className="mt-8 bg-[#E5F2EF] rounded-lg p-5 text-center border border-[#06452F]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#06452F] mx-auto mb-2" />
                <h5 className="font-bold text-[#06452F] text-sm mb-1">Ingin Bergabung?</h5>
                <p className="text-xs text-gray-600 mb-4">
                  Daftarkan diri Anda menjadi kader Dasawisma dan berkontribusi untuk lingkungan.
                </p>
                <button
                  type="button"
                  onClick={() => onConnectStaff("Daftar Kader Dasawisma")}
                  className="w-full rounded-lg bg-[#06452F] py-2.5 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm cursor-pointer"
                >
                  Hubungi PKK Kelurahan
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}