import React from "react";
import { Link } from "react-router-dom";
import { 
  AcademicCapIcon, 
  ComputerDesktopIcon, 
  WrenchScrewdriverIcon, 
  ScissorsIcon,
  SparklesIcon,
  BriefcaseIcon
} from "@heroicons/react/24/solid";

const pelatihanList = [
  {
    id: 1,
    title: "Pelatihan Digital Marketing (JakPreneur)",
    desc: "Belajar strategi pemasaran online, pengelolaan media sosial bisnis, dan onboarding ke marketplace.",
    kuota: "30 Peserta",
    status: "Pendaftaran Dibuka",
    icon: ComputerDesktopIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Pelatihan Tata Boga & Kue",
    desc: "Pelatihan membuat kue kering, roti, dan aneka jajanan pasar untuk meningkatkan potensi wirausaha ibu rumah tangga.",
    kuota: "20 Peserta",
    status: "Akan Datang",
    icon: SparklesIcon,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "Pelatihan Teknisi AC & Elektronik",
    desc: "Keterampilan teknis perbaikan dan perawatan AC split serta peralatan elektronik rumah tangga dasar.",
    kuota: "15 Peserta",
    status: "Pendaftaran Ditutup",
    icon: WrenchScrewdriverIcon,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Pelatihan Kerajinan Tangan (Handicraft)",
    desc: "Membuat kerajinan dari bahan daur ulang (bank sampah) menjadi produk bernilai ekonomis.",
    kuota: "25 Peserta",
    status: "Pendaftaran Dibuka",
    icon: ScissorsIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    title: "Pelatihan Kewirausahaan Dasar",
    desc: "Manajemen keuangan dasar, pembukuan sederhana, dan legalitas usaha (NIB) bagi pemula.",
    kuota: "50 Peserta",
    status: "Setiap Bulan",
    icon: BriefcaseIcon,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PelatihanPage({ onConnectStaff }) {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20 pt-24 md:pt-28">
      
      {/* BREADCRUMB SECTION (PENGGANTI HERO) */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-8">
        {/* Navigasi Breadcrumb */}
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Pelatihan Masyarakat</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Judul & Deskripsi Singkat */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Pelatihan & Pemberdayaan Masyarakat
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Program peningkatan keterampilan dan keahlian warga Kelurahan Lenteng Agung 
            untuk menciptakan wirausahawan baru dan tenaga kerja yang kompeten.
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
                <AcademicCapIcon className="h-5 w-5" />
                Info Pendaftaran
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Pendaftaran pelatihan biasanya dibuka 2 minggu sebelum pelaksanaan. 
                Syarat umum biasanya KTP DKI (Domisili Lenteng Agung) dan usia produktif.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mb-6">
                <p className="text-xs text-blue-800 font-medium">
                  💡 Pantau terus Instagram Kelurahan atau papan pengumuman RW untuk jadwal terbaru.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onConnectStaff("Info Pelatihan")}
                className="w-full rounded-lg bg-[#06452F] py-3 text-sm font-bold text-white hover:bg-[#053724] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Tanya Jadwal via Chat
              </button>
            </div>
          </div>

          {/* RIGHT: LIST PELATIHAN */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-4">
              {pelatihanList.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex gap-4 items-start"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                        item.status === 'Pendaftaran Dibuka' ? 'bg-green-100 text-green-700' : 
                        item.status === 'Pendaftaran Ditutup' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                      <span className="flex items-center gap-1">
                        <UserGroupIconSmall className="h-4 w-4" />
                        Kuota: {item.kuota}
                      </span>
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

function UserGroupIconSmall(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
    </svg>
  );
}