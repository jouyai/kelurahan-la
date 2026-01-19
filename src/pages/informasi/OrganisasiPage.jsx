import React from "react";
import { Link } from "react-router-dom";
import { 
  UserGroupIcon, 
  HeartIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon,
  BuildingOffice2Icon,
  HandRaisedIcon
} from "@heroicons/react/24/solid";

// Data Organisasi
const organizations = [
  {
    id: 1,
    name: "TP PKK Kelurahan",
    fullname: "Tim Penggerak Pemberdayaan Kesejahteraan Keluarga",
    desc: "Gerakan nasional dalam pembangunan masyarakat yang tumbuh dari bawah dengan wanita sebagai penggeraknya untuk mewujudkan keluarga sejahtera.",
    leader: "Ibu Ketua PKK",
    jadwal: "Selasa (Minggu ke-2)",
    icon: HeartIcon,
    color: "bg-pink-100 text-pink-600",
    border: "border-pink-200"
  },
  {
    id: 2,
    name: "Karang Taruna",
    fullname: "Karang Taruna Tunas Harapan",
    desc: "Wadah pengembangan generasi muda non-partisan yang tumbuh atas dasar kesadaran dan rasa tanggung jawab sosial untuk masyarakat.",
    leader: "Sdr. Ketua Karang Taruna",
    jadwal: "Sabtu Malam",
    icon: SparklesIcon,
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-200"
  },
  {
    id: 3,
    name: "Posyandu",
    fullname: "Pos Pelayanan Terpadu",
    desc: "Upaya kesehatan bersumberdaya masyarakat (UKBM) yang dikelola dari, oleh, untuk, dan bersama masyarakat guna memberdayakan kesehatan keluarga.",
    leader: "Koordinator Kader",
    jadwal: "Awal Bulan",
    icon: UserGroupIcon,
    color: "bg-green-100 text-green-600",
    border: "border-green-200"
  },
  {
    id: 4,
    name: "LPM",
    fullname: "Lembaga Pemberdayaan Masyarakat",
    desc: "Mitra kerja kelurahan dalam menampung dan menyalurkan aspirasi masyarakat serta menyusun rencana pembangunan partisipatif.",
    leader: "Bapak Ketua LPM",
    jadwal: "Kondisional",
    icon: BuildingOffice2Icon,
    color: "bg-orange-100 text-orange-600",
    border: "border-orange-200"
  },
  {
    id: 5,
    name: "Majelis Taklim",
    fullname: "Forum Komunikasi Majelis Taklim",
    desc: "Lembaga pendidikan non-formal Islam yang bertujuan meningkatkan keimanan dan ketaqwaan serta mempererat ukhuwah islamiyah.",
    leader: "Ust. Ketua Forum",
    jadwal: "Jumat Pagi",
    icon: ShieldCheckIcon,
    color: "bg-purple-100 text-purple-600",
    border: "border-purple-200"
  },
  {
    id: 6,
    name: "Forum Anak",
    fullname: "Forum Anak Kelurahan (FAK)",
    desc: "Wadah partisipasi anak untuk menyuarakan aspirasi dan kebutuhan anak dalam proses pembangunan kelurahan.",
    leader: "Duta Anak",
    jadwal: "Minggu Sore",
    icon: HandRaisedIcon,
    color: "bg-yellow-100 text-yellow-600",
    border: "border-yellow-200"
  }
];

export default function OrganisasiPage({ onConnectStaff }) {
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
                <span className="ml-1 text-[#06452F] font-bold md:ml-2">Organisasi</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#124076] mb-2">
            Lembaga Kemasyarakatan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Daftar organisasi mitra pemerintah kelurahan yang berperan aktif dalam 
            memberdayakan masyarakat, menyalurkan aspirasi, dan menjaga kerukunan warga.
          </p>
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: ORGANIZATION GRID */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org) => (
                <div 
                  key={org.id} 
                  className={`bg-white border ${org.border} rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col items-start gap-4 group relative overflow-hidden`}
                >
                  {/* Decorative Background Blob */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${org.color} opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className="flex items-start justify-between w-full relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${org.color} bg-opacity-20`}>
                      <org.icon className={`h-8 w-8 ${org.color.split(" ")[1]}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100">
                      Mitra Resmi
                    </span>
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[#124076] transition-colors">
                      {org.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                      {org.fullname}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {org.desc}
                    </p>
                    
                    <div className="flex flex-col gap-2 border-t border-gray-100 pt-3 mt-auto">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Ketua/Koordinator:</span>
                        <span className="font-semibold text-gray-700">{org.leader}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Jadwal Pertemuan:</span>
                        <span className="font-semibold text-gray-700">{org.jadwal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-4 pt-2 relative z-10">
                    <button 
                      onClick={() => onConnectStaff && onConnectStaff(`Info ${org.name}`)}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-[#06452F] font-bold text-sm hover:bg-[#06452F] hover:text-white transition-colors border border-gray-100"
                    >
                      Hubungi Pengurus
                      <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR INFO */}
          <div className="w-full lg:w-1/4 space-y-6">
            
            {/* Widget: Join Volunteer */}
            <div className="bg-[#124076] rounded-2xl p-6 text-white shadow-lg sticky top-24">
              <h4 className="font-bold text-lg mb-2">Ingin Berkontribusi?</h4>
              <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                Jadilah bagian dari perubahan positif di lingkungan Anda. Bergabunglah menjadi relawan atau pengurus organisasi kemasyarakatan.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => onConnectStaff("Daftar Karang Taruna")}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between group"
                >
                  Karang Taruna
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => onConnectStaff("Daftar Kader PKK")}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between group"
                >
                  Kader PKK
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button 
                  onClick={() => onConnectStaff("Daftar Relawan")}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between group"
                >
                  Relawan Lainnya
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}